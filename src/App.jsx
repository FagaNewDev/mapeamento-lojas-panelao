import { useState, useEffect } from 'react';

const LOJAS = [
  'Loja 01 - Bauru',
  'Loja 02 - Bauru',
  'Loja 03 - Agudos',
  'Loja 04 - Jaú',
  'Loja 05 - Botucatu',
  'Loja 06 - Lençóis Paulista',
  'Loja 07 - Duartina',
  'Loja 08 - São Manoel',
  'Loja 09 - Bauru',
  'Loja 10 - Agudos',
  'Loja 11 - Jaú',
  'Loja 12 - Botucatu',
  'Loja 13 - Lençóis Paulista'
];

const CATEGORIAS = [
  'Suco',
  'Bebida Quente',
  'Bebida Mista',
  'Vinhos',
  'Espum./Sidra/Sazonal',
  'Vodka',
  'Outros',
  'Cerveja',
  'Refrigerante',
  'Energético',
  'Refresco em Pó',
  'Geladeiras',
  'Água e Água de Coco',
  'Isotônicos'
];

const CREDENCIAIS = {
  'admin': { senha: 'admin123', loja: null },
  ...LOJAS.reduce((acc, loja, idx) => {
    acc[`loja${idx + 1}`] = { senha: `loja${idx + 1}`, loja: loja };
    return acc;
  }, {})
};

export default function App() {
  const [user, setUser] = useState(null);
  const [dados, setDados] = useState({});

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('mapeamento_dados');
    if (dadosSalvos) {
      setDados(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(dados).length > 0) {
      localStorage.setItem('mapeamento_dados', JSON.stringify(dados));
    }
  }, [dados]);

  const handleLogin = (usuario, senha) => {
    if (CREDENCIAIS[usuario] && CREDENCIAIS[usuario].senha === senha) {
      setUser({
        usuario,
        isAdmin: usuario === 'admin',
        loja: CREDENCIAIS[usuario].loja
      });
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUploadFoto = (loja, categoria, arquivo) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const novosDados = { ...dados };
      if (!novosDados[loja]) novosDados[loja] = {};
      
      novosDados[loja][categoria] = {
        foto: e.target.result,
        data: new Date().toISOString(),
        nomeArquivo: arquivo.name
      };
      
      setDados(novosDados);
    };
    reader.readAsDataURL(arquivo);
  };

  const calcularDiasRestantes = (dataUpload) => {
    const data = new Date(dataUpload);
    const agora = new Date();
    const diff = agora - data;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diasRestantes = 120 - dias;
    return { dias, diasRestantes, expirado: diasRestantes < 0 };
  };

  const getStatusBadge = (dataUpload) => {
    if (!dataUpload) return { texto: 'Sem foto', classe: 'status-expired' };
    
    const { diasRestantes, expirado } = calcularDiasRestantes(dataUpload);
    
    if (expirado) {
      return { texto: '❌ Expirado', classe: 'status-expired' };
    } else if (diasRestantes < 30) {
      return { texto: `⚠️ ${diasRestantes}d`, classe: 'status-warning' };
    } else {
      return { texto: `✅ OK`, classe: 'status-ok' };
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Header user={user} onLogout={handleLogout} />
      <div className="app-content">
        {user.isAdmin ? (
          <AdminDashboard 
            dados={dados}
            getStatusBadge={getStatusBadge}
          />
        ) : (
          <LojaUpload 
            loja={user.loja} 
            dados={dados}
            onUpload={(cat, arquivo) => handleUploadFoto(user.loja, cat, arquivo)}
            getStatusBadge={getStatusBadge}
          />
        )}
      </div>
    </div>
  );
}

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(usuario, senha);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>🏪 Mapeamento Lojas</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <select
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="admin">Admin (Gerencial)</option>
              {LOJAS.map((_, i) => (
                <option key={i} value={`loja${i + 1}`}>
                  Loja {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

function Header({ user, onLogout }) {
  return (
    <div className="app-header">
      <h1>🏪 {user.isAdmin ? 'Painel Administrativo' : user.loja}</h1>
      <div className="user-info">
        <span>{user.isAdmin ? '👤 Admin' : `📍 ${user.loja}`}</span>
        <button className="logout-btn" onClick={onLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}

function AdminDashboard({ dados, getStatusBadge }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="admin-panel">
      <h2 style={{ marginBottom: '20px', fontSize: '20px', color: '#333' }}>
        📊 Status de Todas as Lojas
      </h2>

      <div className="lojas-grid">
        {Object.keys(LOJAS).map((idx) => {
          const loja = LOJAS[idx];
          return (
            <div key={loja} className="loja-card">
              <div className="loja-title">{loja}</div>
              <div className="categorias-list">
                {CATEGORIAS.map((cat) => {
                  const fotoData = dados[loja]?.[cat];
                  const status = getStatusBadge(fotoData?.data);
                  
                  return (
                    <div 
                      key={cat} 
                      className="categoria-item"
                      onClick={() => setSelectedPhoto({ loja, categoria: cat, fotoData })}
                    >
                      <span className="categoria-name">{cat}</span>
                      <span className={`status-badge ${status.classe}`}>
                        {status.texto}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {selectedPhoto && (
        <PhotoModal 
          selectedPhoto={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}

function PhotoModal({ selectedPhoto, onClose }) {
  const { loja, categoria, fotoData } = selectedPhoto;

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{categoria}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {fotoData ? (
          <>
            <div className="photo-display">
              <img src={fotoData.foto} alt={categoria} />
            </div>
            <div className="photo-info">
              <p><strong>Loja:</strong> {loja}</p>
              <p><strong>Enviada:</strong> {new Date(fotoData.data).toLocaleDateString('pt-BR')}</p>
              <p><strong>Arquivo:</strong> {fotoData.nomeArquivo}</p>
            </div>
          </>
        ) : (
          <div className="no-photo">Nenhuma foto enviada para esta categoria</div>
        )}
      </div>
    </div>
  );
}

function LojaUpload({ loja, dados, onUpload, getStatusBadge }) {
  const [mensagem, setMensagem] = useState('');

  const handleFileChange = (categoria, event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
      onUpload(categoria, arquivo);
      setMensagem(`✅ Foto de "${categoria}" enviada!`);
      setTimeout(() => setMensagem(''), 3000);
      event.target.value = '';
    }
  };

  return (
    <div className="admin-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>📷 Enviar Fotos</h2>
      
      {mensagem && (
        <div style={{
          background: '#d4edda',
          color: '#155724',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '20px',
          fontWeight: '600'
        }}>
          {mensagem}
        </div>
      )}

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
        Tire fotos das categorias. Cada foto é válida por 4 meses.
      </p>

      <div className="categorias-list">
        {CATEGORIAS.map((categoria) => {
          const fotoData = dados[loja]?.[categoria];
          const status = getStatusBadge(fotoData?.data);
          
          return (
            <div key={categoria} className="upload-section">
              <label className="upload-label">{categoria}</label>
              
              {fotoData && (
                <div style={{ marginBottom: '12px' }}>
                  <img 
                    src={fotoData.foto} 
                    alt={categoria}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '200px',
                      borderRadius: '6px',
                      marginBottom: '10px'
                    }}
                  />
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                    Enviada: {new Date(fotoData.data).toLocaleDateString('pt-BR')}
                  </div>
                  <span className={`status-badge ${status.classe}`}>
                    {status.texto}
                  </span>
                </div>
              )}

              <label htmlFor={`upload-${categoria}`} className="upload-btn">
                📸 {fotoData ? 'Atualizar' : 'Enviar'} Foto
              </label>
              <input
                id={`upload-${categoria}`}
                type="file"
                accept="image/*"
                className="file-input"
                onChange={(e) => handleFileChange(categoria, e)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
