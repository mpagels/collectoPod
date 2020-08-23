import React, { useState } from 'react'
import styled from 'styled-components/macro'
import mordlustLogo from '../assets/img/mordlust-big.jpg'
import verbrechenVonNebenAnLogo from '../assets/img/verbrechen-von-nebenan-big.jpg'
import zeitVerbrechenLogo from '../assets/img/zeit-verbrechen-big.jpg'
import darfsEinBisschenMordLogo from '../assets/img/darfs-ein-bisschen-mord-sein-big.jpg'
import verbrechenDerVergangenheitLogo from '../assets/img/verbrechen-der-vergangenheit_big.jpg'
import revisitingSunnydaleLogo from '../assets/img/revisiting-sunnydale-big.jpg'
import eineStundeHistoryLogo from '../assets/img/eine-stunde-history-big.jpg'
import arschivUndReschercheLogo from '../assets/img/arschiv-und-rescherche-big.jpg'
import pfarrersToechterLogo from '../assets/img/pfarrerstoechter_big.jpg'

export default function StartPage() {
  const [isSecondPodcasts, setIsSecondPodcasts] = useState(false)

  const showCrime = () => {
    return (
      <Podcasts>
        <NavigateTo img={verbrechenVonNebenAnLogo} />
        <NavigateTo img={mordlustLogo} />
        <NavigateTo img={zeitVerbrechenLogo} />
        <NavigateTo img={darfsEinBisschenMordLogo} />
        <NavigateTo img={verbrechenDerVergangenheitLogo} />
      </Podcasts>
    )
  }

  const showOther = () => {
    return (
      <Podcasts>
        <NavigateTo img={revisitingSunnydaleLogo} />
        <NavigateTo img={eineStundeHistoryLogo} />
        <NavigateTo img={arschivUndReschercheLogo} />
        <NavigateTo img={pfarrersToechterLogo} />
      </Podcasts>
    )
  }

  return (
    <Screen>
      <Header>
        <AppTitle>collectoPod</AppTitle>
        <AppSubTitle>
          find & download the latest of your favorite podcasts
        </AppSubTitle>
      </Header>
      <PodcastSwitcher>
        <Switcher onClick={() => setIsSecondPodcasts(false)}>Crime</Switcher>
        <Switcher onClick={() => setIsSecondPodcasts(true)}>Other</Switcher>
      </PodcastSwitcher>
      {isSecondPodcasts ? showOther() : showCrime()}
      <Collect>
        <Collector>Collect all data again</Collector>
      </Collect>
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

const Podcasts = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  border: 0;

  align-self: center;
`
const NavigateTo = styled.button`
  border: 0;
  padding: 0;
  margin: 25px 25px 25px 25px;
  height: 220px;
  width: 220px;
  flex: 0 0 auto;
  box-shadow: 0 0 20px black;
  cursor: pointer;
  border-radius: 15px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`
const Podcast = styled.img`
  width: 140px;
  border-radius: 15px;
  padding: 0;
  border: 0;
`
const Collect = styled.section`
  justify-self: center;
  align-self: center;
`

const Collector = styled(Switcher)`
  width: auto;
  margin: 0;
`
