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

export default function SubNav({ currentTopic }) {
  if (currentTopic === 'crime') {
    return (
      <>
        <StyledLink to="/verbrechen-von-nebenan">
          <NavLogos src={verbrechenVonNebenAnLogo} />
        </StyledLink>
        <StyledLink to="/mordlust">
          <NavLogos src={mordlustLogo} />
        </StyledLink>
        <StyledLink to="/zeit-verbrechen">
          <NavLogos src={zeitVerbrechenLogo} />
        </StyledLink>
        <StyledLink to="/darfs-ein-bisserl-mord-sein">
          <NavLogos src={darfsEinBisschenMordLogo} />
        </StyledLink>
        <StyledLink to="/verbrechen_der_vergangenheit">
          <NavLogos src={verbrechenDerVergangenheitLogo} />
        </StyledLink>
      </>
    )
  } else {
    return (
      <>
        <StyledLink to="/revisiting_sunnydale">
          <NavLogos src={revisitingSunnydaleLogo} />
        </StyledLink>
        <StyledLink to="/rescherschen_und_arschiv">
          <NavLogos src={arschivUndReschercheLogo} />
        </StyledLink>
        <StyledLink to="/zeit_pfarrerstoechter">
          <NavLogos src={pfarrersToechterLogo} />
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
`
