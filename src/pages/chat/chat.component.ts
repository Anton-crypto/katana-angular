import { Component, Input, Output, } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';

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


  sendMessage(): void {
    this.items.push(this.message);
  }
}
