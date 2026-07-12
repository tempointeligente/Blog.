/* =====================================================================
   ANUNCIOS-DATA.JS
   Lista de anúncios/publicidade exibidos nas laterais do blog.
   O painel administrativo escreve aqui quando você publica um anúncio.

   Campos de cada anúncio:
   - id      : identificador único, ex: "a001"
   - nome    : nome do anunciante/produto (aparece em negrito)
   - texto   : frase curta descritiva (opcional)
   - link    : URL de destino ao clicar
   - imagem  : em base64 (data:image/jpeg;base64,...) — opcional

   Enquanto não houver anúncios suficientes para preencher todos os
   espaços, o blog mostra "Espaço disponível" nos slots vazios.
   ===================================================================== */

const ANUNCIOS = [];
