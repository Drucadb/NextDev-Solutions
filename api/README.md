# API da NextDev Solutions

A pasta contém funções serverless compatíveis com a Vercel. `health.ts` expõe uma verificação simples de disponibilidade. `contact.ts` aceita apenas `POST`, exige uma mensagem entre 10 e 2.000 caracteres, aplica cabeçalhos defensivos e possui um rate limit básico por endereço durante a vida da instância.

> Esse rate limit é uma barreira de abuso simples, não uma solução anti-DDoS. Ataques volumétricos devem ser filtrados na camada de infraestrutura. Depois de publicar, ative o Firewall/WAF da Vercel, mantenha os domínios permitidos corretos e configure regras de rate limiting no painel da Vercel.

O endpoint de contato está preparado para receber um JSON no formato `{ "message": "..." }`. Ele não envia e-mail sozinho; para produção, conecte-o a um provedor de e-mail ou formulário com segredo no ambiente da Vercel.
