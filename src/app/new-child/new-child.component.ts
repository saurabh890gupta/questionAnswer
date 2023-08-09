import { Component, ViewChild, DoCheck } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements DoCheck {
  isArray: any
  adminForm = this.fb.group({
    name: new FormControl(''),
    // email: new FormControl(''),
  });

  companyForm = this.fb.group({
    companyName: new FormControl('', [Validators.required]),
    admins: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private setValueService: DataserviceService, private dataService: DataService) { }
  @ViewChild('childModal') childModal!: ModalDirective;
  ngOnInit(): void {
  }

  get admins() {
    return this.companyForm.controls["admins"] as FormArray;
  }

  addNewAdmin() {
    this.admins.push(this.adminForm);
  }
  submit() {
    console.log("this.companyForm", this.companyForm.value)
    let c = []
    c.push(this.companyForm.value)
    this.setValueService.setdiceResults(c)
    this.companyForm.reset();
    this.admins.reset();
  }
  ngDoCheck() {
    this.showChildModals();
  }
  showChildModals(): void {
    if (this.dataService.childModal == true) {
      this.childModal.show();
    }

  }

  hideChildModals() {
    this.dataService.childModal = false;
    this.childModal.hide();
  }
}
