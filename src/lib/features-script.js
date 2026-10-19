// @ts-nocheck
export function initFeatures() {
(function(){var links=[].slice.call(document.querySelectorAll('#side a')),secs=links.map(function(a){return document.getElementById(a.getAttribute('href').slice(1))});
function set(i){links.forEach(function(a,j){a.classList.toggle('on',i===j)});var a=links[i],s=document.getElementById('side');if(a&&s&&s.scrollWidth>s.clientWidth){s.scrollTo({left:a.offsetLeft-24,behavior:'smooth'})}}
function f(){var y=window.innerHeight*.3,c=0;secs.forEach(function(s,i){if(s.getBoundingClientRect().top<=y)c=i});set(c)}
var t;window.addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;f()})},{passive:true});f()})();
/* always open this page at the top, even when the viewer keeps the previous page's scroll */
(function(){if(location.hash)return;var done=false;
function top(){try{window.scrollTo({top:0,left:0,behavior:'instant'})}catch(e){window.scrollTo(0,0)}
  var h=document.querySelector('.top');if(h&&h.scrollIntoView&&!done){try{h.scrollIntoView({block:'start',behavior:'instant'})}catch(e){h.scrollIntoView(true)}}}
top();addEventListener('DOMContentLoaded',top);addEventListener('load',function(){top();setTimeout(function(){top();done=true},120)});
addEventListener('pageshow',function(e){if(e.persisted)top()});})();}
