import { useEffect, useState } from 'react'

export default function usePodcasts() {
  const [verbrechen, setVerbrechen] = useState([])
  const [mordlust, setMordlust] = useState([])
  const [zeitVerbrechen, setZeitVerbrechen] = useState([])
  const [darfsEinBisschenMordSein, setDarfsEinBisschenMordSein] = useState([])
  const [verbrechenDerVergangenheit, setVerbrechenDerVergangenheit] = useState(
    []
  )
  const [revisitingSunnydale, setRevisitingSunnydale] = useState([])
  const [zeitPfarrerstoechter, setZeitPfarrerstoechter] = useState([])
  const [rescherschenUndArschiv, setRescherschenUndArschiv] = useState([])
  const [eineStundeHistory, setEineStundeHistory] = useState([])
  const [lastUpdated, setLastUpdated] = useState([])

  const [lastVisit, setLastVisit] = useState(
    JSON.parse(
      localStorage.getItem('lastVisited') ??
        `
      {
        "verbrechen":
          {
            "lastVisited":0
          },
          "mordlust":
          {
            "lastVisited":0
          },
          "zeit_verbrechen":
          {
            "lastVisited":0
          },
          "darfs_ein_bisschen_mord_sein":
          {
            "lastVisited":0
          },
          "verbrechen_der_vergangenheit":
          {
            "lastVisited":0
          },
          "revisiting_sunnydale":
          {
            "lastVisited":0
          },
          "zeit_pfarrerstoechter":
          {
            "lastVisited":0
          },
          "rescherschen_und_arschiv":
          {
            "lastVisited":0
          },
          "eineStundeHistory":
          {
            "lastVisited":0
          }
        }`
    )
  )
  useEffect(() => {
    fetch(`http://localhost:7532/api`) //${window.location.hostname}
      .then((res) => res.json())
      .then((data) => {
        setVerbrechen(data[1])
        setMordlust(data[2])
        setZeitVerbrechen(data[3])
        setDarfsEinBisschenMordSein(data[4])
        setVerbrechenDerVergangenheit(data[5])
        setRevisitingSunnydale(data[6])
        setZeitPfarrerstoechter(data[7])
        setRescherschenUndArschiv(data[8])
        setEineStundeHistory(data[9])
        setLastUpdated(data[0])
      })
  }, [])

  return {
    verbrechen,
    lastUpdated,
    setLastVisit,
    lastVisit,
    eineStundeHistory,
    rescherschenUndArschiv,
    zeitPfarrerstoechter,
    mordlust,
    zeitVerbrechen,
    darfsEinBisschenMordSein,
    verbrechenDerVergangenheit,
    revisitingSunnydale,
  }
}
