import { Component, output } from '@angular/core';

@Component({
  selector: 'app-films-actions',
  standalone: true,
  imports: [], 
  templateUrl: './film-actions.html',
  styleUrl: './film-actions.css'
})
export class FilmsActions {
  deleteAll = output<void>();
  reload = output<void>();
  sortByName = output<void>();
  invert = output<void>();

  onDeleteAll() {
    this.deleteAll.emit();
  }

  onReload() {
    this.reload.emit();
  }

  onSortByName() {
    this.sortByName.emit();
  }

  onInvert() {
    this.invert.emit();
  }
}
