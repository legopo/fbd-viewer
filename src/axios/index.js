import axios from 'axios'

const config = axios.create({
    // baseURL: 'http://api.football-data.org/v2/',
    timeout: 1000,
    headers: {
      'X-Auth-Token': process.env.VUE_APP_API_TOKEN
    }
});

export default config;
