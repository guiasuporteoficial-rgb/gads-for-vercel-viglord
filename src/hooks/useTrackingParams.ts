import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'fbc', 'fbp',
  'msclkid', 'ttclid', 'li_fat_id', 'ref', 'source',
];

export function useTrackingParams() {
  const location = useLocation();
  const trackingRef = useRef<Record<string, string>>({});

  // Capture tracking params from current URL
  useEffect(() => {
    if (!location.search) return;

    const params = new URLSearchParams(location.search);
    TRACKING_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        trackingRef.current[key] = value;
      }
    });
  }, [location.search]);

  // After every route change, re-inject tracking params into the URL
  useEffect(() => {
    const saved = trackingRef.current;
    if (Object.keys(saved).length === 0) return;

    const currentParams = new URLSearchParams(location.search);
    let needsUpdate = false;

    Object.entries(saved).forEach(([key, value]) => {
      if (!currentParams.has(key)) {
        currentParams.set(key, value);
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      const newSearch = currentParams.toString();
      const newUrl = location.pathname + '?' + newSearch + (location.hash || '');
      window.history.replaceState(null, '', newUrl);
    }
  }, [location.pathname, location.search]);

  // Decorate external links with tracking params on click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin) return;

        const params = trackingRef.current;
        if (Object.keys(params).length === 0) return;

        Object.entries(params).forEach(([key, value]) => {
          if (!url.searchParams.has(key)) {
            url.searchParams.set(key, value);
          }
        });

        anchor.setAttribute('href', url.toString());
      } catch {
        // Not a valid URL, skip
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);
}

export function getTrackingParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  TRACKING_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) result[key] = value;
  });
  return result;
}
