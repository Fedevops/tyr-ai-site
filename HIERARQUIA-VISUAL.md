# Hierarquia Visual e Diretrizes de Design

## Paleta de Cores

- **Primária (Azul)**: #0066CC - Usada em CTAs, destaques e elementos principais
- **Primária Escura**: #0052A3 - Gradientes e variações do azul principal
- **Secundária (Preto)**: #1A1A1A - Títulos e textos principais
- **Texto**: #333333 - Cor padrão de texto
- **Texto Claro**: #666666 - Textos secundários e descrições
- **Destaque (Verde)**: #00A86B - Números e métricas de resultados
- **Fundo Claro**: #F8F9FA - Seções alternadas
- **Borda**: #E0E0E0 - Separadores e bordas sutis

## Tipografia

- **Fonte**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Hierarquia de Tamanhos**:
  - Hero Headline: 48px (mobile: 32px)
  - Hero Subheadline: 22px (mobile: 18px)
  - Títulos de Seção: 36px (mobile: 28px)
  - Subtítulos de Seção: 20px
  - Títulos de Cards: 20-22px
  - Texto Corpo: 16px
  - Texto Secundário: 14px

## Hierarquia Visual por Seção

### 1. Hero Section
- **Background**: Gradiente azul (primária → primária escura)
- **Cor do texto**: Branco
- **Destaque**: CTA principal em branco com sombra
- **Hierarquia**: Headline > Subheadline > CTAs

### 2. Problema
- **Background**: Branco
- **Cards**: Fundo branco, borda esquerda vermelha (#E63946) para indicar dor
- **Sombra**: Sutil (0 2px 8px rgba(0,0,0,0.08))
- **Hierarquia**: Título > Subtítulo > Grid de problemas

### 3. Solução
- **Background**: Cinza claro (#F8F9FA) - alternância visual
- **Destaque**: Box com borda azul para mensagem principal
- **Hierarquia**: Título > Subtítulo > Texto explicativo > Box destacado

### 4. Framework (A.R.C.O.)
- **Background**: Branco
- **Cards**: Números circulares azuis, hover com elevação
- **Hierarquia**: Título > Subtítulo > Grid de 4 etapas numeradas

### 5. Entregáveis
- **Background**: Cinza claro - alternância visual
- **Cards**: Borda superior verde (#00A86B) indicando valor positivo
- **Hierarquia**: Título > Subtítulo > Grid de entregáveis

### 6. Resultados
- **Background**: Branco
- **Destaque**: Números grandes em verde (#00A86B)
- **Hierarquia**: Número > Título > Descrição

### 7. Diagnóstico
- **Background**: Cinza claro - alternância visual
- **Box Central**: Card branco com sombra mais pronunciada
- **Hierarquia**: Título > Subtítulo > Box com lista de entregas

### 8. CTA Final
- **Background**: Gradiente azul (igual ao Hero)
- **Cor do texto**: Branco
- **Destaque**: CTA principal em branco
- **Hierarquia**: Título > Texto > CTA

### 9. FAQ
- **Background**: Branco
- **Cards**: Fundo branco, expansíveis ao clicar
- **Hierarquia**: Título > Lista de perguntas/respostas

## Elementos de Conversão

### CTAs (Call-to-Actions)
- **Cor**: Branco sobre fundo azul, azul sobre fundo branco
- **Tamanho**: 18px, padding 18px 40px
- **Efeito hover**: Elevação (translateY -2px) e sombra aumentada
- **Posicionamento**: Hero (centro), CTA Final (centro)

### Cards e Boxes
- **Sombra padrão**: 0 2px 8px rgba(0,0,0,0.08)
- **Sombra destacada**: 0 4px 16px rgba(0,0,0,0.1)
- **Border-radius**: 8px (padrão), 12px (destaques)
- **Hover**: Elevação sutil quando aplicável

### Espaçamento
- **Padding de seções**: 80px vertical
- **Padding de containers**: 0 24px horizontal
- **Gap entre cards**: 24-32px
- **Margem entre elementos**: Múltiplos de 8px

## Responsividade

### Breakpoint: 768px
- Headlines reduzem de 48px para 32px
- CTAs secundários ficam em bloco abaixo do principal
- Grids se adaptam para 1 coluna em telas pequenas
- Padding reduzido para 32px em mobile

## Princípios de UX Aplicados

1. **Contraste**: Texto escuro sobre fundo claro, texto claro sobre fundo escuro
2. **Espaçamento**: Respiração adequada entre elementos
3. **Hierarquia**: Tamanhos de fonte e cores guiam o olhar
4. **Consistência**: Mesmos padrões visuais em toda a página
5. **Clareza**: CTAs óbvios e mensagens diretas
6. **Credibilidade**: Design limpo e profissional, sem exageros


