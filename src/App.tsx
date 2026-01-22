
import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import MenuScreen from "./screens/MenuScreen"

type Screen = 'game' | 'menu'
type GameState = null | { military: number, money: number, population: number }


export default function App() {
  const [screen, setScreen] = useState<Screen>('menu')
  const [gameState, setGameState] = useState<GameState>(null)

  function newGame(){
    setGameState({ military: Math.floor(Math.random() * 100), money: Math.floor(Math.random() * 100), population: Math.floor(Math.random() * 100) })
    setScreen('game')
  }


  return (
    <div>
      {screen === 'menu' && <MenuScreen onNewGame={newGame} />}
      {screen === 'game' && <GameScreen PlayerStats={gameState}/>}
    </div>
  )
}

