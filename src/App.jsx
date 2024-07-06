import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, updateRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    updateRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos!</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`${fact} cat`} />}
      <button onClick={handleClick}>Nuevo facto</button>
    </main>
  )
}
