import { Component, OnInit } from '@angular/core';
import { RecipModel } from 'src/app/Models/recipemodel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes:RecipModel[] = [
    new RecipModel("Spaghetti alla chitarra",
    "Un Particolare tipo di pasta che...",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstaritprodcdnimages3.azureedge.net%2Ffiles%2Fstyles%2Frecipe_main_image_mobile%2Fwindowsazurestorage%2Frecipes%2F15498413908783a5a675169a748bb847ef59c9f7e8.jpg%3Fh%3D289976fd%26itok%3Dr2aoeNs3&imgrefurl=https%3A%2F%2Fwww.star.it%2Fricetta%2Fspaghetti-alla-chitarra%2F&tbnid=3HwZzwbK-AY6fM&vet=12ahUKEwiSpOOJyqH0AhVcgaQKHcoiBfEQMygIegUIARDtAQ..i&docid=BsxGr-KRARKi4M&w=500&h=500&q=spaghetti%20alla%20chitarra&ved=2ahUKEwiSpOOJyqH0AhVcgaQKHcoiBfEQMygIegUIARDtAQ"
    ),
    new RecipModel("Lasagne alla bolognese",
    "Pasta emiliana molto calorica, sempre presente nei pranzi domenicali",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fformiche.net%2F2013%2F02%2Fa-bologna-si-producono-lasagne-alla-bolognese-con-carne-di-cavallo%2F&psig=AOvVaw2C2EiirgmqrWG5SL7Y9dVa&ust=1637313524456000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjOz8LKofQCFQAAAAAdAAAAABAO"
    ),
    new RecipModel("Gnocchi ai formaggi",
    "Variante di gnocchi ai formaggi tipici della Val Varaita. Tipicamente chiamate 'Ravioles'",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.it%2FLocationPhotoDirectLink-g2266060-d10047315-i347158483-Miralago-Pontechianale_Province_of_Cuneo_Piedmont.html&psig=AOvVaw0_JT2A4a9DyMAHlJ19Nga7&ust=1637313678996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCFgvbKofQCFQAAAAAdAAAAABAD"
    ),
    new RecipModel("Tiramisu",
    "Classico dolce italiano con panna e mascarpone",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoscanedigusto.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Ftoscanedigusto.com%2F2019%2F09%2Ftiramisu-facile-con-la-regola-del-5%2F&tbnid=Tp-QmhIWCxvGCM&vet=12ahUKEwiQrrqOy6H0AhWR4oUKHZEpCdoQMygOegUIARCVAg..i&docid=YYyMG6nTUDEVdM&w=1280&h=720&itg=1&q=tiramisu&ved=2ahUKEwiQrrqOy6H0AhWR4oUKHZEpCdoQMygOegUIARCVAg"
    )
  ]

  selectedRecipe:RecipModel;

  constructor() { 
    this.selectedRecipe=this.recipes[0];
  }

  ngOnInit(): void {
  }

}
