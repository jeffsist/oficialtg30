(() => {
  'use strict';
  const destino = 'https://oficialtg30.com.br/';
  const abrir = document.getElementById('abrir');
  const continuar = document.getElementById('continuar');
  const texto = document.getElementById('abrir-texto');
  const estado = document.getElementById('estado');
  const ajuda = document.getElementById('ajuda');
  const android = /Android/i.test(navigator.userAgent);
  const ios = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const manual = new URLSearchParams(location.search).has('manual');
  let abertura = null;
  let linkExterno = abrir;

  const redirecionamento = window.setTimeout(() => {
    if (!document.hidden) window.location.replace(destino);
  }, 2000);

  const cancelarRedirecionamento = () => window.clearTimeout(redirecionamento);
  for (const evento of ['pointerdown', 'keydown', 'click']) {
    document.addEventListener(evento, cancelarRedirecionamento, { capture: true, once: true });
  }
  window.addEventListener('pagehide', cancelarRedirecionamento, { once: true });

  if (android) {
    const alternativa = new URL(location.href);
    alternativa.searchParams.set('manual', '1');
    alternativa.hash = '';
    // Mantém a resolução do navegador pelo Android, sem fixar Chrome ou Edge.
    abertura = 'intent://oficialtg30.com.br/#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;S.browser_fallback_url=' + encodeURIComponent(alternativa.href) + ';end';
    texto.textContent = 'ABRIR NO NAVEGADOR';
    ajuda.textContent = 'Se aparecer uma confirmação, permita abrir no navegador. Se nada acontecer, toque no botão ou use o menu do aplicativo.';
    estado.textContent = manual ? 'Toque abaixo para solicitar a abertura no navegador.' : 'Tentando abrir o site no seu navegador…';
  } else if (ios) {
    // Esquema experimental do Safari: não representa o navegador padrão do iOS.
    abertura = 'x-safari-https://oficialtg30.com.br/';
    texto.textContent = continuar.textContent;
    continuar.textContent = 'Abrir no Safari';
    linkExterno = continuar;
    ajuda.textContent = 'Se aparecer “Abrir no Safari”, confirme. Se o aplicativo impedir, use o menu dele e procure “Abrir no navegador”, ou copie o link.';
    estado.textContent = manual ? 'Use “Abrir no Safari” no fim da página ou toque em “Clique para continuar”.' : 'Tentando abrir o site no Safari…';
  }

  if (abertura) {
    linkExterno.href = abertura;
    linkExterno.addEventListener('click', () => {
      estado.textContent = 'Se aparecer uma solicitação para abrir o navegador, confirme para continuar.';
    });
    if (!manual) {
      // Uma única tentativa automática. A ação do botão permanece disponível se o aplicativo bloquear.
      try { window.location.assign(abertura); }
      catch { estado.textContent = ios ? 'Use “Abrir no Safari” no fim da página para tentar novamente.' : 'Toque no botão abaixo para tentar abrir o navegador.'; }
    }
  }

  document.getElementById('copiar').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(destino);
      estado.textContent = 'Link copiado! Abra seu navegador e cole na barra de endereço.';
    } catch {
      const campo = document.getElementById('endereco');
      campo.hidden = false;
      campo.focus();
      campo.select();
      estado.textContent = 'Copie o endereço selecionado e cole no seu navegador.';
    }
  });
})();
