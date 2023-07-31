import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

  
})
export class HomePage implements OnInit {
  params = {} as any; 
characters: any[]=[];
  constructor(private rickmortySvr: RickandmortyService) { }

  ngOnInit() {
   this.params.page = 0;
    this.getCharacters();
    console.log(this.params.page);
  }

  getCharacters(event?:any){
    this.params.page+= 1;

    this.rickmortySvr.getCharacters(this.params).subscribe({
      next: (res:any) => {
        
        this.characters = [...this.characters, ...res.results];
        console.log(this.characters);
        if(event){
          event.target.complete();}
      }, error: (err:any) => {
        console.log(err);
        if(event){
          event.target.complete();
        }
      }
  });
}

searchCharacters(){
  this.params.page= 1;

  this.rickmortySvr.getCharacters(this.params).subscribe({
    next: (res:any) => {
      
      this.characters = res.results
     
    }, error: (err:any) => {
      console.log(err);
      
    }
});
}
}
