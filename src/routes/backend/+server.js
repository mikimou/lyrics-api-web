import { N8N_API_KEY } from '$env/static/private'

export async function GET() {
	
    const fetchlyrics = async () => {
        const fetchedlyrics = await fetch('https://api.michalhicz.eu/webhook/lyrics', { 
            method: 'get', 
            headers: new Headers({
                'key': N8N_API_KEY,
            })
        })
        const lyrics = await fetchedlyrics.json()
        return lyrics.text
        }
	return new Response(await fetchlyrics());
}
