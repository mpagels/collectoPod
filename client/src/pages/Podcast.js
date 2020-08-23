import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Podcasts from '../components/Podcast/Podcasts'

export default function Podcast({ title, podcasts }) {
  const [podcast, setPodcast] = useState([])
  console.log(podcasts)
  useEffect(() => {
    setPodcast(
      podcasts.map((podcast) => (
        <Podcasts
          key={podcast.id}
          nr={podcast.nr}
          publish={podcast.publish}
          duration={podcast.duration}
          description={podcast.description}
          subtitle={podcast.subtitle}
          url={podcast.url}
        />
      ))
    )
  }, [])

  return (
    <Screen>
      <Headline>{title}</Headline>
      <PodcastContent>{podcast}</PodcastContent>
      <Navigation>
        <TopicChange></TopicChange>
        <PodCastChange></PodCastChange>
      </Navigation>
    </Screen>
  )
}

const Screen = styled.main`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;
  width: 100%;
`
const Headline = styled.h2`
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;
  background-color: #141415;
  height: 100%;
  margin: 0;
  padding: 15px;
  align-self: center;
`
const PodcastContent = styled.main`
  overflow: auto;
`
const Navigation = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
`
const TopicChange = styled.div`
  background-color: black;
`
const PodCastChange = styled.div`
  display: flex;
  background-color: blue;
`
