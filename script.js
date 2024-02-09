const bouton = document.querySelector('button');
console.log(bouton);

bouton.addEventListener('click', function () {
   this.textContent = 'vous avez cliqué';
   this.style.backgroundColor = 'lightgray';
});

/*
* cas d'usage en mode objet
*/
const smartphone = {
   marque: 'apple',
   modele: 'iphone',
   stockage: '64Go',
   displayInfos: function () {
      return 'Information sur votre smartphone' +
          `Marque : ${this.marque}
          Modèle : ${this.modele}
          Capacité de stockage : ${this.stockage}`;
   }
}

console.log(smartphone.displayInfos());