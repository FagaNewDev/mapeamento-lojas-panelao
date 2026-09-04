# 🚀 GUIA RÁPIDO: Colocar no GitHub + Deploy

## Pré-requisitos
- Git instalado: https://git-scm.com/download
- Node.js instalado: https://nodejs.org/ (LTS)
- Conta no GitHub: https://github.com

---

## PASSO 1: Preparar a Pasta Localmente

```bash
# Abra Prompt/Terminal aqui
cd caminho/da/pasta/mapeamento-lojas

# Configure seu Git (primeira vez só)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@gmail.com"

# Instale dependências
npm install

# Teste localmente
npm run dev
# Abra http://localhost:5173/ no navegador
# Pressione Ctrl+C para parar
```

---

## PASSO 2: Criar Repositório no GitHub

1. Vá para https://github.com/new
2. Preencha:
   - **Repository name:** `mapeamento-lojas-panelao`
   - **Description:** "App para mapeamento de fotos das lojas"
   - **Public:** ✅ (deixa público)
   - **README:** deixa em branco
3. Clique **"Create repository"**
4. Vai aparecer uma página com comandos - **COPIE A URL** (tipo `https://github.com/seu-usuario/mapeamento-lojas-panelao.git`)

---

## PASSO 3: Enviar para o GitHub

```bash
# Na pasta do projeto, execute:
git add .
git commit -m "Inicial: app mapeamento lojas"
git branch -M main

# AQUI: Cole a URL do passo 2
git remote add origin https://github.com/SEU_USUARIO/mapeamento-lojas-panelao.git

# Enviar
git push -u origin main
```

✅ Pronto! Seu código está no GitHub!

---

## PASSO 4: Fazer Deploy (deixar público na internet)

### Opção 1: GitHub Pages (RECOMENDADO - Mais fácil)

1. No GitHub, vá para seu repositório
2. Clique em **Settings** → **Pages** (na esquerda)
3. Em "Source", escolha:
   - **Deploy from a branch**
4. Em "Branch", escolha:
   - `main` (pasta: `/(root)`)
5. Clique **"Save"**
6. Aguarde 2-5 minutos
7. Sua URL será: `https://seu-usuario.github.io/mapeamento-lojas-panelao/`

✅ Pronto! App está online!

### Opção 2: Vercel (Alternativa, também grátis)

1. Vá para https://vercel.com
2. Clique **"Sign Up"** → **"Continue with GitHub"**
3. Autorize o Vercel
4. Clique **"New Project"**
5. Selecione `mapeamento-lojas-panelao`
6. Clique **"Deploy"**
7. Sua URL será algo como: `https://mapeamento-lojas-panelao.vercel.app`

✅ Pronto! App está online!

---

## PASSO 5: Compartilhar com os Gerentes das Lojas

Envie para cada gerente:
- **Link do app:** https://seu-usuario.github.io/mapeamento-lojas-panelao/
- **Usuário:** `loja1` (ou loja2, loja3, etc)
- **Senha:** (defina uma senha segura em `src/App.jsx`)

---

## 🔄 Como Fazer Atualizações

Sempre que mudar algo no código:

```bash
# 1. Faça as alterações no arquivo
# (exemplo: editar src/App.jsx)

# 2. Salve as mudanças
git add .
git commit -m "Descrição da mudança"
git push

# O GitHub faz o deploy automaticamente em 2-5 minutos!
```

---

## 🔐 Mudar as Senhas Padrão

1. Abra `src/App.jsx`
2. Encontre a seção `CREDENCIAIS`:
```javascript
'loja1': { senha: 'loja1', loja: LOJAS[0] },
'loja2': { senha: 'loja2', loja: LOJAS[1] },
// ...etc
```

3. Mude para senhas seguras:
```javascript
'loja1': { senha: 'bauru-loja1-2024', loja: LOJAS[0] },
'loja2': { senha: 'agudos-loja2-2024', loja: LOJAS[1] },
// ...etc
```

4. Salve e faça upload:
```bash
git add .
git commit -m "Atualizado: senhas das lojas"
git push
```

---

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| "git não encontrado" | Instale: https://git-scm.com/download |
| "npm não encontrado" | Instale Node.js: https://nodejs.org/ |
| App não aparece online | Aguarde 5 min e limpe cache (Ctrl+Shift+Del) |
| Fotos não salvam | Use Chrome/Firefox moderno |
| Erro "git push rejected" | Revise as credenciais do GitHub |

---

## 📞 Próximos Passos

1. ✅ Teste o app localmente (`npm run dev`)
2. ✅ Customize as senhas das lojas
3. ✅ Adicione logo/cores da Panelão em `src/index.css`
4. ✅ Compartilhe a URL com os gerentes
5. ✅ (Opcional) Integre Firebase depois para sincronizar dados

---

**Dúvidas?** Consulte o README.md ou a documentação do Vite.
