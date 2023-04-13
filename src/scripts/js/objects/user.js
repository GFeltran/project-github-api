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
        this.repositories = gitHubRepos;
    }, 
    setEvents(gitHubEvents){

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