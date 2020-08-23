import React, { useEffect, useState } from 'react'
import Podcast from './components/Podcast/Podcast'
import StartPage from './pages/StartPage'
function App() {
  const [podcasts, setPodcasts] = useState([[]])

  // useEffect(() => {
  //   fetch('http://localhost:4000')
  //     .then((res) => res.json())
  //     .then(setPodcasts)
  // }, [])
  // const mordLust = podcasts[0].map((podcast) => (
  //   <Podcast
  //     key={podcast.id}
  //     nr={podcast.nr}
  //     description={podcast.description}
  //     subtitle={podcast.subtitle}
  //   />
  // ))

  // return <>{mordLust}</>
  return <StartPage />
}

export default App
