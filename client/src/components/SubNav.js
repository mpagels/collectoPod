import React from 'react'
import styled from 'styled-components'
import { Switch, Link } from 'react-router-dom'
import mordlustLogo from '../assets/img/mordlust-sm.jpg'
import verbrechenVonNebenAnLogo from '../assets/img/verbrechen-von-nebenan-sm.jpg'
import zeitVerbrechenLogo from '../assets/img/zeit-verbrechen-sm.jpg'
import darfsEinBisschenMordLogo from '../assets/img/darfs-ein-bisschen-mord-sein-sm.jpg'
import verbrechenDerVergangenheitLogo from '../assets/img/verbrechen-der-vergangenheit_sm.jpg'

export default function SubNav() {
  return (
    <>
      <Link to="/verbrechen-von-nebenan">
        <NavLogos src={verbrechenVonNebenAnLogo} />
      </Link>
      <Link to="/mordlust">
        <NavLogos src={mordlustLogo} />
      </Link>
      <Link to="/zeit-verbrechen">
        <NavLogos src={zeitVerbrechenLogo} />
      </Link>
      <Link to="/darfs-ein-bisserl-mord-sein">
        <NavLogos src={darfsEinBisschenMordLogo} />
      </Link>
      <Link to="/verbrechen_der_vergangenheit">
        <NavLogos src={verbrechenDerVergangenheitLogo} />
      </Link>
    </>
  )
}

const NavLogos = styled.img`
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px black;
`
