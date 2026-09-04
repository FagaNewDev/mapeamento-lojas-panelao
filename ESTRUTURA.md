# 📂 Estrutura do Projeto

```
mapeamento-lojas-panelao/
│
├── 📄 package.json                  ← Dependências (React, Firebase, etc)
├── 📄 vite.config.js                ← Config do Vite
├── 📄 index.html                    ← Página HTML principal
├── 📄 .gitignore                    ← Arquivos a ignorar no Git
│
├── 📁 src/
│   ├── 📄 main.jsx                  ← Entry point
│   ├── 📄 App.jsx                   ← COMPONENTE PRINCIPAL (tudo está aqui!)
│   ├── 📄 firebase.js               ← Config Firebase (opcional)
│   └── 📄 index.css                 ← Estilos CSS
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml            ← Deploy automático GitHub Pages
│
├── 📄 README.md                     ← Guia completo
├── 📄 GITHUB-SETUP.md              ← Guia rápido GitHub (LEIA PRIMEIRO!)
├── 📄 CUSTOMIZAR.md                ← Como adicionar logo, cores, etc
└── 📄 ESTRUTURA.md                 ← Este arquivo

```

---

## 🎯 O QUE CADA ARQUIVO FAZ:

### **App.jsx** (O CORAÇÃO!)
- ✅ Login com usuário/senha por loja
- ✅ Admin consegue ver todas as 13 lojas
- ✅ Cada loja só vê a sua tela de upload
- ✅ 14 categorias de bebidas
- ✅ Upload de fotos
- ✅ Controle de expiração (4 meses)
- ✅ Salva tudo no localStorage (navegador)

### **index.css** (Visual)
- ✅ Modo responsivo (mobile + desktop)
- ✅ Cores roxa/azul bonita
- ✅ Dashboard organizado
- ✅ Cards por loja
- ✅ Indicadores visuais (✅ OK, ⚠️ Alerta, ❌ Expirado)

### **firebase.js** (Opcional, para depois)
- ✅ Config pronta para Firebase
- ✅ Permite sincronizar dados na nuvem
- ✅ Sem isso, tudo funciona offline no navegador

### **.github/workflows/deploy.yml** (Deploy Automático)
- ✅ Faz build automaticamente
- ✅ Coloca online no GitHub Pages
- ✅ Toda vez que você faz `git push`, ele atualiza sozinho!

---

## 🚀 PRÓXIMOS PASSOS (Na Ordem):

### 1️⃣ AGORA
```bash
npm install
npm run dev
```
Teste localmente em http://localhost:5173

### 2️⃣ DEPOIS
```bash
git add .
git commit -m "Inicial"
git push
```
Coloca no GitHub

### 3️⃣ DEPOIS DISSO
Configura GitHub Pages (Settings → Pages)
App fica online em `https://seu-usuario.github.io/mapeamento-lojas-panelao/`

### 4️⃣ QUANDO QUISER ATUALIZAR
```bash
# Edita o arquivo
# Salva
git add .
git commit -m "Mudança: descrição"
git push
# Pronto! Atualiza automaticamente
```

---

## 📋 CREDENCIAIS DE TESTE (padrão):

```
Admin:
  Usuário: admin
  Senha: admin123

Loja 1 até Loja 13:
  Usuário: loja1, loja2, loja3... loja13
  Senha: loja1, loja2, loja3... loja13
```

✅ Mude essas senhas depois em `src/App.jsx`!

---

## 🔄 Como Funciona o Fluxo:

1. **Gerente da Loja 1 entra com `loja1 / loja1`**
   - Vê apenas a tela dela
   - 14 campos de upload (um por categoria)
   - Tira foto do celular ou browser
   - Foto fica salva no navegador

2. **Você (Admin) entra com `admin / admin123`**
   - Vê todas as 13 lojas
   - Grid com todas as categorias
   - Indicador de "expirado" em vermelho
   - Pode filtrar por loja

3. **A cada 4 meses**
   - Foto fica vermelha "❌ Expirado"
   - Gerente entra, faz upload de nova
   - Volta para verde "✅ OK (120d)"

---

## 🎨 Arquivos que você Pode Editar:

| Arquivo | Mude Isso | Por Quê |
|---------|-----------|--------|
| `src/App.jsx` | Senhas, nomes de lojas, categorias | Personalizações |
| `src/index.css` | Cores, fonts, layout | Visual |
| `.github/workflows/deploy.yml` | - | Não mexer (deploy automático) |
| `CUSTOMIZAR.md` | (Leia!) | Instruções de customização |

---

## ✅ CHECKLIST DE TESTES:

- [ ] `npm install` → sem erros
- [ ] `npm run dev` → abre em localhost
- [ ] Login admin funciona
- [ ] Login loja funciona
- [ ] Upload de foto funciona
- [ ] Admin vê todas as lojas
- [ ] Loja só vê a dela
- [ ] Indicador de dias funciona

---

## 📞 Se der erro:

| Erro | Solução |
|------|---------|
| "Module not found" | Execute `npm install` |
| "PORT 5173 already in use" | Mude a porta em vite.config.js ou feche outro servidor |
| "Cannot find module firebase" | Execute `npm install` novamente |
| Fotos não salvam | Limpe cache (Ctrl+Shift+Del) e use Chrome/Firefox |

---

**Pronto! Tudo está pronto para usar! 🎉**
