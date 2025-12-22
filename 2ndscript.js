// 1. URL se Category aur ID nikaalna
const params = new URLSearchParams(location.search);
const catParam = params.get('cat') || 'morning'; // Default: morning
const idParam = params.get('id');

// 2. Data Select karna (Dynamic mapping)
// Ye hissa zaruri hai nayi category connect karne ke liye
let duaList = [];
if (catParam === 'morning') {
    duaList = morningDuas;
} else if (catParam === 'namaz') {
    duaList = namazDuas;
} else if (catParam === 'evening') {
    // Agar evening ka data banaya hai to yaha add karein
    duaList = (typeof eveningDuas !== 'undefined') ? eveningDuas : morningDuas;
} else {
    duaList = morningDuas; // Kuch na mile to default
}

// 3. Index set karna
let index = 0;
if (idParam) {
    index = duaList.findIndex(m => m.id === idParam);
    if (index === -1) index = 0;
}

// 4. HTML Elements select karna
const mainImg = document.getElementById('mainImg');
const duaTitle = document.getElementById('duaTitle');
const descEn = document.getElementById('descEn');
const descHi = document.getElementById('descHi');
const descUr = document.getElementById('descUr');
const descAr = document.getElementById('descAr');
const explainEn = document.getElementById('explainEn');
const downloadBtn = document.getElementById('downloadBtn');
const openPage = document.getElementById('openPage');

// 5. Render Function
function render() {
    if (!duaList || duaList.length === 0) return;

    const item = duaList[index];
    mainImg.src = item.img;
    mainImg.alt = item.title.en;
    duaTitle.innerText = item.title.en;
    descEn.innerText = item.desc.en;
    descHi.innerText = item.desc.hi;
    descUr.innerText = item.desc.ur;
    descAr.innerText = item.desc.ar;
    explainEn.innerText = item.explain.en;

    // Buttons
    downloadBtn.href = item.img;
    openPage.href = `imageviewer.html?id=${item.id}&cat=${catParam}`;

    // URL update karna bina page refresh kiye (Sharing ke liye)
    const newUrl = `?cat=${catParam}&id=${item.id}`;
    history.replaceState(null, '', newUrl);

    // Meta Tags Update (SEO/Social Media)
    document.title = item.title.en;
}

// 6. Navigation (Next/Prev)
document.getElementById('next').onclick = () => {
    if (index < duaList.length - 1) {
        index++;
        render();
    }
};

document.getElementById('prev').onclick = () => {
    if (index > 0) {
        index--;
        render();
    }
};

// 7. Swiping Logic
let startX = 0;
let startY = 0;
const viewer = document.querySelector('.viewer');

if (viewer) {
    viewer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    viewer.addEventListener('touchend', e => {
        const deltaX = e.changedTouches[0].clientX - startX;
        const deltaY = e.changedTouches[0].clientY - startY;

        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) document.getElementById('next').click();
            else document.getElementById('prev').click();
        }
    });
}

// 8. Share Logic
document.getElementById('shareBtn').onclick = async () => {
    const item = duaList[index];
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: item.title.en,
                url: shareUrl
            });
        } catch (err) { console.log(err); }
    } else {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied!');
    }
};

// Pehli baar load karein
render();
