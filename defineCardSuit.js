function defineSuit(card) {
    return card.slice(-1) === '♣' ? 'clubs' : card.slice(-1) === '♦' ? 'diamonds' : card.slice(-1) === '♥' ? 'hearts' : 'spades'
}