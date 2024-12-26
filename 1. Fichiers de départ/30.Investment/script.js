// function investment(arr){

//   const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

//   const investValue = arr => arr.reduce((acc, cur) => acc < cur && arr.indexOf(acc) < arr.indexOf(cur) ? acc : cur)
//   const sellValue = arr => arr.reduce((acc, cur) => acc > cur && arr.indexOf(acc) > arr.indexOf(cur) ? acc : cur)

//   const indexOfInvestValue = arr => arr.indexOf(investValue(arr))
//   const indexOfSellValue = arr => arr.indexOf(sellValue(arr))

//   return `Le meilleur coup à faire cette semaine était d'investir le ${days[indexOfInvestValue(arr)]} et de revendre le ${days[indexOfSellValue(arr)]} pour un bénéfice de ${sellValue(arr) - investValue(arr)}.`

// }

function investment(arr) {
  
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

  const lowestPrice = arr => arr.reduce((acc, cur) => cur < acc ? cur : acc)
  const highestPrice = arr => arr.reduce((acc, cur) => cur > acc ? cur : acc)

  const investIndex = arr => arr.indexOf(lowestPrice(arr))
  const sellIndex = arr => arr.indexOf(highestPrice(arr))

  if(sellIndex(arr) < investIndex(arr)) {
    return `Pas de bénéfice possible cette semaine`
  }

  return `Le meilleur coup à faire cette semaine était d'investir le ${days[investIndex(arr)]} et de revendre le ${days[sellIndex(arr)]} pour un bénéfice de ${highestPrice(arr) - lowestPrice(arr)}.`

}

function investmentCorrection(arr) {
  const weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

  let bestInvestment = 0
  let date

  for(let i = 0; i < arr.length ; i++) {

    for(let j = i + 1; j < arr.length; j++) {

      if(arr[j] - arr[i] > bestInvestment) {
        bestInvestment = arr[j] - arr[i]

        date = [arr[i], arr[j]]
      }

    }
  }

  if(bestInvestment === 0) {
    return `Pas de bénéfice possible cette semaine`
  }else{
    return `Le meilleur coup à faire cette semaine était d'investir le ${weekdays[arr.indexOf(date[0])]} et de revendre le ${weekdays[arr.indexOf(date[1])]} pour un bénéfice de ${bestInvestment}.`
  }

}

/* ÉNONCÉ 📚 */

/*
  Cet algorithme reçoit un tableau représentant le cours de l'or sur sept jours.
  Vous devez, grâce à un algorithme, retourner le meilleur jour pour investir et 
  le meilleur jour pour vendre.

  En prenant le premier test, le meilleur jour pour investir est Lundi, avec un cours
  à 2€ et le meilleur pour vendre est Vendredi, avec un cours à 80€.
  Le bénéfice sera donc de 78€.  

  Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
  le Lundi et de revendre le Vendredi pour un bénéfice de 78." 

  Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
  retourner le jour d'achat, le jour de vente, et le montant du bénéfice. 

  Si il n'y a pas de bénéfice possible, retournez : "Pas de bénéfice possible cette semaine."

  Bon courage !
*/
 
 /* Tests à passer 🧪 */
 
console.log(investment([2,50,10,20,80,60,20]));                   // Investir Lundi, vendre Vendredi, benef : 78
console.log(investment([3560,4550,5457,6542,4320,6050,2002]));    // Investir Jeudi, vendre Dimanche, benef : 2982
console.log(investment([38,23,28,29,24,32,35]));                  // Investir Mardi, vendre Dimanche, benef : 12
 
console.log(investmentCorrection([2,50,10,20,80,60,20]));                   // Investir Lundi, vendre Vendredi, benef : 78
console.log(investmentCorrection([3560,4550,5457,6542,4320,6050,2002]));    // Investir Jeudi, vendre Dimanche, benef : 2982
console.log(investmentCorrection([38,23,28,29,24,32,35]));                  // Investir Mardi, vendre Dimanche, benef : 12