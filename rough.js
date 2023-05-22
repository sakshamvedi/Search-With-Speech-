// Color components
var color1 = document.querySelectorAll('.color1');
var color2 = document.querySelectorAll('.color2');
var color3 = document.querySelectorAll('.color3');
var color4 = document.querySelectorAll('.color4');
var color5 = document.querySelectorAll('.color5');

// Arrow and content components
var arrow1 = document.querySelectorAll('.arrow1');
var arrow2 = document.querySelectorAll('.arrow2');
var arrow3 = document.querySelectorAll('.arrow3');
var arrow4 = document.querySelectorAll('.arrow4');
var arrow5 = document.querySelectorAll('.arrow5');
//content box
var content1 = document.querySelectorAll('.content1');
var content2 = document.querySelectorAll('.content2');
var content3 = document.querySelectorAll('.content3');
var content4 = document.querySelectorAll('.content4');
var content5 = document.querySelectorAll('.content5');

//main box 
var mainBox = document.querySelectorAll('.mainBox');
//color shade text
var color_shade = document.querySelectorAll('.color-name')

color1.forEach((color) => {
  color.addEventListener('click', function(event) {
    var arrow = color.querySelector('.arrow1');
    arrow.classList.add("active");
    var content = color.querySelector('.content1');
    content.classList.add("active");
    color_shade.forEach((color_shade) => {
      color_shade.textContent = "White";
      });
    removeActiveClassesExcept(arrow, [arrow2, arrow3, arrow4, arrow5]);
    removeActiveClassesExcept(content, [content2, content3, content4, content5]);
  });
});

color2.forEach((color) => {
  color.addEventListener('click', function(event) {
    var arrow = color.querySelector('.arrow2');
    arrow.classList.add("active");
    var content = color.querySelector('.content2');
    content.classList.add("active");
    color_shade.forEach((color_shade) => {
      color_shade.textContent = "Light Yellow";
      });
    removeActiveClassesExcept(arrow, [arrow1, arrow3, arrow4, arrow5]);
    removeActiveClassesExcept(content, [content1, content3, content4, content5]);
  });
});

color3.forEach((color) => {
  color.addEventListener('click', function(event) {
    var arrow = color.querySelector('.arrow3');
    arrow.classList.add("active");
    var content = color.querySelector('.content3');
    content.classList.add("active");
    color_shade.forEach((color_shade) => {
      color_shade.textContent = "Transparent";
      });
    removeActiveClassesExcept(arrow, [arrow1, arrow2, arrow4, arrow5]);
    removeActiveClassesExcept(content, [content1, content2, content4, content5]);
  });
});

color4.forEach((color) => {
  color.addEventListener('click', function(event) {
    var arrow = color.querySelector('.arrow4');
    arrow.classList.add("active");
    var content = color.querySelector('.content4');
    content.classList.add("active");
    color_shade.forEach((color_shade) => {
      color_shade.textContent = "Light Blue";
      });
    removeActiveClassesExcept(arrow, [arrow1, arrow2, arrow3, arrow5]);
    removeActiveClassesExcept(content, [content1, content2, content3, content5]);
  });
});

color5.forEach((color) => {
  color.addEventListener('click', function(event) {
    var arrow = color.querySelector('.arrow5');
    arrow.classList.add("active");
    var content = color.querySelector('.content5');
    content.classList.add("active");
    color_shade.forEach((color_shade) => {
      color_shade.textContent = "Cream";
      });
    removeActiveClassesExcept(arrow, [arrow1, arrow2, arrow3, arrow4]);
    removeActiveClassesExcept(content, [content1, content2, content3, content4]);
  });
});

// Helper function to remove active class from all arrow or content components except the specified ones
function removeActiveClassesExcept(activeElement, elements) {
  elements.forEach((element) => {
    element.forEach((elem) => {
      if (elem != activeElement) {
        elem.classList.remove("active");
      }
    });
  });
}
