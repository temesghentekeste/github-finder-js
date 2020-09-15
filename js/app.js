const github = new Github(); // eslint-disable-line no-undef
const ui = new UI(); // eslint-disable-line no-undef

const UIsearchUserName = document.querySelector('#searchUser');

UIsearchUserName.addEventListener('keyup', e => {
  const username = e.target.value;

  if (username !== '') {
    github.getUser(username)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.clearAlert();
          // Show alert
          ui.showAlert('User Not Found!', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos);
        }
      })
      .catch(() => ui.showAlert('Something went wrong', 'alert alert-danger'));
  } else {
    ui.clearProfile();
  }
});