(() => {
  const c = STORE_CONFIG, money=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:c.product.currency}).format(n);
  document.querySelectorAll('[data-brand]').forEach(x=>x.textContent=c.brand);
  document.querySelectorAll('[data-price]').forEach(x=>x.textContent=money(c.product.singlePrice));
  document.querySelectorAll('[data-pack]').forEach(x=>x.textContent=money(c.product.packPrice));
  document.querySelectorAll('[data-save]').forEach(x=>x.textContent=money(c.product.singlePrice*2-c.product.packPrice));
  document.querySelectorAll('[data-discount]').forEach(x=>x.textContent=c.campaign.discount+'%');
  document.querySelectorAll('[data-stock]').forEach(x=>x.textContent=c.campaign.stock);
  const end = Date.now()+c.campaign.days*86400000;
  const clock=()=>{let t=Math.max(0,Math.floor((end-Date.now())/1000));let d=Math.floor(t/86400),h=Math.floor(t%86400/3600),m=Math.floor(t%3600/60),s=t%60;document.querySelectorAll('[data-clock]').forEach(x=>x.innerHTML=`<b>${String(d).padStart(2,'0')}</b><i>días</i><b>${String(h).padStart(2,'0')}</b><i>hrs</i><b>${String(m).padStart(2,'0')}</b><i>min</i><b>${String(s).padStart(2,'0')}</b><i>seg</i>`)};clock();setInterval(clock,1000);
  const menu=document.querySelector('[data-menu]');document.querySelector('[data-menu-button]')?.addEventListener('click',()=>menu.classList.toggle('open'));
  document.querySelectorAll('[data-faq]').forEach(x=>x.querySelector('button').addEventListener('click',()=>x.classList.toggle('open')));
})();
