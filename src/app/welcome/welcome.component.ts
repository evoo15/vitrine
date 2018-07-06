import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/product.model';
import {Utils} from '../shared/services/utils';
import {ProductService} from '../shared/services/product.service';

declare var jQuery: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  products: Product [] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
     jQuery('#slideshow').nivoSlider();
    Utils.initializeCarousel();
    this.productService.listProducts()
      .subscribe((products) => {
        console.log(products);
        this.products = products;
        Utils.initializeSliderProduct();
      },
      () => console.log('erreur de chargement de produits'));
  }



  buyProduct(index: number) {
  }

}
