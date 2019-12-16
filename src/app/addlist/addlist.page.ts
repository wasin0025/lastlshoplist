import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.page.html',
  styleUrls: ['./addlist.page.scss'],
})
export class AddlistPage implements OnInit {
  // create ngModel of 3 variables
  // create submit method
  // 1. create objecfrom 3 variables
  // 2. set three variables to ""
  // 3. add object to firebase

  budget: number;
  itemName: string;
  price: number;
  username: any;
  item = [];
  itemList = [];
  index: number;
  result = "OK";
  remain: number;




  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore, private router: Router) {

  }

  add(name: String, price: String) {
    this.item.push(this.itemName);
    this.item.push(this.price);
    this.itemList.push(this.item);
    this.item = []
    this.checkSum();
  }

  deleteTask() {
    this.itemList.pop();
    this.checkSum();
  }

  checkSum() {
    let sum=0
    for(let i=0; i < this.itemList.length; i++) {
      sum+=this.itemList[i][1]
    }
    if (this.budget<sum) {
      this.result="Over budget";
    } else {
      this.result = "Ok";
    }

    this.remain=this.budget-sum
  }

  submit() {
    console.log(this.itemList, 'item List')
    for (let i = 0; i < this.itemList.length; i++) {
      const item = { createdDate: new Date(), username: this.username, itemName: this.itemList[i][0], price: this.itemList[i][1] };
      const collections = this.afStore.collection('lists');
      console.log(item, 'item')
      collections.add(item);
      //this.router.navigate(['list']); 

    }

  }
  clear() {
    this.itemList = []
    this.remain=0
  }

  ngOnInit() {
    this.username = this.afAuth.user.subscribe(user => {
      this.username = user.displayName;
    })
    let Result: "OK";
  }

}
