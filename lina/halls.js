/* Halls quick menu: jump to any hall with one tap */
(function(){
const pass=document.getElementById('passBtn');if(!pass||document.getElementById('hallsBtn'))return;
const st=document.createElement('style');st.textContent=`#hallsMenu{position:fixed;top:54px;right:10px;z-index:40;background:#fff8ea;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.4);padding:10px;display:none;min-width:250px}
#hallsMenu.on{display:block}#hallsMenu button{display:block;width:100%;text-align:left;border:0;border-radius:12px;background:#fff;box-shadow:0 3px 0 #e3c79c;margin:6px 0;padding:10px 12px;font:inherit;font-weight:800;font-size:16px;color:#2f2114;cursor:pointer}
#hallsMenu small{display:block;font-weight:600;color:#7a5a3a;font-size:13px}`;document.head.appendChild(st);
const b=document.createElement('button');b.className='tb';b.id='hallsBtn';b.innerHTML='🚪 Halls';b.style.background='#f2a71b';b.style.color='#2f2114';pass.parentNode.insertBefore(b,pass);
const m=document.createElement('div');m.id='hallsMenu';document.body.appendChild(m);
const build=()=>{const H=(window.APP||{}).HALLS||{};m.innerHTML=`<button data-n="0">🏛️ Lobby</button>`+Object.keys(H).map(n=>`<button data-n="${n}">${H[n].icon||''} ${H[n].sub||('Hall '+n)}<small>${H[n].title||''}</small></button>`).join('');
  m.querySelectorAll('button').forEach(x=>x.onclick=()=>{m.classList.remove('on');try{(window.APP||{}).SFX.click()}catch(e){}document.querySelectorAll('.ov.on').forEach(o=>{if(o.id!=='intro')o.classList.remove('on')});window.APP3&&window.APP3.goHall(+x.dataset.n)})};
b.onclick=e=>{e.stopPropagation();build();m.classList.toggle('on')};
document.addEventListener('click',e=>{if(!m.contains(e.target)&&e.target!==b)m.classList.remove('on')});
})();
