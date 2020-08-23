import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Podcast({
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
      <Card key={key} onClick={() => handleClick()}>
        <HeaderArea>
          <EpisodeNumber>{nr}</EpisodeNumber>
          <EpisodeTitle> {subtitle}</EpisodeTitle>
        </HeaderArea>
        {isOpen && <Description>{description}</Description>}
      </Card>
    </>
  )
}

const Card = styled.section`
  background-color: grey;
  border-radius: 10px;
`

const HeaderArea = styled.div`
  display: flex;
`

const EpisodeNumber = styled.div``

const EpisodeTitle = styled.div``

const Description = styled.div``
