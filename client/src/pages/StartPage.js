import React from 'react'
import styled from 'styled-components/macro'
import CrimeNav from '../components/Nav/CrimeNav'
import OtherNav from '../components/Nav/OtherNav'
import Lottie from 'react-lottie'
import animationData from '../assets/lotti/search-processing2.json'
import { ReactComponent as SettingSVG } from '../assets/svg/settings-white-24dp.svg'
import { Link, Switch } from 'react-router-dom'

export default function StartPage({
  isLoading,
  lastUpdates,
  lastVisit,
  isSecondPodcasts,
  setIsSecondPodcasts,
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Screen>
      <Header>
        <AppTitle>collectoPod</AppTitle>
        <AppSubTitle>Your favorite podcasts in one place</AppSubTitle>
        {isLoading ? null : (
          <SettingWrapper>
            <Link to="/settings">
              <SettingButton />
            </Link>
          </SettingWrapper>
        )}
      </Header>
      {isLoading ? (
        <Lottie options={defaultOptions} height={200} width={200} />
      ) : (
        <>
          <PodcastSwitcher>
            <Switcher onClick={() => setIsSecondPodcasts(false)}>
              crime
            </Switcher>
            <Switcher onClick={() => setIsSecondPodcasts(true)}>other</Switcher>
          </PodcastSwitcher>
          {isSecondPodcasts ? (
            <OtherNav lastUpdates={lastUpdates} lastVisit={lastVisit} />
          ) : (
            <CrimeNav lastUpdates={lastUpdates} lastVisit={lastVisit} />
          )}
        </>
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
  position: relative;
`
const SettingWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SettingButton = styled(SettingSVG)`
  cursor: pointer;
  fill: grey;
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
