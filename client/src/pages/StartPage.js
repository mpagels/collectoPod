import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CrimeNav from '../components/Nav/CrimeNav'
import OtherNav from '../components/Nav/OtherNav'

export default function StartPage({ lastUpdates, lastVisit }) {
  const [isSecondPodcasts, setIsSecondPodcasts] = useState(false)

  return (
    <Screen>
      <Header>
        <AppTitle>collectoPod</AppTitle>
        <AppSubTitle>Your favorite podcasts in one place</AppSubTitle>
      </Header>
      <PodcastSwitcher>
        <Switcher onClick={() => setIsSecondPodcasts(false)}>crime</Switcher>
        <Switcher onClick={() => setIsSecondPodcasts(true)}>other</Switcher>
      </PodcastSwitcher>
      {isSecondPodcasts ? (
        <OtherNav lastUpdates={lastUpdates} lastVisit={lastVisit} />
      ) : (
        <CrimeNav lastUpdates={lastUpdates} lastVisit={lastVisit} />
      )}
    </Screen>
  )
}

const Screen = styled.main`
  display: grid;
  grid-template-rows: 20% 15% 50% 15%;
  height: 100vh;
  width: 100%;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
`
const AppTitle = styled.h1`
  text-align: center;
  margin: 10px 0 0 0;
  font-family: 'Do Hyeon', sans-serif;
`
const AppSubTitle = styled.h3`
  text-align: center;
  margin: 5px 0 0 0;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  padding: 20px;
`

const PodcastSwitcher = styled.section`
  display: flex;
  justify-self: center;
  align-self: center;
`

const Switcher = styled.button`
  background-color: #545480;
  border: 0;
  padding: 10px;
  width: 100px;
  margin: 0 10px 0 10px;
  border-radius: 15px;
  color: white;
  font-size: 18px;
  cursor: pointer;
`
