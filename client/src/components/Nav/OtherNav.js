import React from 'react'
import styled from 'styled-components/macro'
import { Link, Switch } from 'react-router-dom'
import arschivUndReschercheLogo from '../../assets/img/arschiv-und-rescherche-big2.jpg'
import eineStundeHistoryLogo from '../../assets/img/eine-stunde-history-big2.jpg'
import pfarrersToechterLogo from '../../assets/img/pfarrerstoechter_big2.jpg'
import revisitingSunnydaleLogo from '../../assets/img/revisiting-sunnydale-big2.jpg'
import coronaPodcastUpdateLogo from '../../assets/img/corona-podcast-update-big2.jpg'
import spezialgelagerterSonderpodcastLogo from '../../assets/img/spezialgelagerter-sonderpodcast-big2.jpg'

export default function OtherNav({ lastUpdates, lastVisit }) {
  return (
    <Switch>
      <Podcasts>
        <Link to="/ndr-corona-update">
          <NavigateTo img={coronaPodcastUpdateLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[10].valueOf() >
                lastVisit?.ndr_corona_update?.lastVisited && (
                <New>NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/spezialgelagerter-sonderpodcast">
          <NavigateTo img={spezialgelagerterSonderpodcastLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[9].valueOf() >
                lastVisit?.spezialgelagerter_sonderpodcast?.lastVisited && (
                <New>NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/revisiting_sunnydale">
          <NavigateTo img={revisitingSunnydaleLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[5].valueOf() >
                lastVisit?.revisiting_sunnydale?.lastVisited && (
                <New>NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="/eineStundeHistory">
          <NavigateTo img={eineStundeHistoryLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[8].valueOf() >
                lastVisit?.eineStundeHistory?.lastVisited && (
                <New>NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="rescherschen_und_arschiv">
          <NavigateTo img={arschivUndReschercheLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[7].valueOf() >
                lastVisit?.rescherschen_und_arschiv?.lastVisited && (
                <New>NEUER INHALT</New>
              )}
          </NavigateTo>
        </Link>
        <Link to="zeit_pfarrerstoechter">
          <NavigateTo img={pfarrersToechterLogo}>
            {lastUpdates.length > 0 &&
              lastUpdates[6].valueOf() >
                lastVisit?.zeit_pfarrerstoechter?.lastVisited && (
                <New>NEUER INHALT</New>
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
