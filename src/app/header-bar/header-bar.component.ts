
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']

})
export class HeaderBarComponent implements OnInit {


@Output() isLogout = new EventEmitter<void>()

constructor(public firebaseService: FirebaseService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  fetchPosts() {
    this.http
    .get('https://vernal-design-313916-default-rtdb.firebaseio.com/inflatables/posts.json')
    .subscribe(posts => {

      console.log(posts);

      return posts;
      
      //Here we find the key and the values. Use this to assign to variables
      for(var key in posts){
      console.log("key: " + key + ", value: " + posts[key as keyof typeof posts])

        return posts;

      }


    });
  }

}

