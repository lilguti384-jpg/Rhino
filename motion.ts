// RHINO V2 — movimiento del ZIP original. Inicialización tras montar React.
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const GRIDS='.palette,.symbol-grid,.real-mocks,.post-grid,.misuse,.traits,.mini-variants';
const GRID_KIDS=GRIDS.split(',').map(g=>g+'>*').join(',');
function words(el:Element){
 const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const t:Text[]=[];
 while(w.nextNode())t.push(w.currentNode as Text);
 let n=0;t.forEach(node=>{const parts=(node.textContent||'').split(/(\s+)/);const f=document.createDocumentFragment();parts.forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){f.append(p);return}const o=document.createElement('s-w');const i=document.createElement('s-i');i.textContent=p;i.style.transitionDelay=n++*55+'ms';o.append(i);f.append(o)});node.replaceWith(f)});el.setAttribute('data-words','')
}
function tag(){
 document.querySelectorAll('.hero h1,.section h2').forEach(h=>{if(!h.hasAttribute('data-words')&&!h.hasAttribute('data-rv')){words(h);h.setAttribute('data-rv','')}});
 document.querySelectorAll('.section>*:not('+GRIDS+'),.construction,.logo-stage').forEach(e=>{if(!e.hasAttribute('data-rv')&&!e.matches('h2')){e.setAttribute('data-rv','');e.classList.add('rv')}});
 document.querySelectorAll(GRID_KIDS).forEach(e=>{if(!e.hasAttribute('data-rv')){const i=[...(e.parentElement?.children||[])].indexOf(e);(e as HTMLElement).style.setProperty('--d',Math.min(i,8)*70+'ms');e.setAttribute('data-rv','');e.classList.add('rv')}});
 io&&document.querySelectorAll('[data-rv]:not([data-obs])').forEach(e=>{e.setAttribute('data-obs','');io!.observe(e)});
}
let io:IntersectionObserver|null=null;
function start(){
 const root=document.getElementById('root');
 if(!root||!root.querySelector('.hero'))return;
 if(reduce){document.documentElement.classList.add('reduced');return}
 if(!('IntersectionObserver' in window))return;
 document.documentElement.classList.add('js-motion');
 io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io!.unobserve(e.target)}}),{threshold:.05,rootMargin:'0px 0px 0px 0px'});
 tag();let t=0;new MutationObserver(()=>{clearTimeout(t);t=window.setTimeout(tag,120)}).observe(root,{childList:true,subtree:true});
 const bar=document.createElement('div');bar.className='progress';document.body.append(bar);
 const hero=document.querySelector<HTMLElement>('.hero');let ticking=false;
 const frame=()=>{ticking=false;const h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')';if(hero)hero.style.setProperty('--sy',String(Math.min(scrollY,900)));if(scrollY+innerHeight>=document.documentElement.scrollHeight-60)document.querySelectorAll('[data-rv]:not(.in)').forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*1.2){e.classList.add('in');io!.unobserve(e)}})};
 addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(frame)}},{passive:true});frame();
 if(!fine)return;
 hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',String((e.clientX-r.left)/r.width-.5));hero.style.setProperty('--my',String((e.clientY-r.top)/r.height-.5))});
 document.addEventListener('pointermove',e=>{const b=(e.target as Element).closest?.('.top-download,.round-link,.download-actions>a,.zip-download,.symbol-card a') as HTMLElement|null;document.querySelectorAll<HTMLElement>('.mag-on').forEach(x=>{if(x!==b){x.style.transform='';x.classList.remove('mag-on')}});if(!b)return;const r=b.getBoundingClientRect();b.classList.add('mag-on');b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.28)+'px)'});
}
function ready(){
 const root=document.getElementById('root');if(!root)return;
 if(root.querySelector('.hero')){start();return}
 const observer=new MutationObserver(()=>{if(root.querySelector('.hero')){observer.disconnect();start()}});
 observer.observe(root,{childList:true,subtree:true});
}
if(document.readyState==='loading')addEventListener('DOMContentLoaded',ready,{once:true});else ready();
