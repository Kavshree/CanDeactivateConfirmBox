import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class SongService{
    constructor(private _http: HttpClient){}
    getAllSongs() {
        return this._http.get(`http://localhost:3000/songs`)
    }
    getAllGenres() {
        return this._http.get(`http://localhost:3000/genres`)
    }
    postSong(obj) {
        return this._http.post(`http://localhost:3000/songs`, obj)
    }
}