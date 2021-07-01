import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "../user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {
  }


  // createUser(newObj: any, uuid: any) {
  //
  //   return this.firestore('users').doc(uuid).set(newObj);
  // }

  getUserDoc(id: any) {
    return this.firestore
      .collection('user-collection')
      .doc(id)
      .valueChanges()
  }

  getUserList() {
    return this.firestore
      .collection("user-collection")
      .snapshotChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection('user-collection')
        .add(user)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }


}


