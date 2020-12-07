import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as ArrowBack } from '../assets/svg/forward-white-24dp.svg'
import Podcasts from '../components/Podcast/Podcasts'
import SubNav from '../components/SubNav/SubNav'
import TopicChanger from '../components/TopicChanger'

export default function Podcast({
  title,
  podcastName,
  podcastGenre,
  data,
  lastVisit,
  lastUpdates,
  setLastVisit,
}) {
  useEffect(() => {
    const obj = { ...lastVisit }
    obj[podcastName] = {
      lastVisited: Date.now(),
    }

    localStorage.setItem('lastVisited', JSON.stringify(obj))
    setLastVisit(obj)
    // eslint-disable-next-line
  }, [podcastName])

  let podcast = 'Still fetching...'
  try {
    podcast = data.map((podcast, index) => {
      return (
        <Podcasts
          key={index}
          id={podcast.id}
          nr={podcast.nr}
          publish={podcast.publish}
          duration={podcast.duration}
          description={podcast.description}
          subtitle={podcast.subtitle}
          url={podcast.url}
        />
      )
    })
  } catch (error) {
    podcast = 'Still fetching...Try the NavBar at bottom!'
  }

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
        <TopicChange>
          <TopicChanger currentTopic={podcastGenre} />
        </TopicChange>
        <PodCastChange>
          <SubNav
            currentTopic={podcastGenre}
            lastUpdates={lastUpdates}
            lastVisit={lastVisit}
          />
        </PodCastChange>
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
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100%;
  grid-template-areas:
    'header'
    'main'
    'footer';
`
const Headline = styled.header`
  font-family: 'Do Hyeon', sans-serif;
  height: 100%;
  margin: 0;
  padding: 15px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-area: header;
`
const PodcastContent = styled.main`
  overflow: auto;
  text-align: center;
  grid-area: main;
`
const Navigation = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: transparent;
  grid-area: footer;
  padding: 10px 0;
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
