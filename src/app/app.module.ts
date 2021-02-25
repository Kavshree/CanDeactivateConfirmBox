import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongService } from './songService.service'
import { AppComponent } from './app.component';
import { Routes } from './routes';
import { AboutComponent } from './about.component';
import { SongListComponent } from './songList.component';
import { AddSongComponent } from './addSong.component';
import { AuthGuardConfirmation } from './authGuard.confirm';


@NgModule({
  declarations: [
    AppComponent, AboutComponent, SongListComponent, AddSongComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(Routes)
  ],
  providers: [SongService, AuthGuardConfirmation],
  bootstrap: [AppComponent]
})
export class AppModule { }
