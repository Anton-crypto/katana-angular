import { Component, Input, Output,OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

import io from 'socket.io-client';

@Component({
  selector: 'app-page-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  standalone: true,
  imports:[CommonModule , FormsModule]
})
export class ChatComponent {
  @Input() message: string = '';

  items: Array<string> = [];

  socket: any = null;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.socket = io('http://localhost:8080/events');
      
      this.socket.on('connect', () => {
        console.log('Connected');

        this.socket.emit('start');
      });

      this.socket.on('message', (message: any) => {
        this.items.push(message);
      });
    }
  }

  sendMessage(): void {
    this.items.push(this.message);

    this.socket.emit('events', this.message);
  }
}
