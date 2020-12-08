import { useState } from 'react'
import { useQuery } from 'react-query'

export default function usePodcasts() {
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

  const { isLoading, error, data } = useQuery('mongo', () =>
    fetch(`http://localhost:7532/api`) //${window.location.hostname}
      .then((res) => res.json())
  )

  if (isLoading) return { isLoading }
  if (error) return { error }
  return {
    isLoading,
    data,
    setLastVisit,
    lastVisit,
  }
}
