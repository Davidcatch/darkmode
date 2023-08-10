function darkMode() {
  const mode = document.getElementById('mode');
  const body = document.body;

  body.classList.toggle('darkmode');

  if (body.classList.contains('darkmode')) {
    mode.innerHTML = '<=Back to light';
  } else {
    mode.innerHTML = 'Click Here!';
  }
}
