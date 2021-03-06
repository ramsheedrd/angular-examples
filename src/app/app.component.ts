import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;

  constructor(public service:DataService){
    // this.data = this.service.data
    this.service.getFakeData().subscribe((fakedata)=>{
      this.data = fakedata
    })

    this.service.createFakePost({title:'Hello'}).subscribe((response)=>{
      console.log(response)
    })

    this.service.deleteFakePost(1).subscribe((response)=>{
      console.log(response)
    })




  }

  likeCount = 0;
  

  incrementLikes(){
    this.likeCount++
  }

  deleteProduct(index){
    this.data.splice(index, 1)
  }

}
