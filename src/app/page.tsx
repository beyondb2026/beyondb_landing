import './home.css';
import { buildMeta } from '../lib/meta';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import What from '../components/What';
import How from '../components/How';
import Explore from '../components/Explore';
import Products from '../components/Products';
import Layers from '../components/Layers';
import Features from '../components/Features';
import GetSection from '../components/GetSection';
import Industries from '../components/Industries';
import Trust from '../components/Trust';
import Pilot from '../components/Pilot';
import PageEffects from '../components/PageEffects';

export const metadata = buildMeta({
  title: 'Beyond B: AI Product Experience Layer',
  description:
    'Beyond B helps your customers set up, use and get support for your products, right from the product. Fewer support calls, fewer returns. Join the pilot.',
  path: '/',
  ogTitle: 'Beyond B: Your products now speak for themselves',
  ogDescription:
    'Setup, guide and support, right from the product. Fewer support calls and fewer returns for manufacturers in every industry.',
});

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <What />
      <How />
      <Explore />
      <Products />
      <Layers />
      <Features />
      <GetSection />
      <Industries />
      <Trust />
      <Pilot />
      <PageEffects />
    </>
  );
}
