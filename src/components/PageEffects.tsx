'use client';
import { useEffect } from 'react';
import { initPage } from '../lib/page-script';

/**
 * The interactive parts (hero phone demo, scroll steps, 3D viewer, layer
 * diagram, smooth scroll) are DOM-driven, so they start once after the
 * server-rendered markup is on screen.
 */
export default function PageEffects() {
  useEffect(() => {
    const w = window as unknown as { __bbInit?: boolean };
    if (w.__bbInit) return;
    w.__bbInit = true;
    initPage();
  }, []);
  return null;
}
