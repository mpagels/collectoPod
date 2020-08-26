import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import darfsEinBisschenMordLogo from '../assets/img/darfs-ein-bisschen-mord-sein-sm.jpg'
import mordlustLogo from '../assets/img/mordlust-sm.jpg'
import verbrechenDerVergangenheitLogo from '../assets/img/verbrechen-der-vergangenheit_sm.jpg'
import verbrechenVonNebenAnLogo from '../assets/img/verbrechen-von-nebenan-sm.jpg'
import zeitVerbrechenLogo from '../assets/img/zeit-verbrechen-sm.jpg'

export default function SubNav() {
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
}

const NavLogos = styled.img`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px black;
`
const StyledLink = styled(Link)`
  display: flex;
`
