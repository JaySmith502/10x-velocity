# Security Audit Report - 10x Velocity

**Date:** January 9, 2026  
**Auditor:** Security Assessment Tool  
**Severity Scale:** Critical | High | Medium | Low | Informational

---

## Executive Summary

This security audit identified **12 vulnerabilities** across the 10x Velocity codebase, including dependency vulnerabilities, XSS risks, and iframe security concerns. No critical secrets or API keys were found hardcoded in the source code.

---

## Findings

### 1. HIGH - React Router XSS via Open Redirects

**Severity:** High (CVSS 8.0)  
**Location:** `@remix-run/router` (dependency)  
**Description:** The current version of react-router-dom uses a vulnerable `@remix-run/router` package (<=1.23.1) susceptible to XSS via open redirects.

**Remediation:**
```bash
npm update react-router-dom
```
Ensure react-router-dom is updated to at least version 7.x which includes the patched router.

---

### 2. HIGH - Glob CLI Command Injection

**Severity:** High  
**Location:** `glob` (transitive dependency)  
**Description:** The glob package has a command injection vulnerability via -c/--cmd that executes matches with shell:true.

**Remediation:**
```bash
npm update
# Or specifically target the parent packages that depend on glob
```

---

### 3. MEDIUM - esbuild Development Server CORS Bypass

**Severity:** Medium (CVSS 5.3)  
**Location:** `esbuild` (<=0.24.2)  
**Description:** esbuild's dev server allows any website to send requests and read responses, potentially leaking source code during development.

**Remediation:**
```bash
npm update vite
```
This will update the underlying esbuild dependency.

---

### 4. MEDIUM - dangerouslySetInnerHTML Usage

**Severity:** Medium  
**Location:** `src/components/ui/chart.tsx` (line 79)  
**Description:** The chart component uses `dangerouslySetInnerHTML` to inject CSS styles dynamically. While the current implementation generates CSS from internal config objects (not user input), this pattern poses XSS risk if the config source changes.

**Code:**
```tsx
<style
  dangerouslySetInnerHTML={{
    __html: Object.entries(THEMES)
      .map(/* ... generates CSS */)
      .join("\n"),
  }}
/>
```

**Remediation:**  
- Ensure `ChartConfig` values are never derived from user input
- Consider using CSS-in-JS libraries or CSS custom properties set via React's style prop
- Add input validation if config values can come from external sources

---

### 5. MEDIUM - Missing `rel="noopener noreferrer"` on External Links

**Severity:** Medium  
**Location:** Multiple files  
**Description:** Some `target="_blank"` links are missing `rel="noopener noreferrer"`, which can lead to tabnabbing attacks.

**Affected Files:**
- `src/pages/LunchAndLearn.tsx` (line 218)
- `src/components/landing/Footer.tsx` (line 90)

**Remediation:**  
Add `rel="noopener noreferrer"` to all external links:
```tsx
// Before
<a href="..." target="_blank">

// After
<a href="..." target="_blank" rel="noopener noreferrer">
```

---

### 6. MEDIUM - Third-Party Iframe Embedding Without Sandboxing

**Severity:** Medium  
**Location:** Multiple files  
**Description:** External forms are embedded via iframes without the `sandbox` attribute, giving the embedded content full access to browser APIs.

**Affected Files:**
- `src/pages/Contact.tsx` - LeadConnectorHQ form
- `src/pages/OnboardingForm.tsx` - n8n form
- `src/components/ui/ContactPopup.tsx` - LeadConnectorHQ popup

**Remediation:**  
Add sandbox attribute where functionality permits:
```tsx
<iframe
  src="..."
  sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
/>
```
Note: Test thoroughly as sandboxing may break form functionality.

---

### 7. MEDIUM - External Script Loading

**Severity:** Medium  
**Location:** Multiple files  
**Description:** External JavaScript is loaded from third-party sources without integrity checks.

**Affected Locations:**
- `index.html` - needle-ai.com widget, gptengineer.js
- `src/components/ui/ContactPopup.tsx` - link.msgsndr.com/js/form_embed.js

**Remediation:**
- Add Subresource Integrity (SRI) hashes where supported:
```html
<script 
  src="https://cdn.example.com/script.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```
- Implement Content Security Policy (CSP) headers
- Review necessity of each external script

---

### 8. MEDIUM - Loose postMessage Origin Validation

**Severity:** Medium  
**Location:** `src/components/ui/ContactPopup.tsx` (line 62)  
**Description:** The postMessage event handler only checks for one specific origin. If additional message handlers are added, ensure all origins are validated.

**Current Code:**
```tsx
if (event.origin === 'https://api.leadconnectorhq.com') {
```

**Remediation:**  
- Maintain a whitelist of allowed origins
- Validate message structure in addition to origin
- Log unexpected origins for monitoring

---

### 9. LOW - @babel/runtime ReDoS

**Severity:** Low (CVSS 6.2)  
**Location:** `@babel/runtime` (<7.26.10)  
**Description:** Inefficient RegExp complexity in generated code with .replace when transpiling named capturing groups.

**Remediation:**
```bash
npm update
```

---

### 10. LOW - @eslint/plugin-kit ReDoS

**Severity:** Low  
**Location:** `@eslint/plugin-kit` (<0.3.4)  
**Description:** Vulnerable to Regular Expression Denial of Service through ConfigCommentParser.

**Remediation:**
```bash
npm update eslint
```

---

### 11. LOW - brace-expansion ReDoS

**Severity:** Low (CVSS 3.1)  
**Location:** `brace-expansion` (1.0.0-1.1.11, 2.0.0-2.0.1)  
**Description:** Regular Expression Denial of Service vulnerability.

**Remediation:**
```bash
npm update
```

---

### 12. INFORMATIONAL - Trigger.dev Project ID Exposure

**Severity:** Informational  
**Location:** `trigger.config.ts`  
**Description:** The Trigger.dev project ID (`proj_daasglpjvdsunblagfyg`) is visible in the config. While not a secret, consider using environment variables for consistency.

**Remediation:**
```typescript
// trigger.config.ts
export default defineConfig({
  project: process.env.TRIGGER_PROJECT_ID || "proj_daasglpjvdsunblagfyg",
  // ...
});
```

---

## Positive Findings

1. **No hardcoded secrets** - No API keys, passwords, or tokens found in source code
2. **Environment files excluded** - `.gitignore` properly excludes sensitive files
3. **External links mostly secure** - Most `target="_blank"` links include `rel="noopener noreferrer"`
4. **No direct API calls** - The frontend appears to use third-party forms for data collection rather than direct API calls, reducing server-side attack surface
5. **TypeScript usage** - Type safety helps prevent certain classes of bugs
6. **Zod validation library** - Available for form validation (though usage should be verified)

---

## Remediation Priority

### Immediate (This Week)
1. Run `npm audit fix` to address dependency vulnerabilities
2. Update react-router-dom to fix XSS vulnerability
3. Add missing `rel="noopener noreferrer"` to external links

### Short-term (This Month)
4. Add sandbox attributes to iframes (test thoroughly)
5. Implement Content Security Policy headers
6. Add SRI to external scripts where possible

### Long-term (This Quarter)
7. Review and refactor dangerouslySetInnerHTML usage
8. Implement security headers (X-Frame-Options, X-Content-Type-Options, etc.)
9. Set up automated dependency scanning in CI/CD
10. Conduct periodic security reviews

---

## Quick Fix Commands

```bash
# Update all dependencies with security fixes
npm audit fix

# Force update (may have breaking changes - test thoroughly)
npm audit fix --force

# View detailed vulnerability report
npm audit

# Update specific high-priority packages
npm update react-router-dom vite eslint
```

---

## Recommended Security Headers

Add these headers via your hosting platform (Vercel, Netlify, etc.) or server configuration:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.needle-ai.com https://cdn.gpteng.co https://link.msgsndr.com; frame-src https://api.leadconnectorhq.com https://n8n.services.hiprag.com https://www.eventbrite.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## Conclusion

The 10x Velocity codebase has a **moderate security posture**. The main concerns are:
1. Dependency vulnerabilities (easily fixable with updates)
2. Third-party iframe/script integration without hardening
3. Minor link security issues

No critical vulnerabilities requiring immediate action were found. Following the remediation steps above will significantly improve the security posture of the application.
