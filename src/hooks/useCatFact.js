import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const updateRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(updateRandomFact, [])

  return { fact, updateRandomFact }
}
