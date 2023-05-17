const cantidadElemento=document.getElementById('cantidad');
const tipoDescuentoElemento =document.getElementById('tipoDescuento');
const displayPrecioElemento= document.getElementById('displayPrecio');


function calcularPrecio(){
    displayPrecioElemento.textContent="Total a Pagar: $";
    displayPrecioElemento.textContent+=((cantidadElemento.value*(100-tipoDescuentoElemento.value)/100)*200).toFixed(2);
}
function borrar(){
    displayPrecioElemento.textContent="Total a Pagar: $";
}
