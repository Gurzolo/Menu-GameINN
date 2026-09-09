const games = [
  {
    id: 'catan',
    title: 'Catan',
    image: 'immagini/CATAN.jpg',
    description: 'Un classico strategico per costruire insediamenti, raccogliere risorse e dominare la tavola.',
    tag: 'Strategia',
    category: 'Giochi da tavola',
    minPlayers: 3,
    maxPlayers: 4,
    link: 'game-details.html?id=catan',
    pdfLink: 'regolamenti/regolamento%20catan.pdf'
  },
  {
    id: 'uno',
    title: 'Uno',
    image: 'immagini/Uno.jpg',
    description: 'Un gioco veloce e divertente da giocare in gruppo, perfetto per riunioni e serate.',
    tag: 'Famiglia',
    category: 'Giochi da tavola',
    minPlayers: 2,
    maxPlayers: 10,
    link: 'game-details.html?id=uno'
  },
  {
    id: 'scacchi',
    title: 'Scacchi',
    image: 'immagini/schacchi.jpg',
    description: 'Un classico per mettere alla prova logica, pianificazione e controllo della partita.',
    tag: 'Pensiero',
    category: 'Giochi da tavola',
    minPlayers: 2,
    maxPlayers: 2,
    link: 'game-details.html?id=scacchi'
  },
  {
    id: 'dixit-odyssey',
    title: 'Dixit Odyssey',
    image: 'immagini/Dixit Odyssey.jpg',
    description: 'Un gioco creativo che combina immagini, interpretazione e racconti originali.',
    tag: 'Creatività',
    category: 'Giochi da tavola',
    minPlayers: 3,
    maxPlayers: 12,
    link: 'game-details.html?id=dixit-odyssey'
  },
  {
    id: 'carcassonne',
    title: 'Carcassonne',
    image: 'immagini/Carcassonne.jpg',
    description: 'Costruisci paesaggi, piazza seguaci e conquista territori in una partita tattica e visiva.',
    tag: 'Tattica',
    category: 'Giochi da tavola',
    minPlayers: 2,
    maxPlayers: 5,
    link: 'game-details.html?id=carcassonne'
  },
  {
    id: 'ticket-to-ride',
    title: 'Ticket to Ride',
    image: 'immagini/ticketo to ride.jpg',
    description: 'Collega città e costruisci rotte in questa partita di pianificazione e strategia.',
    tag: 'Percorsi',
    category: 'Giochi da tavola',
    minPlayers: 3,
    maxPlayers: 5,
    link: 'game-details.html?id=ticket-to-ride'
  },
  {
    id: 'mario-kart-8',
    title: 'Mario Kart 8',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    description: 'Una gara frenetica con kart, item e circuiti famosi, perfetta per sfide veloci e divertenti.',
    tag: 'Corse',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=mario-kart-8'
  },
  {
    id: 'mario-kart-world',
    title: 'Mario Kart World',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'Un nuovo capitolo di Mario Kart con percorsi dinamici, velocità elevate e gare da non perdere.',
    tag: 'Corse',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=mario-kart-world'
  },
  {
    id: 'mario-party-jamboree',
    title: 'Mario Party Jamboree',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
    description: 'Una raccolta di minigiochi colorati e frizzanti dove ogni round può cambiare il risultato della partita.',
    tag: 'Party',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=mario-party-jamboree'
  },
  {
    id: 'mario-party',
    title: 'Mario Party',
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=900&q=80',
    description: 'Un classico party game con tabellone, minigiochi e tante strategie per conquistare le stelle.',
    tag: 'Party',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=mario-party'
  },
  {
    id: 'super-smash-bros-ultimate',
    title: 'Super Smash Bros Ultimate',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    description: 'Un picchiaduro accessibile e competitivo, ideale per sfide veloci tra amici e famiglie.',
    tag: 'Picchiaduro',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=super-smash-bros-ultimate'
  },
  {
    id: 'nidhogg',
    title: 'Nidhogg',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    description: 'Un duello rapido e intensissimo, dove il movimento, il tempo e l’anticipo fanno la differenza.',
    tag: 'Duello',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 2,
    link: 'game-details.html?id=nidhogg'
  },
  {
    id: 'vagante',
    title: 'Vagante',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    description: 'Un gioco di esplorazione e sopravvivenza che mette alla prova resistenza, pianificazione e fortuna.',
    tag: 'Avventura',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=vagante'
  },
  {
    id: 'hidden-in-plain-sight',
    title: 'Hidden in plain sight',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    description: 'Un gioco di intuizione e osservazione, perfetto per partite leggere e molto coinvolgenti.',
    tag: 'Strategia',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=hidden-in-plain-sight'
  },
  {
    id: 'letal-league-blaze',
    title: 'Letal League Blaze',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'Un videogioco competitivo e rapido, pensato per partite intense e battaglie ad alta velocità.',
    tag: 'Competitivo',
    category: 'Videogiochi',
    minPlayers: 2,
    maxPlayers: 4,
    link: 'game-details.html?id=letal-league-blaze'
  }
];
