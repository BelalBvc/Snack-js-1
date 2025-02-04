const studenti = [
    { nome: "Anna", eta: 17 },
    { nome: "Marco", eta: 22 },
    { nome: "Laura", eta: 19 },
    { nome: "Giorgio", eta: 16 }
  ];

let stuMaggiorenne = studenti.filter((studente) =>{
    return studente.eta > 18
})

stuMaggiorenne.forEach((studente) =>{
console.log("lo studente" , studente.nome , "è maggiorenne")
})