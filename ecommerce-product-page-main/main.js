/* to control the side bar menu with background with exact opticity for background then
remove them when close*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.75)";
  for (var i = 0; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].style.opacity = "0.20";
  }
  document.getElementsByClassName("slider")[0].style.opacity = "0.40";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
  for (var j = 0; j < document.getElementsByTagName("img").length; j++) {
    document.getElementsByTagName("img")[j].style.opacity = "1";
  }
  document.getElementsByClassName("slider")[0].style.opacity = "1";
}
/** to control the slider show  */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
    console.log("n>length: ");
  }
  if (n < 1) {
    slideIndex = x.length;
    console.log("n < 1: ");
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/**to show pic when click on it */
function showpic(e) {
  for (
    let i = 0;
    i < document.getElementsByClassName("product-sm").length;
    i++
  ) {
    let string = "product-" + (i + 1);
    if (e.src.includes(string) === true) {
      document.getElementById("product-imgg").src =
        "images/image-product-" + (i + 1) + ".jpg";
    }
  }
}
function bigImg(ele) {
  ele.style.opacity = "0.6";
}

/** show the border for image */
function showBorder(ele) {
  let elements = document.getElementsByClassName("img-slide");
  let pics = document.getElementsByClassName("product-sm");
  let imgg;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] !== ele) {
      elements[i].style.border = "unset";
      pics[i].style.opacity = "1";
    } else {
      imgg = pics[i];
    }
  }
  ele.style.border = "1.5px solid hsl(26, 100%, 55%)";
  ele.style.borderRadius = "0.6em";
  imgg.style.opacity = "0.3";
}
/** to increase or decrease number and put number inside shopping cart */
function minsFun() {
  let number = document.getElementById("myNum").innerText;
  let realNum = parseInt(number);
  if (realNum > 0) {
    document.getElementById("myNum").innerText = realNum - 1;
    document.getElementsByClassName("card-num")[0].innerText =
      document.getElementById("myNum").innerText;
  } else if (realNum <= 0) {
    document.getElementById("myNum").innerText = 0;
  }
}
function plusFun() {
  let number = document.getElementById("myNum").innerText;
  document.getElementById("myNum").innerText = parseInt(number) + 1;
}
function addToCart() {
  if (parseInt(document.getElementById("myNum").innerText) === 0) {
    /*remove the notification*/
    document.getElementsByClassName("card-num")[0].style.display = "none";
    /** show empty cart */
    document.getElementsByClassName("cartContent")[0].style.display = "block";
    /** remove the info for shopping cart */
    document.getElementsByClassName("info-shopping")[0].style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "none";
  } else {
    /**display the shopping notification */
    document.getElementsByClassName("card-num")[0].style.display = "block";
    document.getElementsByClassName("card-num")[0].innerText =
      document.getElementById("myNum").innerText;
    /**remove info to empty cart */
    document.getElementsByClassName("cartContent")[0].style.display = "none";
    /** show the shopping cart */
    document.getElementsByClassName("info-shopping")[0].style.display = "flex";
    document.getElementsByClassName("menu")[0].style.display = "initial";
    /** show the num of items with price */
    document.getElementById("item").innerText =
      document.getElementById("myNum").innerText;
    var price = parseInt(document.getElementById("myNum").innerText) * 125;
    document.getElementById("price-num").textContent = " $" + price.toFixed(2);
  }
}
/** show the shopping cart menu */
function showShopMenu() {
  let menu = document.getElementsByClassName("cart-info")[0].style.display;
  if (menu === "none" || menu === "") {
    /** display shopping cart when press on img*/
    document.getElementsByClassName("cart-info")[0].style.display = "block";
  } else {
    /** hide the shopping cart  when press on img*/
    document.getElementsByClassName("cart-info")[0].style.display = "none";
  }
}
/** to delete items for menu */
function deleteItem() {
  /** hide the shopping items */
  document.getElementsByClassName("info-shopping")[0].style.display = "none";
  document.getElementsByClassName("menu")[0].style.display = "none";
  /** show the empty message instead */
  document.getElementsByClassName("cartContent")[0].style.display = "initial";
  /** delete notification */
  document.getElementsByClassName("card-num")[0].style.display = "none";
  /** reset the item numbers for mins and adds */
  document.getElementById("myNum").textContent = "0";
}

/** to control the slider show in desktop */
var slideIndex_2 = 1;

function plusDivsDesk(n) {
  showDivsDesk((slideIndex_2 += n));
}

function showDivsDesk(n) {
  var i;
  var x = document.getElementsByClassName("slide-desk");
  if (n > x.length) {
    slideIndex_2 = 1;
  }
  if (n < 1) {
    slideIndex_2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_2 - 1].style.display = "block";
}

/**to show pic when click on it inside the slideshow in desktop*/
function showpicDesk(ele) {
  for (
    let i = 0;
    i < document.getElementsByClassName("product-sm").length;
    i++
  ) {
    let string = "product-" + (i + 1);
    if (ele.src.includes(string) === true) {
      for (
        let j = 0;
        j < document.getElementsByClassName("slide-desk").length;
        j++
      ) {
        document.getElementsByClassName("slide-desk")[j].style.display = "none";
      }

      if (
        document.getElementsByClassName("slide-desk")[i].style.display ===
        "none"
      ) {
        document.getElementsByClassName("slide-desk")[i].style.display =
          "block";
      }
    }
  }
}
/** to show the over layer when click on picture */
function aboveLayer() {
  /* call the slideshow to put it in the view*/
  showDivsDesk(slideIndex_2);
  let screen = document.getElementsByClassName("slide-above")[0];
  screen.style.display = "flex";
  screen.style.flexDirection = "column";
  screen.style.justifyContent = "space-between";
  let above = document.getElementById("overlay");
  above.style.display = "block";
}
/** to close  the above layer */
function hideAbove() {
  document.getElementsByClassName("slide-above")[0].style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
