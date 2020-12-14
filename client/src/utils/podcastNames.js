const podcastNames = {
  crime: [
    'verbrechen-von-nebenan',
    'mordlust',
    'zeit-verbrechen',
    'darfs-ein-bisschen-mord-sein',
    'verbrechen-der-vergangenheit',
  ],
  other: [
    'revisiting-sunnydale',
    'rescherschen-und-arschiv',
    'zeit-pfarrerstoechter',
    'eine-stunde-history',
    'spezialgelagerter-sonderpodcast',
    'ndr-corona-update',
  ],
  crimeKeys: {
    'verbrechen-von-nebenan': 0,
    mordlust: 1,
    'zeit-verbrechen': 2,
    'darfs-ein-bisschen-mord-sein': 3,
    'verbrechen-der-vergangenheit': 4,
  },
  otherKeys: {
    'revisiting-sunnydale': 0,
    'rescherschen-und-arschiv': 1,
    'zeit-pfarrerstoechter': 2,
    'eine-stunde-history': 3,
    'spezialgelagerter-sonderpodcast': 4,
    'ndr-corona-update': 5,
  },
}

export default function getLastVisitFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem('lastVisited')) ?? {}
  // localStorage is empty
  if (Object.keys(localStorageData).length === 0) {
    return { ...setPodcasts('crime'), ...setPodcasts('other') }
  }

  // if localStore is populated and has not the "isActive", "listIndex", "genre" properties
  const listOfKeysOfLastVisitFromLocalStorage = Object.keys(localStorageData)

  listOfKeysOfLastVisitFromLocalStorage.forEach((key) => {
    if (
      !localStorageData[key].isActive &&
      !localStorageData[key].isActive &&
      !!localStorageData[key].genre
    ) {
      const genre = podcastNames.crime.includes(key) ? 'crime' : 'other'
      localStorageData[key] = {
        lastVisited: localStorageData[key].lastVisited,
        isActive: true,
        listIndex: podcastNames[`${genre}Keys`][key],
        genre,
      }
    }
  })
  return localStorageData
}

function setPodcasts(genre) {
  const obj = {}
  podcastNames[genre].forEach((podcast) => {
    obj[podcast] = {
      lastVisited: 0,
      isActive: true,
      listIndex: podcastNames[`${genre}Keys`][podcast],
      genre: genre,
    }
  })
  return obj
}
