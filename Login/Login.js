function stuff(ev) {
  ev.preventDefault();
  let password = document.getElementById('password').value;
  let username = document.getElementById('username').value;
  let info = document.querySelector('.incorrect');
  if (username == 'Isolate201' && password == 'News102') {
    location.replace("https://isolatenews.rf.gd/submissions");
  } else {
    info.innerHTML = 'incorrect';
  }

}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', stuff)
});


