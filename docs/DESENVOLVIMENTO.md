# Desenvolvimento do portfólio

Este repositório tem duas funções: `README.md` é o perfil do GitHub e
`index.html` é o site, baseado no antigo `portifolio.html`.

## Estrutura

- `index.html`: conteúdo da página principal.
- `assets/css/site.css`: estilos responsivos.
- `assets/js/site.js`: ano do rodapé.
- `portifolio.html`: redirecionamento para a página principal, para preservar o endereço anterior.
- `cv.html`: currículo existente, acessível pelos botões do site.
- `robots.txt`, `sitemap.xml`, `llms.txt`: metadados existentes de descoberta.
- `docs/`: documentação técnica, separada do README de perfil.

Não há dependências nem etapa de build. Para visualizar localmente, na raiz:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8765`. Em uma VPS, utilize encaminhamento SSH da porta
local, escolhendo uma porta livre. Encerre o servidor com Ctrl+C.

## Pendências de conteúdo e publicação

- Os cards de Amanuense e EstudeiOAB usam os repositórios informados e a
  indicação “Demo sob consulta”, sem links vazios.
- Revisar diferenças entre o texto novo, o currículo, o README e `llms.txt`.
  A reorganização preserva os textos fornecidos.
- A página principal anterior continua recuperável pelo histórico Git.

## Prévia na VPS

O container `victordg-portfolio` foi iniciado com `docker compose up -d` a
partir deste clone. Ele usa a rede externa `vps-proxy`, sem publicar portas.
Somente arquivos públicos selecionados são montados; o diretório Git não é
servido. O endpoint `/cv` também funciona no container.

O domínio público `https://victordg.dev.br` serve o portfólio por meio do
proxy compartilhado. Alterações da interface são aplicadas somente ao
container deste projeto.

Os HTMLs usam mounts de arquivo individual: após edições que substituam o inode,
execute `docker compose up -d --force-recreate portfolio` neste clone para
atualizar somente o container do portfólio.

## Interface e compartilhamento

- Âncoras respeitam o header fixo: 90px no desktop e 132px no celular.
- A navegação permanece disponível no mobile e funciona sem JavaScript.
- Engineering notes usam trechos reais do reconciliador do Demo Lab e da
  unit systemd. Não há payloads ou logs sintéticos.
- O diagrama SVG nativo representa REST/HTTPS, HTTP interno e persistência
  pela API. No mobile, o desenho tem rolagem horizontal e descrição textual.
- Open Graph e Twitter usam `assets/images/social-preview.png` (1200 × 630).
  O original editável está em `docs/social-preview.html`; renderizar em viewport
  1200 × 630 e escala 1 para atualizar o PNG.
- Layout, alinhamento e âncoras verificados em Chromium nas larguras de
  320, 375, 768, 1024 e 1440px, sem overflow horizontal ou erros de JavaScript.

## Artefatos das Engineering Notes

Consultados em 20/09/2026, em leitura apenas:

- `invariant-demolab-firewall.sh`: função `ensure_docker_user_rule` e suas
  duas chamadas, extraídas literalmente do código do Demo Lab.
  Último commit localizado para o arquivo: `3cad2a0`.
- `invariant-demolab-firewall.service`: conteúdo da unit instalada no host.
- A recorrência a cada minuto foi confirmada na entrada de cron do Demo Lab;
  a unit é oneshot para boot, não um timer de reconciliação.

Os blocos são recortes para explicar decisões, não um instalador de firewall.
As variáveis, funções auxiliares e regras completas pertencem ao script original.
