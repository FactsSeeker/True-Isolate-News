function stuff(ev) {
  ev.preventDefault();
  let password = document.getElementById('password').value;
  let username = document.getElementById('username').value;
  let info = document.querySelector('.incorrect');
  if (username == 'SuperFish12' && password == 'PasswordAdmin') {
    location.replace("/Submit/Submit.html");
  } else {
    info.innerHTML = 'incorrect';
  }

}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', stuff)
});


