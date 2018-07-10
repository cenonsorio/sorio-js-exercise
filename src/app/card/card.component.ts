import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cardStatus = 'inactive';
  public cardClicked = false;
  public maxCard = 4;
  public cardDetails = [];

  constructor() { }

  ngOnInit() {
    this.resetStatus();
  }

  cardOnClick(order, status) {
      this.resetStatus();

      if (status === this.cardStatus ) {
          this.cardDetails[order] = 'active';
      }
  }

  resetStatus() {
      var ctr = 0;
      for (ctr; ctr < this.maxCard; ctr ++) {
          this.cardDetails[ctr] = this.cardStatus;
      }
  }

}
