/* 
To do:
- change text
- change font
- css person--back (center, line-height, itd.)
*/
const card = document.querySelector('.card');
const button = document.querySelector('.button-flip');
const buttonBack = document.querySelector('.button-flip--back');


button.addEventListener("click", () => {
  card.style.transform = 'rotateY(180deg)';
});
buttonBack.addEventListener("click", () => {
  card.style.transform = 'rotateY(0deg)';
});

