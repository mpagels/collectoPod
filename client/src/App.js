import React, { useEffect, useState } from 'react'
import StartPage from './pages/StartPage'
import PodCast from './pages/Podcast'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [podcasts, setPodcasts] = useState([[]])

  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => setPodcasts(data[0]))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/verbrechen-von-nebenan">
          <PodCast title="Verbrechen von nebenan" podcasts={podcasts} />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
