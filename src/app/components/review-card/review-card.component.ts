import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements AfterViewInit{
  @Output() reviewCardInfo = new EventEmitter<any>();
  @ViewChild('modalContent') modalContent: TemplateRef<any> | undefined
  @ViewChild('real') real : TemplateRef<any> | undefined;
  @ViewChild("greet") greet : TemplateRef<any> | undefined

  ngAfterViewInit() {
    // console.log(this.greet?.elementRef)
    // console.log(this.real?.elementRef?.nativeElement)
  }

  open(id:any){
    // this.id.emit(id);
    this.reviewCardInfo.emit({
      status : true,
      id : id
    });
  }
}
