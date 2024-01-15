const actors = [
  "jake",
  "brody",
  "king",
  "lucy",
  "ninja",
  "tagbot",
  "tasha",
  "tricky",
  "yutani",
];

const ganhe = [
  "",
  "GANHE ATÉ<br>2x MAIS",
  "GANHE ATÉ<br>135x MAIS",
  "GANHE ATÉ<br>55x MAIS",
  "GANHE ATÉ<br>90x MAIS",
  "GANHE ATÉ<br>65x MAIS",
  "GANHE ATÉ<br>15x MAIS",
  "GANHE ATÉ<br>15x MAIS",
  "",
];

const preloadImages = () => {
  for (var i = 0; i < actors.length; i++) {
    var img = new Image();
    img.src = `./assets/images/${actors[i]}.png`;
    // console.log(`${actors[i]} loaded`);
  }
}

let current = 0;
const previous = () => {
  current--;
  if (current < 0) {
    current = 8;
  }
  let name = actors[current];
  document.getElementById("actor").src = `./assets/images/${name}.png`;
  document.getElementById("name").innerText = name;
  if (current == 0 || current == 8) {
    document.getElementById("pinkbtn").style.display = "none";
  } else {
    document.getElementById("pinkbtn").style.display = "flex";
    document.getElementById("ganhe_ate").innerHTML = ganhe[current];
  }
};

const next = () => {
  current++;
  if (current > 8) {
    current = 0;
  }
  let name = actors[current];
  document.getElementById("actor").src = `./assets/images/${name}.png`;
  document.getElementById("name").innerText = name;
  document.getElementById("ganhe_ate").innerHTML = ganhe[current];
  if (current == 0 || current == 8) {
    document.getElementById("pinkbtn").style.display = "none";
  } else {
    document.getElementById("pinkbtn").style.display = "flex";
    document.getElementById("ganhe_ate").innerHTML = ganhe[current];
  }
};


const priceSelect = (price) => {
  const radios = Array.from(document.querySelectorAll(".radios"));
  radios.map((item) => {
    item.classList.remove("checked");
  });
  document.getElementById(`radioButton${price}`).classList.add("checked");

  document.getElementById("priceValue").value = price;
  
  const radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));
  radioButtons.map((radio) => {
    radio.classList.remove("clicked");
  });
  
  document.getElementById(`radio${price}`).classList.add("clicked");
};

const updateProgress = () => {
  const progressValue = document.getElementById('progressValue').value;
  document.getElementById('progress-status').style.width = `${progressValue}%`
}
