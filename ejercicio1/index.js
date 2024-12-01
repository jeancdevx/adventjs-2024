// solucion 1:
/* function prepareGifts(gifts) {
  return gifts
    .filter((gift, index) => gifts.indexOf(gift) === index)
    .sort((a, b) => a - b)
} */

// solucion 2:
function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b)
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
