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
