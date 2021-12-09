import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipModel } from 'src/app/Models/recipemodel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipModel
  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void { }

  onSelected() {
    this.recipeSelected.emit();
  }
}
