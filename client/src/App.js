import React, { useEffect, useState } from 'react'
import StartPage from './pages/StartPage'
import PodCast from './pages/Podcast'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [podcasts, setPodcasts] = useState(false)
  useEffect(() => {
    fetch(`http://${window.location.hostname}:4000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPodcasts(data)
        localStorage.setItem('podcasts', JSON.stringify(data))
        console.log('localStorage done')
      })
  }, [])

  return (
    <Switch>
      <Route path="/verbrechen-von-nebenan">
        <PodCast
          title="Verbrechen von nebenan"
          podcastName="verbrechen"
          podcastGenre="crime"
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
      <Route path="/">
        <StartPage />
      </Route>
    </Switch>
  )
}

export default App
