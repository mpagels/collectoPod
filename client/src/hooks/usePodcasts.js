import { useState } from 'react'
import { useQuery } from 'react-query'
import getLastVisitFromLocalStorage from '../utils/podcastNames'

export default function usePodcasts() {
  const [lastVisit, setLastVisit] = useState(getLastVisitFromLocalStorage())

  const { isLoading, error, data } = useQuery('mongo', () =>
    fetch('/api') //${window.location.hostname}
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
