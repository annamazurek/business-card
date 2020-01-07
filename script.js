/* 
To do:
- change text
- change font
- css person--back (center, line-height, itd.)
- rwd!
*/
const card = document.querySelector('.card');
const button = document.querySelector('.button-flip');
const buttonBack = document.querySelector('.button-flip--back');
const cardBack = document.querySelector('.person--back');
const cardFront = document.querySelector('.person--front');


button.addEventListener("click", () => {
  cardBack.style.display = 'flex';
  cardFront.style.display = 'none';
  card.style.transform = 'rotateY(180deg)';
});
buttonBack.addEventListener("click", () => {
  card.style.transform = 'rotateY(0deg)';
  cardFront.style.display = 'flex';
  cardBack.style.display = 'none';


});

