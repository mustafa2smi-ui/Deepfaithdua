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

// Touch swipe
let startX = 0;
document.querySelector('.viewer').addEventListener('touchstart', e=> startX = e.touches[0].clientX);
document.querySelector('.viewer').addEventListener('touchend', e=>{
  const endX = e.changedTouches[0].clientX;
  if(endX < startX - 40) document.getElementById('next').click();
  if(endX > startX + 40) document.getElementById('prev').click();
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
