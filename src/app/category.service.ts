import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
b$;
  constructor(private db:AngularFirestore) {

    this.b$=this.db.collection('categories').valueChanges();
    

    
  }

  getCategories(){
    
    return this.b$;
  }
}
