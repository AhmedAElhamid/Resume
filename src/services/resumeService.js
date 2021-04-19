import http from './httpService'

export function getResume(){
    return http.get("/resume")
}

