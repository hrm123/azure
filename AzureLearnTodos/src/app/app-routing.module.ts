import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JsonRendererComponent} from "./json-renderer/json-renderer.component";

const routes: Routes = [
  {path:'jsonviewer', component: JsonRendererComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
