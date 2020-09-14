const github = new Github();
const ui = new UI();

const UIsearchUserName = document.querySelector('#searchUser');

UIsearchUserName.addEventListener('keyup', e => {
  let username = e.target.value;

  if(username !== '') {
    github.getUser(username)
          .then( data => {
            if(data.profile.message === 'Not Found') {
              // Show alert
              console.log('Unable to fetch data');
            }else {
              // Show profile
              ui.showProfile(data.profile);
            }
          })
          .catch(err => console.log(err));
  }else {
    username = '';
    console.log('Empty')
  }
})