function initHomePage() {
  const playersRange = document.getElementById('playersRange');
  const playersValue = document.getElementById('playersValue');
  const confirmBtn = document.getElementById('confirmBtn');

  if (!playersRange || !playersValue || !confirmBtn) {
    return;
  }

  playersValue.textContent = String(playersRange.value);

  playersRange.addEventListener('input', (event) => {
    playersValue.textContent = event.target.value;
  });

  confirmBtn.addEventListener('click', () => {
    const selectedPlayers = Number(playersRange.value);
    localStorage.setItem('selectedPlayers', String(selectedPlayers));
    window.location.href = 'games.html';
  });
}

function getSelectedPlayers() {
  const storedPlayers = localStorage.getItem('selectedPlayers');
  return storedPlayers ? Number(storedPlayers) : 1;
}

function renderGamesPage() {
  const list = document.getElementById('gamesList');
  const noGames = document.getElementById('noGames');
  const title = document.getElementById('gamesTitle');

  if (!list || !Array.isArray(games)) {
    return;
  }

  const selectedPlayers = getSelectedPlayers();
  const filteredGames = games.filter((game) => game.players === selectedPlayers);

  if (title) {
    title.textContent = `Giochi per ${selectedPlayers} giocatori`;
  }

  list.innerHTML = '';

  if (filteredGames.length === 0) {
    if (noGames) {
      noGames.style.display = 'block';
    }
    return;
  }

  if (noGames) {
    noGames.style.display = 'none';
  }

  filteredGames.forEach((game) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'game-card';
    card.setAttribute('data-game-id', game.id);

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="card-content">
        <span class="tag">${game.tag}</span>
        <h3>${game.title}</h3>
        <p>${game.description}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      localStorage.setItem('selectedGameId', game.id);
      window.location.href = game.link;
    });

    list.appendChild(card);
  });
}

function renderGameDetailsPage() {
  const detailsContainer = document.getElementById('gameDetails');

  if (!detailsContainer || !Array.isArray(games)) {
    return;
  }

  const gameId = new URLSearchParams(window.location.search).get('id');
  const game = games.find((item) => item.id === gameId);

  if (!game) {
    detailsContainer.innerHTML = '<p>Gioco non trovato.</p>';
    return;
  }

  detailsContainer.innerHTML = `
    <div class="details-card">
      <img src="${game.image}" alt="${game.title}" />
      <div class="details-content">
        <span class="tag">${game.tag}</span>
        <h1>${game.title}</h1>
        <p>${game.description}</p>
        <p><strong>Giocatori:</strong> ${game.players}</p>
        <a href="${game.link}" class="details-link">Apri collegamento</a>
      </div>
    </div>
  `;
}

function initPage() {
  initHomePage();

  if (document.getElementById('gamesList')) {
    renderGamesPage();
  }

  if (document.getElementById('gameDetails')) {
    renderGameDetailsPage();
  }
}

initPage();
