var level = document.getElementById('level');
var levelCap = parseInt(level.getAttribute('data-level-cap'));
var curLevel = parseInt(level.getAttribute('data-level-current'));
var card = document.getElementById("card");


card.addEventListener('click', function(e){
  e.stopPropagation();
  
  if(!card.classList.contains('card--flipped')){
	  var name = document.getElementById('name');
	  if (Math.random() < 0.33) name.innerHTML = "Иванов Иван Иванович";
	  else if (Math.random() < 0.66) name.innerHTML = "Петров Пётр петрович";
	  else name.innerHTML = "Сидоров Сидор Сидорович";

	  var kvalification = document.getElementById('kvalification');
	  var type_item = document.getElementById('type_item');
	  var spec = document.getElementById('spec');
	  
	  if (Math.random() < 0.5) {
		  spec.innerHTML = "09.03.01 Информатика и вычислительная техника";
		  if (Math.random() < 0.5) {
			  kvalification.innerHTML = "Бакалавр";
			  if (Math.random() < 0.1) type_item.innerHTML = "O";
			  else type_item.innerHTML = "З";
	      } else {
			  kvalification.innerHTML = "Магистр";
			  type_item.innerHTML = "O";
		  }
	  } else {
		  spec.innerHTML = "09.03.04 Программная инженерия";
		  kvalification.innerHTML = "Бакалавр";
		  type_item.innerHTML = "O";
	  }


	  level.innerHTML = "";
		for(var i = 1; i <= levelCap; i++) {
		  if(curLevel >= i) {
			level.innerHTML += '<div class="star current-level"></div>';
		  }
		  else {
			level.innerHTML += '<div class="star"></div>';
		  }
		}
  }
	

  if(card.classList.contains('card--flipped')) {
    card.classList.add('card--unflip');
    setTimeout(function(){
      card.classList.remove('card--flipped', 'card--unflip');
    }, 500);
  }
  else { 
    card.classList.add("card--flipped");
  }
});