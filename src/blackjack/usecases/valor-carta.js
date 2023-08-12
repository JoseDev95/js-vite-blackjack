/**
 *  Esta funcion extrea el numero de la carta
 * @param {String} carta Ej: '2H'
 * @returns {Number} retorna el numero de la carta
 */

export const valorCarta = (carta) => {
  if (!isNaN(carta) || carta === undefined)
    throw new Error("La carta es obligatorio!");
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
