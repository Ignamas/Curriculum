import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadCurriComponent } from './download-curri/download-curri.component';
import { CertViewComponent } from './education/cert-view/cert-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home/:id', component: HomeComponent},
  {path:'cert/:id', component: CertViewComponent},
  {path:'curriculum', component: DownloadCurriComponent},
  {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
