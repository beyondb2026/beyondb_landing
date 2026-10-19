// @ts-nocheck
import Lenis from 'lenis';
export function initPage() {
var IW=1672,IH=941,PW=300,PH=640,BW=282,BH=622,FY=205;
/* kind: setup | guide | support. pts: [name, x, y] in source-image pixels. */
var D=[
{id:'solar',x:24.8,y:32.4,t:[25.0, 31.3],m:[24.8, 42.3],dom:'Solar and storage',name:'Rooftop solar',img:'solar',iw:480,ih:916,kind:'support',
 ask:'My solar output dropped a lot this week.',
 pts:[['Inverter',225,610]],hot:0,
 dg:'the inverter shows a fault. The panels look fine.',tr:'Check the inverter light. Turn it off and on once.',
 cta:{t:'tech',b:'Request a technician',s:'The brand sends an installer',ok:'Request sent to the brand',ok2:'They will confirm a visit time. (sample)'}},
{id:'washer',x:31.8,y:41.7,t:[31.9, 38.2],m:null,dom:'Home appliances',name:'Washing machine',img:'washer',iw:450,ih:916,kind:'setup',
 ask:'How do I set up my new washing machine?',
 pts:[['Door',225,555],['Drawer',125,385],['Dial',225,362]],
 steps:['Keep the drum empty and close the door.','Add a little detergent in the drawer.','Turn the dial to Drum Clean and press Start.'],
 note:'Before this: remove the transit bolts, fit the pipes, level the feet.'},
{id:'ac',x:56.6,y:34.8,t:[56.6, 33.0],m:[57.9, 43.4],dom:'Home appliances',name:'Air conditioner',img:'ac',iw:941,ih:1672,kind:'setup',
 ask:'How do I start my new AC for the first time?',
 pts:[['Front panel',430,350],['Display',218,450],['Louvre',470,520]],
 steps:['Open the front panel and check the filter is in.','Press power and set the temperature to 24°C.','Set the air direction with the louvre.']},
{id:'cpap',x:63.8,y:48.9,t:[64.8, 43.6],m:[66.6, 48.7],dom:'Medical devices',name:'CPAP machine',img:'cpap',iw:941,ih:1672,kind:'support',
 ask:'My CPAP mask leaks air around my nose.',
 pts:[['Mask cushion',505,1030],['Headgear',330,985],['Hose',560,900]],hot:0,
 dg:'the mask cushion is worn or the wrong size.',tr:'Loosen the headgear a little, then look for cracks.',
 cta:{t:'amazon',b:'Replacement cushion, medium',s:'Sample link · Amazon'},note:'Medical questions go to your clinician.'},
{id:'glucose',x:69.2,y:48.3,t:[68.3, 43.5],m:null,dom:'Medical devices',name:'Glucose meter',img:'glucose',iw:941,ih:1672,kind:'support',
 ask:'My glucose meter shows an error with a new strip.',
 pts:[['Strip port',545,1015],['Screen',440,912],['Strip vial',190,855]],hot:0,
 dg:'the strip is not pushed in fully.',tr:'Use a fresh strip from a sealed vial. Push it in until it stops.',
 cta:{t:'brand',b:'Request a call back',s:'Support from the brand',ok:'Call back requested',ok2:'The brand support team will call you. (sample)'},note:'Medical questions go to your clinician.'},
{id:'ev',x:8.2,y:66.4,t:[8.4, 57.1],m:[7.3, 56.2],dom:'EV chargers',name:'Home EV charger',img:'ev',iw:941,ih:1672,kind:'support',
 ask:'My EV charger light is red and it will not charge.',
 pts:[['Status light',200,590],['Car port',735,795],['Cable',300,900]],hot:0,
 dg:'a ground fault. The red light says so.',tr:'Unplug the car. Wait one minute, then plug in again.',
 cta:{t:'tech',b:'Request a technician',s:'The brand sends an electrician',ok:'Request sent to the brand',ok2:'They will confirm a visit time. (sample)'}},
{id:'fridge',x:33.6,y:69.1,t:[34.0, 58.9],m:[34.0, 56.5],dom:'Home appliances',name:'Refrigerator',img:'fridge',iw:941,ih:1672,kind:'setup',
 ask:'Can I switch on my new fridge right away?',
 pts:[['Door handle',490,560],['Panel',405,640],['Freezer drawer',480,935]],
 steps:['Shut the doors, wait a few hours, then plug in.','Set the temperature to 4°C on the panel.','Wait 24 hours before you fill it with food.'],
 note:'Before this: level the front feet.'},
{id:'micro',x:40.2,y:69.3,t:[41.1, 58.7],m:null,dom:'Home appliances',name:'Microwave oven',img:'micro',iw:941,ih:1672,kind:'guide',
 ask:'How do I defrost chicken in this microwave?',
 pts:[['Door',440,820],['Dial',727,872],['Keypad',727,790]],
 tips:['Put the chicken in a microwave-safe dish and close the door.','Turn the dial to Defrost.','Enter the weight, then press Start.']},
{id:'fryer',x:45.3,y:69.1,t:[45.6, 58.5],m:[46.4, 56.8],dom:'Home appliances',name:'Air fryer',img:'airfryer',iw:941,ih:1672,kind:'setup',
 ask:'I just got this air fryer. How do I set it up?',
 pts:[['Basket',600,775],['Handle',725,880],['Controls',645,648]],
 steps:['Wash the basket and tray, then dry them.','Slide the basket in until it clicks.','Set 200°C on the control panel and run it empty for 5 minutes.']},
{id:'mixer',x:50.5,y:66.9,t:[50.6, 58.2],m:null,dom:'Home appliances',name:'Mixer grinder',img:'mixer',iw:941,ih:1672,kind:'guide',
 ask:'How do I grind chutney in the small jar?',
 pts:[['Small jar',750,1010],['Lid',430,520],['Knob',490,960,'l']],
 tips:['Fill the small jar only up to half.','Lock the lid on until you hear a click.','Press Pulse first, then use speed 2.']},
{id:'tv',x:65.1,y:63.5,t:[66.2, 54.3],m:[68.0, 55.2],dom:'Consumer electronics',name:'TV and soundbar',img:'tv',iw:941,ih:1672,kind:'guide',
 ask:'How do I connect my soundbar to this TV?',
 pts:[['Soundbar',600,870],['Screen',630,520]],
 tips:['Switch the soundbar on and pick HDMI ARC.','On the TV, open Settings, then Sound, and choose Soundbar.']},
{id:'vac',x:72.0,y:80.8,t:[72.2, 67.2],m:[73.5, 61.1],dom:'Smart home',name:'Robot vacuum',img:'vac',iw:941,ih:1672,kind:'support',
 ask:'My robot vacuum is not cleaning the corners well.',
 pts:[['Side brush',445,1098],['Sensor',575,948],['Dock',840,850]],hot:0,
 dg:'the side brush is worn or tangled with hair.',tr:'Pull it off and cut the hair away. Replace it if bent.',
 cta:{t:'amazon',b:'Side brush set, 2 pack',s:'Sample link · Amazon'}},
{id:'cnc',x:83.4,y:70.1,t:[83.2, 58.0],m:[85.0, 56.4],dom:'Industrial machinery',name:'CNC machine',img:'cnc',iw:941,ih:1672,kind:'guide',
 ask:'How do I change the tool safely?',
 pts:[['Stop button',698,668],['Door handle',605,780],['Screen',770,550]],
 tips:['Press the red stop button first.','Open the door once the spindle has stopped.','Tap Tool Change and follow the prompts.']},
{id:'arm',x:92.1,y:68.0,t:[91.9, 57.5],m:null,dom:'Industrial machinery',name:'Robotic arm',img:'arm',iw:941,ih:1672,kind:'guide',
 ask:'How do I teach the arm a new pick and place?',
 pts:[['Arm base',190,860],['Wrist',655,610],['Gripper',660,830]],
 tips:['Clear everyone from the safety zone around the arm.','Switch to Teach mode, then guide the wrist by hand.','Move the gripper to the pick point and save it.']}
];
var KIND={setup:'Setup',guide:'Guide',support:'Support'};
var MKS='<svg class="mk" viewBox="0 0 44 44" aria-hidden="true"><circle class="halo" cx="22" cy="22" r="20"/><circle class="seg" cx="22" cy="22" r="18" fill="none" stroke="#FF9CC4" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="9 5.1"/><circle class="core" cx="22" cy="22" r="9.5"/><circle cx="22" cy="22" r="2.6" fill="#fff"/></svg>';
var AR='<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var UP='<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>';
var CK='<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var stage=document.getElementById('stage'),phone=document.getElementById('phone'),tie=document.getElementById('tie'),scrim=document.getElementById('scrim');
var $=function(i){return document.getElementById(i)};
var im=$('im'),cam=$('cam'),ov=$('ov'),ans=$('ans'),askEl=$('ask'),think=$('think'),vdock=$('vdock'),vst=$('vst'),mic=$('mic'),bars=[].slice.call(document.querySelectorAll('#wave i')),waveT=null,waveAmp=5;
function waveStop(){clearInterval(waveT);waveT=null;bars.forEach(function(b){b.style.height='4px'})}
function waveStart(){waveStop();var t0=Date.now();waveT=setInterval(function(){var t=(Date.now()-t0)/1000;bars.forEach(function(b,i){var e=Math.sin(t*7+i*.7)*.5+.5,r=.35+Math.random()*.65;b.style.height=(4+e*r*waveAmp)+'px'})},90)}
function resetVoice(){waveStop();vdock.className='vdock';vst.textContent='Tap to speak';askEl.classList.remove('on');askEl.innerHTML='';think.classList.remove('on');im.classList.remove('looking')}
var REDUCED=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
var run=0,cur=null,curEl=null,fast=false;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
var MQ_M=window.matchMedia('(max-width:600px)'),MQ_T=window.matchMedia('(max-width:1024px)');
function layout(){return MQ_M.matches?'m':(MQ_T.matches?'t':'d')}
function mobile(){return layout()==='m'}
var RATIO={d:941/1672,t:1086/1448,m:1672/941},SZ={d:44,t:40,m:36},MINI=0.7;
var PRI=['fryer','fridge','tv','cnc','ac','solar','cpap','vac','ev','arm','washer','mixer','micro','glucose'];

/* ---- house markers ---- */
var pinned=false,hoverT=null,leaveT=null,HOVER=window.matchMedia('(hover:hover)').matches;
D.forEach(function(d,i){
  var im2=new Image();im2.decoding='async';im2.alt=d.name;im2.src='/img/'+d.img+'.jpg';d.imgEl=im2;
  var el=document.createElement('div');el.className='hs'+(d.x>60?' fl':'');el.style.left=d.x+'%';el.style.top=d.y+'%';
  el.innerHTML='<button class="dot" type="button" aria-label="'+esc(d.name)+'">'+MKS+'</button><span class="nm">'+esc(d.name)+'</span>';
  var dot=el.querySelector('.dot');
  dot.addEventListener('click',function(e){e.stopPropagation();clearTimeout(hoverT);clearTimeout(leaveT);
    if(curEl===el&&phone.classList.contains('on')){pinned=true;return}
    openPhone(i,el,true)});
  dot.addEventListener('focus',function(){if(dot.matches(':focus-visible')&&curEl!==el)openPhone(i,el,true)});
  if(HOVER){
    el.addEventListener('mouseenter',function(){
      clearTimeout(leaveT);if(pinned&&curEl!==el)return;if(curEl===el)return;
      clearTimeout(hoverT);hoverT=setTimeout(function(){if(curEl!==el)openPhone(i,el,false)},cur?260:110);
    });
    el.addEventListener('mouseleave',function(){clearTimeout(hoverT);scheduleClose()});
  }
  d.el=el;stage.appendChild(el);
});
function scheduleClose(){if(pinned||!cur)return;clearTimeout(leaveT);leaveT=setTimeout(function(){if(!pinned)closePhone()},550)}

/* ---- view maths ---- */
function view(d){
  var xs=d.pts.map(function(p){return p[1]}),ys=d.pts.map(function(p){return p[2]});
  var x0=Math.min.apply(0,xs),x1=Math.max.apply(0,xs),y0=Math.min.apply(0,ys),y1=Math.max.apply(0,ys);
  var cx=(x0+x1)/2,cy=(y0+y1)/2,sc=BH/d.ih,W=d.iw*sc;
  var bw=Math.max(1,(x1-x0)*sc),bh=Math.max(1,(y1-y0)*sc);
  var s=Math.max(1,Math.min(1.6,(BW-100)/bw,230/bh)),den=BH-sc*y1;
  if(den>0)s=Math.max(s,Math.min(2,(BH-326)/den));
  var tx=Math.min(0,Math.max(BW-W*s,BW/2-cx*sc*s)),ty=Math.min(0,Math.max(BH-BH*s,FY-cy*sc*s));
  return {sc:sc,W:W,s:s,tx:tx,ty:ty,stx:(BW-W)/2,sty:0};
}
function px(d,p){var v=d.v;return [p[1]*v.sc*v.s+v.tx,p[2]*v.sc*v.s+v.ty]}
function camT(tx_,ty_,s){cam.style.transform='translate('+tx_+'px,'+ty_+'px) scale('+s+')'}

/* ---- phone open/close/place ---- */
var tok=0;
function openPhone(i,el,pin){
  var d=D[i],t=++tok;cur=d;curEl=el;d.v=view(d);pinned=!!pin;clearTimeout(leaveT);
  document.querySelectorAll('.hs.cur').forEach(function(x){x.classList.remove('cur')});
  el.classList.add('cur');stage.classList.add('has');
  $('pd').textContent=d.dom;$('pn').textContent=d.name;phone.setAttribute('aria-label',d.name+' assistant demo');
  /* clear the previous product at once, then wait for this image */
  run++;cam.classList.remove('ready');cam.style.transition='none';cam.style.width=d.v.W+'px';camT(d.v.stx,d.v.sty,1);
  cam.replaceChildren(d.imgEl);ov.innerHTML='';ans.className='ans';ans.innerHTML='';resetVoice();
  place();phone.classList.add('on');
  scrim.classList.add('on');
  var go=function(){if(t!==tok||cur!==d)return;void cam.offsetWidth;cam.classList.add('ready');play(false)};
  if(d.imgEl.complete&&d.imgEl.naturalWidth)go();
  else{var done=false,fire=function(){if(done)return;done=true;go()};d.imgEl.addEventListener('load',fire,{once:true});d.imgEl.addEventListener('error',fire,{once:true})}
}
function closePhone(){
  run++;tok++;waveStop();pinned=false;clearTimeout(hoverT);clearTimeout(leaveT);
  phone.classList.remove('on');scrim.classList.remove('on');tie.classList.remove('on');stage.classList.remove('has');
  document.querySelectorAll('.hs.cur').forEach(function(x){x.classList.remove('cur')});
  cur=null;curEl=null;if(document.activeElement&&document.activeElement.blur)document.activeElement.blur();
}
/* ---- layout: positions per image, hide markers that crowd each other ---- */
var curLayout=null;
function applyLayout(){
  var L=layout(),sw=stage.clientWidth,sh=sw*RATIO[L],shown=[],byId={};
  D.forEach(function(d){byId[d.id]=d});
  if(curLayout&&curLayout!==L&&cur)closePhone();
  curLayout=L;
  PRI.forEach(function(id){
    var d=byId[id],pos=L==='d'?[d.x,d.y]:d[L];
    if(!pos){d.vis=false;d.el.style.display='none';return}
    var p=[pos[0]/100*sw,pos[1]/100*sh],minD=SZ[L]+(L==='m'?6:2);
    var ok=shown.every(function(q){return Math.hypot(q[0]-p[0],q[1]-p[1])>=minD});
    d.px=pos[0];d.py=pos[1];d.vis=ok;d.el.style.left=pos[0]+'%';d.el.style.top=pos[1]+'%';
    d.el.classList.toggle('fl',pos[0]>60);d.el.style.display=ok?'':'none';
    if(ok)shown.push(p);
  });
  if(cur&&!cur.vis)closePhone();
}
applyLayout();
MQ_M.addEventListener('change',applyLayout);MQ_T.addEventListener('change',applyLayout);

function place(){
  if(!cur)return;
  var L=layout(),sw=stage.clientWidth,sh=sw*RATIO[L];
  var mx=cur.px/100*sw,my=cur.py/100*sh,sc,w,h,left,top,ex,ey;
  if(L==='m'){
    sc=Math.min(MINI,(window.innerHeight-32)/PH,(window.innerWidth-24)/PW);
    phone.style.left='';phone.style.top='';phone.style.transform='translate(-50%,-50%) scale('+sc+')';
    tie.classList.remove('on');return;
  }else{
    sc=Math.min(1,(sh-24)/PH);w=PW*sc;h=PH*sc;
    var right=cur.px<52;left=right?mx+48:mx-48-w;left=Math.max(8,Math.min(sw-w-8,left));
    top=Math.max(12,Math.min(sh-h-12,my-h/2));
    ex=right?left:left+w;ey=Math.max(top+44*sc,Math.min(top+h-44*sc,my));
  }
  phone.style.left=left+'px';phone.style.top=top+'px';phone.style.transform='scale('+sc+')';
  var dx=ex-mx,dy=ey-my,len=Math.sqrt(dx*dx+dy*dy)-20,ang=Math.atan2(dy,dx);
  tie.style.left=(mx+Math.cos(ang)*20)+'px';tie.style.top=(my+Math.sin(ang)*20)+'px';tie.style.width=Math.max(0,len)+'px';tie.style.transform='rotate('+ang+'rad)';tie.classList.add('on');
}

/* ---- animation sequence ---- */
function at(r,ms,fn){if(fast){fn();return}setTimeout(function(){if(r===run)fn()},ms)}
function play(f){
  var r=++run,d=cur;fast=!!f||REDUCED;
  resetVoice();ov.innerHTML='';
  cam.style.transition='none';camT(d.v.stx,d.v.sty,1);void cam.offsetWidth;cam.style.transition='';
  ans.className='ans';ans.innerHTML='';
  if(fast){cam.style.transition='none';camT(d.v.tx,d.v.ty,d.v.s);reveal(r,d);return}
  at(r,500,function(){
    vdock.classList.add('listen');vst.textContent='Listening…';waveAmp=5;waveStart();
    var words=d.ask.split(' '),i=0;
    function done(){waveAmp=4;setTimeout(function(){if(r===run)understand(r,d)},560)}
    function next(){
      if(r!==run)return;
      if(i>=words.length){done();return}
      var w=document.createElement('span');w.className='w';w.textContent=(i?' ':'')+words[i];askEl.appendChild(w);askEl.classList.add('on');waveAmp=24;
      var len=words[i].length;i++;setTimeout(next,170+Math.random()*130+len*14);
    }
    setTimeout(function(){next()},900);
  });
}
function understand(r,d){
  vdock.classList.remove('listen');vst.textContent='Understanding…';waveStop();
  think.classList.add('on');im.classList.add('looking');
  at(r,900,function(){
    askEl.classList.remove('on');camT(d.v.tx,d.v.ty,d.v.s);
    at(r,1000,function(){im.classList.remove('looking');think.classList.remove('on');reveal(r,d)});
  });
}
function addPt(d,p,cls,inner,btn){
  var c=px(d,p),e=document.createElement(btn?'button':'span');
  if(btn)e.type='button';
  e.className='pt'+(btn?' btn':'')+(cls?' '+cls:'');e.style.left=c[0]+'px';e.style.top=c[1]+'px';e.innerHTML=inner;
  if(btn)e.setAttribute('aria-label',p[0]);
  ov.appendChild(e);void e.offsetWidth;e.classList.add('on');return e;
}
function side(d,p){if(p[3]==='l')return ' fl';if(p[3]==='r')return '';var c=px(d,p),est=p[0].length*6.2+36;return (BW-c[0]>=est)?'':' fl'}
function reveal(r,d){
  ans.classList.add('on');
  if(d.kind==='setup')revealSetup(r,d);else if(d.kind==='guide')revealGuide(r,d);else revealSupport(r,d);
  vst.textContent='Tap mic to ask again';
}
function revealSetup(r,d){
  var n=d.pts.length;
  ans.innerHTML='<span class="chip">Setup · '+n+' steps</span><ol class="steps">'+d.steps.map(function(s,i){return '<li><i>'+(i+1)+'</i><span>'+esc(s)+'</span></li>'}).join('')+'</ol>'+(d.note?'<p class="nt2">'+esc(d.note)+'</p>':'');
  var lis=ans.querySelectorAll('li'),svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','ln');ov.appendChild(svg);
  d.pts.forEach(function(p,i){
    at(r,i*450,function(){
      if(i>0){var a=px(d,d.pts[i-1]),b=px(d,p),l=document.createElementNS('http://www.w3.org/2000/svg','line');
        l.setAttribute('x1',a[0]);l.setAttribute('y1',a[1]);l.setAttribute('x2',b[0]);l.setAttribute('y2',b[1]);l.setAttribute('class','seg2');svg.appendChild(l);void l.getBoundingClientRect();l.classList.add('on')}
      addPt(d,p,'','<span class="num">'+(i+1)+'</span>');lis[i].classList.add('on');
    });
  });
  var nt=ans.querySelector('.nt2');if(nt)at(r,n*450,function(){nt.style.opacity=1});
}
function revealGuide(r,d){
  var n=d.pts.length,pts=[],step=0;
  ans.innerHTML='<span class="chip" id="gc"></span><p class="tip" id="gt"></p><div class="gf"><div class="prog">'+d.pts.map(function(){return '<i></i>'}).join('')+'</div><button type="button" class="nx" id="gn"><span></span>'+AR+'</button></div>';
  var gc=$('gc'),gt=$('gt'),gn=$('gn'),bars=ans.querySelectorAll('.prog i');
  function setStep(k,anim){
    step=k;gc.textContent='Guide · Step '+(k+1)+' of '+n;gt.textContent=d.tips[k];gn.firstChild.textContent=k<n-1?'Next':'Start again';
    bars.forEach(function(b,i){b.classList.toggle('on',i<=k)});
    pts.forEach(function(e,i){e.classList.toggle('act',i===k)});
    if(anim){gt.classList.remove('swap');void gt.offsetWidth;gt.classList.add('swap')}
  }
  d.pts.forEach(function(p,i){
    at(r,i*180,function(){
      var e=addPt(d,p,'','' ,true);e.className='pt btn on'+side(d,p);e.innerHTML=MKS+'<span class="tg">'+esc(p[0])+'</span>';pts[i]=e;
      e.addEventListener('click',function(){setStep(i,true)});
    });
  });
  at(r,fast?0:n*180+200,function(){setStep(0,!fast)});
  gn.addEventListener('click',function(){setStep((step+1)%n,true)});
}
function revealSupport(r,d){
  var c=d.cta,h=d.pts[d.hot];
  var cta;
  if(c.t==='amazon')cta='<button type="button" class="cta" id="cta"><div><b>'+esc(c.b)+'</b><span id="cs">'+esc(c.s)+'</span></div><i class="go">'+UP+'</i></button>';
  else cta='<button type="button" class="cta" id="cta"><div><b id="cb">'+esc(c.b)+'</b><span id="cs">'+esc(c.s)+'</span></div><i class="go">'+AR+'</i></button>';
  ans.innerHTML='<span class="chip">Support · Diagnosis</span><p class="dg"><b>Most likely:</b> '+esc(d.dg)+'</p><p class="tr"><b>Try first:</b> '+esc(d.tr)+'</p>'+cta+(d.note?'<p class="nt2">'+esc(d.note)+'</p>':'');
  d.pts.forEach(function(p,i){
    at(r,i*160,function(){
      if(i===d.hot)addPt(d,p,side(d,p).trim(),MKS+'<span class="tg hot">Check here</span>');
      else addPt(d,p,'','<span class="dim"></span>');
    });
  });
  var base=fast?0:d.pts.length*160+150;
  at(r,base,function(){ans.querySelector('.dg').classList.add('on')});
  at(r,base+(fast?0:450),function(){ans.querySelector('.tr').classList.add('on')});
  at(r,base+(fast?0:900),function(){ans.querySelector('.cta').classList.add('on');var nt=ans.querySelector('.nt2');if(nt)nt.style.opacity=1});
  var b=$('cta'),done=false;
  b.addEventListener('click',function(){
    if(done)return;
    if(c.t==='amazon'){$('cs').textContent='Sample only. A real product link goes here.';return}
    done=true;$('cb').textContent='Sending…';
    setTimeout(function(){b.classList.add('done');$('cb').textContent='✓ '+c.ok;$('cs').textContent=c.ok2;b.querySelector('.go').innerHTML=CK},700);
  });
}

/* ---- wiring ---- */
$('cl').addEventListener('click',function(e){e.stopPropagation();closePhone()});
mic.addEventListener('click',function(e){e.stopPropagation();if(cur)play(false)});
$('rp').addEventListener('click',function(e){e.stopPropagation();if(cur)play(false)});
phone.addEventListener('click',function(e){e.stopPropagation();pinned=true;clearTimeout(leaveT)});
if(HOVER){phone.addEventListener('mouseenter',function(){clearTimeout(leaveT)});phone.addEventListener('mouseleave',scheduleClose)}
document.addEventListener('click',function(){if(cur)closePhone()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&cur)closePhone()});
var rz=0;window.addEventListener('resize',function(){cancelAnimationFrame(rz);rz=requestAnimationFrame(function(){applyLayout();place()})});
window.__demo={open:function(id,f){var i=D.findIndex(function(x){return x.id===id});openPhone(i,D[i].el,true);if(f){play(true)}}};

/* ===== Problem banner ===== */
(function(){
  var vb=document.getElementById('vb');if(!vb)return;
  var v=document.getElementById('vvid'),pp=document.getElementById('vpp'),reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  var sl=vb.querySelectorAll('.sl'),ln=vb.querySelectorAll('.ln'),bar=vb.querySelectorAll('.bar i');
  var DUR=3600,i=-1,t=null,paused=false,seen=true,slides=false;
  function startSlides(){
    if(slides)return;slides=true;vb.classList.remove('hasv');if(v&&v.parentNode)v.parentNode.removeChild(v);v=null;
    vb.style.setProperty('--dur',DUR+'ms');
    function show(n){i=n%ln.length;for(var k=0;k<ln.length;k++){ln[k].classList.toggle('on',k===i);sl[k%sl.length].classList.toggle('on',k===i%sl.length);bar[k].classList.remove('on');bar[k].classList.toggle('done',k<i)}void bar[i].offsetWidth;bar[i].classList.add('on')}
    function tick(){if(!paused&&seen)show(i+1);t=setTimeout(tick,DUR)}
    show(0);
    if(reduce){pp.style.display='none';return}
    t=setTimeout(tick,DUR);
    pp.addEventListener('click',function(){paused=!paused;vb.classList.toggle('paused',paused)});
  }
  if(!v||!v.canPlayType||(!v.canPlayType('video/mp4')&&!v.canPlayType('video/webm'))){startSlides();return}
  var srcs=v.querySelectorAll('source'),last=srcs[srcs.length-1];
  if(last)last.addEventListener('error',startSlides);
  v.addEventListener('error',startSlides);
  var userPaused=reduce;
  function play(){var p=v.play();if(p&&p.catch)p.catch(function(){})}
  if(reduce){vb.classList.add('paused')}
  pp.addEventListener('click',function(){if(v.paused){userPaused=false;play();vb.classList.remove('paused')}else{userPaused=true;v.pause();vb.classList.add('paused')}});
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){if(slides)return;if(e[0].isIntersecting){if(!userPaused){play();vb.classList.remove('paused')}}else{v.pause()}},{threshold:.25}).observe(vb);
  else if(!reduce)play();
})();

/* ===== reveal rows ===== */
(function(){var r=document.querySelectorAll('.rv');if(!('IntersectionObserver' in window)){r.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=Array.prototype.indexOf.call(r,e.target)%5;setTimeout(function(){e.target.classList.add('in')},i*90);io.unobserve(e.target)}})},{threshold:.2});
  r.forEach(function(e){io.observe(e)});})();
/* ===== Setup / Guide / Support scroll scene ===== */
(function(){
  var how=document.getElementById('how');if(!how)return;
  var its=how.querySelectorAll('.it'),scs=how.querySelectorAll('.sc'),bbs=how.querySelectorAll('.bb'),cur=-1,tick=false;
  function setStep(n){if(n===cur)return;cur=n;
    its.forEach(function(e,k){e.classList.toggle('on',k===n);e.classList.toggle('done',k<n);e.setAttribute('aria-selected',k===n)});
    scs.forEach(function(e,k){e.classList.toggle('on',k===n)});
    bbs.forEach(function(e){e.classList.toggle('on',+e.getAttribute('data-s')===n)});}
  function upd(){tick=false;
    var r=how.getBoundingClientRect(),vh=window.innerHeight,tot=how.offsetHeight-vh;
    var p=Math.max(0,Math.min(1,-r.top/tot));
    how.style.setProperty('--p',p.toFixed(4));
    var st=Math.min(2,Math.floor(p*3+1e-6));setStep(st);
    its.forEach(function(e,k){e.style.setProperty('--f',k<st?1:(k===st?Math.min(1,p*3-st):0))});}
  function req(){if(!tick){tick=true;requestAnimationFrame(upd)}}
  window.addEventListener('scroll',req,{passive:true});window.addEventListener('resize',req);
  its.forEach(function(e,k){function go(){var top=how.getBoundingClientRect().top+window.scrollY,tot=how.offsetHeight-window.innerHeight;
      var y=top+tot*((k+.5)/3);if(window.__lenis)window.__lenis.scrollTo(y,{duration:1.2});else window.scrollTo({top:y,behavior:'smooth'})}
    e.addEventListener('click',go);e.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();go()}})});
  upd();
})();

/* ===== three layers: tabs + benefits + live pipeline infographic ===== */
(function(){
  var sec=document.getElementById('lay');if(!sec)return;
  var ARR='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var D=[
   {tab:'Interactive',tag:'Building now',kind:'stack',name:'INTERACTIVE PIPELINE',out:'guide',
    cards:[['Setup done right, the first time','Step-by-step help on the product, so customers set up correctly without calling you.'],['Answers customers can trust','Every answer comes from what you approved, with its source shown.'],['Help in the customer’s hands','One scan opens guides, answers and fixes for that exact product.'],['Works in your app or ours','The same help, under your brand.']],
    st:[{n:'IDENTITY',s:'QR · GS1 Digital Link → model + unit',r:'ID RESOLVED · MODEL X · #4821',i:'lxqr'},
        {n:'INGESTION',s:'OCR → structure → extraction',r:'MANUAL.PDF · 64 PP · 312 ITEMS',i:'doc'},
        {n:'KNOWLEDGE',s:'Grounded items with source + approval',r:'COMPONENT A · P.42 · CONF 0.96 ✓',i:'graph'},
        {n:'DELIVERY',s:'Retrieval over approved content',r:'GUIDE · 4 STEPS · SOURCE CITED',i:'steps'}]},
   {tab:'Intelligent',tag:'Next',kind:'stack',name:'INTELLIGENT PIPELINE',out:'answer',branch:3,
    cards:[['It sees what the customer sees','Point the camera at a part and get help for that exact part.'],['It understands the problem','“It is making a noise” gets the right fix for this model, not a generic list.'],['It knows when to hand over','Unsure or risky? It passes to your team with the full details.'],['Fewer back-and-forth questions','Your support team starts with the whole picture.']],
    st:[{n:'VISION',s:'Recognise · detect · segment',r:'PART DETECTED · COMPONENT A · 0.94',i:'eye'},
        {n:'CONTEXT',s:'Model + part + task + conversation',r:'MODEL X · COMPONENT A · TASK: FIX',i:'layers'},
        {n:'REASONING',s:'Intent → knowledge graph → reasoning',r:'PART → PROBLEM → CAUSE → FIX',i:'chain'},
        {n:'SAFETY CHECK',s:'Grounding + confidence routing',r:'RISK MED · CONF 0.91 · GROUNDED',i:'shield'},
        {n:'EXPERIENCE PLANNER',s:'Picks the answer form',r:'PLAN: HIGHLIGHT + 3 STEPS',i:'plan'}]},
   {tab:'Autonomous',tag:'Long-term direction',kind:'ring',name:'AUTONOMOUS LOOP',
    cards:[['Problems caught early','Spots an issue before the customer has to call.'],['The next step is handled','Tells the customer, offers the fix and books a service visit if needed.'],['The customer stays in control','Nothing happens without their approval.'],['Grows with connected products','More products connect, more can be looked after.']],
    st:[{n:'OBSERVE',r:'EVENT STREAM · CYCLE 214',i:'pulse'},
        {n:'PREDICT',r:'ANOMALY · PERFORMANCE DRIFT',i:'trend'},
        {n:'DECIDE',r:'POLICY OK · RISK LOW',i:'policy'},
        {n:'AUTHORISE',r:'APPROVED BY CUSTOMER',i:'approve'},
        {n:'ACT',r:'WARRANTY ✓ · VISIT BOOKED',i:'gear'},
        {n:'VERIFY',r:'ISSUE CLOSED · LOGGED',i:'check'}]}
  ];
  var C=.866;
  function f1(v){return Math.round(v*10)/10}
  function pts(a){return a.map(function(p){return f1(p[0])+','+f1(p[1])}).join(' ')}
  function pad(n){return (n<10?'0':'')+n}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  /* rounded rectangle lying in the iso plane, centred on screen point (sx,sy), lifted by z */
  function rrp(sx,sy,w,d,r,z){var o=[],x=-w/2,y=-d/2,cs=[[x+r,y+r,Math.PI],[x+w-r,y+r,1.5*Math.PI],[x+w-r,y+d-r,0],[x+r,y+d-r,.5*Math.PI]];
    cs.forEach(function(c){for(var i=0;i<=6;i++){var a=c[2]+i/6*Math.PI/2,px=c[0]+r*Math.cos(a),py=c[1]+r*Math.sin(a);o.push([sx+(px-py)*C,sy+(px+py)*.5-z])}});return pts(o)}
  var ICO={
   lxqr:(function(){var r='';[[0,0],[1,0],[2,0],[0,1],[2,1],[0,2],[1,2],[2,2],[4,0],[4,2],[0,4],[2,4],[4,4],[3,3],[4,1],[3,4]].forEach(function(q){r+='<rect class="lxf" x="'+(q[0]*5.4-13)+'" y="'+(q[1]*5.4-13)+'" width="4.4" height="4.4" rx=".8"/>'});return r})(),
   doc:'<path d="M-9 -14h11l7 7v21h-18z"/><path d="M2 -14v7h7M-5 -2h10M-5 3h10M-5 8h6"/>',
   graph:'<path d="M-9 -7L9 -10M-9 -7L1 8M9 -10L1 8M1 8L-11 10"/><circle class="lxf" cx="-9" cy="-7" r="3.4"/><circle class="lxf" cx="9" cy="-10" r="3.4"/><circle class="lxf" cx="1" cy="8" r="3.4"/><circle class="lxf" cx="-11" cy="10" r="2.6"/>',
   steps:'<path d="M-4 -9h15M-4 0h15M-4 9h10"/><circle class="lxf" cx="-11" cy="-9" r="2.8"/><circle class="lxf" cx="-11" cy="0" r="2.8"/><circle class="lxf" cx="-11" cy="9" r="2.8"/>',
   eye:'<path d="M-14 -6v-8h8M14 -6v-8h-8M-14 6v8h8M14 6v8h-8"/><circle r="5"/><circle class="lxf" r="1.8"/>',
   layers:'<path d="M0 -12l13 6-13 6-13-6z"/><path d="M-13 1l13 6 13-6M-13 7l13 6 13-6"/>',
   chain:'<path d="M-8 -2l5-4M-8 2l5 4M3 -6l5 4M3 6l5-4"/><circle class="lxf" cx="-11" cy="0" r="3.4"/><circle class="lxf" cx="0" cy="-8" r="3.4"/><circle class="lxf" cx="0" cy="8" r="3.4"/><circle class="lxf" cx="11" cy="0" r="3.4"/>',
   shield:'<path d="M0 -14l11 4v7c0 7-5 11-11 13-6-2-11-6-11-13v-7z"/><path d="M-5 0l4 4 6-7"/>',
   plan:'<rect x="-13" y="-11" width="11" height="9" rx="2"/><rect x="2" y="-11" width="11" height="9" rx="2"/><rect x="-13" y="2" width="26" height="9" rx="2"/>',
   pulse:'<path d="M-15 0h6l3-8 5 16 3-8h13"/>',
   trend:'<path d="M-13 9l8-8 6 5 11-12"/><path d="M5 -6h7v7"/>',
   policy:'<path d="M0 -13l13 13-13 13-13-13z"/><path d="M-4 0l3 3 5-6"/>',
   approve:'<rect x="-8" y="-14" width="16" height="28" rx="3.5"/><path d="M-4 1l3 3 5-6"/>',
   gear:'<circle r="4.5"/><path d="M0 -13v4M0 9v4M-13 0h4M9 0h4M-9.2 -9.2l2.8 2.8M6.4 6.4l2.8 2.8M9.2 -9.2l-2.8 2.8M-6.4 6.4l-2.8 2.8"/>',
   check:'<circle r="12"/><path d="M-5 0l4 4 7-8"/>'
  };
  var DEFS='<defs>'+
   '<linearGradient id="lxpI" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb0d6" stop-opacity=".22"/><stop offset="1" stop-color="#9446ff" stop-opacity=".08"/></linearGradient>'+
   '<linearGradient id="lxpD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9cc8" stop-opacity=".36"/><stop offset="1" stop-color="#b43ce6" stop-opacity=".16"/></linearGradient>'+
   '<linearGradient id="lxpA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8fbe" stop-opacity=".92"/><stop offset="1" stop-color="#d61f69" stop-opacity=".72"/></linearGradient>'+
   '<linearGradient id="lxsI" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a2ea6" stop-opacity=".55"/><stop offset="1" stop-color="#2a0f4a" stop-opacity=".7"/></linearGradient>'+
   '<linearGradient id="lxsA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff4f8f"/><stop offset="1" stop-color="#7a0d40"/></linearGradient>'+
   '<linearGradient id="lxprT" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#43304a"/><stop offset="1" stop-color="#22172a"/></linearGradient>'+
   '<linearGradient id="lxprF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d2033"/><stop offset="1" stop-color="#140c17"/></linearGradient>'+
   '<linearGradient id="lxprR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1220"/><stop offset="1" stop-color="#0b070d"/></linearGradient>'+
   '<linearGradient id="lxscr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1028"/><stop offset="1" stop-color="#110812"/></linearGradient>'+
   '<radialGradient id="lxcol" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff5c9a" stop-opacity=".22"/><stop offset="1" stop-color="#ff5c9a" stop-opacity="0"/></radialGradient>'+
   '<filter id="lxbl" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="11"/></filter>'+
   '<filter id="lxsh" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>'+
   '<filter id="lxbg" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'+
   '</defs>';

  /* ---------- pieces ---------- */
  function floorG(cx,cy,S){var o='<polygon class="lxfl" points="'+rrp(cx,cy,S,S,56,0)+'"/>',h=S/2;
    for(var g=-h+48;g<h;g+=48){var a=[cx+(g+h)*C,cy+(g-h)*.5],b=[cx+(g-h)*C,cy+(g+h)*.5],c=[cx+(-h-g)*C,cy+(-h+g)*.5],d=[cx+(h-g)*C,cy+(h+g)*.5];
      o+='<path class="lxgr" d="M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])+'M'+f1(c[0])+' '+f1(c[1])+'L'+f1(d[0])+' '+f1(d[1])+'"/>'}
    return o}
  function product(sx,sy,k){
    var w=104*k,d=84*k,h=92*k,hw=w/2,hd=d/2;
    function I(x,y,z){return [sx+(x-y)*C,sy+(x+y)*.5-z]}
    var top=[I(-hw,-hd,h),I(hw,-hd,h),I(hw,hd,h),I(-hw,hd,h)],fL=[I(-hw,hd,h),I(hw,hd,h),I(hw,hd,0),I(-hw,hd,0)],fR=[I(hw,-hd,h),I(hw,hd,h),I(hw,hd,0),I(hw,-hd,0)];
    var oF=I(-hw,hd,h),oR=I(hw,hd,h),tc=I(0,0,h);
    var o='<g class="lxprd"><ellipse cx="'+f1(sx)+'" cy="'+f1(sy+6*k)+'" rx="'+f1(w*.98)+'" ry="'+f1(d*.5)+'" fill="#000" opacity=".6" filter="url(#lxsh)"/>';
    o+='<polygon points="'+pts(fR)+'" fill="url(#lxprR)" stroke="rgba(255,150,200,.18)" stroke-width="1"/>';
    o+='<g transform="matrix('+C+' -.5 0 1 '+f1(oR[0])+' '+f1(oR[1])+') scale('+k+')">';
    for(var i=0;i<6;i++)o+='<rect x="'+(12+i*9)+'" y="34" width="2.4" height="40" rx="1.2" fill="rgba(255,255,255,.06)"/>';
    o+='<g class="lxqrs"><rect x="58" y="10" width="20" height="20" rx="3" fill="#f3e9ef"/>';
    [[0,0],[2,0],[0,2],[1,1],[2,2],[0,1]].forEach(function(q){o+='<rect x="'+(61+q[0]*5)+'" y="'+(13+q[1]*5)+'" width="4" height="4" fill="#2a1424"/>'});
    o+='<rect class="lxqrg" x="55" y="7" width="26" height="26" rx="5" fill="none" stroke="#FF5C9A" stroke-width="2"/></g></g>';
    o+='<polygon points="'+pts(fL)+'" fill="url(#lxprF)" stroke="rgba(255,150,200,.22)" stroke-width="1"/>';
    o+='<g transform="matrix('+C+' .5 0 1 '+f1(oF[0])+' '+f1(oF[1])+') scale('+k+')">'+
       '<rect x="6" y="6" width="92" height="18" rx="4" fill="#0a060c" stroke="rgba(255,255,255,.08)"/>'+
       '<rect x="11" y="10" width="30" height="10" rx="2" fill="#1d0b14"/><rect class="lxsg" x="14" y="13" width="6" height="4" rx="1"/><rect class="lxsg" x="22" y="13" width="6" height="4" rx="1"/><rect class="lxsg" x="30" y="13" width="6" height="4" rx="1"/>'+
       '<circle cx="52" cy="15" r="2" fill="rgba(255,255,255,.3)"/><circle cx="60" cy="15" r="2" fill="rgba(255,255,255,.3)"/><circle cx="68" cy="15" r="2" fill="rgba(255,255,255,.3)"/>'+
       '<circle cx="86" cy="15" r="6" fill="#1c1520" stroke="rgba(255,255,255,.35)" stroke-width="1.2"/><path d="M86 15V10" stroke="#FF5C9A" stroke-width="1.6" stroke-linecap="round"/>'+
       '<path d="M6 32H98" stroke="rgba(255,255,255,.07)"/><circle class="lxpled" cx="92" cy="41" r="2.4"/>'+
       '<rect class="lxcmpA" x="10" y="50" width="42" height="30" rx="5"/><rect x="22" y="62" width="18" height="5" rx="2.5" fill="rgba(255,255,255,.2)"/>'+
       '<rect x="58" y="52" width="36" height="2.2" rx="1.1" fill="rgba(255,255,255,.08)"/><rect x="58" y="58" width="36" height="2.2" rx="1.1" fill="rgba(255,255,255,.08)"/><rect x="58" y="64" width="36" height="2.2" rx="1.1" fill="rgba(255,255,255,.08)"/><rect x="58" y="70" width="36" height="2.2" rx="1.1" fill="rgba(255,255,255,.08)"/><rect x="58" y="76" width="36" height="2.2" rx="1.1" fill="rgba(255,255,255,.08)"/>'+
       '<g class="lxcam"><path d="M5 52v-7h7M57 52v-7h-7M5 78v7h7M57 78v7h-7" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><rect class="lxscn" x="7" y="47" width="48" height="1.8" rx=".9" fill="#FF5C9A"/></g>'+
       '</g>';
    o+='<polygon points="'+pts(top)+'" fill="url(#lxprT)" stroke="rgba(255,170,210,.4)" stroke-width="1"/>';
    o+='<path d="M'+f1(oR[0])+' '+f1(oR[1])+'L'+f1(oR[0])+' '+f1(oR[1]+h)+'" stroke="rgba(255,180,215,.55)" stroke-width="1.2"/>';
    o+='<g class="lxwv" transform="translate('+f1(tc[0]+30*k)+' '+f1(tc[1]-18*k)+')" fill="none" stroke="#FF9CC4" stroke-width="2" stroke-linecap="round"><path d="M0 0a8 8 0 0 1 8 -8"/><path d="M0 0a17 17 0 0 1 17 -17"/><path d="M0 0a26 26 0 0 1 26 -26"/></g>';
    return {svg:o+'</g>',top:tc,h:h};
  }
  function plate(i,sx,sy,w,t,ic,num){
    var o='<g class="lxpl" data-i="'+i+'"><polygon class="lxpgl" points="'+rrp(sx,sy+8,w,w,18,0)+'" fill="#FF3D8B" filter="url(#lxbl)"/>';
    for(var z=-t;z<0;z+=1.5)o+='<polygon class="lxpsd" points="'+rrp(sx,sy,w,w,18,z)+'"/>';
    o+='<polygon class="lxptp" points="'+rrp(sx,sy,w,w,18,0)+'"/><polygon class="lxprm" points="'+rrp(sx,sy,w-16,w-16,12,0)+'"/>';
    o+='<g class="lxpic" transform="matrix('+C+' .5 '+(-C)+' .5 '+f1(sx)+' '+f1(sy)+') scale('+f1(w/84)+')">'+ICO[ic]+'</g>';
    if(num)o+='<g transform="matrix('+C+' .5 '+(-C)+' .5 '+f1(sx)+' '+f1(sy)+')"><text class="lxm lxpnm" x="'+f1(-w/2+10)+'" y="'+f1(-w/2+20)+'" font-size="11">'+pad(i+1)+'</text></g>';
    return o+'</g>'}
  function label(i,sy,st,px){
    var cw=Math.round(st.r.length*5.7+20);
    return '<g class="lxlb" data-i="'+i+'"><text class="lxm" x="22" y="'+(sy-20)+'" font-size="10" fill="#FF5C9A">'+pad(i+1)+'</text>'+
      '<text class="lxn" x="46" y="'+(sy-20)+'" font-size="10.5" fill="#fff">'+esc(st.n)+'</text>'+
      '<text class="lxs" x="46" y="'+(sy-6)+'" font-size="10.5" fill="rgba(255,226,240,.66)">'+esc(st.s)+'</text>'+
      '<rect class="lxch" x="46" y="'+(sy+1)+'" width="'+cw+'" height="19" rx="9.5"/><text class="lxm" x="56" y="'+(sy+13.8)+'" font-size="9.2" fill="#fff">'+esc(st.r)+'</text>'+
      '<path class="lxld" d="M'+(46+cw+6)+' '+(sy+10.5)+'L'+f1(px-8)+' '+sy+'"/></g>'}
  function rlabel(i,sx,y,st,VW){
    var cw=Math.round(st.r.length*5.7+20),x=Math.max(cw/2+12,Math.min(VW-cw/2-12,sx));
    return '<g class="lxlb" data-i="'+i+'"><text class="lxn" x="'+f1(x)+'" y="'+f1(y)+'" font-size="10.5" text-anchor="middle" fill="#fff"><tspan class="lxm" fill="#FF5C9A">'+pad(i+1)+'</tspan>  '+esc(st.n)+'</text>'+
      '<rect class="lxch" x="'+f1(x-cw/2)+'" y="'+f1(y+7)+'" width="'+cw+'" height="19" rx="9.5"/><text class="lxm" x="'+f1(x)+'" y="'+f1(y+19.8)+'" font-size="9.2" text-anchor="middle" fill="#fff">'+esc(st.r)+'</text></g>'}
  function phone(x,y,w,h,kind){
    var o='<g class="lxo" transform="translate('+x+' '+y+')"><rect width="'+w+'" height="'+h+'" rx="20" fill="#0c060e" stroke="rgba(255,190,220,.35)" stroke-width="1.2"/>'+
      '<rect x="5" y="5" width="'+(w-10)+'" height="'+(h-10)+'" rx="15" fill="url(#lxscr)"/><rect x="'+(w/2-15)+'" y="10" width="30" height="7" rx="3.5" fill="#050206"/>'+
      '<text class="lxm" x="15" y="34" font-size="7.5" fill="#FF9CC4">MODEL X</text><text class="lxs" x="15" y="47" font-size="10.5" font-weight="600" fill="#fff">Your product</text>',iw=w-30;
    if(kind==='guide'){
      o+='<text class="lxm lxrv" x="15" y="66" font-size="7.5" fill="rgba(255,226,240,.7)" style="transition-delay:.05s">GUIDE · COMPONENT A</text>';
      for(var r=0;r<3;r++)o+='<g class="lxrv" style="transition-delay:'+(.15+r*.18)+'s"><circle cx="22" cy="'+(80+r*22)+'" r="7" fill="#FF3D8B"/><text class="lxm" x="22" y="'+(83+r*22)+'" font-size="8" text-anchor="middle" fill="#fff">'+(r+1)+'</text><rect x="34" y="'+(76+r*22)+'" width="'+(iw-24)*(r%2?.7:1)+'" height="4" rx="2" fill="rgba(255,255,255,.55)"/><rect x="34" y="'+(83+r*22)+'" width="'+(iw-40)+'" height="3" rx="1.5" fill="rgba(255,255,255,.22)"/></g>';
      o+='<g class="lxrv" style="transition-delay:.7s"><rect x="15" y="'+(h-62)+'" width="'+iw+'" height="17" rx="8.5" fill="rgba(255,255,255,.07)" stroke="rgba(255,190,220,.25)"/><text class="lxm" x="'+(15+iw/2)+'" y="'+(h-50.5)+'" font-size="7.3" text-anchor="middle" fill="#FFC2DC">SOURCE · MANUAL P.42</text></g>';
      o+='<g class="lxrv" style="transition-delay:1s"><rect x="15" y="'+(h-38)+'" width="'+iw+'" height="22" rx="11" fill="rgba(110,220,160,.16)" stroke="rgba(150,235,185,.6)"/><text class="lxm" x="'+(15+iw/2)+'" y="'+(h-24)+'" font-size="8.5" text-anchor="middle" fill="#a8f0c4">RESOLVED ✓</text></g>';
    }else{
      o+='<g class="lxrv" style="transition-delay:.05s"><rect x="15" y="58" width="'+iw+'" height="58" rx="9" fill="rgba(255,255,255,.06)"/>'+
        '<rect x="'+(15+iw/2-26)+'" y="66" width="52" height="42" rx="5" fill="#1c1420" stroke="rgba(255,255,255,.2)"/><rect x="'+(15+iw/2-20)+'" y="86" width="20" height="14" rx="3" fill="rgba(255,92,154,.5)" stroke="#FF5C9A"/>'+
        '<circle cx="'+(15+iw/2-10)+'" cy="93" r="13" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3"/></g>';
      o+='<g class="lxrv" style="transition-delay:.3s"><text class="lxs" x="15" y="133" font-size="9.5" font-weight="600" fill="#fff">Component A</text><rect x="15" y="140" width="'+iw+'" height="3.5" rx="1.75" fill="rgba(255,255,255,.5)"/><rect x="15" y="147" width="'+(iw*.75)+'" height="3.5" rx="1.75" fill="rgba(255,255,255,.3)"/></g>';
      o+='<g class="lxrv" style="transition-delay:.55s"><rect x="15" y="'+(h-62)+'" width="'+(iw/2-3)+'" height="17" rx="8.5" fill="rgba(255,92,154,.2)" stroke="#FF5C9A"/><text class="lxm" x="'+(15+iw/4-1.5)+'" y="'+(h-50.5)+'" font-size="7.2" text-anchor="middle" fill="#fff">CONF 0.91</text>'+
        '<rect x="'+(15+iw/2+3)+'" y="'+(h-62)+'" width="'+(iw/2-3)+'" height="17" rx="8.5" fill="rgba(255,255,255,.07)" stroke="rgba(255,190,220,.3)"/><text class="lxm" x="'+(15+iw*.75+1.5)+'" y="'+(h-50.5)+'" font-size="7.2" text-anchor="middle" fill="#FFC2DC">GROUNDED</text></g>';
      o+='<g class="lxrv" style="transition-delay:.85s"><rect x="15" y="'+(h-38)+'" width="'+iw+'" height="22" rx="11" fill="#FF3D8B"/><text class="lxm" x="'+(15+iw/2)+'" y="'+(h-24)+'" font-size="8" text-anchor="middle" fill="#fff">SHOW 3 STEPS →</text></g>';
    }
    return o+'</g>'}
  function support(x,y,w,h){
    return '<g class="lxo lxsup" transform="translate('+x+' '+y+')"><rect width="'+w+'" height="'+h+'" rx="14" fill="rgba(30,18,10,.55)" stroke="rgba(255,200,120,.55)" stroke-width="1.2"/>'+
      '<text class="lxm" x="14" y="21" font-size="7.8" fill="#FFC878">SUPPORT TEAM</text>'+
      '<circle cx="24" cy="40" r="8" fill="rgba(255,255,255,.75)"/><circle cx="42" cy="42" r="6.5" fill="rgba(255,255,255,.5)"/>'+
      '<rect x="56" y="36" width="'+(w-72)+'" height="3.5" rx="1.75" fill="rgba(255,255,255,.45)"/><rect x="56" y="43" width="'+(w-88)+'" height="3.5" rx="1.75" fill="rgba(255,255,255,.25)"/>'+
      '<g class="lxrv"><rect x="10" y="'+(h-30)+'" width="'+(w-20)+'" height="19" rx="9.5" fill="rgba(255,200,120,.85)"/><text class="lxm" x="'+(w/2)+'" y="'+(h-17.5)+'" font-size="'+(w<130?6.5:7.4)+'" text-anchor="middle" fill="#2a1424">HANDOFF · FULL CONTEXT</text></g></g>'}
  function seg(d,alt){return '<path class="lxbmb'+(alt?' alt':'')+'" d="'+d+'"/><path class="lxbm'+(alt?' alt':'')+'" pathLength="1" d="'+d+'"/>'}
  function L(a,b){return 'M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])}
  function pill(x,y,name,n){var w=Math.round((name.length+8)*5.9+36);
    return '<g class="lxsp"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="24" rx="12" fill="rgba(10,4,10,.72)" stroke="rgba(255,190,220,.2)"/><circle class="lxspd" cx="'+(x+14)+'" cy="'+(y+12)+'" r="3.5" fill="#FF5C9A"/>'+
      '<text class="lxm" x="'+(x+25)+'" y="'+(y+15.5)+'" font-size="9.4" fill="#fff">'+name+'  <tspan class="lxcnt" fill="#FF9CC4">00/'+pad(n)+'</tspan></text></g>'}

  /* ---------- scene builders ---------- */
  function buildStack(s,cmp){
    var N=s.st.length,VW=cmp?400:720,VH,cx=cmp?150:400,pw,ys,base,ph,lxsp;
    if(!cmp){VH=600;pw=N>4?110:124;ys=N>4?[404,327,250,173,96]:[392,300,208,116];base=530;ph=[552,56,140,236];lxsp=[552,330,140,100]}
    else{pw=N>4?96:104;ys=N>4?[362,296,230,164,98]:[352,275,198,121];base=N>4?462:455;VH=base+52;ph=[268,34,122,212];lxsp=[268,272,122,92]}
    var hw=pw*C,o='<svg class="lx" viewBox="0 0 '+VW+' '+VH+'" role="img" aria-label="'+s.tab+' layer pipeline" preserveAspectRatio="xMidYMid meet">'+DEFS;
    o+=floorG(cx,base,cmp?300:400);
    o+='<ellipse cx="'+cx+'" cy="'+((ys[N-1]+base)/2)+'" rx="'+(hw*1.5)+'" ry="'+((base-ys[N-1])*.75)+'" fill="url(#lxcol)"/>';
    var P=product(cx,base,cmp?.82:1);o+=P.svg;
    var nodes=[P.top].concat(ys.map(function(y){return [cx,y]}));
    for(var k=0;k<N;k++){o+=seg(L(nodes[k],nodes[k+1]));o+=plate(k,cx,ys[k],pw,12,s.st[k].i,cmp)}
    var tp=nodes[N],lxpl=[ph[0],ph[1]+ph[3]/2];
    o+=seg('M'+cx+' '+tp[1]+'C'+(cx+70)+' '+(tp[1]-6)+' '+(lxpl[0]-60)+' '+lxpl[1]+' '+lxpl[0]+' '+lxpl[1]);
    if(s.branch!=null){var by=ys[s.branch],bx=cx+hw,sl=[lxsp[0],lxsp[1]+lxsp[3]/2];
      o+=seg('M'+f1(bx)+' '+by+'C'+f1(bx+40)+' '+by+' '+(sl[0]-50)+' '+sl[1]+' '+sl[0]+' '+sl[1],1);
      o+='<text class="lxm lxbrl" x="'+(lxsp[0]+4)+'" y="'+(lxsp[1]-9)+'" font-size="'+(cmp?7.6:8.4)+'" fill="#FFC878">IF CONF LOW → HANDOFF</text>';
      o+=support(lxsp[0],lxsp[1],lxsp[2],lxsp[3])}
    o+=phone(ph[0],ph[1],ph[2],ph[3],s.out);
    if(!cmp)for(k=0;k<N;k++)o+=label(k,ys[k],s.st[k],cx-hw);
    o+='<circle class="lxpt" r="4.5"/>'+pill(cmp?10:18,cmp?8:16,s.name,N);
    return {svg:o+'</svg>',VW:VW,VH:VH,N:N,D:1.1,tr:.55,branch:s.branch,ring:false};
  }
  function buildRing(s,cmp){
    var N=s.st.length,VW=cmp?400:720,VH=cmp?380:600,cx=cmp?200:360,cy=cmp?206:318,R=cmp?118:188,pw=cmp?66:90,z0=cmp?14:20;
    var rx=R*C*Math.SQRT2,ry=R*.5*Math.SQRT2,o='<svg class="lx" viewBox="0 0 '+VW+' '+VH+'" role="img" aria-label="'+s.tab+' layer loop" preserveAspectRatio="xMidYMid meet">'+DEFS;
    o+=floorG(cx,cy,cmp?340:520);
    o+='<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+f1(rx*1.05)+'" ry="'+f1(ry*1.05)+'" fill="url(#lxcol)"/>';
    o+='<ellipse class="lxrtk" cx="'+cx+'" cy="'+cy+'" rx="'+f1(rx)+'" ry="'+f1(ry)+'"/>';
    var th=[225,285,345,45,105,165],pos=th.map(function(a){var r=a*Math.PI/180,x=R*Math.cos(r),y=R*Math.sin(r);return [cx+(x-y)*C,cy+(x+y)*.5-z0]});
    o+=pos.map(function(p){return '<ellipse cx="'+f1(p[0])+'" cy="'+f1(p[1]+z0+4)+'" rx="'+f1(pw*.9)+'" ry="'+f1(pw*.42)+'" fill="#000" opacity=".5" filter="url(#lxsh)"/>'}).join('');
    var arcs=[];for(var k=1;k<=N;k++){var a=pos[k-1],b=pos[k%N];arcs.push('M'+f1(a[0])+' '+f1(a[1])+'A'+f1(rx)+' '+f1(ry)+' 0 0 1 '+f1(b[0])+' '+f1(b[1]))}
    arcs.forEach(function(d){o+=seg(d)});
    var P=product(cx,cy,cmp?.62:.9),items=[];
    pos.forEach(function(p,i){items.push({y:p[1]+z0,s:plate(i,p[0],p[1],pw,10,s.st[i].i,cmp)})});
    items.push({y:cy,s:P.svg+seg(L(P.top,pos[0]))});
    items.sort(function(a,b){return a.y-b.y}).forEach(function(it){o+=it.s});
    if(!cmp)pos.forEach(function(p,i){var back=p[1]<cy-z0-10;o+=rlabel(i,p[0],back?p[1]-pw*.5-30:p[1]+pw*.5+30,s.st[i],VW)});
    o+='<circle class="lxpt" r="4.5"/>'+pill(cmp?10:18,cmp?8:16,s.name,N);
    return {svg:o+'</svg>',VW:VW,VH:VH,N:N,D:1.0,tr:.5,ring:true};
  }

  /* ---------- runtime ---------- */
  var tabsEl=sec.querySelector('.ly3tb'),cardsEl=sec.querySelector('.ly3c'),vizEl=sec.querySelector('.ly3v');
  tabsEl.innerHTML=D.map(function(s,i){return '<button class="ly3b" role="tab" type="button" data-i="'+i+'">'+s.tab+'<em>'+s.tag+'</em><i></i></button>'}).join('');
  var tabs=tabsEl.querySelectorAll('.ly3b'),bars=tabsEl.querySelectorAll('i');
  var DUR=9500,cur=-1,t=0,last=0,hover=false,seen=false,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  var V=null,vt=0,cmp=false;
  function clamp(v){return v<0?0:v>1?1:v}
  function render(){
    var s=D[cur];cmp=vizEl.clientWidth>0&&vizEl.clientWidth<540;
    var b=s.kind==='ring'?buildRing(s,cmp):buildStack(s,cmp);
    vizEl.classList.toggle('cmp',cmp);
    vizEl.innerHTML=b.svg+'<ol class="lxl">'+s.st.map(function(x,k){return '<li><i>'+pad(k+1)+'</i><b>'+esc(x.n)+'</b><code>'+esc(x.r)+'</code></li>'}).join('')+'</ol>';
    var svg=vizEl.querySelector('svg');svg.style.aspectRatio=b.VW+'/'+b.VH;
    var lxbm=[].slice.call(svg.querySelectorAll('.lxbm'));
    V={b:b,s:s,svg:svg,segs:lxbm.filter(function(e){return !e.classList.contains('alt')}),alt:svg.querySelector('.lxbm.alt'),
       lxpl:[].slice.call(svg.querySelectorAll('.lxpl')).sort(function(a,b){return a.getAttribute('data-i')-b.getAttribute('data-i')}),lxlb:svg.querySelectorAll('.lxlb'),li:vizEl.querySelectorAll('.lxl li'),out:svg.querySelectorAll('.lxo:not(.lxsup)'),lxsup:svg.querySelector('.lxo.lxsup'),
       lxprd:svg.querySelector('.lxprd'),lxpt:svg.querySelector('.lxpt'),lxcnt:svg.querySelector('.lxcnt')};
    V.len=V.segs.map(function(e){return e.getTotalLength()});if(V.alt)V.altLen=V.alt.getTotalLength();
    V.T=b.ring?b.N*b.D+b.tr+.9:Math.max(DUR/1000+.3,b.N*b.D+b.tr+3);
    apply(reduce?V.T-.01:vt);
  }
  function tog(list,k,cls,on){if(list[k])list[k].classList.toggle(cls,on)}
  function apply(tt){
    if(!V)return;var b=V.b,N=b.N,Dd=b.D,tr=b.tr,act=null,stage=0;
    V.segs.forEach(function(e,k){var p=clamp((tt-k*Dd)/tr);e.style.strokeDashoffset=(1-p).toFixed(3);if(p>0&&p<1)act=[e,V.len[k],p]});
    for(var k=0;k<N;k++){var a=tt>=k*Dd+tr,dn=tt>=(k+1)*Dd+tr,on=a&&!dn;if(a)stage=k+1;
      [V.lxpl,V.lxlb,V.li].forEach(function(l){tog(l,k,'on',on);tog(l,k,'done',dn)})}
    if(b.ring){if(tt>=N*Dd+tr){tog(V.lxpl,0,'on',true);tog(V.lxlb,0,'on',true);tog(V.li,0,'on',true)}}
    var oo=tt>=N*Dd+tr;[].forEach.call(V.out,function(e){e.classList.toggle('on',oo)});
    if(V.alt){var t0=b.branch*Dd+tr,p2=clamp((tt-t0)/.9);V.alt.style.strokeDashoffset=(1-p2).toFixed(3);if(p2>0&&p2<1&&!act)act=[V.alt,V.altLen,p2];if(V.lxsup)V.lxsup.classList.toggle('on',p2>=1)}
    var pr=V.lxprd,kd=V.s.kind,nm=V.s.tab;
    if(pr){
      if(nm==='Interactive'){pr.classList.toggle('lxqr',tt>=.1&&tt<Dd+tr);pr.classList.toggle('lxhl',tt>=2*Dd+tr)}
      else if(nm==='Intelligent'){pr.classList.toggle('lxscan',tt>=.05);pr.classList.toggle('lxhl',tt>=tr)}
      else{pr.classList.toggle('lxobs',tt<Dd+tr);pr.classList.toggle('lxwarn',tt>=Dd+tr&&tt<5*Dd+tr);pr.classList.toggle('lxok',tt>=5*Dd+tr)}
    }
    if(V.lxpt){if(act){var q=act[0].getPointAtLength(act[2]*act[1]);V.lxpt.setAttribute('cx',f1(q.x));V.lxpt.setAttribute('cy',f1(q.y));V.lxpt.style.opacity=1;V.lxpt.classList.toggle('alt',act[0]===V.alt)}else V.lxpt.style.opacity=0}
    if(V.lxcnt)V.lxcnt.textContent=pad(Math.min(stage,N))+'/'+pad(N);
  }
  function set(n){n=n%D.length;if(n===cur)return;cur=n;t=0;vt=0;var s=D[n];
    tabs.forEach(function(e,k){e.classList.toggle('on',k===n);e.setAttribute('aria-selected',k===n)});bars.forEach(function(b){b.style.transform='scaleX(0)'});
    cardsEl.innerHTML=s.cards.map(function(c,k){return '<div class="ly3k" style="animation-delay:'+(k*.08)+'s"><b>'+ARR+'</b><div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></div></div>'}).join('');
    render()}
  function loop(now){requestAnimationFrame(loop);var dt=Math.min(100,now-last);last=now;if(!seen||document.hidden)return;
    if(!window.__lxStop){vt+=dt/1000;if(V&&vt>V.T)vt=0;apply(vt)}
    if(hover)return;t+=dt;var f=Math.min(1,t/DUR);bars[cur].style.transform='scaleX('+f+')';if(f>=1)set(cur+1)}
  tabs.forEach(function(e,k){e.addEventListener('click',function(){set(k);t=0;hover=true})});
  sec.addEventListener('mouseenter',function(){hover=true});sec.addEventListener('mouseleave',function(){hover=false});
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){seen=e[0].isIntersecting},{threshold:.25}).observe(sec);else seen=true;
  if('ResizeObserver' in window)new ResizeObserver(function(){var c=vizEl.clientWidth>0&&vizEl.clientWidth<540;if(c!==cmp&&cur>=0)render()}).observe(vizEl);
  set(0);if(reduce)return;last=performance.now();requestAnimationFrame(loop);
  window.__lx=function(i,tt){if(i!=null)set(i);vt=tt||0;apply(vt)};
})();


/* ===== 3D washing machine explorer ===== */
(function(){
  var sec=document.getElementById('explore');if(!sec)return;
  var stage=sec.querySelector('.x3s'),qbox=sec.querySelector('.x3q'),phone=sec.querySelector('.x3ph'),body=sec.querySelector('.x3bd'),
      cap=sec.querySelector('.x3cap'),capT=cap.querySelector('span'),hint=sec.querySelector('.x3h'),rs=sec.querySelector('.x3rs'),
      dock=sec.querySelector('.vdock'),vst=sec.querySelector('.vst'),mic=sec.querySelector('.mic'),bars=[].slice.call(sec.querySelectorAll('.wave i')),
      nx=sec.querySelector('.x3nx'),cl=sec.querySelector('.x3cl');
  var REDUCED=matchMedia('(prefers-reduced-motion:reduce)').matches,MOB=matchMedia('(max-width:760px)');
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var ICO={mic:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/></svg>',
           src:'<svg viewBox="0 0 24 24"><path d="M5 4h10l4 4v12H5zM14 4v5h5M8 13h8M8 17h6"/></svg>',
           go:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'};
  var Q=[
   {id:'drain',q:'Why is it draining slowly?',k:'Likely cause',cap:'Drain filter · behind the bottom flap',
    tip:'The drain filter is probably blocked. It takes about two minutes to clear.',steps:['Open the small flap at the bottom right','Turn the filter anticlockwise and pull it out','Let the water drain, then rinse the filter'],src:'User manual · Cleaning the filter',cta:['Open guided steps','3 steps · 2 min']},
   {id:'detergent',q:'How much detergent do I use?',k:'Dosage',cap:'Detergent drawer · compartment 2',
    tip:'Use compartment 2 for the main wash. A little less for soft water.',steps:['Pull the drawer open','Pour about 70 ml for a full 10 kg load','Push the drawer closed'],src:'User manual · Detergent drawer',cta:['Reorder the right detergent','From the brand store']},
   {id:'e21',q:'What does E21 mean?',k:'Error code',cap:'Display · error code E21',
    tip:'E21 means the water is not draining.',steps:['The display shows E21 when water can’t drain','Open the flap and clear the filter','Refit it, then press Start again'],src:'Error code guide · E21',cta:['Show me how to fix it','3 steps · 2 min']},
   {id:'smell',q:'Why does it smell?',k:'Care tip',cap:'Door seal · where mould collects',
    tip:'Mould collects in the rubber door seal.',steps:['Open the door and wipe the seal dry','Run a hot Drum Clean once a month','Leave the door open after washing'],src:'Care guide · Door seal',cta:['Remind me monthly','Adds to your calendar']},
   {id:'wash',q:'How do I clean the drum?',k:'How to',cap:'Dial · turn to Drum Clean',
    tip:'Run it empty once a month to keep the drum fresh.',steps:['Turn the dial to Drum Clean','Choose 90°','Press Start · about 1h 45m'],src:'User manual · Drum clean',cta:['Start the guided clean','About 1h 45m']},
   {id:'cable',q:'Can I replace the power cable myself?',k:'Safety first',cap:'Power cable · back of the machine',warn:1,
    tip:'Please don’t. A damaged power cable must be replaced by an authorised technician.',src:'Safety notice',cta:['Book a technician','Nearest service partner']}
  ];
  /* question buttons */
  var btns=Q.map(function(d,i){
    var b=document.createElement('button');b.type='button';b.className='x3b'+(d.warn?' sf':'');b.setAttribute('aria-pressed','false');
    b.innerHTML='<i>'+ICO.mic+'</i><span>“'+esc(d.q)+'”</span>';
    b.addEventListener('click',function(){ask(i)});qbox.appendChild(b);return b});
  var qn=document.createElement('p');qn.className='x3qn';qn.textContent='Say it your way. The assistant understands everyday words, not just the manual’s.';qbox.appendChild(qn);

  /* ---------- 3D (lazy) ---------- */
  var X=null,loading=false,failed=false,pend=null;
  function loadX(){
    if(loading||X||failed)return;loading=true;
    var s=document.createElement('script');s.src='/vendor/x3.js';
    s.onload=function(){
      try{
        window.BBX3.init(stage,{glb:'/media/wm_glb.txt',tex:'/img/wm_front.webp',onDrag:function(){hint.classList.add('off')},onStep:stepTo}).then(function(api){
          X=api;stage.classList.add('rdy');api.setVisible(vis);
          if(pend!==null){var p=pend;pend=null;api.prep(Q[p].id);setTimeout(function(){if(cur===p&&answered)api.play(Q[p].id)},50)}
        }).catch(fail);
      }catch(e){fail(e)}
    };
    s.onerror=fail;document.head.appendChild(s);
  }
  function fail(){failed=true;loading=false;stage.classList.add('fail');[].forEach.call(body.querySelectorAll('.x3st'),function(o){o.classList.add('static')})}
  function stepTo(id,i){
    if(cur<0||Q[cur].id!==id)return;var ol=body.querySelector('.x3st');if(!ol)return;
    [].forEach.call(ol.children,function(li,j){li.classList.toggle('done',j<i);li.classList.toggle('on',j===i);li.firstChild.textContent=j<i?'\u2713':String(j+1)});
  }
  var vis=false;
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;if(vis)loadX();if(X)X.setVisible(vis)})},{rootMargin:'700px 0px'}).observe(stage);
  }else{vis=true;loadX()}
  rs.addEventListener('click',function(){run++;cur=-1;answered=false;btns.forEach(function(b){b.classList.remove('on');b.setAttribute('aria-pressed','false')});idle();setCap('');if(X)X.reset();if(MOB.matches)closeSheet()});
  stage.addEventListener('pointerdown',function(){hint.classList.add('off')});

  /* ---------- phone ---------- */
  var run=0,cur=-1,answered=false,waveT=null,waveAmp=5;
  function waveStart(){if(waveT)return;waveT=setInterval(function(){bars.forEach(function(b,i){b.style.height=(4+Math.random()*waveAmp*(.55+.45*Math.sin(i*.9+Date.now()/160)))+'px'})},90)}
  function waveStop(){clearInterval(waveT);waveT=null;bars.forEach(function(b){b.style.height='4px'})}
  function setCap(t){if(t){capT.textContent=t;cap.classList.add('on')}else cap.classList.remove('on')}
  function idle(){
    waveStop();dock.classList.remove('listen');vst.textContent='Tap a question to try';
    body.innerHTML='<div class="x3bub hi">Hi, I\u2019m the assistant for this machine. Tap a question and I\u2019ll answer it here.<small>Opened from the QR code on the machine</small></div>';
  }
  function at(r,ms,fn){if(REDUCED){fn();return}setTimeout(function(){if(r===run)fn()},ms)}
  function openSheet(){if(MOB.matches){phone.classList.add('on');
    var y=stage.getBoundingClientRect().top+window.scrollY-64;
    if(window.__lenis)window.__lenis.scrollTo(y,{duration:.9});else window.scrollTo({top:y,behavior:'smooth'})}}
  function closeSheet(){phone.classList.remove('on')}
  function ask(i){
    var d=Q[i],r=++run;cur=i;answered=false;
    btns.forEach(function(b,j){var on=j===i;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
    hint.classList.add('off');setCap('');
    openSheet();
    body.innerHTML='';dock.classList.remove('listen');waveStop();vst.textContent='Tap to speak';
    if(X)X.prep(d.id);else{pend=i;loadX()}
    var me=document.createElement('div');me.className='x3bub me';
    at(r,REDUCED?0:450,function(){
      dock.classList.add('listen');vst.textContent='Listening…';waveAmp=5;waveStart();
      var words=d.q.split(' '),k=0;
      function done(){waveAmp=4;at(r,520,function(){understand(r,d,i)})}
      function next(){
        if(r!==run)return;
        if(k>=words.length){done();return}
        var w=document.createElement('span');w.className='w';w.textContent=(k?' ':'')+words[k];me.appendChild(w);if(!me.parentNode)body.appendChild(me);waveAmp=24;
        var len=words[k].length;k++;REDUCED?next():setTimeout(next,160+Math.random()*120+len*13);
      }
      at(r,650,next);
    });
  }
  function understand(r,d,i){
    dock.classList.remove('listen');vst.textContent='Understanding…';waveStop();
    var th=document.createElement('div');th.className='x3th';th.innerHTML='Checking this machine’s guide <span class="dots"><i></i><i></i><i></i></span>';body.appendChild(th);
    at(r,1000,function(){
      th.remove();
      var a=document.createElement('div');a.className='x3an'+(d.warn?' warn':'');
      a.innerHTML='<span class="chip">'+esc(d.k)+'</span><p class="x3tip">'+esc(d.tip)+'</p>'+(d.steps?'<ol class="x3st'+(failed?' static':'')+'">'+d.steps.map(function(t,j){return '<li><i>'+(j+1)+'</i><span>'+esc(t)+'</span></li>'}).join('')+'</ol>':'')+'<div class="x3src">'+ICO.src+esc(d.src)+'</div>'+
        '<button type="button" class="cta on"><span><b>'+esc(d.cta[0])+'</b><span>'+esc(d.cta[1])+'</span></span><i class="go">'+ICO.go+'</i></button>';
      body.appendChild(a);
      var c=a.querySelector('.cta');c.addEventListener('click',function(){if(c.classList.contains('done'))return;c.classList.add('done');c.querySelector('b').textContent='Done';c.querySelector('span span').textContent='Demo only'});
      vst.textContent='Tap mic to ask again';answered=true;setCap(d.cap);
      if(X)X.play(d.id);
    });
  }
  mic.addEventListener('click',function(){if(cur>=0)ask(cur)});
  nx.addEventListener('click',function(){ask((cur+1+Q.length)%Q.length)});
  cl.addEventListener('click',closeSheet);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSheet()});
  MOB.addEventListener&&MOB.addEventListener('change',function(){closeSheet();if(cur<0)idle()});
  idle();
  window.__x3=function(){return X};
})();

/* ===== smooth scrolling ===== */
(function(){
  if(typeof Lenis==='undefined')return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var l=new Lenis({duration:1.1,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true});
  window.__lenis=l;
  function raf(t){l.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey)return;
    var h=a.getAttribute('href'),t=h==='#'?0:document.querySelector(h);if(t===null)return;
    e.preventDefault();l.scrollTo(t,{duration:1.3});
  });
})();}
