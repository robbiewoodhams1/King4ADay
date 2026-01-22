
import bg from '../assets/background.png'
import letter from '../assets/letter.png'

type Props = {
    PlayerStats: null | { military: number, money: number, population: number}
}


export default function GameScreen({ PlayerStats }: Props){

    let real: [string, number][] = []


    if(PlayerStats){
        real = Object.entries(PlayerStats)
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
            <div className='flex flex-col'>
                {real.map(([name, value]) => {
                    return <h1 key={name} className='text-white'>{name}: {value}</h1>
                })}
            </div>

        </div>
    )
}