function stuff(ev) {
  ev.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let content = document.getElementById('content').value;
  let info = document.querySelector('.text');
  info.innerHTML = info.innerHTML + title + author + content;

}






document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', stuff)
});