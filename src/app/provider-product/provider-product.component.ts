import { Component, OnInit } from '@angular/core';
import { FoodProviderService } from '../shared-services/food-provider.service';

@Component({
  selector: 'app-provider-product',
  templateUrl: './provider-product.component.html',
  styleUrls: ['./provider-product.component.css'],
})
export class ProviderProductComponent implements OnInit {
providedItems=[];
  constructor(public  providerService: FoodProviderService ) { }

  ngOnInit(): void {
    this.getProvidedItems()
  }
  getProvidedItems(){
    this.providerService.getItems().subscribe(response=>{
       this.providedItems = response
       console.log('Provided Items', this.providedItems)
    });
  }

}
