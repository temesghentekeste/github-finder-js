class Github {
  constructor() {
    this.clientId = '75e3235a908a255af6ad';
    this.clientSecret = 'a23eecc56bc36029b96ec002eda3bb182239ed24';
    this.githubURI = 'https://api.github.com/users';
    this.repos_count = 5;
    this.repos_sort = 'created_at asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(this.githubURI + `/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const reposResponse = await fetch(this.githubURI + `/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}