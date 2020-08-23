import React from 'react'
import styled from 'styled-components/macro'

export default function Podcast() {
  return (
    <Screen>
      <Headline>Verbrechen von nebenan</Headline>
      <PodcastContent></PodcastContent>
      <Navigation>Lorem</Navigation>
    </Screen>
  )
}

const Screen = styled.main`
  display: grid;
  grid-template-rows: 20% 80 20%;
  height: 100vh;
  width: 100%;
`
const Headline = styled.section``
const PodcastContent = styled.main``
const Navigation = styled.section``
