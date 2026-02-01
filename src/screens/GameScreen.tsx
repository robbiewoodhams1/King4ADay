
import bg from '../assets/background.png'
import letter from '../assets/letter.png'
import type { GameActiveProps } from '../game/types';


type Props = GameActiveProps & {
    onChoose: (choiceId: string) => void,
    onRestart: () => void,
    onMenu: () => void
}

export default function GameScreen({ stats, stage, message, choices, onChoose, onRestart, onMenu }: Props){

    let PlayerStats: [string, number][] = []

    if(stats){
        PlayerStats = Object.entries(stats)
    }





    return(
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="h-[50%] relative items-center justify-center">
                <img 
                    className="h-full"
                    src={letter}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5">
                    <h1 className="text-black text-xl">{message}</h1>

                    {stage === "game_over" ? (
                        <div className="flex gap-2">
                        <button className="text-black" onClick={onRestart}>
                            New Game
                        </button>
                        <button className="text-black" onClick={onMenu}>
                            Menu
                        </button>
                        </div>
                    ) : (
                        choices.map(choice => (
                        <button
                            key={choice.id}
                            className="text-black"
                            onClick={() => onChoose(choice.id)}
                        >
                            {choice.text}
                        </button>
                        ))
                    )}
                </div>

            </div>


            <div className='absolute top-5 left-5 flex flex-col'>
                {PlayerStats.map(([name, value]) => {
                    return <h1 key={name} className='text-white'>{name}: {value}</h1>
                })}
            </div>




        </div>
    )
}