var courses = [
    {
      image: "images/javascriptDef.png",
      title: "what is javascript?",
      category: "JS",
      price: 9.9,
    },
    {
      image: "images/htmlBasics.PNG",
      title: "basics of HTML",
      category: "HTML",
      price: 5.9,
    },
    {
      image: "images/htmlElements.png",
      title: "HTML elements and tags",
      category: "HTML",
      price: 9.9,
    },
    {
      image: "images/cssSelectors.jpg",
      title: "CSS selectors",
      category: "CSS",
      price: 69.9,
    },
    {
      image: "images/javascriptVariables.png",
      title: "variables and data type of javascript",
      category: "JS",
      price: 19.9,
    },
    {
      image: "images/javascriptOperators.png",
      title: "Javascript operators and conditions",
      category: "JS",
      price: 29.9,
    },
    {
      image: "images/htmlAttrVal.jpg",
      title: "HTML attributes and values",
      category: "HTML",
      price: 19.9,
    },
    {
      image: "images/cssProperties.png",
      title: "CSS properties",
      category: "CSS",
      price: 29.9,
    },
    {
      image: "images/javascriptObjects.png",
      title: "Javascript objects and arrays",
      category: "JS",
      price: 39.9,
    },
    {
      image: "images/cssMesures.png",
      title: "mesures and unites of CSS",
      category: "CSS",
      price: 19.9,
    },
    {
      image: "images/cssAnimation.png",
      title: "CSS animations",
      category: "CSS",
      price: 19.9,
    },
    {
      image: "images/javascriptFunctions.png",
      title: "The basics of javascript",
      category: "JS",
      price: 29.9,
    },
    {
      image: "images/javascriptEvents.png",
      title: "javascript events",
      category: "JS",
      price: 59.9,
    },
    {
      image: "images/cssColors.png",
      title: "css colors",
      category: "css",
      price: 29.9,
    },
    {
      image: "images/phpBasics.png",
      title: "getting started with php",
      category: "php",
      price: 15.9,
    },
    {
      image: "images/javascriptFunctions2.png",
      title: "functions and loops with javascript",
      category: "JS",
      price: 19.9,
    },
    {
      image: "images/phpDataBase.png",
      title: "connecting to database using PHP",
      category: "php",
      price: 29.9,
    },
    {
      image: "images/phpCRUD.png",
      title: "manipulating crud using php",
      category: "php",
      price: 45.9,
    },
    {
      image: "images/javascriptDOM.png",
      title: "DOM the power of javascript",
      category: "JS",
      price: 23.9,
    },
    {
      image: "images/javascriptDOM.png",
      title: "Groupe3",
      category: "G3",
      price: 10,
    },
  ];
  
  const element1 = document.querySelector("#element1");
  const element2 = document.querySelector("#element2");
  const element3 = document.querySelector("#element3");
  
  
  
  const changeElement = (element, myCourses, index) => {
      element.querySelector('img').src = myCourses[index]['image'];
      element.querySelector('h6').textContent = myCourses[index]['title'];
      element.querySelector('h6').textContent = myCourses[index]['title'];
  
  
  
  }
  setInterval(() => {
      const shuffled = [...courses].sort(() => 0.5 - Math.random());
      let elements = shuffled.slice(0,3);
      changeElement(element1, elements, 0);
      changeElement(element2, elements, 1);
      changeElement(element3, elements, 2);
  
      // element1.querySelector('img').src = elements[0]['image'];
      // element2.querySelector('img').src = elements[1]['image'];
      // element3.querySelector('img').src = elements[2]['image'];
    }, 2000);