import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NewChildComponent } from './new-child/new-child.component';
import { AnswerComponent } from './answer/answer.component';
const routes: Routes = [
  { 
    path: '', 
    pathMatch:'full',
    component: ParentComponent 
  },
  { 
    path: 'answer', 
    pathMatch:'full',
    component: AnswerComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
