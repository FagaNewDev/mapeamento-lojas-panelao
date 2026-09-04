# 🎨 Como Customizar o App

## Adicionar Logo da Panelão

### 1. Adicionar a imagem do logo

1. Coloque a imagem do logo na pasta: `src/assets/logo.png`
2. Abra `src/App.jsx`
3. No topo, adicione:
```javascript
import logo from './assets/logo.png';
```

4. Na função `Header`, procure por:
```javascript
<h1>🏪 Mapeamento {user.isAdmin ? 'Admin' : user.loja}</h1>
```

5. Mude para:
```javascript
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src={logo} alt="Panelão" style={{ height: '40px' }} />
  <h1 style={{ margin: 0 }}>Mapeamento {user.isAdmin ? 'Admin' : user.loja}</h1>
</div>
```

---

## Mudar as Cores

### 1. Cores Principais

Abra `src/index.css` e procure por estas cores. A cor principal é `#667eea`:

```css
/* Mude de #667eea (roxo) para a cor da Panelão */

/* Exemplo: Se Panelão usa azul (#0066cc) */
/* Substitua todas as ocorrências de #667eea por #0066cc */
```

**Alternativas fáceis:**
- Azul: `#0066cc`
- Vermelho: `#cc0000`
- Verde: `#00aa00`
- Laranja: `#ff9900`

### 2. Gradient do Login

No arquivo `src/index.css`, procure por:
```css
.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Mude para (exemplo com azul):
```css
.login-container {
  background: linear-gradient(135deg, #0066cc 0%, #003d99 100%);
}
```

---

## Mudar Nomes das Lojas

Se quiser nomes mais descritivos em vez de "Loja 01, Loja 02...":

1. Abra `src/App.jsx`
2. Encontre:
```javascript
const LOJAS = [
  'Loja 01 - Bauru',
  'Loja 02 - Bauru',
  // ...
];
```

3. Mude para:
```javascript
const LOJAS = [
  'Bauru - Centro',
  'Bauru - Zona Sul',
  'Agudos - Centro',
  'Jaú - Principal',
  // ...
];
```

---

## Mudar as Categorias

1. Abra `src/App.jsx`
2. Encontre:
```javascript
const CATEGORIAS = [
  'Suco',
  'Bebida Quente',
  // ...
];
```

3. Adicione/remova conforme necessário

---

## Mudar as Senhas das Lojas

1. Abra `src/App.jsx`
2. Encontre a seção `CREDENCIAIS`
3. Mude as senhas:

```javascript
const CREDENCIAIS = {
  'admin': { senha: 'sua-senha-admin-segura', loja: null },
  'loja1': { senha: 'bauru-centro-2024', loja: LOJAS[0] },
  'loja2': { senha: 'bauru-sul-2024', loja: LOJAS[1] },
  // ...
};
```

---

## Adicionar Footer com Créditos

1. Abra `src/App.jsx`
2. Na função App, antes do closing `</div>`, adicione:

```javascript
<footer style={{
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
  marginTop: '40px',
  fontSize: '12px'
}}>
  <p>© 2024 Panelão Supermercados - Mapeamento de Lojas</p>
</footer>
```

---

## Mudar o Tempo de Expiração (de 4 meses)

Se quiser renovar a cada 3 meses ou 6 meses:

1. Abra `src/App.jsx`
2. Encontre a função `calcularDiasRestantes`:

```javascript
const diasRestantes = 120 - dias; // 4 meses ≈ 120 dias
```

Mude para:
- **3 meses:** `90 - dias`
- **6 meses:** `180 - dias`
- **1 ano:** `365 - dias`

3. Também mude o aviso de warning (quando faltam 30 dias):

```javascript
} else if (diasRestantes < 30) { // Mude 30 para outra quantidade
```

---

## Testar as Mudanças

Após fazer qualquer alteração:

```bash
npm run dev
```

Abra http://localhost:5173 e veja as mudanças em tempo real!

---

## Fazer Upload das Mudanças

```bash
git add .
git commit -m "Customizado: cores, logo e nomes das lojas"
git push
```

O app atualiza automaticamente em 2-5 minutos!

---

## 💡 Dicas Avançadas

### Adicionar uma página de configurações
Crie um novo componente `Settings.jsx` e adicione um botão no header.

### Adicionar notificações por email
Integre com Firebase Cloud Functions para alertar quando foto expira.

### Criar relatório PDF
Instale `pdfkit` e gere relatórios mensais das fotos.

---

**Precisa de ajuda? Consulte a documentação do React e Vite.**
