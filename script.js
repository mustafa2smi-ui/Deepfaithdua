// ==========================================
// 1. URL SE DATA NIKALNA (Category & ID)
// ==========================================
const params = new URLSearchParams(location.search);
const catParam = params.get('cat') || 'morning'; // Default category 'morning' hai
const idParam = params.get('id');

// ==========================================
// 2. AUTOMATIC DATA SELECTION
// ==========================================
// Yeh line allDuas object (data.js) se apne aap sahi list nikal legi
let duaList = allDuas[catParam] || allDuas['morning']; 

// ==========================================
// 3. INDEX SET KARNA
// ==========================================
let index = 0;
if (idParam) {
    // Agar URL me ID hai, to us dua ka index dhundhein
    index = duaList.findIndex(m => m.id === idParam);
    if (index === -1) index = 0; // Agar ID galat ho to pehli dua dikhayein
}

// ==========================================
// 4. HTML ELEMENTS SELECT KARNA
// ==========================================
const mainImg = document.getElementById('mainImg');
const duaTitle = document.getElementById('duaTitle');
const descEn = document.getElementById('descEn');
const descHi = document.getElementById('descHi');
const descUr = document.getElementById('descUr');
const descAr = document.getElementById('descAr');
const explainEn = document.getElementById('explainEn');
const downloadBtn = document.getElementById('downloadBtn');
const openPage = document.getElementById('openPage');

// ==========================================
// 5. RENDER FUNCTION (Displaying Dua)
// ==========================================
function render() {
    if (!duaList || duaList.length === 0) {
        console.error("Dua list khali hai ya nahi mili!");
        return;
    }

    const item = duaList[index];

    // Text aur Image update
    mainImg.src = item.img;
    mainImg.alt = item.title.en;
    duaTitle.innerText = item.title.en;
    descEn.innerText = item.desc.en;
    descHi.innerText = item.desc.hi;
    descUr.innerText = item.desc.ur;
    descAr.innerText = item.desc.ar;
    explainEn.innerText = item.explain.en;

    // Action Buttons update
    downloadBtn.href = item.img;
    openPage.href = `imageviewer.html?id=${item.id}&cat=${catParam}`;

    // URL update karna (Bina page refresh kiye) - Isse link sharing sahi hoti hai
    const newUrl = `?cat=${catParam}&id=${item.id}`;
    history.replaceState(null, '', newUrl);

    // Meta Tags Update (WhatsApp/Social sharing par image dikhane ke liye)
    document.title = item.title.en + " — My Islamic Duas";
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
        // location.origin aapki website ka domain hota hai
        ogImg.content = window.location.origin + '/' + item.img;
    }
}

// ==========================================
// 6. NAVIGATION (NEXT & PREV)
// ==========================================
document.getElementById('next').onclick = () => {
    if (index < duaList.length - 1) {
        index++;
        render();
        window.scrollTo(0, 0); // Scroll top on next
    }
};

document.getElementById('prev').onclick = () => {
    if (index > 0) {
        index--;
        render();
        window.scrollTo(0, 0); // Scroll top on prev
    }
};

// ==========================================
// 7. SWIPE LOGIC (Touch Mobile)
// ==========================================
let startX = 0;
let startY = 0;
const viewer = document.querySelector('.viewer');

if (viewer) {
    viewer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, {passive: true});

    viewer.addEventListener('touchend', e => {
        const deltaX = e.changedTouches[0].clientX - startX;
        const deltaY = e.changedTouches[0].clientY - startY;

        // Horizontal swipe check
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) document.getElementById('next').click();
            else document.getElementById('prev').click();
        }
    });
}

// ==========================================
// 8. SHARE LOGIC (Web Share API)
// ==========================================
document.getElementById('shareBtn').onclick = async () => {
    const item = duaList[index];
    const shareUrl = window.location.href; // Current Dua URL
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: item.title.en,
                text: item.desc.en,
                url: shareUrl
            });
        } catch (err) { console.warn("Share failed:", err); }
    } else {
        // Fallback agar share API na ho
        navigator.clipboard.writeText(shareUrl);
        alert('Dua link copied to clipboard!');
    }
};

// ==========================================
// 9. INITIAL RENDER CALL
// ==========================================
render();
