// import React from 'react';
// import axios from 'axios';
import axios from 'axios-jsonp-pro';

const API_BASE = 'https://jsonplaceholder.typicode.com/todos';

class DataService {
    getList(){
        console.log("getList")
        
        // return axios.get( ... );
        return axios.jsonp(
            API_BASE,
            {
                timeout: 2000
            }
        );        
    }

    getDetail( idx ){
        console.log("getDetail")
        
        return axios.jsonp(
            API_BASE + `/${ idx }`,
            {
                timeout: 2000
            }
        );        
    }
}

export default DataService;