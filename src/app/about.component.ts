import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: ` <h4 class="text-center">ABOUT</h4>
    <div class="card text-center" style="width: 18rem;">
        <img class="card-img-top" src="./assets/songIcon.png" alt="Card image cap" width="250" height="250">
        <div class="card-body">
            <p class="card-text">About: This app provides information about the songs</p>
        </div>
    </div>`
})

export class AboutComponent {

}