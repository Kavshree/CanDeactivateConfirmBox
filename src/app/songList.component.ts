import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from './songInterface.interface';
import { SongService } from './songService.service';

@Component({
    selector: 'song-list',
    template: `<div class="container"><div>
    <h4 class="text-center">SONG LIST</h4>
        <table class="table table-bordered">
            <tr>
                <th> ID</th>
                <th> Name</th>
                <th>Singers </th>
                <th> Year</th>
                <th>Album </th>
                <th>Genre </th>
            </tr>
            <tr *ngFor="let s of songList">
                <td>{{s.id}}</td>
                <td> {{s.Name}}</td>
                <td>{{s.Singers}} </td>
                <td> {{s.Year}}</td>
                <td>{{s.Album}} </td>
                <td>{{s.Genre}} </td>
            </tr>
        </table>
        <button class="btn btn-info" (click)="addSong()">Add Song</button>
    </div></div>`
})

export class SongListComponent {
    songList;
    constructor(private _SongService: SongService, private _Router: Router) {}
    ngOnInit() {
        this._SongService.getAllSongs().subscribe(response => {
            this.songList = response;
        })
    }
    addSong() {
        this._Router.navigate(['/addSong'])
    }
}