import { Component,Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tema3';

  @Input()Filt!: string;
  
  gameList =
   [{title: 'Dwarf Fortress',
     description:
      "The deepest, most intricate simulation of a world that's ever been created."},
    {title: 'Counter-Strike: Global Offensive',
     description:
     'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago'},
    {title: 'God of War Ragnarök',
     description:
     'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go'},
    {title: 'Forza Horizon 5',
     description:
     "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios."},
    {title: 'Grand Theft Auto',
     description:
     'The player starts off in Liberty City, and begins to work for Robert Bubby Seragliano gang.'},
    {title: "Bomberman",
     description:
     'The game revolves around the idea of using bomb blasts to destroy walls and enemies.'}];

result=
[{title: 'Dwarf Fortress',
     description:
      "The deepest, most intricate simulation of a world that's ever been created."},
    {title: 'Counter-Strike: Global Offensive',
     description:
     'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago'},
    {title: 'God of War Ragnarök',
     description:
     'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go'},
    {title: 'Forza Horizon 5',
     description:
     "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios."},
    {title: 'Grand Theft Auto',
     description:
     'The player starts off in Liberty City, and begins to work for Robert Bubby Seragliano gang.'},
    {title: "Bomberman",
     description:
     'The game revolves around the idea of using bomb blasts to destroy walls and enemies.'}];

  ngOnInit(): void {}

  filterGames(){
    const gameName = this.Filt;
    this.result = this.gameList.filter(game => game.title.includes(gameName));
  }

  sortGames(){
    this.result=this.result.sort((a, b) => {return this.compareFn(a.title, b.title)});
  }

  compareFn(a:string, b:string) {
    return (a < b ? -1 : 1) ;
  }
}
