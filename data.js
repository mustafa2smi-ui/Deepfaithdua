// ==========================================
// 1. CATEGORIES (For Homepage Index)
// ==========================================
const categories = [
  {
    id: "cat_morning",
    title: { en: "Morning Duas", hi: "सुबह की दुआएं" },
    img: "dua1.jpg",
    description: {
      en: "Supplications for starting your day with faith and blessing.",
      hi: "दिन की शुरुआत ईमान aur बरकत के साथ करने के लिए दुआएं।"
    },
    link: "dua.html?cat=morning" 
  },
  {
    id: "cat_evening",
    title: { en: "Evening Duas", hi: "शाम की दुआएं" },
    img: "dua2.jpg", 
    description: {
      en: "Prayers to seek protection and rest at the end of the day.",
      hi: "दिन के अंत में हिफाज़त और सुकून की दुआएं।"
    },
    link: "dua.html?cat=evening"
  },
  {
    id: "cat_namaz",
    title: { en: "After Namaz Duas", hi: "नमाज़ के बाद की दुआएं" },
    img: "images/categories/namaz_bg.jpg",
    description: {
      en: "Beautiful supplications to recite after completing your prayers.",
      hi: "नमाज़ मुकम्मल करने के बाद पढ़ी जाने वाली खूबसूरत दुआएं।"
    },
    link: "dua.html?cat=namaz"
  }
];

// ==========================================
// 2. ALL DUAS DATA (Automatic Mapping Object)
// ==========================================
const allDuas = {
  // --- MORNING CATEGORY ---
  "morning": [
    {
      id: "md1",
      slug: "morning-001",
      img: "dua1.jpg",
      title: { en: "Morning Dua — Gratitude & Protection", hi: "सुबह की दुआ — शुक्रगुज़ारी और सुरक्षा", ur: "صبح کی دعا — شکر و حفاظت", ar: "دعاء الصباح — الشكر والحماية" },
      desc: { en: "A short morning supplication for gratitude and protection.", hi: "रक्षा और शुक्रगुज़ारी के लिए छोटी सुबह की दुआ।", ur: "حفاظت اور شکر کے لیے مختصر صبح کی دعا۔", ar: "دعاء قصيرة للصباح للشكر والحماية." },
      explain: { en: "This dua expresses gratitude for waking and asks Allah for protection and guidance throughout the day.", hi: "यह दुआ जागने के लिए धन्यवाद अर्पित करती है और दिन भर की सुरक्षा व मार्गदर्शन की दुआ करती है।" }
    },
    {
      id: "md2",
      slug: "morning-002",
      img: "dua2.jpg",
      title: { en: "Morning Blessing Dua", hi: "सुबह की बरकत की दुआ", ur: "صبح کی برکت کی دعا", ar: "دعاء البركة في الصباح" },
      desc: { en: "A prayer to ask for blessings in the new day.", hi: "नए दिन में बरकत की मांग करने वाली दुआ।", ur: "نئے دن میں برکت مانگنے کی دعا۔", ar: "دعاء لطلب البركة في اليوم الجديد." },
      explain: { en: "Recite this dua to seek ease, provision and blessings for the day's tasks.", hi: "इस दुआ को पढ़कर दिन के कामों के लिए सुगमता, रोज़ी और बरकत मांगी जाती है।" }
    },
    {
      id: "md3",
      slug: "morning-003",
      img: "dua3.jpg",
      title: { en: "Protection Dua (Morning)", hi: "सुरक्षा की दुआ (सुबह)", ur: "حفاظتی دعا (صبح)", ar: "دعاء الحماية (الصباح)" },
      desc: { en: "A morning supplication seeking protection from harm.", hi: "हानि से सुरक्षा के लिए सुबह की दुआ।", ur: "نقصان سے حفاظت کے لیے صبح की दुआ।", ar: "دعاء صباحي لطلب الحماية من الشر." },
      explain: { en: "This dua asks Allah to protect you from visible and unseen harms during the day.", hi: "यह दुआ दिन भर की दिखाई और न दिखाई समस्याओं से आप की सुरक्षा मांगेगी।" }
    },
    {
      id: "md4",
      slug: "morning-004",
      img: "images/morning/md4.jpg",
      title: { en: "Dua for Ease", hi: "आसानियों की दुआ", ur: "آسانی کی دعا", ar: "دعاء التيسير" },
      desc: { en: "Ask Allah for ease in your affairs today.", hi: "अपने कार्यों में आसानी के लिए दुआ।", ur: "اپنے امور میں آسانی کے لئے دعا।" },
      explain: { en: "A simple dua to request facilitation in tasks and decisions.", hi: "कामों और निर्णयों में सुगमता के लिए छोटी दुआ।" }
    },
    {
      id: "md5",
      slug: "morning-005",
      img: "images/morning/md5.jpg",
      title: { en: "Prayer for Guidance", hi: "मार्गदर्शन की दुआ", ur: "رہنمائی کی دعا", ar: "دعاء الهداية" },
      desc: { en: "Seek Allah's guidance for the decisions of the day.", hi: "दिन के फ़ैसलों के लिए अल्लाह से मार्गदर्शन माँगे।" },
      explain: { en: "Includes seeking wisdom, patience and right choices.", hi: "इसमें बुद्धिमत्ता, धैर्य और सही चुनाव माँगे जाते हैं।" }
    }
    // Aap baki md6 se md10 tak yahan isi format mein add kar sakte hain...
  ],

  // --- NAMAZ CATEGORY ---
  "namaz": [
    {
      id: "nz1",
      img: "images/namaz/dua1.jpg",
      title: { en: "Ayatul Kursi", hi: "आयतुल कुर्सी", ur: "آیت الکرسی", ar: "آية الكرسي" },
      desc: { en: "To be recited after every Farz Namaz.", hi: "हर फर्ज़ नमाज़ के बाद पढ़ें।", ur: "ہر فرض نماز کے بعد پڑھیں۔", ar: "تقرأ بعد كل صلاة فريضة." },
      explain: { en: "Reciting Ayatul Kursi after Namaz is a source of great blessing and protection.", hi: "नमाज़ के बाद आयतुल कुर्सी पढ़ना बरकत और हिफाज़त का ज़रिया है।" }
    }
  ],

  // --- EVENING CATEGORY ---
  "evening": [
    // Future mein jab aap evening ki duas layenge, bas yahan objects add kar dena
  ]
};
