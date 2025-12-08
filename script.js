/*
// script.js
let index = 0;
const params = new URLSearchParams(location.search);
const id = params.get('id') || morningDuas[0].id;
index = morningDuas.findIndex(m => m.id === id);
if(index === -1) index = 0;

const mainImg = document.getElementById('mainImg');
const duaTitle = document.getElementById('duaTitle');
const descEn = document.getElementById('descEn');
const descHi = document.getElementById('descHi');
const descUr = document.getElementById('descUr');
const descAr = document.getElementById('descAr');
const explainEn = document.getElementById('explainEn');
const pageTitle = document.getElementById('pageTitle');
const downloadBtn = document.getElementById('downloadBtn');
const openPage = document.getElementById('openPage');

function render() {
  const item = morningDuas[index];
  mainImg.src = item.img;
  mainImg.alt = item.title.en;
  duaTitle.innerText = item.title.en;
  descEn.innerText = item.desc.en;
  descHi.innerText = item.desc.hi;
  descUr.innerText = item.desc.ur;
  descAr.innerText = item.desc.ar;
  explainEn.innerText = item.explain.en;
  pageTitle.innerText = item.title.en;

  downloadBtn.href = item.img;
  openPage.href = item.img;

  // Update URL (so share link contains correct id)
  history.replaceState(null, '', `?id=${item.id}`);

  // Update meta tags for Web Share (note: crawlers won't see these)
  const setMeta = (prop, content) => {
    let m = document.querySelector(`meta[property="${prop}"]`);
    if(!m) {
      m = document.createElement('meta');
      m.setAttribute('property', prop);
      document.head.appendChild(m);
    }
    m.content = content;
  };
  setMeta('og:title', item.title.en + ' — Deep Faith Dua');
  setMeta('og:description', item.desc.en);
  setMeta('og:image', location.origin + '/' + item.img);
}

document.getElementById('next').onclick = ()=> { index = (index + 1) % morningDuas.length; render(); };
document.getElementById('prev').onclick = ()=> { index = (index - 1 + morningDuas.length) % morningDuas.length; render(); };
/*
// Touch swipe
let startX = 0;
document.querySelector('.viewer').addEventListener('touchstart', e=> startX = e.touches[0].clientX);
document.querySelector('.viewer').addEventListener('touchend', e=>{
  const endX = e.changedTouches[0].clientX;
  if(endX < startX - 40) document.getElementById('next').click();
  if(endX > startX + 40) document.getElementById('prev').click();
});
*
let startX = 0;
let startY = 0;

modalImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

modalImg.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;

    let diffX = endX - startX;
    let diffY = endY - startY;

    // Swipe only when horizontal movement is bigger
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -50) showNext();
        if (diffX > 50) showPrev();
    }
});
// Share button: use Web Share API if available (mobile)
document.getElementById('shareBtn').onclick = async () => {
  const item = morningDuas[index];
  const pageUrl = location.origin + location.pathname + '?id=' + item.id; // dua.html?id=md1
  if(navigator.share) {
    try {
      await navigator.share({
        title: item.title.en,
        text: item.desc.en,
        url: pageUrl
      });
    } catch (err) { console.warn(err); }
  } else {
    // fallback: copy link
    try {
      await navigator.clipboard.writeText(pageUrl);
      alert('Link copied to clipboard');
    } catch(e) {
      prompt('Copy this link:', pageUrl);
    }
  }
};

render();
*/

// ============= Dua Viewer Script (Universal for all Categories) =============

let index = 0;
const category = localStorage.getItem("selectedCategory") || "Morning Dua";

// Load the correct dua list dynamically
const duaList = duaData[category];
if (!duaList) {
    alert("Invalid Category!");
    window.location.href = "index.html";
}

// URL ID selection
const params = new URLSearchParams(location.search);
const id = params.get('id') || duaList[0].id;
index = duaList.findIndex(m => m.id === id);
if (index === -1) index = 0;

// HTML Elements
const mainImg = document.getElementById('mainImg');
const duaTitle = document.getElementById('duaTitle');
const descEn = document.getElementById('descEn');
const descHi = document.getElementById('descHi');
const descUr = document.getElementById('descUr');
const descAr = document.getElementById('descAr');
const explainEn = document.getElementById('explainEn');
const pageTitle = document.getElementById('pageTitle');
const downloadBtn = document.getElementById('downloadBtn');
const openPage = document.getElementById('openPage');

// =========== Structured Data ==============
function addStructuredData(item) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": item.title.en,
        "about": "Islamic Dua - Supplication",
        "description": item.desc.en,
        "image": location.origin + "/" + item.img,
        "isPartOf": {
            "@type": "Collection",
            "name": category
        },
        "keywords": [
            "Islamic Dua", item.title.en, category,
            "Arabic Dua", "Hindi Dua", "Urdu Dua", "English Translation"
        ],
        "inLanguage": "Arabic, Urdu, Hindi, English"
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(tag);
}

// =============== Render Dua ===============
function render() {
    const item = duaList[index];

    mainImg.src = item.img;
    mainImg.alt = item.title.en;
    duaTitle.innerText = item.title.en;
    descEn.innerText = item.desc.en;
    descHi.innerText = item.desc.hi;
    descUr.innerText = item.desc.ur;
    descAr.innerText = item.desc.ar;
    explainEn.innerText = item.explain.en;
    pageTitle.innerText = "Deep Faith Dua";

    const imgUrl = location.origin + "/" + item.img;
    downloadBtn.href = imgUrl;
    openPage.href = imgUrl;

    // Update ID in URL for Sharing
    history.replaceState(null, '', `?id=${item.id}`);

    // Update OG Tags
    const setMeta = (prop, val) => {
        let m = document.querySelector(`meta[property="${prop}"]`);
        if (!m) { m = document.createElement("meta"); document.head.appendChild(m); }
        m.setAttribute("property", prop);
        m.setAttribute("content", val);
    };
    setMeta("og:title", item.title.en + " — Deep Faith Dua");
    setMeta("og:description", item.desc.en);
    setMeta("og:image", imgUrl);

    addStructuredData(item);
}

// Swiping
let startX = 0;
mainImg.addEventListener("touchstart", e => startX = e.touches[0].clientX);
mainImg.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - startX;
    if (diff < -40) showNext();
    if (diff > 40) showPrev();
});

// Buttons Navigation
function showNext() {
    index = (index + 1) % duaList.length;
    render();
}
function showPrev() {
    index = (index - 1 + duaList.length) % duaList.length;
    render();
}
document.getElementById("next").onclick = showNext;
document.getElementById("prev").onclick = showPrev;

// Share Button - Web Share API
document.getElementById('shareBtn').onclick = async () => {
    const item = duaList[index];
    const pageUrl = location.origin + location.pathname + `?id=${item.id}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: item.title.en,
                text: item.desc.en,
                url: pageUrl
            });
        } catch (err) { console.log(err); }
    } else {
        await navigator.clipboard.writeText(pageUrl);
        alert("Link Copied 👍");
    }
};

render();
