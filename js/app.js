const github = new Github();
const ui = new UI();

const UIsearchUserName = document.querySelector('#searchUser');

UIsearchUserName.addEventListener('keyup', e => {
  let username = e.target.value;

  if(username !== '') {
    github.getUser(username)
          .then( data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
              ui.clearAlert();
              // Show alert
              ui.showAlert('User Not Found!', 'alert alert-danger');
            }else {
              // Show profile
              ui.showProfile(data.profile);
              // Show repos
              ui.showRepos(data.repos);
            }
          })
          .catch(err => console.log(err));
  }else {
    ui.clearProfile();
  }
})