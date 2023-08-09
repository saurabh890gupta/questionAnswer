import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  data:any;
  constructor(private setValueService: DataserviceService,){

  }
  ngOnInit(){
   this.data =this.setValueService.getParentResult()
   }
}
