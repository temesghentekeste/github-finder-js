const github = new Github();

const UIsearchUserName = document.querySelector('#searchUser');

UIsearchUserName.addEventListener('keyup', e => {
  const username = e.target.value;

  if(username !== '') {
    github.getUser(username)
          .then( data => {
            console.log(data)
          })
          .catch(err => console.log(err));
  }else {
    username = '';
  }
})