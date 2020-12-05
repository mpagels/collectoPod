import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import PodCast from './pages/Podcast'
import StartPage from './pages/StartPage'

function App() {
  const [podcast, setPodcast] = useState([])

  useEffect(() => {
    fetch(`http://${window.location.hostname}:4000`)
      .then((res) => res.json())
      .then((data) => {
        setPodcast(data)
      })
  }, [])

  return (
    <Switch>
      <Route path="/verbrechen-von-nebenan">
        <PodCast
          title="Verbrechen von nebenan"
          podcastName="verbrechen"
          podcastGenre="crime"
          data={podcast}
        />
      </Route>
      <Route path="/mordlust">
        <PodCast title="Mordlust" podcastName="mordlust" podcastGenre="crime" />
      </Route>
      <Route path="/zeit-verbrechen">
        <PodCast
          title="Zeit Verbrechen"
          podcastName="zeit_verbrechen"
          podcastGenre="crime"
        />
      </Route>
      <Route path="/darfs-ein-bisserl-mord-sein">
        <PodCast
          title="Darf's ein bisserl Mord sein?"
          podcastName="darfs_ein_bisschen_mord_sein"
          podcastGenre="crime"
        />
      </Route>
      <Route path="/verbrechen_der_vergangenheit">
        <PodCast
          title="Verbrechen der Vergangenheit"
          podcastName="verbrechen_der_vergangenheit"
          podcastGenre="crime"
        />
      </Route>
      <Route path="/revisiting_sunnydale">
        <PodCast
          title="Revisiting Sunnydale"
          podcastName="revisiting_sunnydale"
          podcastGenre="other"
        />
      </Route>
      <Route path="/rescherschen_und_arschiv">
        <PodCast
          title="Rescherchen und Arschiv"
          podcastName="rescherschen_und_arschiv"
          podcastGenre="other"
        />
      </Route>
      <Route path="/zeit_pfarrerstoechter">
        <PodCast
          title="Unter Pfarrerstöchtern"
          podcastName="zeit_pfarrerstoechter"
          podcastGenre="other"
        />
      </Route>
      <Route path="/">
        <StartPage />
      </Route>
    </Switch>
  )
}

export default App
