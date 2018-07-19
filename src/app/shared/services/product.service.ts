import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {GenericService} from './generic.service';
import {Config} from './config';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService {

  constructor(private http: HttpClient, private storageService: StorageService) {
    super();
  }

  listProducts() {
    return this.http.get<Product[]>('http://localhost/backend/public/api/produits');
  }

  buyProduct(productId: number) {
    const headers = this.headers.set('Authorization', 'Bearer' + this.storageService.read(Config.tokenKey));
    console.log('PRoduct id = ' + productId) ;
    return this.http.post(Config.baseUrl + '/produit/buy/' + productId, {headers});
  }
}
