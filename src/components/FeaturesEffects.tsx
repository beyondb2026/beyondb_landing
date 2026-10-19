'use client';
import { useEffect } from 'react';
import { initFeatures } from '../lib/features-script';

export default function FeaturesEffects() {
  useEffect(() => {
    const w = window as unknown as { __bbFInit?: boolean };
    if (w.__bbFInit) return;
    w.__bbFInit = true;
    initFeatures();
  }, []);
  return null;
}
