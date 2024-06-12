let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bhuvam Bam',
        image: '6.PNG',
        price: 500
        
    },
    {
        id: 2,
        name: 'Khan Sadaf',
        image: '4.PNG',
        price: 950
        
    },
    {
        id: 3,
        name: 'Ashish Chanchlani',
        image: '3.PNG',
        price: 550
    },
    {
        id: 4,
        name: 'Garima Chaurasiya',
        image: '2.PNG',
        price: 600
    },
    {
        id: 5,
        name: 'Munawar Faruqui',
        image: '5.PNG',
        price: 700
    },
    {
        id: 6,
        name: 'Lucky Dancer',
        image: '1.PNG',
        price: 450
        
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();


}

const key = "rzp_test_WWeWqbVeNrplMv"; //Replace it with your Test Key ID generated from the Dashboard
const amount = 400000; //in paise

window.onload = function() {
const widgetConfig = {
	"key": key,
	"amount": amount,
};
const rzpAffordabilitySuite = new RazorpayAffordabilitySuite(widgetConfig);
rzpAffordabilitySuite.render();
}
