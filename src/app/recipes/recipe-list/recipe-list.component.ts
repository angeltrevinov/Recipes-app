import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Just a test recipe',
      'https://i.imgur.com/rxdwFCM.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Just a test recipe',
      'https://i.imgur.com/rxdwFCM.jpg'
    ),
  ];

  //--------------------------------------------------------------------------------------------------------------------
  constructor() { }

  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
  }

}
