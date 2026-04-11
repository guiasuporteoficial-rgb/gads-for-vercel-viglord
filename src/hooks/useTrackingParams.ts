import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'fbc', 'fbp',
  'msclkid', 'ttclid', 'li_fat_id', 'ref', 'source',
];

const STORAGE_KEY = 'tracking_params';

export function useTrackingParams() {
  const { search } = useLocation();

  // Capture tracking params from URL on arrival
  useEffect(() => {
    if (!search) return;

    const params = new URLSearchParams(search);
    const existing = getTrackingParams();
    let updated = false;

    TRACKING_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        existing[key] = value;
        updated = true;
      }
    });

    if (updated) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  }, [search]);

  // Intercept clicks on external links and append tracking params
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Only process absolute URLs to other domains
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin) return;

        const params = getTrackingParams();
        if (Object.keys(params).length === 0) return;

        // Append tracking params to the external URL
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
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}
