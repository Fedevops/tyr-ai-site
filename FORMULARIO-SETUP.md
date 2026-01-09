# Configuração do Formulário de Contato

O formulário de contato está configurado para usar **Formspree**, um serviço gratuito que permite receber formulários sem precisar de backend próprio.

## Como Configurar

### Opção 1: Formspree (Recomendado - Gratuito)

1. Acesse [https://formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o **Form ID** gerado (exemplo: `xrgkjqyz`)
5. No arquivo `index.html`, encontre a linha:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Substitua `YOUR_FORM_ID` pelo ID do seu formulário:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xrgkjqyz" method="POST">
   ```

### Opção 2: Outros Serviços

Você pode usar outros serviços similares:

- **EmailJS**: [https://www.emailjs.com](https://www.emailjs.com)
- **Getform**: [https://getform.io](https://getform.io)
- **Netlify Forms**: Se hospedar no Netlify
- **Backend próprio**: Modificar o JavaScript para enviar para seu endpoint

### Opção 3: Backend Próprio

Se você tem um backend próprio, modifique o JavaScript na seção do formulário:

```javascript
const response = await fetch('SEU_ENDPOINT_AQUI', {
    method: 'POST',
    body: JSON.stringify({
        nome: formData.get('nome'),
        email: formData.get('email'),
        // ... outros campos
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
```

## Campos do Formulário

O formulário coleta as seguintes informações:

- **Nome Completo** (obrigatório)
- **E-mail Corporativo** (obrigatório)
- **Telefone** (obrigatório)
- **Empresa** (obrigatório)
- **Cargo** (obrigatório)
- **Tamanho do Time Comercial** (obrigatório)
- **Mensagem** (opcional)

## Teste do Formulário

Após configurar, teste o formulário:

1. Preencha todos os campos obrigatórios
2. Clique em "Enviar Solicitação"
3. Verifique se recebeu o e-mail de confirmação
4. Verifique se a mensagem de sucesso aparece na página

## Personalização

Você pode personalizar:

- Campos adicionais: Adicione novos campos no HTML
- Validação: Adicione validação customizada no JavaScript
- Mensagens: Modifique as mensagens de sucesso/erro
- Redirecionamento: Adicione redirecionamento após envio bem-sucedido

## Notas Importantes

- O Formspree gratuito tem limite de 50 envios/mês
- Para mais envios, considere o plano pago
- Sempre teste o formulário antes de colocar em produção
- Configure um e-mail de destino no Formspree para receber os formulários


