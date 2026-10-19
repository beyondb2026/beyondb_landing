export default function Hero() {
  return (
    <>
<div className="scroller">
    <div className="stage" id="stage">
      <picture><source media="(max-width:600px)" srcSet="/hero_m.jpg" /><source media="(max-width:1024px)" srcSet="/hero_tab.jpg" /><img className="hero" fetchPriority="high" decoding="async" src="/hero.jpg" alt="A night-time cutaway home with a garage, kitchen, living room, bedroom, terrace and a small workshop, lit from inside against a dark plum sky." /></picture>
      <div className="headline">
        <span className="eyebrow">AI Product Experience Layer</span>
        <h1><span className="l1">Your products now</span><span className="l2">speak for themselves.</span></h1>
        <p>Giving life to products.</p>
      </div>
      <div className="herobar">
        <p className="desc">Give every product you make a voice. Beyond B helps your customers with setup, everyday use and support, right when they need it.</p>
        <a className="join" href="#pilot">Join our pilot<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </div>
      <i className="tie" id="tie" />
      <div className="scrim" id="scrim" />
      <div className="phone" id="phone" role="dialog" aria-label="Product assistant demo">
        <div className="bz"><div className="scr">
            <div className="im" id="im"><div className="cam" id="cam" /><div className="scan" /><div className="ov" id="ov" />
              <div className="ask" id="ask" /><div className="think" id="think">Looking at your product <span className="dots"><i /><i /><i /></span></div></div>
            <div className="shade" />
            <div className="sb"><span>9:41</span><i className="nt" /><svg viewBox="0 0 46 11" aria-hidden="true"><rect x={0} y={7} width={3} height={4} rx=".8" /><rect x={5} y={5} width={3} height={6} rx=".8" /><rect x={10} y="2.5" width={3} height="8.5" rx=".8" /><rect x={15} y={0} width={3} height={11} rx=".8" /><rect x={24} y={1} width={19} height={9} rx="2.6" fill="none" stroke="#fff" strokeWidth={1} /><rect x="25.8" y="2.8" width={12} height="5.4" rx="1.4" /><rect x={44} y="3.8" width="1.6" height="3.4" rx=".8" /></svg></div>
            <div className="hd"><div className="t"><i /><div><small id="pd" /><b id="pn" /></div></div>
              <button type="button" className="ib" id="rp" aria-label="Replay"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" /></svg></button>
              <button type="button" className="ib" id="cl" aria-label="Close"><svg viewBox="0 0 12 12" style={{width: 12, height: 12}}><path d="M1.5 1.5l9 9M10.5 1.5l-9 9" /></svg></button></div>
            <div className="ans" id="ans" />
            <div className="inp"><div className="vdock" id="vdock"><button type="button" className="mic" id="mic" aria-label="Ask again"><svg viewBox="0 0 24 24"><rect x={9} y={3} width={6} height={11} rx={3} /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" /></svg></button>
                <div className="wave" id="wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="vst" id="vst" role="status" aria-live="polite">Tap to speak</span></div></div>
            <i className="home" />
          </div></div>
      </div>
    </div>
  </div>
  <div className="foot"><span className="dsk">Hover or tap a marker to see how a product helps. </span>Concept visual with sample content. Starting with home appliances.</div>
    </>
  );
}
