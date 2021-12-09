import { Component, Input, OnInit } from '@angular/core';
import { RecipModel } from 'src/app/Models/recipemodel';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: RecipModel

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe)
  }

}
