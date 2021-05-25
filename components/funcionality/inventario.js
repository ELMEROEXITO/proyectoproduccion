
/**
 * @D: demanda anual
 * @S: Costo de pedir
 * @H: Costo de mantenimiento anual
 * */
export const calculoEOQ = (D, S, H) => Math.pow((2 * D * S) / H, 1 / 2);

/**
 *@Descripcion
* @D: Demanda anual
* @S: Costo de pedir
* @Q: Cantidad
* @H: Costo de mantenimiento anual
* @C: Costo del producto
* */
export const calculoCostoTotal = (D, S, Q, H, C) => ((D * S) / Q) + (Q * H / 2) + D * C;

/**
 * @d: demanda promedio
 * @l: plazo de entrega
 */
export const puntoReorden = (d, l) => d * l;

/**
 * @D: demanda anual
 * @Q: Cantidad
 * */
export const tandaAnual = (D, Q) => D /Q;

/**
 * @DL: dias laborales
 * */
export const diasLaborales = (DL) => DL / tandaAnual;