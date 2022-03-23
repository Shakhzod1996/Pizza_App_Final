let pizzaArray = [
  {
    id: 1,
    imgUrl: "../img/one.jpg",
    name: "Pepperoni",
    price: 2.23,
  },
  {
    id: 2,
    imgUrl: "../img/two.jpg",
    name: "Cheesy",
    price: 5.99,
  },
  {
    id: 3,
    imgUrl: "../img/three.jpg",
    name: "Margarita",
    price: 7.48,
  },
  {
    id: 4,
    imgUrl: "../img/four.jpg",
    name: "Hawaiian",
    price: 9.32,
  },
];

let menuList = document.querySelector(".ul");
let cartList = document.querySelector(".ul2");
let subTotalEl = document.querySelector(".subtotal");
let totalEl = document.querySelector(".total");
let taxEl = document.querySelector(".tax");

let newPizzaArray = [];


pizzaArray.forEach((item) => {
  let li = document.createElement("li");
  li.className = "li";
    li.innerHTML = `
    <div class="img-div">
    <img src="${item.imgUrl}" alt="img">
    </div>
    <div class="desc">
    <h3>${item.name}</h3>
    <p class="price">$${item.price}</p>
    <button class="btn one-btn d" onclick='addItemArray(${item.id})'>Add to Card</button>
    </div>
    `;
    menuList.appendChild(li);

});

function addItemArray(listId) {
  newPizzaArray.push(pizzaArray.filter((item) => item.id === listId)[0]);
  addCart(newPizzaArray);
}

function addCart(cartPizzaArray) {
  let arr = cartPizzaArray;
  let topArr = [];

  arr.forEach((item) => {
    if (arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id;
    });
  });

  let li = 0;
  let listArr = [];
  
  let total = 0;
  let subtotal = 0;
  let tax = 0;

  topArr.forEach((item) => {
    let count = cartPizzaArray.filter((element) => {
      return element.id == item.id;
    });
    li = `
    <li class="li">
      <img class="pizza__img" src=${item.imgUrl} alt="pizza" />
      <div class="pizza__name">
        <p class="desc">${item.name}</p>
        <span id="total" class="count">
          ${count.length}
        </span>
        <span class="price-count ">$${item.price}</span>
        <div class="btn-group">
          <button class="pizza__btn remove" onclick="addItemArray(${item.id})">
            +
          </button>
          <button class="pizza__btn remove" onclick="remove(${item.id})">
            -
          </button>
        </div>
      </div>
    </li>
    `;

    listArr.push(li);
    cartList.innerHTML = listArr.join("");
  });

  cartPizzaArray.forEach((item) => {
    subtotal += item.price;
    tax += item.price * 0.1;
    total += tax + item.price;
  });


  subTotalEl.innerHTML = subtotal.toFixed(2);
  totalEl.innerHTML = total.toFixed(2)
  taxEl.innerHTML = tax.toFixed(2)
}

function remove(elId) {
  let count = 0;
  let a = [];

  newPizzaArray.forEach((element) => {
    if (element.id === elId && count === 0) {
      count++;
    } else {
      a.push(element);
    }
  });

  newPizzaArray = a;
  if (newPizzaArray.length === 0) {
    cartList.innerHTML = "";
  }
  addCart(newPizzaArray);
}


// left box added
// pizzaArray.forEach(item => {
//   let li = document.createElement("li");
//   li.className = "li";
//   li.innerHTML = `
//   <div class="img-div">
//   <img src="${item.imageUrl}" alt="img">
//   </div>
//   <div class="desc">
//   <h3>${item.name}</h3>
//   <p class="price">$${item.price}</p>
//   <button class="btn one-btn d" onclick='addItemArray(${item.id})'>Add to Card</button>
//   </div>
//   `;
//   menuList.appendChild(li);
// })

// function addItemArray(listId) {
//   newPizzaArray.push(pizzaArray.filter((item) => item.id === listId)[0]);
//   addCart(newPizzaArray)
// }
// // Adding PizzaCard
// function addCart(cartPizzaArray) {
//   let arr = cartPizzaArray;
//   let topArr = [];

//   arr.forEach((item) => {
//     if (arr != "") topArr.push(arr[0]);
//     arr = arr.filter((el) => {
//       return arr[0].id != el.id;
//     });
//   });

//   let li = 0;
//   let listArr = [];
//   total = 0;

//   topArr.forEach((item) => {
//     let count = cartPizzaArray.filter((element) => {
//       return element.id == item.id;
//     });
//     li = `
//     <li class="li">
//       <img class="pizza__img" src=${item.imageUrl} alt="pizza" />
//       <div class="pizza__name">
//         <p class="desc">${item.name}</p>
//         <span id="total" class="count">
//           ${count.length}
//         </span>
//         <span class="pizza__price price-count">$${item.price}</span>
//         <div class="btn-group">
//           <button class="pizza__btn" onclick="addItemArray(${item.id})">
//             +
//           </button>
//           <button class="pizza__btn remove" onclick="remove(${item.id})">
//             -
//           </button>
//         </div>
//       </div>
//     </li>
//     `;
  
//         listArr.push(li);
//         cartList.innerHTML = listArr.join("");
//   });
  
//   topArr.forEach((item) => {

//     subtotal += item.price;
//     tax += item.price * 0.1;
//     total += subtotal + tax;
//   });

//   console.log(cartPizzaArray);

//   SubTotalEl.innerHTML = subtotal.toFixed(2);
//   taxEl.innerHTML = tax.toFixed(2);
//   totalEl.innerHTML = total.toFixed(2);
// }

// function remove(elId) {
//   let count = 0;
//   let a = [];

//   newPizzaArray.forEach((el) => {
//     if (el.id === elId && count === 0) {
//       count++;
//     } else {
//       a.push(el);
//     }
    
//   });

//   newPizzaArray = a;
//   if (newPizzaArray.length === 0) {
//     cartList.innerHTML = "";
//   }
//   addCart(newPizzaArray);
// }

