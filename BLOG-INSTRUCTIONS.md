# Como Adicionar Novos Posts no Blog

A seção de blog está localizada no arquivo `index.html` e é fácil de personalizar e adicionar novos posts.

## Estrutura de um Post

Cada post do blog segue esta estrutura HTML:

```html
<article class="blog-card">
    <img src="URL_DA_IMAGEM" alt="Descrição da imagem" class="blog-image">
    <div class="blog-content">
        <span class="blog-tag">Categoria</span>
        <div class="blog-meta">
            <span><i class="far fa-calendar"></i> Data</span>
            <span><i class="far fa-clock"></i> Tempo de leitura</span>
        </div>
        <h3>Título do Post</h3>
        <p>Descrição breve do conteúdo...</p>
        <a href="URL_DO_POST" class="blog-link">Ler mais <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

## Como Adicionar um Novo Post

1. **Localize a seção de blog** no arquivo `index.html`
   - Procure por `<!-- Blog Section -->`
   - A seção está dentro de `<div class="blog-grid">`

2. **Adicione o novo post** antes do fechamento de `</div>` do blog-grid

3. **Preencha os campos**:
   - **Imagem**: Use uma URL de imagem (Unsplash, seu próprio servidor, etc.)
   - **Tag**: Categoria do post (ex: Automação, IA, SDR, ROI)
   - **Data**: Formato "DD MMM AAAA" (ex: 20 Jan 2024)
   - **Tempo de leitura**: Estimativa em minutos
   - **Título**: Título atrativo e claro
   - **Descrição**: Resumo de 1-2 linhas
   - **Link**: URL para o post completo (pode ser página interna ou externa)

## Exemplo de Novo Post

```html
<article class="blog-card">
    <img src="https://images.unsplash.com/photo-XXXXX?w=600&h=300&fit=crop" alt="Título do post" class="blog-image">
    <div class="blog-content">
        <span class="blog-tag">Automação</span>
        <div class="blog-meta">
            <span><i class="far fa-calendar"></i> 25 Jan 2024</span>
            <span><i class="far fa-clock"></i> 5 min</span>
        </div>
        <h3>Seu Título Aqui</h3>
        <p>Sua descrição breve aqui. Seja objetivo e atraente.</p>
        <a href="https://seu-site.com/post" class="blog-link">Ler mais <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

## Categorias Disponíveis (Tags)

Você pode usar estas tags ou criar novas:
- Automação
- Inteligência Artificial
- SDR
- ROI
- Metodologia
- Integração
- Vendas B2B
- CRM

## Imagens

### Opções de Imagens:

1. **Unsplash** (gratuito):
   - Acesse [unsplash.com](https://unsplash.com)
   - Busque imagens relacionadas
   - Use a URL direta: `https://images.unsplash.com/photo-XXXXX?w=600&h=300&fit=crop`

2. **Suas próprias imagens**:
   - Coloque as imagens na pasta do projeto
   - Use caminho relativo: `images/post-1.jpg`

3. **Outros serviços**:
   - Imgur, Cloudinary, etc.

### Tamanho Recomendado:
- **Largura**: 600px
- **Altura**: 300px
- **Formato**: JPG ou PNG
- **Aspect Ratio**: 2:1

## Ordenação dos Posts

Os posts são exibidos na ordem em que aparecem no HTML. Para mostrar os mais recentes primeiro:
- Adicione novos posts no **início** do `blog-grid`
- Ou reorganize os posts existentes

## Links dos Posts

Você tem três opções para os links:

1. **Página interna**: `href="blog/post-1.html"`
2. **Página externa**: `href="https://seu-blog.com/post"`
3. **Modal/expansão**: Adicione JavaScript para expandir o conteúdo

## Personalização

### Adicionar mais colunas:
No CSS, ajuste `grid-template-columns`:
```css
.blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

### Mudar layout:
- 2 colunas: `minmax(400px, 1fr)`
- 3 colunas: `minmax(300px, 1fr)`
- 4 colunas: `minmax(250px, 1fr)`

## Dicas

- **Mantenha consistência**: Use o mesmo formato para todos os posts
- **Imagens relevantes**: Escolha imagens que representem o conteúdo
- **Títulos claros**: Seja específico e atraente
- **Descrições curtas**: 1-2 linhas são suficientes
- **Atualize regularmente**: Mantenha o blog atualizado com conteúdo fresco

## Próximos Passos Avançados

Se quiser expandir o blog:

1. **Criar páginas individuais** para cada post
2. **Adicionar sistema de categorias** com filtros
3. **Implementar busca** no blog
4. **Adicionar comentários** (Disqus, etc.)
5. **Integrar com CMS** (WordPress, Contentful, etc.)

