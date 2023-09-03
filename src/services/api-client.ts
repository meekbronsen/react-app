// services folder hold functionality
// In this modulet we will create a new access client with custom config

import axios, {CanceledError} from "axios";

export default axios.create({ 
    // call axios.create and give it a config object 
    // grab everything except /users to make it reusable
    baseURL: 'https://jsonplaceholder.typicode.com',

    // Optionally we can set a HTTP header and it will be passed with every HTTP request
    // headers: {
       // some servers may require to pass an api key with every HTTP request
    //     'api-key': '...'
    // }

})

export {CanceledError}