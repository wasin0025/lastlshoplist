import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  list = [];
  constructor(public navCtrl: NavController, private afStore: AngularFirestore) {
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
  }

}
