import "./style.css";

/*
Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.
*/

console.log("Camarero: 'Si el cumpleañero quiere invitar a las bebidas primero deben restar 18€ al total que es 120€ y calcular lo que debe pagar cada comensal.'" );

console.log("Total por comensal menos las bebidas: " + ((120-18)/6) + "€" );

console.log("Camarero: El cumpleañero pagará entonces el cálculo anterior más 18€: " + (((120-18)/6)+18) + "€");

