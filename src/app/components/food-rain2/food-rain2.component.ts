// food-rain2.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-rain2',
  templateUrl: './food-rain2.component.html',
  styleUrls: ['./food-rain2.component.css']
})
export class FoodRain2Component implements OnInit {
  stars: any = [];

  ngOnInit() {
    setInterval(() => {
      this.stars.push({ left: Math.random() * window.innerWidth });
      setTimeout(() => this.stars.shift(), 5000);
    }, 200);
  }
}
