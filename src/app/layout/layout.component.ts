import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  selectedItem: string = '';

  highlight(item: string) {
    this.selectedItem = item;
  }
}
