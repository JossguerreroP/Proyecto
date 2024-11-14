import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
products: Product[]=[];
filteredProducts:Product[] =[];
sortOrder: string = "";

  ngOnInit(): void {
    this.prodctService.getProducts().subscribe(data => {
      this.products =data;
      this.filteredProducts = data;
      console.log(data)
    });
  }

  addToCart(product: Product):void{
    this.cartService.addToCart(product).subscribe({
      next: () => { 
        this.snackbar.open("Product added to cart!","",{
          duration:2000,
          horizontalPosition:'right',
          verticalPosition:'top'
        })
      }

    });
  }



  applyFilter(event:Event):void{
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(searchTerm));
    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string){
    this.sortOrder = sortValue;
    if(this.sortOrder === "priceLowHigh"){
      this.filteredProducts.sort((a,b) => a.price - b.price)
    } else if(this.sortOrder === "priceHighLow"){
      this.filteredProducts.sort((a,b) => b.price - a.price)
    }
  }

  constructor(private prodctService: ProductService , 
              private cartService: CartService,
              private snackbar: MatSnackBar){
  }

}
