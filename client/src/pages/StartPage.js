import React, { useState } from 'react'
import { Link, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import arschivUndReschercheLogo from '../assets/img/arschiv-und-rescherche-big2.jpg'
import darfsEinBisschenMordLogo from '../assets/img/darfs-ein-bisschen-mord-sein-big2.jpg'
import eineStundeHistoryLogo from '../assets/img/eine-stunde-history-big2.jpg'
import mordlustLogo from '../assets/img/mordlust-big2.jpg'
import pfarrersToechterLogo from '../assets/img/pfarrerstoechter_big2.jpg'
import revisitingSunnydaleLogo from '../assets/img/revisiting-sunnydale-big2.jpg'
import verbrechenDerVergangenheitLogo from '../assets/img/verbrechen-der-vergangenheit_big2.jpg'
import verbrechenVonNebenAnLogo from '../assets/img/verbrechen-von-nebenan-big2.jpg'
import zeitVerbrechenLogo from '../assets/img/zeit-verbrechen-big2.jpg'

export default function StartPage() {
  const [isSecondPodcasts, setIsSecondPodcasts] = useState(false)

  const showCrime = () => {
    return (
      <Switch>
        <Podcasts>
          <Link to="/verbrechen-von-nebenan">
            <NavigateTo img={verbrechenVonNebenAnLogo} />
          </Link>
          <Link to="/mordlust">
            <NavigateTo img={mordlustLogo} />
          </Link>
          <Link to="/zeit-verbrechen">
            <NavigateTo img={zeitVerbrechenLogo} />
          </Link>
          <Link to="/darfs-ein-bisserl-mord-sein">
            <NavigateTo img={darfsEinBisschenMordLogo} />
          </Link>
          <Link to="/verbrechen_der_vergangenheit">
            <NavigateTo img={verbrechenDerVergangenheitLogo} />
          </Link>
        </Podcasts>
      </Switch>
    )
  }

  const showOther = () => {
    return (
      <Switch>
        <Podcasts>
          <Link>
            <NavigateTo img={revisitingSunnydaleLogo} />
          </Link>
          <Link>
            <NavigateTo img={eineStundeHistoryLogo} />
          </Link>
          <Link>
            <NavigateTo img={arschivUndReschercheLogo} />
          </Link>
          <Link>
            <NavigateTo img={pfarrersToechterLogo} />
          </Link>
        </Podcasts>
      </Switch>
    )
  }

  return (
    <Screen>
      <Header>
        <AppTitle>collectoPod</AppTitle>
        <AppSubTitle>Your favorite podcasts in one place</AppSubTitle>
      </Header>
      <PodcastSwitcher>
        <Switcher onClick={() => setIsSecondPodcasts(false)}>Crime</Switcher>
        <Switcher onClick={() => setIsSecondPodcasts(true)}>Other</Switcher>
      </PodcastSwitcher>
      {isSecondPodcasts ? showOther() : showCrime()}
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
  height: 280px;
  width: 280px;
  flex: 0 0 auto;
  box-shadow: 0 0 20px black;
  cursor: pointer;
  border-radius: 15px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`
