import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentViewComponent } from './content-view/content-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
