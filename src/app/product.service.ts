import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';





@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts$;
  

  constructor(private db:AngularFirestore) { 
    this.allProducts$=this.db.collection("products").valueChanges({idField: 'id'});

  }
  create (product){
    return this.db.firestore.collection("products").add(product).then(res => {
    console.log("ok");
    });
  }
  getAllProducts(){
   return this.allProducts$;
  }


  getSelectedProduct(id){
  return  this.db.collection('products').doc(id).ref.get();
  }
  uppadeProduct(id,product){
    return this.db.collection('products').doc(id).update(product);

  }
  deleteProduct(id){
    return this.db.collection('products').doc(id).delete();
    //return console.log("hello from pservice  ")
  }
  
}
