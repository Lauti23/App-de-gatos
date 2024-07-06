import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // Cada vez que hay nuevo facto, solicitamos otra imagen
  useEffect(() => {
    if (!fact) return
    const threeWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeWords}?fontSize=50&fontColor=red`)
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
