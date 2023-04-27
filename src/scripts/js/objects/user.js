const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRespositories(gitHubRepos){
        this.repositories = []

        gitHubRepos.forEach(repo => {
            let repoItem = {};

            repoItem.name = repo.name;
            repoItem.url  = repo.html_url;
            repoItem.fork = repo.forks_count;
            repoItem.watchers = repo.watchers_count;
            repoItem.stars = repo.stargazers_count

            if(repo.language === undefined | repo.language === null){
                repoItem.language = '-'
            } else {
                repoItem.language = repo.language;
            }

            this.repositories.push(repoItem);
        })
    }, 
    setEvents(gitHubEvents){
        this.events = []

        gitHubEvents.forEach(event => {
            let eventItem = {};
            eventItem.name = event.repo.name;

            if(event.payload.commits === undefined){
                eventItem.commit = 'Event sem commit.'
            } else {
                eventItem.commit = event.payload.commits[0].message;
            }

            this.events.push(eventItem);
        });
    }
};

export { user }