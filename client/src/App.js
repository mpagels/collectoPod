import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import PodCast from './pages/Podcast'
import StartPage from './pages/StartPage'
import usePodcasts from './hooks/usePodcasts'

function App() {
  const { isLoading, data, lastVisit, setLastVisit } = usePodcasts()
  const [isSecondPodcasts, setIsSecondPodcasts] = useState(false)

  let t = []

  if (!isLoading) {
    const [
      lastUpdated,
      verbrechen,
      mordlust,
      zeitVerbrechen,
      darfsEinBisschenMordSein,
      verbrechenDerVergangenheit,
      revisitingSunnydale,
      rescherschenUndArschiv,
      zeitPfarrerstoechter,
      eineStundeHistory,
      spezialgelagerterSonderpodcast,
      ndrCoronaUpdate,
    ] = data

    const lastUpdates = lastUpdated.map((last) => new Date(last.lastUpdated))

    const routes = [
      {
        path: '/verbrechen-von-nebenan',
        title: 'Verbrechen von nebenan',
        podcastName: 'verbrechen-von-nebenan',
        podcastGenre: 'crime',
        data: verbrechen,
      },
      {
        path: '/mordlust',
        title: 'Mordlust',
        podcastName: 'mordlust',
        podcastGenre: 'crime',
        data: mordlust,
      },
      {
        path: '/zeit-verbrechen',
        title: 'Zeit Verbrechen',
        podcastName: 'zeit-verbrechen',
        podcastGenre: 'crime',
        data: zeitVerbrechen,
      },
      {
        path: '/darfs-ein-bisserl-mord-sein',
        title: "Darf's ein bisserl Mord sein?",
        podcastName: 'darfs-ein-bisschen-mord-sein',
        podcastGenre: 'crime',
        data: darfsEinBisschenMordSein,
      },
      {
        path: '/verbrechen-der-vergangenheit',
        title: 'Verbrechen der Vergangenheit',
        podcastName: 'verbrechen-der-vergangenheit',
        podcastGenre: 'crime',
        data: verbrechenDerVergangenheit,
      },
      {
        path: '/ndr-corona-update',
        title: 'Das Coronavirus-Update',
        podcastName: 'ndr-corona-update',
        podcastGenre: 'other',
        data: ndrCoronaUpdate,
      },
      {
        path: '/spezialgelagerter-sonderpodcast',
        title: 'Spezialgelagerter Sonderpodcast',
        podcastName: 'spezialgelagerter-sonderpodcast',
        podcastGenre: 'other',
        data: spezialgelagerterSonderpodcast,
      },
      {
        path: '/rescherschen-und-arschiv',
        title: 'Rescherchen und Arschiv',
        podcastName: 'rescherschen-und-arschiv',
        podcastGenre: 'other',
        data: rescherschenUndArschiv,
      },
      {
        path: '/revisiting-sunnydale',
        title: 'Revisiting Sunnydale',
        podcastName: 'revisiting-sunnydale',
        podcastGenre: 'other',
        data: revisitingSunnydale,
      },

      {
        path: '/zeit-pfarrerstoechter',
        title: 'Unter Pfarrerstöchtern',
        podcastName: 'zeit-pfarrerstoechter',
        podcastGenre: 'other',
        data: zeitPfarrerstoechter,
      },
      {
        path: '/eine-stunde-history',
        title: 'Eine Stunde History',
        podcastName: 'eine-stunde-history',
        podcastGenre: 'other',
        data: eineStundeHistory,
      },
    ]

    t.push(routes, lastUpdates)
  }

  return isLoading ? (
    <Route path="/">
      <StartPage isLoading={isLoading} />
    </Route>
  ) : (
    <Switch>
      {t[0].map(({ path, title, podcastName, podcastGenre, data }) => (
        <Route key={podcastName} path={path}>
          <PodCast
            title={title}
            podcastName={podcastName}
            podcastGenre={podcastGenre}
            data={data}
            lastVisit={lastVisit}
            setLastVisit={setLastVisit}
            lastUpdates={t[1]}
          />
        </Route>
      ))}
      <Route path="/">
        <StartPage
          lastUpdates={t[1]}
          lastVisit={lastVisit}
          isSecondPodcasts={isSecondPodcasts}
          setIsSecondPodcasts={setIsSecondPodcasts}
        />
      </Route>
    </Switch>
  )
}

export default App
