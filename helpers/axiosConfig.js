const BASE_URL = 'https://tenor.googleapis.com/v2/search?';
const KEY = 'AIzaSyAm2en3HUioanO8ZqqW5MDZKfU0rqGj4sc';
const client_key = 'chai-roulette-production';
const lmt = 1;
const searchArray = ['funny', 'funny cry','funny laugh','funny money','funny tea','funny coffee']
const search = searchArray[Math.floor(Math.random() * searchArray.length)]
const method = 'get';
const config = {
    params: {
        key: KEY,
        client_key: client_key,
        limit: lmt,
        q: search,
        random: true
    }
}
export { config, BASE_URL };