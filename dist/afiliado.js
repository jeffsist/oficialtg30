(() => {
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#comprar-kit-"]');
    if (!anchor) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const kit = anchor.getAttribute('href').replace('#comprar-kit-', '');
    const config = window.TG30_AFILIADO || {};
    const url = config.kits?.[kit] || config.linkPadrao;
    if (url) {
      try {
        const destination = new URL(url);
        if (!['https:', 'http:'].includes(destination.protocol)) throw new Error('invalid');
        window.location.assign(destination.href);
        return;
      } catch {
        alert('O link de compra configurado é inválido.');
        return;
      }
    }
    let dialog = document.querySelector('#afiliado-pendente');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'afiliado-pendente';
      dialog.setAttribute('aria-labelledby', 'afiliado-pendente-titulo');
      dialog.style.cssText = 'max-width:420px;width:calc(100% - 40px);padding:32px;border:1px solid #bb912f;border-radius:18px;background:#26040a;color:#fff;font-family:Inter,sans-serif;line-height:1.6';
      dialog.innerHTML = '<h2 id="afiliado-pendente-titulo" style="font-size:22px;margin:0 0 12px;color:#e9c66e">Compra em preparação</h2><p>O link de compra desta página será disponibilizado em breve.</p><form method="dialog"><button style="margin-top:18px;padding:12px 26px;border:0;border-radius:10px;background:#e9c66e;color:#160206;font-weight:700;cursor:pointer">Fechar</button></form>';
      document.body.appendChild(dialog);
    }
    dialog.showModal();
  }, true);
})();
