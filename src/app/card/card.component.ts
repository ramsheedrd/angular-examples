import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() subTitle;
  @Input() imageUrl;
  @Input() index;

  @Output() liked = new EventEmitter()
  @Output() deleted = new EventEmitter()



  constructor() { }

  ngOnInit(): void {
  }

  likeClicked(){
    this.liked.emit()
  }

  deleteClicked(index){
    this.deleted.emit(index)
  }

}
