const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');
const numero = document.querySelector('#numero');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'NINGUÉM SABE';
    }else if(data.status == 'Alive'){
        return 'SIM';
    }else {
        return 'ESTÁ MORTO';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 826);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}

botao.onclick = pegarPersonagem;