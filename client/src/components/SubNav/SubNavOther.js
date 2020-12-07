import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import revisitingSunnydaleLogo from '../../assets/img/revisiting-sunnydale-sm.jpg'
import arschivUndReschercheLogo from '../../assets/img/arschiv-und-rescherche-sm.jpg'
import pfarrersToechterLogo from '../../assets/img/pfarrerstoechter-sm.jpg'
import eineStundeHistory from '../../assets/img/eine-stunde-history-sm.jpg'

export default function SubNavOther({ lastUpdates, lastVisit }) {
  return (
    <>
      <StyledLink to="/revisiting_sunnydale">
        <NavLogos src={revisitingSunnydaleLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[5].valueOf() >
            lastVisit?.revisiting_sunnydale?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/eineStundeHistory">
        <NavLogos src={eineStundeHistory} />
        {lastUpdates.length > 0 &&
          lastUpdates[8].valueOf() >
            lastVisit?.eineStundeHistory?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/rescherschen_und_arschiv">
        <NavLogos src={arschivUndReschercheLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[7].valueOf() >
            lastVisit?.rescherschen_und_arschiv?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/zeit_pfarrerstoechter">
        <NavLogos src={pfarrersToechterLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[6].valueOf() >
            lastVisit?.zeit_pfarrerstoechter?.lastVisited && (
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
