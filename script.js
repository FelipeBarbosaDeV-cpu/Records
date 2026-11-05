const albunsPorGenero = {
    'MPB e Samba': [
        'A Tábua de Esmeralda.png', 'Acabou Chorare.png', 'África Brasil.png',
        'Alucinação.png', 'Chega de Saudade.png', 'Clube da Esquina 2.png',
        'Clube da Esquina.png', 'Construção.png', 'Djavan.png', 'Elis & Tom.png',
        'Expresso 2222.png', 'Luz.png', 'Mais.png', 'Tim Maia.png',
        'Toda Forma de Amor.png', 'Transa.png', 'Tropicália ou Panis et Circencis.png'
    ],
    Rock: [
        'A Night at the Opera.png', 'Abbey Road.png', 'Appetite for Destruction.png',
        'Até Onde Vai.png', 'Back in Black.png', 'Cabeça Dinossaur.png', 'Dois.png',
        'Exagerado.png', 'Fruto Proibido.png', 'Led Zeppelin IV.png', 'Nevermind.png',
        'O Papa é Pop.png', 'Rita Lee.png', 'Selvagem.png', 'Siderado.png',
        'Sticky Fingers.png', 'The Dark Side of the Moon.png', 'The Doors.png',
        'The Rise and Fall of Ziggy Stardust.png', 'Wilson Santos.png'
    ],
    'Hip-Hop': [
        'All Eyez on Me.png', 'Astroworld.png', 'Castelos & Ruínas.png',
        'Cores & Valores.png', 'DAMN.png', 'Encore.png', 'good kid, m.A.A.d city.png',
        'Graduation.png', 'Illmatic.png', 'Nada Como um Dia Após o Outro Dia.png',
        'Nó na Orelha.png', 'O Rap É Compromisso!.png', 'Ready to Die.png',
        'Sobrevivendo no Inferno.png', 'Straight Outta Compton.png',
        'The College Dropout.png', 'The Eminem Show.png', 'The Life of Pablo.png',
        'The Marshall Mathers LP.png', 'To Pimp a Butterfly.png'
    ],
    Pop: [
        '...Baby One More Time.png', '21.png', '1989.png', 'Bad.png',
        'EQUILIBRIVM.png', 'Future Nostalgia.png', 'Happier Than Ever.png',
        "Harry's House.png", 'Like a Virgin.png', 'She\'s So Unusual.png',
        'The Fame.png', 'Thriller.png', 'True Blue.png', 'Whitney.png'
    ],
    'Soul, Funk e R&B': [
        '24k Magic.png', 'PupleRain.png'
    ]
};

const precosAlbuns = {
    'Appetite for Destruction': 240,
    Astroworld: 260,
    'Até Onde Vai': 170,
    'Back in Black': 230,
    Bad: 230,
    'Cabeça Dinossaur': 180,
    'Castelos & Ruínas': 220,
    'Chega de Saudade': 190,
    'Clube da Esquina 2': 260,
    'All Eyez on Me': 280,
    '...Baby One More Time': 220,
    '21': 210,
    '1989': 250,
    '24k Magic': 230,
    'A Tábua de Esmeralda': 190,
    'África Brasil': 195,
    'Acabou Chorare': 190,
    'Abbey Road': 240,
    'A Night at the Opera': 230,
    'Ready to Die': 220,
    'Alucinação': 185,
    'Clube da Esquina': 255,
    'Construção': 205,
    Djavan: 195,
    'Elis & Tom': 230,
    'Expresso 2222': 190,
    Luz: 185,
    Mais: 175,
    'Tim Maia': 210,
    'Toda Forma de Amor': 185,
    Transa: 215,
    'Tropicália ou Panis et Circencis': 230,
    Dois: 205,
    Exagerado: 190,
    'Fruto Proibido': 215,
    'Led Zeppelin IV': 260,
    Nevermind: 240,
    'O Papa é Pop': 200,
    'Rita Lee': 195,
    Selvagem: 205,
    Siderado: 190,
    'Sticky Fingers': 250,
    'The Dark Side of the Moon': 270,
    'The Doors': 230,
    'The Rise and Fall of Ziggy Stardust': 250,
    'Wilson Santos': 185,
    'Cores & Valores': 200,
    DAMN: 255,
    Encore: 210,
    'good kid, m.A.A.d city': 250,
    Graduation: 260,
    Illmatic: 255,
    'Nada Como um Dia Após o Outro Dia': 270,
    'Nó na Orelha': 210,
    'O Rap É Compromisso!': 220,
    'Sobrevivendo no Inferno': 235,
    'Straight Outta Compton': 250,
    'The College Dropout': 240,
    'The Eminem Show': 225,
    'The Life of Pablo': 260,
    'The Marshall Mathers LP': 250,
    'To Pimp a Butterfly': 255,
    EQUILIBRIVM: 190,
    'Future Nostalgia': 240,
    'Happier Than Ever': 240,
    "Harry's House": 250,
    'Like a Virgin': 220,
    "She's So Unusual": 230,
    'The Fame': 225,
    Thriller: 250,
    'True Blue': 230,
    Whitney: 240,
    'Purple Rain': 250
};

function formatarPreco(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

function formatarTituloArquivo(nomeArquivo) {
    const titulo = nomeArquivo.replace(/\.png$/i, '');
    return titulo === 'PupleRain' ? 'Purple Rain' : titulo;
}

function obterCaminhoCapa(nome) {
    for (const arquivos of Object.values(albunsPorGenero)) {
        const arquivo = arquivos.find((nomeArquivo) => formatarTituloArquivo(nomeArquivo) === nome);
        if (arquivo) return `img/${arquivo}`;
    }
    return null;
}

function renderizarCatalogo() {
    const container = document.getElementById('catalogo-generos');
    const navegacao = document.getElementById('generos-nav');
    if (!container || !navegacao) return;

    Object.entries(albunsPorGenero).forEach(([genero, arquivos]) => {
        const idGenero = genero.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const link = document.createElement('a');
        link.href = `#${idGenero}`;
        link.className = 'generos-nav-link';
        const nomeLink = document.createElement('span');
        nomeLink.textContent = genero;
        const quantidadeLink = document.createElement('span');
        quantidadeLink.className = 'generos-nav-contagem';
        quantidadeLink.textContent = arquivos.length;
        link.append(nomeLink, quantidadeLink);
        navegacao.appendChild(link);

        const secao = document.createElement('section');
        secao.className = 'catalogo-secao';
        secao.id = idGenero;

        const tituloSecao = document.createElement('h3');
        tituloSecao.className = 'titulo-genero';
        tituloSecao.textContent = genero;
        const quantidadeSecao = document.createElement('span');
        quantidadeSecao.className = 'catalogo-contagem';
        quantidadeSecao.textContent = `${arquivos.length} ${arquivos.length === 1 ? 'disco' : 'discos'}`;
        const cabecalhoSecao = document.createElement('div');
        cabecalhoSecao.className = 'catalogo-secao-cabecalho';
        cabecalhoSecao.append(tituloSecao, quantidadeSecao);
        secao.appendChild(cabecalhoSecao);

        const grade = document.createElement('div');
        grade.className = 'catalogo-grid';

        arquivos.forEach((arquivo) => {
            const titulo = formatarTituloArquivo(arquivo);
            const preco = precosAlbuns[titulo] ?? 180;
            const card = document.createElement('article');
            card.className = 'catalogo-card';
            card.innerHTML = `
                <div class="card-imagem">
                    <img src="img/${arquivo}" alt="Capa do álbum ${titulo}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3>${titulo}</h3>
                    <p class="preco">${formatarPreco(preco)}</p>
                    <button class="btn-comprar" type="button">Adicionar ao Carrinho</button>
                </div>
            `;
            card.querySelector('.btn-comprar').addEventListener('click', () => {
                adicionarAoCarrinho(titulo, preco, `img/${arquivo}`);
            });
            grade.appendChild(card);
        });

        secao.appendChild(grade);
        container.appendChild(secao);
    });
}

function obterCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('sulco_carrinho')) || [];
    let atualizouPreco = false;

    carrinho.forEach((item) => {
        const precoAtualizado = precosAlbuns[item.nome];
        if (precoAtualizado !== undefined && item.preco !== precoAtualizado) {
            item.preco = precoAtualizado;
            atualizouPreco = true;
        }
    });

    if (atualizouPreco) salvarCarrinho(carrinho);
    return carrinho;
}

function salvarCarrinho(carrinho) {
    localStorage.setItem('sulco_carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(nome, preco, imagem) {
    let carrinho = obterCarrinho();
    carrinho.push({ nome, preco, imagem });
    salvarCarrinho(carrinho);
    alert(`${nome} foi adicionado ao carrinho!`);
}

function renderizarCarrinho() {
    const container = document.getElementById('carrinho-itens');
    const subtotalEl = document.getElementById('subtotal');
    const freteEl = document.getElementById('frete');
    const totalEl = document.getElementById('valor-total');
    const contagemEl = document.getElementById('carrinho-contagem');
    const finalizarButton = document.getElementById('btn-finalizar');
    const limparButton = document.getElementById('btn-limpar-carrinho');
    if (!container) return;

    let carrinho = obterCarrinho();
    container.innerHTML = '';

    if (carrinho.length === 0) {
        container.innerHTML = `
            <div class="carrinho-vazio">
                <p class="carrinho-vazio-titulo">Seu carrinho está vazio</p>
                <p>Explore a coleção e encontre o próximo disco da sua vitrola.</p>
                <a href="catalogo.html">Explorar catálogo <span aria-hidden="true">&#8594;</span></a>
            </div>
        `;
        if (contagemEl) contagemEl.textContent = '0 discos';
        if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
        if (freteEl) freteEl.textContent = 'R$ 0,00';
        if (totalEl) totalEl.textContent = 'R$ 0,00';
        if (finalizarButton) finalizarButton.disabled = true;
        if (limparButton) limparButton.disabled = true;
        return;
    }

    let subtotal = 0;
    carrinho.forEach((item, index) => {
        subtotal += item.preco;
        const div = document.createElement('div');
        div.className = 'item-carrinho';
        const caminhoCapa = item.imagem || obterCaminhoCapa(item.nome);
        let capa;
        if (caminhoCapa) {
            capa = document.createElement('img');
            capa.className = 'item-carrinho-capa';
            capa.src = caminhoCapa;
            capa.alt = `Capa do álbum ${item.nome}`;
            capa.loading = 'eager';
        } else {
            capa = document.createElement('div');
            capa.className = 'item-carrinho-capa item-carrinho-capa-placeholder';
            capa.textContent = 'Records';
            capa.setAttribute('aria-hidden', 'true');
        }
        const info = document.createElement('div');
        info.className = 'item-carrinho-info';
        const tipo = document.createElement('span');
        tipo.className = 'item-carrinho-tipo';
        tipo.textContent = 'DISCO DE VINIL';
        const titulo = document.createElement('h4');
        titulo.textContent = item.nome;
        const preco = document.createElement('p');
        preco.textContent = formatarPreco(item.preco);
        info.append(tipo, titulo, preco);

        const removerButton = document.createElement('button');
        removerButton.className = 'btn-remover';
        removerButton.type = 'button';
        removerButton.textContent = 'Remover';
        removerButton.setAttribute('aria-label', `Remover ${item.nome} do carrinho`);
        removerButton.addEventListener('click', () => removerDoCarrinho(index));

        div.append(capa, info, removerButton);
        container.appendChild(div);
    });

    const frete = 20.00;
    if (contagemEl) contagemEl.textContent = `${carrinho.length} ${carrinho.length === 1 ? 'disco' : 'discos'}`;
    if (subtotalEl) subtotalEl.textContent = formatarPreco(subtotal);
    if (freteEl) freteEl.textContent = formatarPreco(frete);
    if (totalEl) totalEl.textContent = formatarPreco(subtotal + frete);
    if (finalizarButton) finalizarButton.disabled = false;
    if (limparButton) limparButton.disabled = false;
}

function removerDoCarrinho(index) {
    let carrinho = obterCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem('sulco_carrinho');
    renderizarCarrinho();
}

function finalizarCompra() {
    let carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra realizada com sucesso! Obrigado por comprar na Records.');
    limparCarrinho();
}

function realizarLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const conta = obterContasCadastradas().find((item) => item.email === email);
    const erro = document.getElementById('login-erro');

    if (!conta) {
        erro.textContent = 'Não encontramos essa conta. Cadastre-se para continuar.';
        erro.hidden = false;
        return;
    }

    localStorage.setItem('records_usuario', JSON.stringify({ nome: conta.nome, email: conta.email }));
    renderizarPerfilUsuario();
}

function obterContasCadastradas() {
    try {
        const contas = JSON.parse(localStorage.getItem('records_contas')) || [];
        return Array.isArray(contas) ? contas : [];
    } catch {
        return [];
    }
}

function mostrarCadastro() {
    document.getElementById('modo-login').hidden = true;
    document.getElementById('modo-cadastro').hidden = false;
    document.getElementById('login-erro').hidden = true;
}

function mostrarLogin() {
    document.getElementById('modo-cadastro').hidden = true;
    document.getElementById('modo-login').hidden = false;
    document.getElementById('cadastro-erro').hidden = true;
}

function cadastrarUsuario(event) {
    event.preventDefault();
    const nome = document.getElementById('cadastro-nome').value.trim();
    const email = document.getElementById('cadastro-email').value.trim().toLowerCase();
    const senha = document.getElementById('cadastro-senha').value;
    const confirmacao = document.getElementById('cadastro-confirmacao').value;
    const erro = document.getElementById('cadastro-erro');

    if (senha !== confirmacao) {
        erro.textContent = 'As senhas não coincidem.';
        erro.hidden = false;
        return;
    }

    const contas = obterContasCadastradas();
    if (contas.some((conta) => conta.email === email)) {
        erro.textContent = 'Já existe uma conta com esse e-mail. Entre na sua conta.';
        erro.hidden = false;
        return;
    }

    const conta = { nome, email };
    contas.push(conta);
    localStorage.setItem('records_contas', JSON.stringify(contas));
    localStorage.setItem('records_usuario', JSON.stringify(conta));
    document.getElementById('form-cadastro').reset();
    renderizarPerfilUsuario();
}

function renderizarPerfilUsuario() {
    const formulario = document.querySelector('.entrar-formulario');
    const perfil = document.getElementById('perfil-usuario');
    if (!formulario || !perfil) return;

    let usuario = null;
    try {
        usuario = JSON.parse(localStorage.getItem('records_usuario'));
    } catch {
        localStorage.removeItem('records_usuario');
    }

    const conectado = Boolean(usuario?.email);
    formulario.hidden = conectado;
    perfil.hidden = !conectado;
    if (!conectado) return;

    const nome = usuario.nome || usuario.email.split('@')[0].replace(/[._-]+/g, ' ');
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
    document.getElementById('perfil-nome').textContent = nomeFormatado;
    document.getElementById('perfil-email').textContent = usuario.email;
    document.getElementById('perfil-avatar').textContent = nomeFormatado.charAt(0).toUpperCase();
}

function encerrarSessao() {
    localStorage.removeItem('records_usuario');
    renderizarPerfilUsuario();
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
    renderizarCarrinho();
    renderizarPerfilUsuario();
});