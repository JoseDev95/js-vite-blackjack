import _ from "underscore";
// export let miName = "Jose Luis";

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCartas Ej: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposDeEspeciales Ej: ["A", "J", "Q", "K"]
 * @returns {Array <String>} - Un Nuevo Deck
 */
export const crearDeck = (tiposDeCartas, tiposDeEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("TipoDeCartas es obligatorio!");
  if (!tiposDeEspeciales || tiposDeEspeciales.length === 0)
    throw new Error("tiposDeEspeciales es obligatorio!");
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposDeEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);

  return deck;
};

export default crearDeck;
