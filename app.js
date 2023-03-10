/* 
------ CONVERTIR °C a Farenheit y Kelvin  --------
1. Pedir al usuario que ingrese una temperatura
2. hacer la respectiva conversion
3. Mostrar ambas conversiones
4. validar que el tipo de dato ingresado sea el correcto

-----QUÉ NECESITAMOS ----
1. variable que guarde la °C -> prompt o input
2. funcion que haga la respectiva conversion, dentro de la funcion
  declarar una variable para convertir a °F y otra para °K
3. usar el DOM o consola para mostrar las rtas en pantalla
4. emplear la logica de tipo Number y si es falso permitir que vuelva a ingresarlo

(0 °C × 9/5) + 32 = 32 °F
0 °C + 273.15 = 273,15 K

*/

//todo Por prompt
let temperaturaIngresada;
while (isNaN(temperaturaIngresada)) {
  temperaturaIngresada= Number(prompt("Convertir a grados Fahrenheit y a grados Kelvin")); 
  if (isNaN(temperaturaIngresada)) {
    console.log(`Error no ingresaste un parámetro correcto`);
  }
}
const conversor = () => {
  const toFahrenheit = temperaturaIngresada * (9 / 5) + 32;
  const toKelvin = temperaturaIngresada + 273.15;
  return console.log(`${temperaturaIngresada} °C en grados Fahrenheit es: ${toFahrenheit}°F ${temperaturaIngresada} °C en grados Kelvin es: ${toKelvin}K `);
};
conversor();


