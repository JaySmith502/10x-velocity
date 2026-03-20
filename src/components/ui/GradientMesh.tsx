import { useEffect, useRef, useCallback } from "react";

// Vertex shader — simple fullscreen quad
const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

// Fragment shader — organic gradient mesh with slow morphing
const FRAG = `
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

// Simplex-inspired noise (compact)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
           + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
           dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  // Slow time for gentle morphing
  float t = uTime * 0.08;

  // Mouse influence (very subtle, 5% shift)
  vec2 mouseOffset = (uMouse - 0.5) * 0.05;

  // Layer multiple noise octaves for organic feel
  float n1 = snoise((uv + mouseOffset) * 1.5 + vec2(t * 0.7, t * 0.5));
  float n2 = snoise((uv + mouseOffset) * 2.5 + vec2(-t * 0.4, t * 0.8));
  float n3 = snoise((uv + mouseOffset) * 0.8 + vec2(t * 0.3, -t * 0.6));

  // Combine noise
  float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

  // Warm neutral base colors (cream/stone/ivory)
  vec3 cream   = vec3(0.980, 0.973, 0.965); // #FAF8F6
  vec3 stone   = vec3(0.945, 0.933, 0.918); // #F1EEEA
  vec3 ivory   = vec3(0.969, 0.961, 0.949); // #F7F5F2
  vec3 warmGray = vec3(0.925, 0.910, 0.890); // #ECE8E3

  // Faint cyan accent
  vec3 cyanTint = vec3(0.200, 0.765, 0.941); // #33C3F0

  // Mix base colors using noise
  vec3 base = mix(cream, stone, smoothstep(-0.3, 0.3, noise));
  base = mix(base, ivory, smoothstep(0.0, 0.6, n2));
  base = mix(base, warmGray, smoothstep(-0.5, -0.1, n3) * 0.4);

  // Add very subtle cyan wash (5-8% opacity, concentrated in one area)
  float cyanMask = smoothstep(0.2, 0.8, (uv.x * 0.6 + uv.y * 0.4) + noise * 0.3);
  base = mix(base, mix(base, cyanTint, 0.06), cyanMask * 0.6);

  // Slight vignette toward edges for depth
  float vignette = 1.0 - length((uv - 0.5) * vec2(0.8, 1.2)) * 0.15;
  base *= vignette;

  gl_FragColor = vec4(base, 1.0);
}`;

interface GradientMeshProps {
  className?: string;
}

export default function GradientMesh({ className }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const startTimeRef = useRef(Date.now());
  const uniformsRef = useRef<{ time: WebGLUniformLocation | null; resolution: WebGLUniformLocation | null; mouse: WebGLUniformLocation | null }>({ time: null, resolution: null, mouse: null });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: 1.0 - (e.clientY - rect.top) / rect.height,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return; // CSS fallback will show

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, preserveDrawingBuffer: false });
    if (!gl) return; // CSS fallback will show

    glRef.current = gl;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERT);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAG);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.warn("Shader compile failed, using CSS fallback");
      return;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Shader link failed, using CSS fallback");
      return;
    }

    programRef.current = program;
    gl.useProgram(program);

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    uniformsRef.current = {
      time: gl.getUniformLocation(program, "uTime"),
      resolution: gl.getUniformLocation(program, "uResolution"),
      mouse: gl.getUniformLocation(program, "uMouse"),
    };

    // Size canvas
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    window.addEventListener("mousemove", handleMouseMove);

    // Render loop
    startTimeRef.current = Date.now();
    const render = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      gl.uniform1f(uniformsRef.current.time, elapsed);
      gl.uniform2f(uniformsRef.current.resolution, canvas.width, canvas.height);
      gl.uniform2f(uniformsRef.current.mouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    render();

    // Mark canvas as active for CSS
    canvas.dataset.active = "true";

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
