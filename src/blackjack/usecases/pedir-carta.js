// Esta función me permite tomar una carta
/**
 * Esta funcion extrae una carta del deck
 * @param {Array <String>} deck
 * @returns {String} Devuelve la carta extraida
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
