import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      title: "Iphone 12",
      subTitle: "Smart Phone",
      imageUrl: "https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "MI A3",
      subTitle: "Smart Phone",
      imageUrl: "https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Lenovo",
      subTitle: "Laptop",
      imageUrl: "https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ]

  constructor(public http: HttpClient) {
  }

  getFakeData(){
    return this.http.get('http://127.0.0.1:8000/api/post/')
  }

  createFakePost(formData){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', formData)
  }

  deleteFakePost(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
  }


}
