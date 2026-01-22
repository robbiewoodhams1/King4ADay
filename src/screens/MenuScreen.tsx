import MenuBG from '../assets/menu.gif'

type Props = {
    onNewGame: () => void;
}

export default function MenuScreen({ onNewGame }: Props){
    return(
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${MenuBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <button
                className="text-white font-bold text-2xl items-center justify-center cursor-pointer bg-black/50 p-5 rounded-lg"
                onClick={onNewGame}
            > 
                New Game
            </button>
        </div>
    )
}