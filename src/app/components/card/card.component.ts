import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf, NgIf],
})
export class CardComponent implements OnInit{
  data : any = [];

  constructor(private apiService : ApiService) {
  }

  ngOnInit() {
    this.apiService.locationData().subscribe(data =>{
      console.log(data);
      this.data = data;
    });
  }

}
