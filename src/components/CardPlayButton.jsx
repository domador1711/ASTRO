import { Pause,Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore";


export function CardPlayButton({id}){
    const {currentMusic,setCurrentMusic, setIsPlaying, isPlaying} = usePlayerStore(state => state)

    const handleClick = () => {
        if(isPlayingPlaylist){
            setIsPlaying(false)
            return
        }
       fetch(`/api/get-info-playlist.json?id=${id}`)
       ,then(response => response.json())
       .then(data => {
           const {songs,playlist} = data
           setCurrentMusic({playlist,songs,song:songs[0]})
          
           setIsPlaying(true)
       })
    }

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4"
        >{isPlayingPlaylist ? <Pause/> : <Play/>}
        </button>
    )
} 