# 📷 Mapeamento de Lojas - Panelão Supermercados

Web app para centralizar fotos das categorias de bebidas de todas as lojas, com sistema de expiração de 4 meses.

## ✨ Funcionalidades

- ✅ **Login por loja** - cada gerente acessa só sua loja
- ✅ **Admin dashboard** - você vê todas as lojas e categorias
- ✅ **Upload de fotos** - 14 categorias por loja
- ✅ **Expiração automática** - avisa quando a foto vence (4 meses)
- ✅ **Histórico** - sempre salva a foto mais recente
- ✅ **Responsivo** - funciona em mobile também

## 🛠️ PASSO 1: Preparar no seu PC

### 1.1 Instalar Node.js
- Acesse: https://nodejs.org/
- Baixe a versão "LTS" (recomendado)
- Instale e reinicie seu PC

### 1.2 Verificar a instalação
Abra o Prompt de Comando e digite:
```bash
node --version
npm --version
```

Deve aparecer números de versão. Se apareceu, tá ok!

## 📦 PASSO 2: Clonar e Preparar o Projeto

### 2.1 Abrir o Prompt e navegar para uma pasta
```bash
# Exemplo: você vai criar em C:\Meus Projetos
cd "C:\Meus Projetos"
```

### 2.2 Clonar este repositório (depois que estiver no GitHub)
```bash
git clone https://github.com/SEU_USUARIO/mapeamento-lojas-panelao.git
cd mapeamento-lojas-panelao
```

### 2.3 Instalar dependências
```bash
npm install
```
Vai demorar um pouco... Deixa rodar.

## 🔥 PASSO 3: Configurar Firebase (Opcional, mas Recomendado)

### ⚠️ POR ENQUANTO, você pode usar sem Firebase
O app já funciona totalmente só salvando no navegador (`localStorage`).

### Depois (quando quiser sincronizar em múltiplos dispositivos):

1. Acesse: https://console.firebase.google.com
2. Clique "Adicionar projeto" → escolha um nome
3. Vá em "Build" → "Authentication" → Habilite "Email/Senha"
4. Vá em "Build" → "Firestore Database" → Crie um banco
5. Vá em "Build" → "Storage" → Crie um storage
6. Copie suas credenciais em "Configurações do Projeto"
7. Abra `src/firebase.js` e preencha com seus dados:

```javascript
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## ▶️ PASSO 4: Testar Localmente

No Prompt, na pasta do projeto:
```bash
npm run dev
```

Vai aparecer algo como:
```
Local:   http://localhost:5173/
```

Abra no navegador. Pronto!

### Credenciais de Teste:
- **Admin**: usuario `admin`, senha `admin123`
- **Loja 1**: usuario `loja1`, senha `loja1`
- **Loja 2**: usuario `loja2`, senha `loja2`
- (e assim por diante até Loja 13)

Edite as senhas depois no arquivo `src/App.jsx`.

## 🚀 PASSO 5: Colocar no GitHub

### 5.1 Criar repositório no GitHub
1. Acesse https://github.com/new
2. Nome: `mapeamento-lojas-panelao`
3. Descrição: "App para mapeamento de fotos das lojas Panelão"
4. Deixa "Public" (assim qualquer um pode acessar)
5. Clique "Create repository"

### 5.2 Fazer push (enviar) para o GitHub
No Prompt, na pasta do projeto:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

git add .
git commit -m "Inicial: app de mapeamento de lojas"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/mapeamento-lojas-panelao.git
git push -u origin main
```

Pronto! Seu código está no GitHub.

## 🌐 PASSO 6: Fazer Deploy (Deixar Público na Internet)

### Opção A: GitHub Pages (Mais fácil, 100% grátis)

1. No GitHub, vá para "Settings" → "Pages"
2. Em "Build and deployment", escolha:
   - Source: `GitHub Actions`
   - Framework: `Vite`
3. Clique em "Configure"
4. Vai aparecer um arquivo `.github/workflows/deploy.yml`
5. Clique "Commit changes"

Pronto! Em poucos minutos, seu app estará em:
```
https://seu-usuario.github.io/mapeamento-lojas-panelao/
```

### Opção B: Vercel (Alternativa, também grátis)

1. Acesse https://vercel.com
2. Clique "Sign up" → "Continue with GitHub"
3. Autorize o Vercel
4. Clique "New Project" → selecione seu repositório
5. Clique "Deploy"

Seu app estará em uma URL tipo:
```
https://mapeamento-lojas-panelao.vercel.app
```

## 🔐 Segurança e Credenciais

### ⚠️ IMPORTANTE:
- **NÃO** coloque seu Firebase `apiKey` direto no código se o projeto for privado
- Se for público, use as regras de segurança do Firebase
- Mude as senhas padrão do arquivo `src/App.jsx`

Para cada loja, crie uma senha única:
```javascript
// Em src/App.jsx, encontre:
'loja1': { senha: 'loja1', loja: LOJAS[0] },
// Mude para:
'loja1': { senha: 'senha-super-secreta-loja1', loja: LOJAS[0] },
```

## 📱 Usar no Celular

1. Acesse: https://seu-usuario.github.io/mapeamento-lojas-panelao/
2. Login com a senha da loja
3. Clique nos ícones 📸 para tirar foto direto do celular
4. A foto é salva automaticamente

## 🐛 Troubleshooting

### "npm: comando não encontrado"
- Node.js não está instalado. Instale novamente.

### "Erro ao fazer git push"
- Verifique se você tem permissão no repositório
- Se não sabe a senha, use: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

### Fotos não estão salvando
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Use um navegador moderno (Chrome, Firefox, Safari, Edge)

## 📚 Próximos Passos

1. ✅ Customize as senhas
2. ✅ Adicione logos/cores da Panelão
3. ✅ (Opcional) Integre com Firebase para sincronizar dados
4. ✅ Distribua as URLs e credenciais para os gerentes

## 📧 Suporte

Problemas? Crie uma "issue" no GitHub ou consulte a documentação do Vite/React.

---

**Criado com ❤️ para Panelão Supermercados**
