var plusBtns = document.querySelectorAll(".fa-square-plus")
var minusBtns = document.querySelectorAll(".fa-square-minus")
var heartBtns = document.querySelectorAll(".fa-heart")
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-can"))
var cards = Array.from(document.querySelectorAll(".card"))
var counter = document.getElementById("counter")
var prices = document.querySelectorAll(".price")
var reset = document.getElementById("reset")
var cart = document.querySelector(".fa-cart-shopping")
var count = 0
var totalPrice = document.getElementById("priceT")

//set color cart
function setCartColor() {
  if (totalPrice.innerHTML == 0) {
    cart.style.color = "#a6a6a6"
    cart.style.fontSize = "20px"
  } else {
    cart.style.color = "#1d8500"
    cart.style.fontSize = "25px"
  }
}

// increment
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    plusBtns[i].nextElementSibling.innerHTML++
    total()
    setCartColor()
  })
}

// decrement
for (let i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener("click", function () {
    if (minusBtns[i].previousElementSibling.innerHTML > 0) {
      minusBtns[i].previousElementSibling.innerHTML--
    }
    total()
    setCartColor()
    if (totalPrice.innerHTML == 0) {
      totalPrice.style.fontSize = "25px"
    }
  })
}
// like
for (let i = 0; i < heartBtns.length; i++) {
  heartBtns[i].addEventListener("click", function () {
    if (heartBtns[i].style.color !== "red") {
      heartBtns[i].style.color = "red"
    } else {
      heartBtns[i].style.color = "#292929"
    }
  })
}
// delete card
for (let i in deleteBtns) {
  deleteBtns[i].addEventListener("click", function () {
    cards[i].remove()
    total()
    setCartColor()
    if (totalPrice.innerHTML == 0) {
      totalPrice.style.fontSize = "25px"
    }
  })
}
// function total

function total() {
  let quantity = Array.from(document.querySelectorAll("#counter"))
  let priceU = Array.from(document.querySelectorAll(".price"))

  let s = 0
  for (let i in quantity) {
    s = s + quantity[i].innerHTML * priceU[i].innerHTML
  }
  totalPrice.innerHTML = s
  totalPrice.style.fontSize = "35px"
}

//reset

reset.addEventListener("click", function () {
  if (totalPrice.innerHTML != 0) {
    for (let i = 0; i < minusBtns.length; i++) {
      minusBtns[i].previousElementSibling.innerHTML = 0
      //   plusBtns[i].nextElementSibling.innerHTML = 0
    }
    totalPrice.innerHTML = 0
    alert("No chakchouka ?!! Sure ?!!")
    setCartColor()
    if (totalPrice.innerHTML == 0) {
      totalPrice.style.fontSize = "25px"
    }
  }
})
