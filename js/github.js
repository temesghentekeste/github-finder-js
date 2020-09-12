class Github {
  constructor() {
    this.clientId = '75e3235a908a255af6ad';
    this.clientSecret = 'a23eecc56bc36029b96ec002eda3bb182239ed24';
    this.githubURI = 'https://api.github.com/users';
  }

  async getUser(user) {
    const response = await fetch(this.githubURI + `/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    
    const profile = await response.json();

    return {
      profile
    };
  }
}