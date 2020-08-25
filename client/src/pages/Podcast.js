import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Podcasts from '../components/Podcast/Podcasts'
import SubNav from '../components/SubNav'
import TopicChanger from '../components/TopicChanger'
import { ReactComponent as ArrowBack } from '../assets/svg/forward-white-24dp.svg'
import { Link } from 'react-router-dom'

export default function Podcast({ title, podcastName, podcastGenre }) {
  const [podcast, setPodcast] = useState([])
  const [argument, setArgument] = useState(podcastName)
  console.log(argument)
  useEffect(() => {
    const podcasts = JSON.parse(localStorage.getItem('podcasts'))
    const find = podcasts[0][podcastGenre].filter((podcastObj) =>
      Object.keys(podcastObj).includes(podcastName)
    )
    setPodcast(
      find[0][podcastName].map((podcast) => {
        return (
          <Podcasts
            key={podcast.id}
            nr={podcast.nr}
            publish={podcast.publish}
            duration={podcast.duration}
            description={podcast.description}
            subtitle={podcast.subtitle}
            url={podcast.url}
          />
        )
      })
    )

    return () => {
      setPodcast([])
    }
  }, [])

  return (
    <Screen>
      <Headline>
        <Link to="/">
          <ArrowBack style={ArrowStyle} />
        </Link>
        <Title>{title}</Title>
      </Headline>
      <PodcastContent>{podcast}</PodcastContent>
      <Navigation>
        <TopicChange>{<TopicChanger />}</TopicChange>
        <PodCastChange>{<SubNav />}</PodCastChange>
      </Navigation>
    </Screen>
  )
}
const ArrowStyle = {
  transform: 'rotate(180deg)',
  justifySelf: 'start',
  alignSelf: 'center',
}

const Title = styled.h2`
  margin: 0;
`
const Screen = styled.main`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;
  width: 100%;
`
const Headline = styled.header`
  font-family: 'Do Hyeon', sans-serif;
  height: 100%;
  margin: 0;
  padding: 15px;
  display: grid;
  grid-template-columns: 20% 80%;
`
const PodcastContent = styled.main`
  overflow: auto;
`
const Navigation = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: transparent;
`
const TopicChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const PodCastChange = styled.div`
  display: flex;
  border-left: 1px solid darkgrey;
  justify-content: space-evenly;
  align-items: center;
`
