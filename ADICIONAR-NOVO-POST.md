# Como Adicionar um Novo Post no Blog

## Passo 1: Criar o Artigo HTML

Crie um novo arquivo HTML na pasta `blog/` com o nome do slug (ex: `meu-novo-artigo.html`).

Use como base um dos artigos existentes em `blog/`.

## Passo 2: Adicionar ao blog-posts.json

Abra `blog-posts.json` e adicione um novo objeto no array `posts`:

```json
{
  "id": "slug-do-artigo",
  "title": "Título do Artigo",
  "slug": "slug-do-artigo",
  "category": "Categoria",
  "date": "2024-01-20",
  "readTime": 5,
  "image": "URL_DA_IMAGEM",
  "excerpt": "Resumo breve do artigo em 1-2 linhas.",
  "content": "blog/slug-do-artigo.html"
}
```

## Passo 3: Atualizar o Sitemap

Adicione a URL do novo artigo em `sitemap.xml`:

```xml
<url>
  <loc>https://tyr.com.br/blog/slug-do-artigo</loc>
  <lastmod>2024-01-20</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Estrutura do Artigo HTML

Cada artigo deve ter:
- Meta tags SEO completas
- Open Graph tags
- Link canonical
- Estrutura semântica HTML5
- Link para voltar ao site
- CTA para agendar diagnóstico

## Categorias Disponíveis

- Automação
- Inteligência Artificial
- Metodologia
- Integração
- SDR
- ROI
- Vendas B2B
- CRM

## Dicas

- Use imagens de alta qualidade (mínimo 1200x600px)
- Mantenha o tempo de leitura realista
- Inclua dados e estatísticas quando possível
- Sempre termine com um CTA para agendar diagnóstico
- Use palavras-chave relevantes naturalmente no texto

