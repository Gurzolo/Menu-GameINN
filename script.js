function initHomePage() {
  const playersRange = document.getElementById('playersRange');
  const playersValue = document.getElementById('playersValue');
  const confirmBtn = document.getElementById('confirmBtn');
  const showAllGamesBtn = document.getElementById('showAllGamesBtn');
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  if (!playersRange || !playersValue || !confirmBtn) {
    return;
  }

  const savedCategories = getEnabledCategories();

  playersValue.textContent = String(playersRange.value);

  toggleButtons.forEach((button) => {
    const category = button.dataset.category;
    const isActive = savedCategories.includes(category);

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));

    button.addEventListener('click', () => {
      const nextState = !button.classList.contains('active');
      button.classList.toggle('active', nextState);
      button.setAttribute('aria-pressed', String(nextState));
      saveEnabledCategories();
    });
  });

  playersRange.addEventListener('input', (event) => {
    playersValue.textContent = event.target.value;
  });

  confirmBtn.addEventListener('click', () => {
    const selectedPlayers = Number(playersRange.value);
    localStorage.setItem('selectedPlayers', String(selectedPlayers));
    localStorage.setItem('showAllGames', 'false');
    saveEnabledCategories();
    window.location.href = 'games.html';
  });

  if (showAllGamesBtn) {
    showAllGamesBtn.addEventListener('click', () => {
      localStorage.setItem('showAllGames', 'true');
      saveEnabledCategories();
      window.location.href = 'games.html';
    });
  }
}

function getSelectedPlayers() {
  const storedPlayers = localStorage.getItem('selectedPlayers');
  return storedPlayers ? Number(storedPlayers) : 1;
}

function getEnabledCategories() {
  const storedCategories = localStorage.getItem('enabledCategories');

  if (storedCategories) {
    try {
      const parsed = JSON.parse(storedCategories);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      console.warn('Errore nel parsing delle categorie salvate:', error);
    }
  }

  return ['Giochi da tavola', 'Videogiochi'];
}

function saveEnabledCategories() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const enabledCategories = Array.from(toggleButtons)
    .filter((button) => button.classList.contains('active'))
    .map((button) => button.dataset.category);

  localStorage.setItem('enabledCategories', JSON.stringify(enabledCategories));
}

function renderGamesPage() {
  const list = document.getElementById('gamesList');
  const noGames = document.getElementById('noGames');
  const title = document.getElementById('gamesTitle');

  if (!list || !Array.isArray(games)) {
    return;
  }

  const selectedPlayers = getSelectedPlayers();
  const enabledCategories = getEnabledCategories();
  const showAllGames = localStorage.getItem('showAllGames') === 'true';
  const filteredGames = showAllGames
    ? games
    : games.filter((game) => {
        const minPlayers = Number.isFinite(game.minPlayers) ? game.minPlayers : game.players ?? 1;
        const maxPlayers = Number.isFinite(game.maxPlayers) ? game.maxPlayers : game.players ?? minPlayers;
        const matchesCategory = enabledCategories.includes(game.category);

        return matchesCategory && selectedPlayers >= minPlayers && selectedPlayers <= maxPlayers;
      });

  if (title) {
    title.textContent = showAllGames ? 'Tutti i giochi disponibili' : `Giochi per ${selectedPlayers} giocatori`;
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
        <p class="category">${game.category}</p>
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

  const detailsLink = game.pdfLink || game.link;
  const minPlayers = Number.isFinite(game.minPlayers) ? game.minPlayers : game.players ?? 1;
  const maxPlayers = Number.isFinite(game.maxPlayers) ? game.maxPlayers : game.players ?? minPlayers;
  const playersText = minPlayers === maxPlayers ? `${minPlayers}` : `${minPlayers}-${maxPlayers}`;

  detailsContainer.innerHTML = `
    <div class="details-card">
      <img src="${game.image}" alt="${game.title}" />
      <div class="details-content">
        <span class="tag">${game.tag}</span>
        <h1>${game.title}</h1>
        <p><strong>Categoria:</strong> ${game.category}</p>
        <p>${game.description}</p>
        <p><strong>Giocatori:</strong> ${playersText}</p>
        <a href="${detailsLink}" class="details-link" target="_blank" rel="noopener noreferrer">Apri collegamento</a>
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
