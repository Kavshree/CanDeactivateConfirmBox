import { AboutComponent } from './about.component';
import { SongListComponent } from './songList.component';
import { AddSongComponent } from './addSong.component';
import { AuthGuardConfirmation } from './authGuard.confirm';

export const Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'songList', component: SongListComponent},
    {path: 'addSong', component: AddSongComponent , canDeactivate: [AuthGuardConfirmation]},
    {path: '**', redirectTo: '/AddSongComponent', pathMatch: 'full'}
]