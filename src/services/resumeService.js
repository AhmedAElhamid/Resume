import http from './httpService'
import config from '../config/config.json'

const moviesEndPoint = config.apiEndPoint
export function getResume(){
    return http.get(moviesEndPoint)
}

