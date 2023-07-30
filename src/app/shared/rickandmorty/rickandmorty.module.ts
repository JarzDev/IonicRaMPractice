import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RickandmortyService]
})
export class RickandmortyModule { }
