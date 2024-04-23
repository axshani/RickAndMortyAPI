const API_URL = "https://rickandmortyapi.com/api"

export async function getCharactersFromAPI() {
    return fetch(`${API_URL}/character`).then(res => res.json())
}

export async function getSingleCharacterFromAPI(name) {
    return fetch(`${API_URL}/character/?name=${name}`).then(res => res.json())
}
