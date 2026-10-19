export default function Products() {
  return (
    <>
<div className="sep" aria-hidden="true" />
  <section className="pds" id="products">
    <div className="pdh rv"><span className="eyebrow">Products</span><h2><span className="l1">Two products.</span><span className="l2">One engine.</span></h2></div>
    <div className="pdg">
      <article className="pdc p1 rv"><div className="pdi" data-slot="beyond-b-app"><img className="pdl l-b" src="/logos/beyondb_white.svg" alt="Beyond B" /></div><div className="pdb"><div className="pdn"><span>Beyond <b>B</b></span></div><h3>Products that explain themselves</h3><p>Customers scan a product and see what every part does. They follow guided setup, ask questions and fix problems step by step.</p></div></article>
      <article className="pdc p2 rv"><div className="pdi" data-slot="forge"><img className="pdl l-f" src="/logos/forge_white.svg" alt="Beyond B Forge" /></div><div className="pdb"><div className="pdn"><span>Beyond B <b>Forge</b></span></div><h3>Build it from your manuals</h3><p>Upload manuals, images and specs. The AI turns them into guides, component markers and troubleshooting. You review, approve and publish by QR.</p></div></article>
      <article className="pdc p3 w rv"><div className="pdi" data-slot="engine"><img className="pdl l-n" src="/logos/bion_white.svg" alt="Bion" /></div><div className="pdb"><div className="pdn"><span><b>Bion</b></span></div><h3>The AI Product Experience Engine behind every product</h3><p>It knows each product, its parts and its problems. It answers only from approved knowledge and picks the right format: an answer, a guide or a camera view.</p></div></article>
    </div>
  </section>
    </>
  );
}
