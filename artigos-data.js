/* =====================================================================
   ARTIGOS-DATA.JS
   Esta é a "lista" central de artigos do blog. Todas as páginas
   (blog.html, todos-artigos.html, artigo.html) leem esse mesmo arquivo.

   Publicar um artigo novo = adicionar um objeto aqui dentro.
   O painel administrativo (quando pronto) vai escrever aqui sozinho,
   sem ninguém precisar editar HTML.

   Campos de cada artigo:
   - id        : identificador único, ex: "001", "002"
   - titulo    : título do artigo (texto real, aparece no card e no <h1>)
   - categoria : ex: "Produtividade", "Ferramentas", "Hábitos"
   - numero    : ex: "#001" (rótulo de edição)
   - dataISO   : data no formato AAAA-MM-DD (usada pra ordenar e filtrar)
   - resumo    : 2-4 frases reais sobre o artigo (aparece no card e
                 vira a meta description da página — é o que ajuda
                 o Google a entender do que se trata)
   - tema      : cor de fundo da página do artigo — uma de:
                 "creme" | "sage" | "menta" | "areia"
   - imagem    : a arte do Canva, em base64 (data:image/jpeg;base64,...)
   ===================================================================== */

const ARTIGOS = [];
