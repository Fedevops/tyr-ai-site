// Carrega posts do blog dinamicamente
async function loadBlogPosts() {
    try {
        const response = await fetch('blog-posts.json');
        const data = await response.json();
        const blogGrid = document.querySelector('.blog-grid');
        
        if (!blogGrid) return;
        
        // Ordena posts por data (mais recentes primeiro)
        const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        blogGrid.innerHTML = '';
        
        sortedPosts.forEach(post => {
            const date = new Date(post.date);
            const formattedDate = date.toLocaleDateString('pt-BR', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
            });
            
            const article = document.createElement('article');
            article.className = 'blog-card';
            article.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="blog-image">
                <div class="blog-content">
                    <span class="blog-tag">${post.category}</span>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} min</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="blog/${post.slug}.html" class="blog-link">Ler mais <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            blogGrid.appendChild(article);
        });
    } catch (error) {
        console.error('Erro ao carregar posts do blog:', error);
    }
}

// Carrega posts quando a página estiver pronta
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBlogPosts);
} else {
    loadBlogPosts();
}

