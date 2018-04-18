import { Component, OnInit } from '@angular/core';
import { Player } from '../../shared/models/player';
import { CanvasService } from '../../shared/canvas.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player1:Player;
  player2:Player;

  constructor(private canvas :CanvasService) { }

  ngOnInit() {
    this.player1 = this.canvas.player1;
    this.player2 = this.canvas.player2;

    console.log(this.player1.turn);
    console.log(this.player2.turn);

  }

}
