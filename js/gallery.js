
const imgPaths = [
  "images/gallery/pet01.jpg",
  "images/gallery/pet02.jpg",
  "images/gallery/pet03.jpg",
  "images/gallery/pet04.jpg",
  "images/gallery/pet05.jpg",
  "images/gallery/pet06.jpg",
  "images/gallery/pet07.jpg",
  "images/gallery/pet08.jpg",
  "images/gallery/pet09.jpg",
  "images/gallery/pet10.jpg"
];


const captionTexts = [
  "Buddy", "Milo", "Coco", "Daisy", "Max",
  "Bella", "Charlie", "Lucy", "Rocky", "Luna"
];

const descTexts = [
  "Calm and friendly cat, ideal for families.",
  "Playful pup who loves long walks.",
  "Curious cat with a gentle purr.",
  "Affectionate and people-oriented.",
  "Energetic and loves fetch.",
  "Sweetheart, good with kids.",
  "Smart boy, quick learner.",
  "Shy at first, then cuddly.",
  "Brave and loyal companion.",
  "Quiet, loves sunny naps."
];


const openListTag   = (i) => `<li id="photo${i+1}">`;  
const closeListTag  = `</li>`;
const openCaptionTag = `<span class="caption">`;
const closeCaptionTag = `</span>`;
const openDescTag   = `<div class="description">`;
const closeDescTag  = `</div>`;


(function renderGallery () {
  const ul = document.getElementById("galleryList");
  if (!ul) return;

  let html = "";
  for (let i = 0; i < imgPaths.length; i++) {
    const img = `<img src="${imgPaths[i]}" alt="${captionTexts[i] || `Pet ${i+1}`}">`;
    const caption = `${openCaptionTag}${captionTexts[i] || `Pet ${i+1}`}${closeCaptionTag}`;
    const desc = `${openDescTag}${descTexts[i] || ""}${closeDescTag}`;
    
    const btn = `<button class="info-btn" data-index="${i}">Cat Info</button>`;

    html += `
      ${openListTag(i)}
        ${img}
        ${desc}
        ${caption}
        ${btn}
      ${closeListTag}
    `;
  }
  ul.innerHTML = html.trim();
})();

const infoBox = document.getElementById("infoBox");
const infoHeading = document.getElementById("infoHeading");
const infoText = document.getElementById("infoText");
const closeInfo = document.getElementById("closeInfo");


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("info-btn")) {
    const idx = e.target.dataset.index;
    infoHeading.innerHTML = captionTexts[idx];
    infoText.innerHTML = descTexts[idx];
    infoBox.style.visibility = "visible";
  }
});


closeInfo.addEventListener("click", function (e) {
  e.preventDefault();
  infoBox.style.visibility = "hidden";
});

