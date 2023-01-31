import axios from 'axios'

const url = 'https://api.imgflip.com';

const ApiService = {

    get() {
        return axios
        .get(`${url}/get_memes`)
    }
}

export { ApiService }