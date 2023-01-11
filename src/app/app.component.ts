import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  squares: any[] = [];
  xIsNext: boolean = true;
  Winner: string | null  = '';

  ngOnInit(): void {
    this.StartGame()
  }

  StartGame() {
    this.squares = Array(9).fill(null);
    this.Winner = null
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if (!this.squares[idx]){

      this.squares.splice(idx, 1, this.player)

      this.xIsNext = !this.xIsNext;

    }
    this.Winner = this.CalculateWinner();
  }

  CalculateWinner(){
    
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if(this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]){
        return this.squares[a];
      }    
    }
    return null;
  }
}