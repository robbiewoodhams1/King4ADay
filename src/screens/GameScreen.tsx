
import bg from '../assets/background.png'
import letter from '../assets/letter.png'
import type { GameActiveProps } from '../game/types';



export default function GameScreen({ stats, stage, message }: GameActiveProps){

    let PlayerStats: [string, number][] = []

    if(stats){
        PlayerStats = Object.entries(stats)
    }


    return(
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <img 
                className="h-[50%] items-center justify-center"
                src={letter}
            />

            <div className='absolute top-5 left-5 flex flex-col'>
                {PlayerStats.map(([name, value]) => {
                    return <h1 key={name} className='text-white'>{name}: {value}</h1>
                })}
                <h1>{stage}</h1>
                <h1>{message}</h1>
            </div>



        </div>
    )
}