# oficialtg30

Landing page de afiliado TG30. Página estática em HTML, CSS e JavaScript, com imagens locais e layout responsivo.

## Executar localmente

Com Python instalado, execute na pasta do projeto:

```sh
python -m http.server 4187 --directory dist
```

Abra http://localhost:4187/.

## Publicar

Configure sua hospedagem estática para servir a pasta `dist` na raiz do domínio. Não é necessária uma etapa de build. Fontes são carregadas pelo Google Fonts.

Página publicada: https://www.oficialtg30.com.br/

A configuração `vercel.json` publica o conteúdo de `dist` na raiz do domínio, sem etapa de build.

Na Netlify, importe este repositório na branch `main`. O arquivo `netlify.toml` define a publicação de `dist`, sem comando de build, e mantém as rotas `/01` e `/02`.

Projeto Netlify: https://app.netlify.com/projects/oficialtg30/overview

Endereço da hospedagem: https://oficialtg30.netlify.app/

O repositório está conectado à Netlify para publicar atualizações da branch `main`. `dist/_redirects` também permite manter as rotas em um envio manual dos arquivos.

## Links e contatos

- Os links de compra dos kits de 1, 2, 3 e 6 frascos ficam em `dist/afiliado-config.js`.
- O botão de compra do topo e o da barra móvel levam ao cartão de 1 frasco.
- WhatsApp: (81) 99325-7338.
- Preços exibidos: R$ 149,90, R$ 249,90, R$ 349,90 e R$ 649,90.
- Sem campanha Black November, cupom NOVEMBRO ou Instagram nos contatos.

Os arquivos JavaScript em `dist/assets` são bundles compilados da página de referência. Os materiais e informações do produto foram reproduzidos de https://tg30.com.br/ e permanecem sujeitos aos direitos dos respectivos titulares. Os links de privacidade e devolução apontam para o domínio do produtor.
