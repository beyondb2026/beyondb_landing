import './features.css';
import { buildMeta } from '../../lib/meta';
import FeaturesBody from '../../components/FeaturesBody';
import FeaturesEffects from '../../components/FeaturesEffects';

export const metadata = buildMeta({
  title: 'Beyond B: All Features | AI Product Experience Layer',
  description:
    'Everything Beyond B does today, what comes next and what is coming later. The AI Product Experience Layer for setup, guide and support.',
  path: '/features',
  ogTitle: 'Beyond B: All Features',
  ogDescription: 'Everything Beyond B does today, what comes next and what is coming later.',
});

export default function FeaturesPage() {
  return (
    <>
      <FeaturesBody />
      <FeaturesEffects />
    </>
  );
}
