import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {ChatComponent} from '../pages/chat/chat.component'
import { VidioComponent } from "../pages/vidio/vidio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ChatComponent, VidioComponent]
})
export class AppComponent {
  title = 'katana-angular';
}
