import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  list = [];
  Yousirname: any;
  
  constructor(public navCtrl: NavController, private afStore: AngularFirestore,private afAuth: AngularFireAuth) {
    // this.list.push({name:"banana",price:10});
    // this.list.push({name:"apple",price:7});
    // this.list.push({name:"apple",price:8});
    // this.list.push({name:"apple",price:9});
    // this.list.push({name:"apple",price:10});
    const collections = this.afStore.collection('lists');
    collections.valueChanges().subscribe(e => {
      console.log(e, 'e');
      this.list = e;
    });
    
  }
  ngOnInit() {
    this.Yousirname = this.afAuth.user.subscribe(user => {
      this.Yousirname = user.displayName;
    })
  }

}
