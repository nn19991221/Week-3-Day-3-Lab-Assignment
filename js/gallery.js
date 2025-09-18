
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
  "Calm and friendly dog, ideal for families.",
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


const openListTag   = (i) => `<li id="photo${i+1}">`;  // id: photo1..photo10
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

    html += `
      ${openListTag(i)}
        ${img}
        ${desc}
        ${caption}
      ${closeListTag}
    `;
  }
  ul.innerHTML = html.trim();
})();
