import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Podcasts({
  key,
  nr,
  subtitle,
  description,
  url,
  publish,
  duration,
}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Card key={key} isOpen={isOpen}>
        <Overview>
          <EpisodeNr>{nr}</EpisodeNr>
          <EpisodeInfos>
            <EpisodeTitle>{subtitle}</EpisodeTitle>
            <Published>Published: {publish}</Published>
            <Duration>Duration: {duration}</Duration>
          </EpisodeInfos>
        </Overview>
        {isOpen && <Description>{description}</Description>}
        <ReadMore onClick={() => handleClick()}>
          {' '}
          {isOpen ? 'CLOSE' : 'READ MORE...'}
        </ReadMore>
        <Download href={url}>DOWNLOAD</Download>
      </Card>
    </>
  )
}

const Card = styled.section`
  display: grid;
  grid-template-rows: 80px ${(props) => props.isOpen && 'auto'} 40px 60px;
  background-color: #3c3c3e;
  border-radius: 10px;
  margin: 15px;
  box-shadow: 0 0 15px black;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

const EpisodeNr = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 32px;
`
const EpisodeInfos = styled.div`
  display: flex;
  flex-direction: column;
`
const EpisodeTitle = styled.div`
  padding: 6px;
`

const ReadMore = styled.div`
  cursor: pointer;
  text-align: center;
  height: 100%;
  align-self: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Download = styled.a`
  background-color: #50805b;
  height: 100%;
  border-radius: 0 0 10px 10px;
  align-self: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Published = styled.div``
const Duration = styled.div``

const Description = styled.div`
  text-align: justify;
  padding: 25px;
`
