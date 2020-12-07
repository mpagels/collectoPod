import React from 'react'
import SubNavCrime from './SubNavCrime'
import SubNavOther from './SubNavOther'

export default function SubNav({ currentTopic, lastUpdates, lastVisit }) {
  return currentTopic === 'crime' ? (
    <SubNavCrime lastUpdates={lastUpdates} lastVisit={lastVisit} />
  ) : (
    <SubNavOther lastUpdates={lastUpdates} lastVisit={lastVisit} />
  )
}
