import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import mordlustLogo from '../../assets/img/mordlust-sm.jpg'
import verbrechenDerVergangenheitLogo from '../../assets/img/verbrechen-der-vergangenheit_sm.jpg'
import verbrechenVonNebenAnLogo from '../../assets/img/verbrechen-von-nebenan-sm.jpg'
import zeitVerbrechenLogo from '../../assets/img/zeit-verbrechen-sm.jpg'

export default function SubNavCrime({ lastUpdates, lastVisit }) {
  return (
    <>
      <StyledLink to="/verbrechen-von-nebenan">
        <NavLogos src={verbrechenVonNebenAnLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[0].valueOf() >
            lastVisit['verbrechen-von-nebenan']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/mordlust">
        <NavLogos src={mordlustLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[1].valueOf() > lastVisit?.mordlust?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/zeit-verbrechen">
        <NavLogos src={zeitVerbrechenLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[2].valueOf() >
            lastVisit['zeit-verbrechen']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/verbrechen-der-vergangenheit">
        <NavLogos src={verbrechenDerVergangenheitLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[4].valueOf() >
            lastVisit['verbrechen-der-vergangenheit']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
    </>
  )
}

const NavLogos = styled.img`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px black;
  outline: none;
`
const StyledLink = styled(Link)`
  display: flex;
  position: relative;
`

const NewContentIndicator = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  height: 12px;
  width: 12px;
  background-color: red;
  border-radius: 50%;
`
