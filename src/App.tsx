

import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import MenuScreen from "./screens/MenuScreen"
import type { Mode, GameState } from './game/types';
import { createNewGame } from "./game/engine";

export default function App() {
  const [screen, setScreen] = useState<Mode>('menu')
  const [gameState, setGameState] = useState<GameState>(null)

  function newGame(){
    setGameState(createNewGame())
    setScreen('game')
  }


  return (
    <div>
      {screen === 'menu' && <MenuScreen onNewGame={newGame} />}
      {screen === 'game' && gameState !== null && <GameScreen stats={gameState.stats} message={gameState.message} stage={gameState.stage}/>}
    </div>
  )
}

