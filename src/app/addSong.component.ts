import { Component } from '@angular/core';
import { SongService } from './songService.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'add-song',
    template: `<div class="container"><div class="col-md-6">
    <h4 class="text-center">ADD SONG</h4>
        <form [formGroup]="myForm">
            Name: <input type="text" class="form-control" formControlName="Name" /> <br/>
            <div class="alert alert-danger alert-dismissible fade show" *ngIf="validate('Name')">Name is required</div>

            Singers: <input type="text" class="form-control" formControlName="Singers"/> <br/>
            <div class="alert alert-danger alert-dismissible fade show" *ngIf="validate('Singers')">Singers is required</div>

            Year: <input type="text"  class="form-control" formControlName="Year"/> <br/>
            <div class="alert alert-danger alert-dismissible fade show" *ngIf="validate('Year')">Year is required</div>

            Album: <input type="text" class="form-control" formControlName="Album"/> <br/>
            <div class="alert alert-danger alert-dismissible fade show" *ngIf="validate('Album')">Album is required</div>

            Genre: <select class="form-control" formControlName="Genre"> 
                     <option value="">Select Genre</option>
                    <option *ngFor="let g of GenreList">{{g.name}}</option>
                </select>
            <div class="alert alert-danger alert-dismissible fade show" *ngIf="validate('Genre')">Genre is required</div>
            <br/>
            <button class="btn btn-info" (click)="submitNewSong()" [disabled]="myForm.status == 'INVALID'">Submit</button>
        </form>
    </div></div>`
})

export class AddSongComponent {
    GenreList; myForm; newSongObj;isFormValid=false;
    constructor(private _SongService: SongService, private _fb: FormBuilder, private _Router: Router){
        this.myForm = this._fb.group({
            "Name": ['', Validators.required],
            "Singers":  ['', Validators.required],
            "Year":  ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
            "Album":  ['', Validators.required],
            "Genre":  ['', Validators.required]
        })
    }
    ngOnInit() {
        this._SongService.getAllGenres().subscribe(response => {
            this.GenreList = response;
        })

    }

    validate(control) {
        console.log(this.myForm.get(control))
        let isCtrlErrors = this.myForm.get(control).errors;
        let isCtrlChanged = this.myForm.get(control).dirty;
        if(isCtrlErrors && isCtrlChanged && (isCtrlErrors.required || isCtrlErrors.pattern)) {
            return true;
        } else {
            return false;
        }
    }

    submitNewSong() {
        this.newSongObj = this.myForm.value;
        this._SongService.postSong(this.newSongObj).subscribe(response => {
            alert(`Successfully Added ${this.newSongObj.Name}`);
            this._Router.navigate(['/songList'])
        })
    }
}