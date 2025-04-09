const form = document.getElementById('form');
const typeSelect = document.getElementById('type');
const tvInputs = document.getElementById('tvInputs');
const player = document.getElementById('player');
const iframe = document.getElementById('iframe');
const exitBtn = document.getElementById('exit');

typeSelect.addEventListener('change', () => {
  if (typeSelect.value === 'tv') {
    tvInputs.classList.remove('hidden');
  } else {
    tvInputs.classList.add('hidden');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('tmdbId').value;
  const type = typeSelect.value;

  let url = '';
  if (type === 'movie') {
    url = `https://moviesapi.club/movie/${id}`;
  } else {
    const season = document.getElementById('season').value || 1;
    const episode = document.getElementById('episode').value || 1;
    url = `https://moviesapi.club/tv/${id}-${season}-${episode}`;
  }

  iframe.src = url;
  player.classList.remove('hidden');
});

exitBtn.addEventListener('click', () => {
  player.classList.add('hidden');
  iframe.src = '';
});
