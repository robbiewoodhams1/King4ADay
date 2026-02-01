

import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import MenuScreen from "./screens/MenuScreen"
import type { Mode, GameState } from './game/types';
import { applyChoice, createNewGame } from "./game/engine";

export default function App() {
  const [screen, setScreen] = useState<Mode>('menu')
  const [gameState, setGameState] = useState<GameState>(null)

  function newGame(){
    setGameState(createNewGame())
    setScreen('game')
  }

  function handleChoose(choiceId: string){
    setGameState(prev => {
      if (!prev) return prev;
      return applyChoice(prev, choiceId);
    })
  }


  return (
    <div>
      {screen === 'menu' && <MenuScreen onNewGame={newGame} />}
      {screen === 'game' && gameState !== null && <GameScreen onMenu={() => setScreen("menu")} onRestart={newGame} onChoose={handleChoose} currentEventId={gameState.currentEventId} stats={gameState.stats} message={gameState.message} stage={gameState.stage} choices={gameState.choices}/>}
    </div>
  )
}

