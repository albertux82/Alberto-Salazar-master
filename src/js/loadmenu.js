import menu from "../menu.json";

const cards = document.getElementById("cards");
const cartItems = document.getElementById("cart_items");
const footer = document.getElementById("footer");


const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateFooter = document.getElementById("template-footer").content;


const fragment = document.createDocumentFragment();

//Carrito es una colección de objetos indexados
let carrito = {};


document.addEventListener('DOMContentLoaded', () => {
  pintarCards();

  //Si existe el carrito en el LocalStorage pintamos el carrito
  if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    pintarCarrito();
  }

});

cards.addEventListener('click', (e) => {
  addCarrito(e);
});

cartItems.addEventListener('click', e =>{
    btnAcccion(e);
})

//1) Pinta los productos en el DOM
function pintarCards() {
  const menuList = menu.menuList;

  menuList.forEach((prod) => {
    templateCard.querySelector("img").src = prod.menuImage;
    templateCard.querySelector(".card-title").textContent = prod.menuName;
    templateCard.querySelector(".card-text").textContent = prod.menuDescription;
    templateCard.querySelector(".product-price").textContent = `$${parseFloat(prod.menuPrice).toFixed(2)}`;
    templateCard.querySelector(".btnBuy").dataset.id = prod.menuId;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
}

//2) Obtiene el objeto producto del DOM y lo envía al carrito
const addCarrito = (e) => {
  // console.log(e.target);
  if (e.target.classList.contains('btnBuy')) {
    let obj = e.target.parentElement.parentElement.parentElement;
    setCarrito(obj);
  }
  //stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
  e.stopPropagation();
};


//3) Recibe el objeto producto y lo agrega a la colección Carrito con su índice
const setCarrito = (objeto) => {
  // console.log(objeto);
  const producto = {
    id: objeto.querySelector(".btn").dataset.id,
    title: objeto.querySelector(".card-title").textContent,
    precio: objeto.querySelector(".product-price").textContent.replace("$", ""),
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id))
    producto.cantidad = carrito[producto.id].cantidad + 1;

  //Se agrega el producto a la colección creando su índice
  carrito[producto.id] = { ...producto };
  pintarCarrito();
  // console.log(producto);
};

//4) Pinta el carrito en el DOM y crea el localStorage
const pintarCarrito = () => {
//   console.log(carrito);
cartItems.innerHTML = "";

  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelectorAll("span")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("span")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btnAdd").dataset.id = producto.id;
    templateCarrito.querySelector(".btnRemove").dataset.id = producto.id;
    templateCarrito.querySelector(".item-price").textContent = parseFloat(producto.cantidad * producto.precio).toFixed(2);
    
    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  cartItems.appendChild(fragment);

  pintarFooter();

  //Guardamos el carrito en el LocalStorage
  localStorage.setItem('carrito', JSON.stringify(carrito))
};

//5) Pinta en el DOM el total acumulado en el carrito
const pintarFooter = () =>{
    footer.innerHTML= "";

    //Verifico si existe algo en el carrito
    if(Object.keys(carrito).length === 0){
        footer.innerHTML =`<th scope="row" colspan="5">Carrito vacío</th>`;
        return;
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad , 0);
    const nPrecio = Object.values(carrito).reduce( (acc , {cantidad, precio}) => acc + cantidad * precio, 0);
    // console.log(nCantidad, nPrecio);

    templateFooter.querySelectorAll('span')[1].textContent = nCantidad;
    document.getElementById('total-items').innerHTML = nCantidad;
    templateFooter.querySelector('.total-price').textContent = parseFloat(nPrecio).toFixed(2);
    
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);
    
    document.querySelector('.dropdown-container').style.display="block";

    //Vacía el carrito
    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', ()=>{
        carrito = {};
        pintarCarrito();
        document.getElementById('total-items').innerHTML = '';
        document.querySelector('.dropdown-container').style.display="block";
    });
}

// Acciones de aumentar/disminuir la cantidad de un producto
const btnAcccion = e =>{

    //Botón - acción de aumentar cantidad
    if(e.target.classList.contains('btnAdd')){
        // console.log(carrito[e.target.dataset.id]);
        const producto = carrito[e.target.dataset.id];
        producto.cantidad ++;
        carrito[e.target.dataset.id] = {...producto};

        pintarCarrito();
    }

    //BBotón -acción de disminuir cantidad
    if(e.target.classList.contains('btnRemove')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad --;

        if(producto.cantidad === 0){
          delete carrito[e.target.dataset.id];
          document.getElementById('total-items').innerHTML = '';
          document.querySelector('.dropdown-container').style.display="block";
        }

        pintarCarrito();
    }

    e.stopPropagation();
}