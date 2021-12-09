import { Component, OnInit } from '@angular/core';
import { RecipModel } from '../Models/recipemodel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipModel;

  constructor() { }

  ngOnInit(): void {
  }

}
