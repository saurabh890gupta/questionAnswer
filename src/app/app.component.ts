import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data=0;
constructor(){

}
updateData(item:any){
  console.log("item",item)
this.data=item
}

}
