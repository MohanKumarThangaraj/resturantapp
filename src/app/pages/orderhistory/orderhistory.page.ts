import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {
  orderList: any = [];
  categories: any = [
    {
      category: 'Placed',
    },
    {
      category: 'Completed',
    },
    {
      category: 'All',
    },
  ];
  selectedCategory: any = 'Placed';
  allOrderList: any = [];
  constructor() {}

  ngOnInit() {
    const temp = localStorage.getItem('orderItems');
    if (temp) {
      this.allOrderList = JSON.parse(temp);
      this.segmentChanged('Placed');
    } else {
      this.orderList = [];
    }
  }
  segmentChanged(category) {
    this.selectedCategory = category;
    this.orderList = this.allOrderList.filter(
      (item) => item.orderStatus === category
    );
    this.orderList.map((item) => {
      item.orderDate = item.time.split(',')[0];
      item.orderTime = item.time.split(',')[1];
    });
    console.log(this.orderList);
  }
}
