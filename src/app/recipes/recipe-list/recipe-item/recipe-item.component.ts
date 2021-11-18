import { Component, Input, OnInit } from '@angular/core';
import { RecipModel } from 'src/app/Models/recipemodel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:RecipModel

  constructor() { }

  ngOnInit(): void {
  }

}
