const bottone = document.getElementById('bottone');
const lampada = document.getElementById('lamp');

  //stato iniziale: lampadina spenta 
  let lampOn = false;


bottone.addEventListener('click', () => {

  if (lampOn === false) {
    lampada.src = './assets/img/yellow_lamp.png';
    bottone.textContent = 'Spegni';
    lampOn = true;
  } else {
    lampada.src = './assets/img/white_lamp.png';
    bottone.textContent = 'Accendi';
    lampOn = false;
  }

});