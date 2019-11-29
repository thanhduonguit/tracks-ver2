import axios from 'axios';

export default axios.create({
    baseURL: 'https://create-api-nodejs.herokuapp.com/'
});