const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        let repositoriesItens = "";

        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">

                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio   ?? 'Não possui bio cadastrada 😥'}</p>
                                                <div class="follows">
                                                    <div class="followers">
                                                        <p>${user.followers}</p>
                                                        <p>seguidores</p>
                                                    </div>
                                                    <div class="following">
                                                        <p>${user.following}</p>
                                                        <p>seguindo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

        if(user.repositories.length > 0) {
            user.repositories.forEach(repo => repositoriesItens +=   `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);

            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div> `
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }
