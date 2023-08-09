import { Component,ViewChild,AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { NewChildComponent } from '../new-child/new-child.component';
import { DataserviceService } from '../service/dataservice.service';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

  expression:any;
data:any;
constructor(private cd:ChangeDetectorRef,private setValueService: DataserviceService,private dataService: DataService){
  this.data =this.setValueService.getdiceResults()
}
ngOnInit(){
  this.expression
    this.setValueService.setParentResult(this.expression)
  }



ngAfterViewInit() {
}
textDataBind(textData:any){
  this.setValueService.setdiceResults({"textArea":textData})
}

changeValue(data:any){

this.dataService.childModal=true;
}
}