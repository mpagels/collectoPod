import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function TopicChanger({ currentTopic }) {
  if (currentTopic === 'crime') {
    return (
      <Link to="/revisiting-sunnydale">
        <Button>ot</Button>
      </Link>
    )
  } else {
    return (
      <Link to="/verbrechen-von-nebenan">
        <Button>cr</Button>
      </Link>
    )
  }
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: #545480;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 24px;
  font-family: 'Do Hyeon', sans-serif;
  box-shadow: 0 0 5px black;
  outline: none;
`
