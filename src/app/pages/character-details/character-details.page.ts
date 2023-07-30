import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

idPage ='';
character:null | any;
episodes: any[] = [];


  constructor(private acRoute: ActivatedRoute, private rickandmortyService: RickandmortyService) {
    this.idPage = this.acRoute.snapshot.paramMap.get('id') as string;
    console.log(this.idPage);
    
   }

  ngOnInit() {
    this.getCharacters();
    console.log(this.episodes);
    
}

  getCharacters(){
    
this.rickandmortyService.getCharactersById(this.idPage).subscribe({
      next: (res:any) => {
        console.log(res);
       this.character = res;
       this.getEpisodes();
      }, error: (err:any) => {
       
  }});
}

getEpisodes (){

  for(let url of this.character.episode){
  this.rickandmortyService.getByUrl(url).subscribe({
    next: (res:any) => {
    
      this.episodes.push(res);
    }, error: (err:any) => {
    console.log(err);
    }
  })
     
}

}

}