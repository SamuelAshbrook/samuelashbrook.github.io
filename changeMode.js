//Global DOM Variables
let logo = document.querySelector('#logo');
let mainHeader = document.querySelector('#main-header');
let secondHeader = document.querySelector("#second-header")
let about = document.querySelectorAll(".about-p")
let navItems = document.querySelectorAll(".nav-item")
let background = document.querySelector("#background-img")
let projectPage = document.querySelector("#projects")
let skillPage = document.querySelector("#skills")
let contactPage = document.querySelector("#contact")
let otherPage = document.querySelector("#other")
let footerPage = document.querySelector("#footer")
let subHeading = document.querySelectorAll(".sub-heading")
let button1 = document.querySelector("#view-more")
let icon1 = document.querySelector("#icon-1")
let icon2 = document.querySelector("#icon-2")
let icon3 = document.querySelector("#icon-3")
let icon4 = document.querySelector("#icon-4")
let icon5 = document.querySelector("#icon-5")
let icon6 = document.querySelector("#icon-6")
let subtitle = document.querySelectorAll(".sub")
let labels = document.querySelectorAll("label")
let arrow = document.querySelector("#arrow")
let twitter = document.querySelector("#social-1")
let linkedin = document.querySelector("#social-2")
let github = document.querySelector("#social-3")
let codepen = document.querySelector("#social-4")
let devto = document.querySelector("#social-5")
let moon = document.querySelector("#dark-mode")
let sun = document.querySelector("#light-mode")
let link = document.querySelectorAll(".link")
let panel = document.querySelectorAll(".project-panel")
let more = document.querySelector("#view-more")
let otherArea = document.querySelector("#otherArea")
let certificate = document.querySelector("#certificate")

//Hide dark mode
moon.style.visibility = "hidden"

//Setting links initial colour
for (let c = 0; c < link.length; c++){
  link[c].addEventListener("mouseover", () => {
    link[c].style.color = "white"
  })
  link[c].addEventListener("mouseout", () => {
    link[c].style.color = "darkgoldenrod"
  })
}

//Setting navItems initial colour
for (let j = 0; j < navItems.length; j++){
  navItems[j].addEventListener("mouseover", () => {
    navItems[j].style.color = "darkgoldenrod"
  })
  navItems[j].addEventListener("mouseout", () => {
    navItems[j].style.color = "white"
  })
}

//Setting panel initial colour
for (let v = 0; v < panel.length; v++){
  panel[v].addEventListener("mouseover", () => {
    panel[v].style.border = "2px solid white"
  })
  panel[v].addEventListener("mouseout", () => {
    panel[v].style.border = "2px solid darkgoldenrod"
  })
}

more.addEventListener("mouseover", () => {
  more.style.color = "darkgoldenrod"
  more.style.border = "2px solid darkgoldenrod"
})
more.addEventListener("mouseout", () => {
  more.style.color = "white"
  more.style.border = "2px solid white"
})

certificate.addEventListener("mouseover", () => {
  certificate.style.color = "white"
})
certificate.addEventListener("mouseout", () => {
  certificate.style.color = "darkgoldenrod"
})

//Light Mode
//When sun is clicked - change...
let swap = sun.addEventListener("click", () => {
  mainHeader.style.color = "black"; //Change color of text
  secondHeader.style.color = "black"; //Change color of text
  logo.setAttribute("src", "images/logo-switch.png"); //Change logo image
  background.style.backgroundImage = "url('images/background-switch.jpg')"; //Change background image
  background.style.borderBottom = "5px solid #6200EE" //Change color of border
  for (let i = 0; i < about.length; i++) { //Using a for loop to change each "about" element
    about[i].style.color = "black";
  } 

  for (let j = 0; j < navItems.length; j++) { //Using a for loop to change each "navItem" element when hovered over
    navItems[j].style.color = "black";
    navItems[j].addEventListener("mouseover", () => {
      navItems[j].style.color = "#6200EE"
    })
    navItems[j].addEventListener("mouseout", () => { //Using a for loop to change each "navItem" element when cursor leaves
      navItems[j].style.color = "black"
    })
  } 

  for (let c = 0; c < link.length; c++){ //Using a for loop to change each "link" element when hovered over
    link[c].style.color = "#6200EE"
    link[c].addEventListener("mouseover", () => {
      link[c].style.color = "black"
    })
    link[c].addEventListener("mouseout", () => { //Using a for loop to change each "link" element when cursor leaves
      link[c].style.color = "#6200EE"
    })
  }

  for (let v = 0; v < panel.length; v++){ //Using a for loop to change each "panel" element
    panel[v].style.border = "2px solid #6200EE"
    panel[v].addEventListener("mouseover", () => { //When hovered over 
      panel[v].style.border = "2px solid black"
    })
    panel[v].addEventListener("mouseout", () => { //When cursor leaves
      panel[v].style.border = "2px solid #6200EE"
    })
  }

  more.style.color = "black"
  more.style.border = "2px solid black"
  more.addEventListener("mouseover", () => { //When hovered over
    more.style.color = "#6200EE"
    more.style.border = "2px solid #6200EE"
  })
  more.addEventListener("mouseout", () => { //When cursor leaves
    more.style.color = "black"
    more.style.border = "2px solid black"
  })

  certificate.style.color = "#6200EE"
  certificate.addEventListener("mouseover", () => {
    certificate.style.color = "black"
  })
  certificate.addEventListener("mouseout", () => {
    certificate.style.color = "#6200EE"
  })

  //Changing the background and border colors
  projectPage.style.backgroundColor = "#FFFAFA"
  projectPage.style.borderBottom = "5px solid #6200EE"
  skillPage.style.backgroundColor = "#FFFAFA"
  skillPage.style.borderBottom = "5px solid #6200EE"
  contactPage.style.backgroundColor = "#FFFAFA"
  contactPage.style.borderBottom = "5px solid #6200EE"
  otherPage.style.backgroundColor = "#FFFAFA"
  otherPage.style.borderBottom = "5px solid #6200EE"
  footerPage.style.backgroundColor = "#FFFAFA"
    
  for (let k = 0; k < subHeading.length; k++) { //Using a for loop to change each "subHeading" element
    subHeading[k].style.color = "black"
  }

  button1.style.border = "2px solid black"
  button1.style.color = "black"

  //Changing the image of skill icons
  icon1.setAttribute("src", "images/html5-switch.png");
  icon2.setAttribute("src", "images/css3-switch.png");
  icon3.setAttribute("src", "images/javascript-switch.png");
  icon4.setAttribute("src", "images/react-switch.png");
  icon6.setAttribute("src", "images/git-switch.png");
    
  for (let l = 0; l < subtitle.length; l++) { //Using a for loop to change each "subtitle" element
    subtitle[l].style.color = "black"
  }

  for (let z = 0; z < labels.length; z++) { //Using a for loop to change each "labels" element
    labels[z].style.color = "black"
  }

  //Changing the image of arrow and social media icons
  arrow.setAttribute("src", "images/arrow-switch.png");
    
  twitter.setAttribute("src", "images/twitter-switch.png");
  linkedin.setAttribute("src", "images/linkedin-switch.png");
  github.setAttribute("src", "images/github-switch.png");
  codepen.setAttribute("src", "images/codepen-switch.png");
  devto.setAttribute("src", "images/dev-switch.png");
  moon.style.visibility = "visible"
  sun.style.visibility = "hidden"

  otherArea.style.color = "black"
})
  
//Dark Mode
let swapBack = moon.addEventListener("click", () => {
  mainHeader.style.color = "white";
  secondHeader.style.color = "white";
  background.style.backgroundImage = "url('images/background.jpg')";
  background.style.borderBottom = "5px solid darkgoldenrod"
  logo.setAttribute("src", "images/logo.png");
  for (let i = 0; i < about.length; i++) {
    about[i].style.color = "white";
  } 

  for (let j = 0; j < navItems.length; j++) {
    navItems[j].style.color = "white";
    navItems[j].addEventListener("mouseover", () => {
      navItems[j].style.color = "darkgoldenrod"
    })
    navItems[j].addEventListener("mouseout", () => {
      navItems[j].style.color = "white"
    })
  } 

  for (let c = 0; c < link.length; c++){
    link[c].style.color = "darkgoldenrod"
    link[c].addEventListener("mouseover", () => {
      link[c].style.color = "white"
    })
    link[c].addEventListener("mouseout", () => {
      link[c].style.color = "darkgoldenrod"
    })
  }

  for (let v = 0; v < panel.length; v++){
    panel[v].style.border = "2px solid darkgoldenrod"
    panel[v].addEventListener("mouseover", () => {
      panel[v].style.border = "2px solid white"
    })
    panel[v].addEventListener("mouseout", () => {
      panel[v].style.border = "2px solid darkgoldenrod"
    })
  }

  more.style.color = "white"
  more.style.border = "2px solid white"
  more.addEventListener("mouseover", () => {
    more.style.color = "darkgoldenrod"
    more.style.border = "2px solid darkgoldenrod"
  })
  more.addEventListener("mouseout", () => {
    more.style.color = "white"
    more.style.border = "2px solid white"
  })

  certificate.style.color = "darkgoldenrod"
  certificate.addEventListener("mouseover", () => {
    certificate.style.color = "white"
  })
  certificate.addEventListener("mouseout", () => {
    certificate.style.color = "darkgoldenrod"
  })

  projectPage.style.backgroundColor = "#0D0D0D"
  projectPage.style.borderBottom = "5px solid darkgoldenrod"
  skillPage.style.backgroundColor = "#0D0D0D"
  skillPage.style.borderBottom = "5px solid darkgoldenrod"
  contactPage.style.backgroundColor = "#0D0D0D"
  contactPage.style.borderBottom = "5px solid darkgoldenrod"
  otherPage.style.backgroundColor = "#0D0D0D"
  otherPage.style.borderBottom = "5px solid darkgoldenrod"
  footerPage.style.backgroundColor = "#0D0D0D"

  for (let k = 0; k < subHeading.length; k++) {
    subHeading[k].style.color = "white"
  }
  button1.style.border = "2px solid white"
  button1.style.color = "white"
  icon1.setAttribute("src", "images/html5.png");
  icon2.setAttribute("src", "images/css3.png");
  icon3.setAttribute("src", "images/javascript.png");
  icon4.setAttribute("src", "images/react.png");
  icon6.setAttribute("src", "images/git.png");

  for (let l = 0; l < subtitle.length; l++) {
    subtitle[l].style.color = "white"
  }

  for (let z = 0; z < labels.length; z++) {
    labels[z].style.color = "white"
  }

  arrow.setAttribute("src", "images/arrow.png");

  twitter.setAttribute("src", "images/twitter.png");
  linkedin.setAttribute("src", "images/LinkedIn.png");
  github.setAttribute("src", "images/github.png");
  codepen.setAttribute("src", "images/codepen.png");
  devto.setAttribute("src", "images/Dev.png");
  sun.style.visibility = "visible"
  moon.style.visibility = "hidden"

  otherArea.style.color = "white"
})


//Submitting the form
  let count = 1;
  let form = document.querySelector("#contact-left")

function limit() {
  let name = document.querySelector("#name").value
  let email = document.querySelector("#name").value
  let subject = document.querySelector("#subject").value
  let message = document.querySelector("#message").value
  let submit = document.querySelector("#submit");

  if (name == "") {
    false
  }
  else if (email === "") {
    false
  }
  else if (subject === "") {
    false
  }
  else if (message === "") {
    false
  }
  else if(submit.onclick){
   count > 1 ? "" : contactSubmit()
   count++
  }
}

function contactSubmit(){
     const newDiv = document.createElement("div");
     const newContent = document.createTextNode("");
     newDiv.appendChild(newContent);
     const currentDiv = document.getElementById("contact-left");   
     currentDiv.appendChild(newDiv)
     newDiv.innerHTML = "Form has been submitted";
     newDiv.classList.add("example")
}
