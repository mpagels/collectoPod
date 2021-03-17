import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import revisitingSunnydaleLogo from '../../assets/img/revisiting-sunnydale-sm.jpg'
import arschivUndReschercheLogo from '../../assets/img/arschiv-und-rescherche-sm.jpg'
import pfarrersToechterLogo from '../../assets/img/pfarrerstoechter-sm.jpg'
import eineStundeHistory from '../../assets/img/eine-stunde-history-sm.jpg'
import coronaPodcastUpdateLogo from '../../assets/img/corona-podcast-update-sm.jpg'
import spezialgelagerterSonderpodcastLogo from '../../assets/img/spezialgelagerter-sonderpodcast-sm.jpg'
import yourWrongAboutLogo from '../../assets/img/your-wrong-about-sm.jpg'
import apokalypseUndFilterkaffeeLogo from '../../assets/img/apokalypse-und-filterkaffee-sm.jpg'

export default function SubNavOther({ lastUpdates, lastVisit }) {
  return (
    <>
      <StyledLink to="/ndr-corona-update">
        <NavLogos src={coronaPodcastUpdateLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[10].valueOf() >
            lastVisit['ndr-corona-update']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/spezialgelagerter-sonderpodcast">
        <NavLogos src={spezialgelagerterSonderpodcastLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[9].valueOf() >
            lastVisit['spezialgelagerter-sonderpodcast']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/revisiting-sunnydale">
        <NavLogos src={revisitingSunnydaleLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[5].valueOf() >
            lastVisit['revisiting-sunnydale']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/eine-stunde-history">
        <NavLogos src={eineStundeHistory} />
        {lastUpdates.length > 0 &&
          lastUpdates[8].valueOf() >
            lastVisit['eine-stunde-history']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/rescherschen-und-arschiv">
        <NavLogos src={arschivUndReschercheLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[7].valueOf() >
            lastVisit['rescherschen-und-arschiv']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/zeit-pfarrerstoechter">
        <NavLogos src={pfarrersToechterLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[6].valueOf() >
            lastVisit['zeit-pfarrerstoechter']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/your-wrong-about">
        <NavLogos src={yourWrongAboutLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[11].valueOf() >
            lastVisit['your-wrong-about']?.lastVisited && (
            <NewContentIndicator />
          )}
      </StyledLink>
      <StyledLink to="/apokalypse-und-filterkaffee">
        <NavLogos src={apokalypseUndFilterkaffeeLogo} />
        {lastUpdates.length > 0 &&
          lastUpdates[12].valueOf() >
            lastVisit['apokalypse-und-filterkaffee']?.lastVisited && (
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
  width: 30px;
  height: 30px;
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
