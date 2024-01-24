import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf, NgIf, NgOptimizedImage],
})
export class CardComponent implements OnInit{
  data : any = [];

  constructor(private apiService : ApiService, private route:ActivatedRoute,private router : Router) {
  }

  ngOnInit() {
    this.apiService.locationData().subscribe(data =>{
      console.log(data);
      this.data = data;
    });
  }

  gotoLocation(id : any) {
    this.router.navigate([`/location/`,id])
  }
}
