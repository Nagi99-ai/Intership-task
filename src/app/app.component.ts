import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemService } from './services/item.service';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ItemService],
  imports: [
    RouterOutlet,  
    ItemListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intership-task';
}
