const stickySections =[...document.querySelectorAll('.sticky')];


window.addEventListener('scroll',(e)=>{
    for(let i=0; i< stickySections.length; i++){
        transform(stickySections[i])
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection= section.querySelector('.horizontal-scroll');
    let percentage = ((window.scrollY-offsetTop)/ window.innerHeight) * 100;
    percentage= percentage<0?0:percentage>400?400:percentage;
    scrollSection.style.transform=`translate3d(${-(percentage)}vw,0,0)`;
}


function checkForVisibility() {
    var fadeUpElements = document.querySelectorAll(".fade-up");
    fadeUpElements.forEach(function (el) {
      if (isElementInViewport(el)) {
        el.classList.add("fade-upVisible");
      } else {
        el.classList.remove("fade-upVisible");
      }
    });
  
    var slideRightElements = document.querySelectorAll(".slide-right");
    slideRightElements.forEach(function (el) {
      if (isElementInViewport(el)) {
        el.classList.add("slide-right-visible");
      } else {
        el.classList.remove("slide-right-visible");
      }
    });
  }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }

  function addToCart() {
    // Add logic here to add item to cart
  
    // Show toast message
    var toast = document.getElementById("toast");
    toast.style.visibility = "visible";
  
    // Hide toast after 2 seconds (adjust as needed)
    setTimeout(function () {
      toast.style.visibility = "hidden";
    }, 2000);
  }