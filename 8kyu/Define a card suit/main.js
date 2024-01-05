//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
    // good luck
    let suit = card.substr(-1);
     switch(suit){
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        default: return 'spades';
     }
  }