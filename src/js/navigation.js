/*
// Temporarily disabling navigation horizontal scrolling
// This moves the navigtion elements left and right depending on a swipe left or right
var navElement = document.getElementById("nav-content-outer");
var mc = new Hammer(navElement);

mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
mc.on("panleft panright", function(ev) {
  // Get nav content bar DOM element
  var navigationDOM = document.getElementById("nav-content");

  // Get current margin-left of navigation bar (as a fllat)
  var currentNavMargin = parseFloat(window.getComputedStyle(navigationDOM).getPropertyValue("margin-left"));

  var velocityMultiplier = 20;
  var windowWidth = document.documentElement.clientWidth;

  // Alternate way of measuring width of nav bar: var navBarWidth = navigationDOM.clientWidth;
  var navBarWidth = navigationDOM.getBoundingClientRect().width;

  // Only allow movement of nav if nav bar length is greater than window width
  if(navBarWidth > windowWidth) {
    var newNavLeft = currentNavMargin + (velocityMultiplier * ev.velocityX);
    var newNavRight = currentNavMargin + navBarWidth + (velocityMultiplier * ev.velocityX);

    // Only change margin of narbar if the new nav margin is calculated to be less than zero
    if(newNavLeft <= 0 && newNavRight >= windowWidth) {
      navigationDOM.style.marginLeft = newNavLeft + "px";
    }
    else if (newNavLeft > 0) {
      newNavLeft = 0;
      navigationDOM.style.marginLeft = newNavLeft + "px";
    }
    else if (newNavRight < windowWidth) {
      // The margin of the element is equal to the length of the div element minus window length
      newNavLeft = -(navBarWidth - windowWidth);
      navigationDOM.style.marginLeft = newNavLeft + "px";
    }
  }
})

// On resize of the browser, test if the browser winow is larger than the window width. If so, set navigation margin to 0
  window.onresize = setNavMargin;

  function setNavMargin() {
    var navigationDOM = document.getElementById("nav-content");
    navigationDOM.style.marginLeft = 0 + "px";
  }
*/