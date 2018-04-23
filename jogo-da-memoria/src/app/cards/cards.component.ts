import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: string[] = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4"];

  otherCards: string[] = [
      "Card 1",
      "Card 2",
      "Card 3",
      "Card 4"];

  
    

    mostrarCard: boolean = true;

  constructor() { }

  ngOnInit() {
   
    }
    public esconderCard() {
      this.mostrarCard = false;
  }
}


