import { Component } from '@angular/core';

@Component({
  selector: 'app-page-vidio',
  templateUrl: './vidio.component.html',
  styleUrl: './vidio.component.scss',
  standalone: true,
})
export class VidioComponent {
  items: any = [
    {name: 'Пица'},
    {name: 'Пица'},
    {name: 'Пица'},
    {name: 'Пица'},
    {name: 'Пица'},
    {name: 'Пица'},
  ];
}
