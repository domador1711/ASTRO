import { allPlaylists,songs as allSongs } from "@/lib/spotify";

export async function GET(params,request) {
const {url} = request
const rulObject = new URL(url)
const id  = rulObject.searchParams.get("id")
const playlist = allPlaylists.find(playlist => playlist.id === id)
const songs = allSongs.filtrer(song => song.albumId === playlist?.albumId)

return new Response(JSON.stringify({playlist,songs}), {
    headers: {
        'Content-Type': 'application/json',
    }
})}