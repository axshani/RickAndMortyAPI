const API_URL = "https://rickandmortyapi.com/api"

export async function getCharactersFromAPI() {
    return fetch(`${API_URL}/character`).then(res => res.json())
}
