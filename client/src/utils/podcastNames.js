const podcastNames = [
  'verbrechen-von-nebenan',
  'mordlust',
  'zeit-verbrechen',
  'darfs-ein-bisschen-mord-sein',
  'verbrechen-der-vergangenheit',
  'revisiting-sunnydale',
  'rescherschen-und-arschiv',
  'zeit-pfarrerstoechter',
  'eine-stunde-history',
  'spezialgelagerter-sonderpodcast',
  'ndr-corona-update',
]

export default function getLastVisitFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem('lastVisited')) ?? {}
  const listOfKeysOfLastVisitFromLocalStorage = Object.keys(localStorageData)
  const keysToInsert = podcastNames.filter(
    (key) => !listOfKeysOfLastVisitFromLocalStorage.includes(key)
  )

  const lastVisitedFromLocalStorage = { ...localStorageData }
  keysToInsert.forEach(
    (key) =>
      (lastVisitedFromLocalStorage[key] = {
        lastVisited: 0,
      })
  )
  console.log('lastVisitedFromLocalStorage', lastVisitedFromLocalStorage)
  return lastVisitedFromLocalStorage
}
