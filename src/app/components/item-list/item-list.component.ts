import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-item-list',
  standalone: true,
  providers:[ItemService],
  imports: [    
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: Item[] = [];
  filteredItems: Item[] = [];
  sortOrder = 'asc';

  searchText: string ="";
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      this.filteredItems = data;
    });
  }

  sortItems(): void {
    this.filteredItems.sort((a, b) => this.sortOrder === 'asc' ? a.id - b.id : b.id - a.id);
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
