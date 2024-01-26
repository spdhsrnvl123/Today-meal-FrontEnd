import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {MatCardModule} from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, NgForOf, NgIf, NgOptimizedImage, AsyncPipe],
})
export class CardComponent implements OnInit{
  @Input() delete_active = '';

  data : any = [];

  constructor(private apiService : ApiService, private route:ActivatedRoute,private router : Router) {
  }

  ngOnInit() {
    this.apiService.locationData().subscribe(data =>{
      this.data = data;
    });
    console.log(this.delete_active)
  }

  gotoLocation(id : any) {
    this.router.navigate([`/location/`,id])
  }
  getData(){
    this.apiService.locationData().subscribe(data => {
      this.data = data;
    });
  }

  locationDelete(id:any){
    this.apiService.locationDeleteData(id).subscribe(data=>
      this.getData()
    );
  }

}
