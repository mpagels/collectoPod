import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Podcasts({
  id,
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
      <Card key={id} isOpen={isOpen}>
        <Overview>
          <EpisodeNr>{nr}</EpisodeNr>
          <EpisodeInfos>
            <Title>{subtitle}</Title>
            <div>
              <Published>Published: {publish}</Published>
              <Duration>Duration: {duration}</Duration>
            </div>
          </EpisodeInfos>
        </Overview>
        {isOpen && (
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        )}
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
  box-shadow: 0 0 10px black;
  font-family: 'Nanum Gothic', sans-serif;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`

const EpisodeNr = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 26px;
`
const EpisodeInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.div`
  padding-top: 6px;
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
  color: white;
  text-decoration: none;
`
const Published = styled.div`
  font-size: 10px;
`
const Duration = styled.div`
  font-size: 10px;
`

const Description = styled.div`
  text-align: justify;
  padding: 25px;
  font-size: 14px;
`
