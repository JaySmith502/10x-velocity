import { useEffect, useRef, useCallback } from "react";

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = `
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uDark;

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
  float t = uTime * 0.06;
  vec2 mouseOffset = (uMouse - 0.5) * 0.05;

  // Three noise layers at different scales for organic movement
  float n1 = snoise((uv + mouseOffset) * 1.8 + vec2(t * 0.7, t * 0.5));
  float n2 = snoise((uv + mouseOffset) * 3.0 + vec2(-t * 0.4, t * 0.9));
  float n3 = snoise((uv + mouseOffset) * 0.6 + vec2(t * 0.2, -t * 0.5));
  float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

  // === LIGHT MODE palette ===
  vec3 lCream    = vec3(0.984, 0.976, 0.965);
  vec3 lStone    = vec3(0.937, 0.918, 0.894);
  vec3 lIvory    = vec3(0.969, 0.961, 0.949);
  vec3 lWarm     = vec3(0.910, 0.886, 0.855);

  vec3 light = mix(lCream, lStone, smoothstep(-0.4, 0.4, noise));
  light = mix(light, lIvory, smoothstep(-0.1, 0.5, n2));
  light = mix(light, lWarm, smoothstep(-0.6, 0.0, n3) * 0.5);

  // === DARK MODE palette ===
  vec3 dBase     = vec3(0.071, 0.067, 0.063);  // #121110
  vec3 dWarm     = vec3(0.098, 0.090, 0.082);  // slightly lighter
  vec3 dDeep     = vec3(0.055, 0.051, 0.047);  // slightly darker
  vec3 dMid      = vec3(0.110, 0.102, 0.094);  // warm mid tone

  vec3 dark = mix(dBase, dWarm, smoothstep(-0.4, 0.4, noise));
  dark = mix(dark, dDeep, smoothstep(-0.1, 0.5, n2));
  dark = mix(dark, dMid, smoothstep(-0.6, 0.0, n3) * 0.5);

  // Select palette based on theme
  vec3 base = mix(light, dark, uDark);

  // Cyan accent wash — subtle in both modes
  vec3 cyan = vec3(0.200, 0.765, 0.941);
  float cyanMask = smoothstep(0.1, 0.9, (uv.x * 0.5 + uv.y * 0.5) + noise * 0.4);
  float cyanAmount = mix(0.04, 0.06, uDark); // slightly stronger in dark mode
  base = mix(base, mix(base, cyan, cyanAmount), cyanMask * 0.7);

  // Vignette (stronger in dark mode for dramatic edges)
  float vigStr = mix(0.12, 0.25, uDark);
  float vignette = 1.0 - length((uv - 0.5) * vec2(0.9, 1.3)) * vigStr;
  base *= vignette;

  gl_FragColor = vec4(base, 1.0);
}`;

interface GradientMeshProps {
  className?: string;
}

export default function GradientMesh({ className }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const startTimeRef = useRef(Date.now());
  const darkRef = useRef(0);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});

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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERT);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAG);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.warn("Shader compile failed:", gl.getShaderInfoLog(fs));
      return;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    uniformsRef.current = {
      time: gl.getUniformLocation(program, "uTime"),
      resolution: gl.getUniformLocation(program, "uResolution"),
      mouse: gl.getUniformLocation(program, "uMouse"),
      dark: gl.getUniformLocation(program, "uDark"),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Watch for dark mode changes
    const checkDarkMode = () => {
      darkRef.current = document.documentElement.classList.contains("dark") ? 1.0 : 0.0;
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    startTimeRef.current = Date.now();
    const render = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const u = uniformsRef.current;
      gl.uniform1f(u.time, elapsed);
      gl.uniform2f(u.resolution, canvas.width, canvas.height);
      gl.uniform2f(u.mouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(u.dark, darkRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    render();
    canvas.dataset.active = "true";

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
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
