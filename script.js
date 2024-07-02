function carregar() {
    fetch('culturas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(culturas => {
            const center = document.querySelector('#produtos-container');

            culturas.forEach(cultura => {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = cultura.imagem;
                img.alt = cultura.nome;

                const content = document.createElement('div');
                content.classList.add('content');

                const titulo = document.createElement('h1');
                titulo.textContent = cultura.nome;

                content.appendChild(titulo);
                card.appendChild(img);
                card.appendChild(content);

                center.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Houve um problema com a requisição fetch:', error);
        });
}

carregar();