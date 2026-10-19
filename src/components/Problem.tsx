export default function Problem() {
  return (
    <>
<div className="pbg"><section className="prob" id="problem">
      <div className="wrap">
        <div className="ph">
          <span className="eyebrow">The problem</span>
          <h2><span className="l1">Every unread manual shows up</span><span className="l2">on your support bill.</span></h2>
          <p className="sub">After the sale, the journey is: open the box, read the manual, search YouTube, call support.</p>
        </div>
        <div className="vb hasv" id="vb" role="group" aria-label="Video: a customer opens a new air fryer, can't work it out, reads the manual and searches online">
          <video id="vvid" muted loop playsInline preload="metadata" poster="/media/problem_poster.jpg" aria-hidden="true"><source src="/media/problem.mp4" type="video/mp4" /><source src="/media/problem.webm" type="video/webm" /></video>
          <div className="sl" style={{backgroundImage: 'url(/img/washer.jpg)'}} />
          <div className="sl" style={{backgroundImage: 'url(/img/ac.jpg)'}} />
          <div className="sl" style={{backgroundImage: 'url(/img/tv.jpg)'}} />
          <div className="sl" style={{backgroundImage: 'url(/img/fridge.jpg)'}} />
          <div className="tint" />
          <div className="live"><i />After the sale</div>
          <div className="lines">
            <div className="ln"><small>Step 1</small><b>Open the <em>box.</em></b></div>
            <div className="ln"><small>Step 2</small><b>Read the <em>manual.</em></b></div>
            <div className="ln"><small>Step 3</small><b>Search <em>YouTube.</em></b></div>
            <div className="ln"><small>Step 4</small><b>Call <em>support.</em></b></div>
          </div>
          <div className="bar"><i /><i /><i /><i /></div>
          <button className="pp" id="vpp" type="button" aria-label="Pause or play"><svg className="ps" viewBox="0 0 14 14"><rect x={2} y={1} width="3.6" height={12} rx={1} /><rect x="8.4" y={1} width="3.6" height={12} rx={1} /></svg><svg className="pl" viewBox="0 0 14 14"><path d="M3 1.2v11.6L12.6 7z" /></svg></button>
        </div>
        <div className="lost">
          <h3 className="lh">Five things follow for the brand</h3>
          <div className="lg">
            <div className="lc rv"><span className="li"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></svg></span><p><b>Repeat support</b> The same how-to questions reach your team again and again.</p></div>
            <div className="lc rv"><span className="li"><svg viewBox="0 0 24 24" aria-hidden="true"><rect width={20} height={12} x={2} y={6} rx={6} /><circle cx={8} cy={12} r={2} /></svg></span><p><b>Unused features</b> Customers paid for features they never find.</p></div>
            <div className="lc rv"><span className="li"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></span><p><b>Setup mistakes</b> Wrong installs become service visits and bad reviews.</p></div>
            <div className="lc rv"><span className="li"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg></span><p><b>Warranty disputes</b> Lost cards, missing bills and unclear terms.</p></div>
            <div className="lc rv"><span className="li"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><path d="M2 2l20 20" /></svg></span><p><b>A blind spot</b> You hear from customers when a product fails, not about the daily friction of using it.</p></div>
          </div>
        </div>
        <div className="bgx">
          <p className="pend">Your product is smart.<br />Its help is still <b>on paper.</b></p>
          <p className="bgx-p">The features are built. The help that explains them is a manual, a video somewhere online and a support line. It reaches customers late, in pieces, and not when they are stuck.</p>
          <div className="bgx-t">
            <div className="bgx-r bgx-h"><span /><span className="a">Today</span><span className="b">With Beyond B</span></div>
            <div className="bgx-r"><span className="k">Where help lives</span><span className="a" data-l="Today">A printed manual and scattered videos</span><span className="b" data-l="With Beyond B">On the product, one scan away</span></div>
            <div className="bgx-r"><span className="k">When it arrives</span><span className="a" data-l="Today">After the customer gives up</span><span className="b" data-l="With Beyond B">While they use the product</span></div>
            <div className="bgx-r"><span className="k">Who writes the answer</span><span className="a" data-l="Today">Nobody in particular, and anyone online</span><span className="b" data-l="With Beyond B">You, approved by you</span></div>
            <div className="bgx-r"><span className="k">What it costs you</span><span className="a" data-l="Today">Repeat calls, returns, bad reviews</span><span className="b" data-l="With Beyond B">Fewer calls and fewer returns</span></div>
          </div>
          <a className="bgx-l" href="#how">See how it works<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg></a>
        </div>
      </div>
    </section></div>
    </>
  );
}
