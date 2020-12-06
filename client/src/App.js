import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PodCast from './pages/Podcast'
import StartPage from './pages/StartPage'
import usePodcasts from './hooks/usePodcasts'
function App() {
  const {
    verbrechen,
    lastUpdated,
    lastVisit,
    setLastVisit,
    eineStundeHistory,
    rescherschenUndArschiv,
    zeitPfarrerstoechter,
    mordlust,
    zeitVerbrechen,
    darfsEinBisschenMordSein,
    verbrechenDerVergangenheit,
    revisitingSunnydale,
  } = usePodcasts()

  const lastUpdates = lastUpdated.map((last) => new Date(last.lastUpdated))

  console.log(lastUpdates)
  return (
    <Switch>
      <Route path="/verbrechen-von-nebenan">
        <PodCast
          title="Verbrechen von nebenan"
          podcastName="verbrechen"
          podcastGenre="crime"
          data={verbrechen}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/mordlust">
        <PodCast
          title="Mordlust"
          podcastName="mordlust"
          podcastGenre="crime"
          data={mordlust}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/zeit-verbrechen">
        <PodCast
          title="Zeit Verbrechen"
          podcastName="zeit_verbrechen"
          podcastGenre="crime"
          data={zeitVerbrechen}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/darfs-ein-bisserl-mord-sein">
        <PodCast
          title="Darf's ein bisserl Mord sein?"
          podcastName="darfs_ein_bisschen_mord_sein"
          podcastGenre="crime"
          data={darfsEinBisschenMordSein}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/verbrechen_der_vergangenheit">
        <PodCast
          title="Verbrechen der Vergangenheit"
          podcastName="verbrechen_der_vergangenheit"
          podcastGenre="crime"
          data={verbrechenDerVergangenheit}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/revisiting_sunnydale">
        <PodCast
          title="Revisiting Sunnydale"
          podcastName="revisiting_sunnydale"
          podcastGenre="other"
          data={revisitingSunnydale}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/rescherschen_und_arschiv">
        <PodCast
          title="Rescherchen und Arschiv"
          podcastName="rescherschen_und_arschiv"
          podcastGenre="other"
          data={rescherschenUndArschiv}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/zeit_pfarrerstoechter">
        <PodCast
          title="Unter Pfarrerstöchtern"
          podcastName="zeit_pfarrerstoechter"
          podcastGenre="other"
          data={zeitPfarrerstoechter}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/eineStundeHistory">
        <PodCast
          title="Eine Stunde History"
          podcastName="eineStundeHistory"
          podcastGenre="other"
          data={eineStundeHistory}
          lastVisit={lastVisit}
          setLastVisit={setLastVisit}
          lastUpdates={lastUpdates}
        />
      </Route>
      <Route path="/">
        <StartPage lastUpdates={lastUpdates} lastVisit={lastVisit} />
      </Route>
    </Switch>
  )
}

export default App
