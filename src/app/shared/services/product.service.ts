import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  listProducts() {
    return this.http.get<Product[]>('http://localhost/backend/public/api/produits');
  }
}
