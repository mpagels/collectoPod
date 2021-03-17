import React from 'react'
import styled from 'styled-components/macro'
import { Link, Switch } from 'react-router-dom'
import mordlustLogo from '../../assets/img/mordlust-big2.jpg'
import verbrechenDerVergangenheitLogo from '../../assets/img/verbrechen-der-vergangenheit_big2.jpg'
import verbrechenVonNebenAnLogo from '../../assets/img/verbrechen-von-nebenan-big2.jpg'
import zeitVerbrechenLogo from '../../assets/img/zeit-verbrechen-big2.jpg'

export default function CrimeNav({ lastUpdates, lastVisit }) {
  return (
    <Switch>
      <Podcasts>
        <Link to="/verbrechen-von-nebenan">
          <NavigateTo img={verbrechenVonNebenAnLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[0].valueOf() >
                lastVisit['verbrechen-von-nebenan']?.lastVisited && (
                <New data-cy="newContent">NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/mordlust">
          <NavigateTo img={mordlustLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[1].valueOf() > lastVisit?.mordlust?.lastVisited && (
                <New data-cy="newContent">NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/zeit-verbrechen">
          <NavigateTo img={zeitVerbrechenLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[2].valueOf() >
                lastVisit['zeit-verbrechen']?.lastVisited && (
                <New data-cy="newContent">NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/verbrechen-der-vergangenheit">
          <NavigateTo img={verbrechenDerVergangenheitLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[4].valueOf() >
                lastVisit['verbrechen-der-vergangenheit']?.lastVisited && (
                <New data-cy="newContent">NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
      </Podcasts>
    </Switch>
  )
}

const Podcasts = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  border: 0;

  align-self: center;
`
const NavigateTo = styled.button`
  border: 0;
  padding: 0;
  margin: 25px 25px 25px 25px;
  height: 280px;
  width: 280px;
  flex: 0 0 auto;
  box-shadow: 0 0 20px black;
  cursor: pointer;
  border-radius: 15px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const New = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 0;
  background-color: red;
  width: 150px;
  height: 30px;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  border-radius: 0 5px 5px 0;
`
