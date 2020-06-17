// 1

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const getSongList = (arr) => {
  document.write(`<ol id="list"></ol>`);
  const list = document.getElementById("list");
  for (let i = 0; i < arr.length; i++) {
    const listItem = document.createElement("LI");
    list.appendChild(listItem);
    listItem.innerHTML = arr[i].author + " - " + arr[i].song;
  }
};

getSongList(playList);

// 2

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.onclick = function () {
  modal.style.display = "block";
  openModal.style.display = "none";
};
closeModal.onclick = function () {
  modal.style.display = "none";
  openModal.style.display = "block";
};

// 3

const changeColor = document.getElementById("changeColor");
let redComputed = getComputedStyle(red);
let yellowComputed = getComputedStyle(yellow);
let greenComputed = getComputedStyle(green);

changeColor.onclick = function () {
  if (redComputed.backgroundColor === "rgb(255, 0, 0)") {
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "white";
  } else if (yellowComputed.backgroundColor === "rgb(255, 255, 0)") {
    green.style.backgroundColor = "green";
    yellow.style.backgroundColor = "white";
  } else if (greenComputed.backgroundColor === "rgb(0, 128, 0)") {
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "white";
  }
};
