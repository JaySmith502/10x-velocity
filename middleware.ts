import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CONFIGURATION
const SUPABASE_URL = 'https://ctprmlcpoeilicowddvo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0cHJtbGNwb2VpbGljb3dkZHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NDc2MTYsImV4cCI6MjA4NTAyMzYxNn0.KUAuml_FOwvi5NYqfRByXWYhJekD-qFx38k85WMmNnA';
const PROJECT_ID = '705a113a-4dd3-4252-a2f5-39b216451158';

// BOT DETECTION: Only track Generative AI bots
const KNOWN_BOTS: Record<string, string> = {
    'gptbot': 'ChatGPT',
    'chatgpt-user': 'ChatGPT',
    'oai-searchbot': 'SearchGPT',
    'claude': 'Claude',
    'anthropic': 'Claude',
    'perplexity': 'Perplexity',
    'google-extended': 'Gemini',
    'googleagent': 'Gemini',
    'bard': 'Gemini',
    'bytespider': 'TikTok AI',
    'meta-externalagent': 'Meta AI',
    'amazonbot': 'Amazon Q',
};

// Paths that indicate security scanner/vulnerability探测
const SUSPICIOUS_PATHS = [
    'wp-admin', 'wp-login', '.env', '.git', '.aws', 'phpinfo',
    'id_rsa', 'backup', '.sql', 'admin.php', 'xmlrpc.php',
    '.htaccess', 'config.php', 'db.php', 'wp-config'
];

// Rate limiting: Simple in-memory Map
const requestCounts = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 100; // Max requests per minute
const RATE_WINDOW = 60000; // 1 minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const countData = requestCounts.get(ip) || { count: 0, windowStart: now };

    if (now - countData.windowStart > RATE_WINDOW) {
        countData.count = 0;
        countData.windowStart = now;
    }

    countData.count++;
    requestCounts.set(ip, countData);

    return countData.count > RATE_LIMIT;
}

function detectBot(ua: string): string | null {
    const lowerUA = ua.toLowerCase();
    for (const [token, label] of Object.entries(KNOWN_BOTS)) {
        if (lowerUA.includes(token)) return label;
    }
    return null;
}

export function middleware(request: NextRequest) {
    // Rate limiting check
    const clientIP = request.ip ?? 'unknown';
    if (isRateLimited(clientIP)) {
        return NextResponse.next();
    }

    logTraffic(request);
    return NextResponse.next();
}

async function logTraffic(req: NextRequest) {
    const ua = req.headers.get('user-agent') || '';
    const path = req.nextUrl.pathname;

    // Check if this is a security scan (suspicious path)
    const isSecurityScan = SUSPICIOUS_PATHS.some(badPath =>
        path.toLowerCase().includes(badPath.toLowerCase())
    );

    if (isSecurityScan) {
        // Log security scan to separate table
        const endpoint = `${SUPABASE_URL}/rest/v1/security_scans`;
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                project_id: PROJECT_ID,
                host: req.headers.get('host'),
                path: path,
                ua: ua,
                threat_type: 'vulnerability_scan'
            }),
        }).catch(() => { });
    } else {
        // Check if this is a Gen AI bot
        const botLabel = detectBot(ua);
        if (botLabel) {
            // Log AI bot to ai_bot_hits table
            const endpoint = `${SUPABASE_URL}/rest/v1/ai_bot_hits`;
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    project_id: PROJECT_ID,
                    host: req.headers.get('host'),
                    path: path,
                    ua: ua,
                    bot_label: botLabel
                }),
            }).catch(() => { });
        }
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
    ],
};