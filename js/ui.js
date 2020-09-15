class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user) {
    console.log(user)
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-4 mb-md-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 mb-md-2">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-pill badge-info">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-pill badge-light">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach( repo => {
      output += `
          <div class="card card-body bg-light mb-2">
            <div class="row">
              <div class="col-md-6">
                <a class="text-white" href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
                <span class="badge badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-pill badge-info">Watchs: ${repo.watchers_count}</span>
                <span class="badge badge-pill badge-success">Forks: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        `;
    });

    const UIrepos = document.querySelector('#repos');
    UIrepos.innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }

  showAlert(message, className){
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(()=>{
      this.clearAlert();
    }, 3000);
  }
}