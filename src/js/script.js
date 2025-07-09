// const bottone = document.getElementById('bottone');
// const lampada = document.getElementById('lamp');

//   //stato iniziale: lampadina spenta
//   let lampOn = false;


// bottone.addEventListener('click', () => {

//   if (lampOn === false) {
//     lampada.src = './assets/img/yellow_lamp.png';
//     bottone.textContent = 'Spegni';
//     lampOn = true;
//   } else {
//     lampada.src = './assets/img/white_lamp.png';
//     bottone.textContent = 'Accendi';
//     lampOn = false;
//   }

// });

const bottone = document.getElementById('bottone');
const lampada = document.getElementById('lamp');

bottone.addEventListener('click', () => {
  // Controllo cosa c'è scritto sul bottone
  if (bottone.textContent.includes('Accendi')) {
    // Se c'è scritto Accendi, significa che la lampada è spenta
    lampada.src = './assets/img/yellow_lamp.png';
    bottone.textContent = 'Spegni';
  } else {
    // Se c'è scritto Spegni, significa che la lampada è accesa
    lampada.src = './assets/img/white_lamp.png';
    bottone.textContent = 'Accendi';
  }
});


