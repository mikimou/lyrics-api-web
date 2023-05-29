import { N8N_API_KEY } from '$env/static/private'

// export const load = async () => {
//     const fetchlyrics = async () => {
//     const fetchedlyrics = await fetch('https://api.michalhicz.eu/webhook/lyrics', { 
//         method: 'get', 
//         headers: new Headers({
//             'key': N8N_API_KEY,
//         })
//     })
//     const lyrics = await fetchedlyrics.json()
//     return lyrics.text
//     }
//     return {
//     lyrics: fetchlyrics() 
//     }
// }

export const actions = {
    default: async ({request}) => {

        const data = await request.formData()
        const prompt = data.get('prompt');

        const fetchlyrics = async () => {
            const fetchedlyrics = await fetch('https://api.michalhicz.eu/webhook/lyrics', { 
                method: 'get', 
                headers: new Headers({
                    'key': N8N_API_KEY,
                    'prompt' : prompt,
                })
            })
            const lyrics = await fetchedlyrics.json()
            return lyrics.text
            }
            return JSON.parse(JSON.stringify(await fetchlyrics()))
    }
}