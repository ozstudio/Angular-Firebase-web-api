import { Injectable} from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Product } from './admin/model/product';
import { of, Observable } from 'rxjs';
import {take} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ProductCardComponent } from './product-card/product-card.component';
import { promise } from 'protractor';
import { ShoppingCart } from './admin/model/shopping-cart';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
 
  quantity;

  constructor(private db:AngularFirestore) { }

  create(){
    

   return this.db.collection('/shopping-cart').add({
      dateCreated: new Date().getTime()  
    }
    );
  }

  async getCart(){
    let cartId = await this.getOrCreateCart();  
    return this.db.collection('/shopping-cart').doc(cartId).collection('items').valueChanges();

  }
  
   async getOrCreateCart(){
    let cartId=localStorage.getItem('cartId');
    if(cartId) return cartId;
      
      let result= await this.create();
      localStorage.setItem('cartId',result.id);
      return result.id;
    
  
  }
   

    async addToCart(product:Product){
    
    let cartId =await  this.getOrCreateCart();
    
    let item$=this.db.collection('/shopping-cart').doc(''+cartId).collection('items').doc(product.id).get();
    item$.subscribe(item =>{
      if(item.exists){
        console.log(item.data());
        item.ref.update({quantity: item.data().quantity + 1  });
      } 
      else{
        item.ref.set({product:product,quantity: 1});

      }

    })

  }

  async minusItem(product:Product){
   
    let cartId =await  this.getOrCreateCart();
    
    let item$=this.db.collection('/shopping-cart').doc(''+cartId).collection('items').doc(product.id).get();
    item$.subscribe(item =>{
      if(item.exists){
        console.log(item.data());
        if(item.data()["quantity"] == 1){
         item.ref.delete();
        }
        else {
          item.ref.update({quantity: item.data().quantity - 1  });

        }
       // console.log(item.data()["quantity"]);
      } 
      else{
        item.ref.set({product:product,quantity: 0});

      }

    })

  }



 async getAllItems(product:Product){
   
    let cartId = await this.getOrCreateCart();
    let item$=this.db.doc('/shopping-cart/' + cartId + '/items/' + product.id).get();
    item$.subscribe(item =>{
      if(item.exists){
       
        this.quantity=item.data();
        
      } 
      else{
       
      }

    })
    
}

async getQuantity(product:Product){
  let cartId =await  this.getOrCreateCart();
  let item$=this.db.doc('/shopping-cart/' + cartId + '/items/' + product.id).get();
  item$.subscribe(item =>{
    if(item.exists){
     
     return this.quantity= item.data();
     
     
    } 
    else{
      
    }
  })
}





}
