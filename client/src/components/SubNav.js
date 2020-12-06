import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import darfsEinBisschenMordLogo from '../assets/img/darfs-ein-bisschen-mord-sein-sm.jpg'
import mordlustLogo from '../assets/img/mordlust-sm.jpg'
import verbrechenDerVergangenheitLogo from '../assets/img/verbrechen-der-vergangenheit_sm.jpg'
import verbrechenVonNebenAnLogo from '../assets/img/verbrechen-von-nebenan-sm.jpg'
import zeitVerbrechenLogo from '../assets/img/zeit-verbrechen-sm.jpg'
import revisitingSunnydaleLogo from '../assets/img/revisiting-sunnydale-sm.jpg'
import arschivUndReschercheLogo from '../assets/img/arschiv-und-rescherche-sm.jpg'
import pfarrersToechterLogo from '../assets/img/pfarrerstoechter-sm.jpg'
import eineStundeHistory from '../assets/img/eine-stunde-history-sm.jpg'

export default function SubNav({ currentTopic, lastUpdates, lastVisit }) {
  if (currentTopic === 'crime') {
    return (
      <>
        <StyledLink to="/verbrechen-von-nebenan">
          <NavLogos src={verbrechenVonNebenAnLogo} />
          {lastUpdates.length > 0 &&
            lastUpdates[0].valueOf() > lastVisit?.verbrechen?.lastVisited && (
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
              lastVisit?.zeit_verbrechen?.lastVisited && (
              <NewContentIndicator />
            )}
        </StyledLink>
        <StyledLink to="/darfs-ein-bisserl-mord-sein">
          <NavLogos src={darfsEinBisschenMordLogo} />
          {lastUpdates.length > 0 &&
            lastUpdates[3].valueOf() >
              lastVisit?.darfs_ein_bisschen_mord_sein?.lastVisited && (
              <NewContentIndicator />
            )}
        </StyledLink>
        <StyledLink to="/verbrechen_der_vergangenheit">
          <NavLogos src={verbrechenDerVergangenheitLogo} />
          {lastUpdates.length > 0 &&
            lastUpdates[4].valueOf() >
              lastVisit?.verbrechen_der_vergangenheit?.lastVisited && (
              <NewContentIndicator />
            )}
        </StyledLink>
      </>
    )
  } else {
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
}

const NavLogos = styled.img`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px black;
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
