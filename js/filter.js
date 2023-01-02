var content = document.querySelector(".courses");
const searchBox = document.querySelector('#search-box');

function fetchCourse(path, title, price, category) {

  let div = document.createElement("div");
  div.setAttribute("class", "card col-3 me-2 mb-2 " + category);
  let img = document.createElement("img"),
    p = document.createElement("p"),
    span = document.createElement("span");
  img.src = path;
  img.setAttribute("class", "card-img");
  let contenu = document.createTextNode(title);
  p.appendChild(contenu);
  p.setAttribute("class", "card-tilte");
  let contenu2 = document.createTextNode(price);
  span.appendChild(contenu2);
  span.setAttribute("class", "card-text");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(span);
  content.append(div);
}
courses.forEach(function (element) {
  fetchCourse(element.image, element.title, element.price, element.category);
});


/*Filter Script */
const filterBy = async (filterElement) => {
  const all = document.querySelectorAll(".card");
  /*if user select 'all' we show all elements and break the function */
  if (filterElement == "all") {
    for(const element of all){
        element.classList.remove('hide');
    }
    return 0; 
  }
  //select all elements except those containing filter class //
  const deletedElements = document.querySelectorAll(
    ".card:not(." + filterElement + ")"
  );
  //select elements that contains filter class //
  const filtered = document.querySelectorAll("." + filterElement);

  //Show all hidden elements */
  for (const element of all) {
    element.classList.remove("hide");
  }
  //hide all elements except those containing filter class //
  for (const element of deletedElements) {
    element.classList.add("hide");
  }
  //only show elements that have filter class //
  for (const element of filtered) {
    element.classList.remove("hide");
  }
  
};
/*End of Filter Script */

/*Start Of Search Box */

const search = () => {
    let value = document.querySelector('#searchBox').value;
    let all = document.getElementsByClassName('card');

    /* Make search box uppercase and without space */
    value = value.trim().toUpperCase()
    for (i = 0; i < all.length; i++) { 
        /*hide element if it's not fit in the search box */
        if (!all[i].innerHTML.toUpperCase().includes(value)) {
            all[i].style.display="none";
        }
        /* keep everything else */
        else {
            all[i].style.display="";                 
        }
    }
    
}

/*End of Search box */

/*Start of range price */

/* get maximum & Minimum Price */
let maxCourse = courses.reduce((max, course) => max.price > course.price ? max : course);
let minCourse = courses.reduce((min, course) => min.price < course.price ? min : course);

// reduce(max, course ){
//   if(max.price > course.price) {
//     return max;
//   }
//   else {
//     return course;
//   }
// }


const rangeSlider = document.querySelector('#priceRange');
rangeSlider.setAttribute('min', minCourse.price);
rangeSlider.setAttribute('max', maxCourse.price);

/* Start of range filter functionality */
function updateRange() {
    const all = document.querySelectorAll(".card span");
    document.querySelector('small').textContent = 'Value: ' + rangeSlider.value;
    all.forEach((element) => {
        if(element.innerText > rangeSlider.value) {
            //Hide all elements greater than range slider value */
            element.parentElement.classList.add('hide');
        }else {
            //Show everything else
            element.parentElement.classList.remove('hide');
        }
    });

  }
  /*End of range filter functionality */



  

/*End Of range price */


