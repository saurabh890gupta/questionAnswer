import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  isArray = new BehaviorSubject([])
  private _diceResults=[];
  _pdiceResults=[];
  data:any
  public setdiceResults(result:any) {
    this._diceResults = result;
    if(result != null) localStorage.setItem("diceResults", JSON.stringify(result));
    // else localStorage.removeItem("diceResults");
  }

  public getdiceResults() {
    if(this._diceResults == null) {
     this.data = localStorage.getItem("diceResults");
      this._diceResults = JSON.parse(this.data)
    }
    return this._diceResults;
  }
  public setParentResult(result:any) {
    this._pdiceResults = result;
    if(result != null) localStorage.setItem("diceResults", JSON.stringify(result));
    // else localStorage.removeItem("diceResults");
  }

  public getParentResult() {
    if(this._pdiceResults == null) {
     this.data = localStorage.getItem("pdiceResults");
      this._pdiceResults = JSON.parse(this.data)
    }
    return this._pdiceResults;
  }
}
