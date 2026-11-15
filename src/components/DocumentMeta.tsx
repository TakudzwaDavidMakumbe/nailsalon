import { useEffect } from 'react';

interface DocumentMetaProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

export function DocumentMeta({ title, description, jsonLd }: DocumentMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string, attrName: 'name' | 'property', attrVal: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description, 'name', 'description');
    setMeta('meta[property="og:title"]', title, 'property', 'og:title');
    setMeta('meta[property="og:description"]', description, 'property', 'og:description');
    setMeta('meta[name="twitter:title"]', title, 'name', 'twitter:title');
    setMeta('meta[name="twitter:description"]', description, 'name', 'twitter:description');

    const canonicalHref = window.location.origin + window.location.pathname;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
    setMeta('meta[property="og:url"]', canonicalHref, 'property', 'og:url');

    const existingScript = document.getElementById('route-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'route-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('route-json-ld');
      if (s) s.remove();
    };
  }, [title, description, jsonLd]);

  return null;
}
