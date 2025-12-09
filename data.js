// data.js
const categories = [
  {
    id: "cat_morning",
    title: {
      en: "Morning Duas",
      hi: "सुबह की दुआएं",
    },
    img: "morning.jpg", // कैटेगरी का इमेज
    description: {
      en: "Supplications for starting your day with faith and blessing.",
      hi: "दिन की शुरुआत ईमान और बरकत के साथ करने के लिए दुआएं।",
    },
    // यह लिंक बताएगा कि इस कैटेगरी की दुआएं किस पेज पर हैं
    link: "duas.html?cat=morning" 
  },
  {
    id: "cat_evening",
    title: {
      en: "Evening Duas",
      hi: "शाम की दुआएं",
    },
    img: "evening.jpg", 
    description: {
      en: "Prayers to seek protection and rest at the end of the day.",
      hi: "दिन के अंत में हिफाज़त और सुकून की दुआएं।",
    },
    link: "duas.html?cat=evening"
  }
];

// ... (बाकी morningDuas डेटा वैसा ही रहेगा)

// data.js
const morningDuas = [
  {
    id: "md1",
    slug: "morning-001",
    img: "dua1.jpg",
    title: {
      en: "Morning Dua — Gratitude & Protection",
      hi: "सुबह की दुआ — शुक्रगुज़ारी और सुरक्षा",
      ur: "صبح کی دعا — شکر و حفاظت",
      ar: "دعاء الصباح — الشكر والحماية"
    },
    desc: {
      en: "A short morning supplication for gratitude and protection.",
      hi: "रक्षा और शुक्रगुज़ारी के लिए छोटी सुबह की दुआ।",
      ur: "حفاظت اور شکر کے لیے مختصر صبح کی دعا۔",
      ar: "دعاء قصيرة للصباح للشكر والحماية."
    },
    explain: {
      en: "This dua expresses gratitude for waking and asks Allah for protection and guidance throughout the day.",
      hi: "यह दुआ जागने के लिए धन्यवाद अर्पित करती है और दिन भर की सुरक्षा व मार्गदर्शन की दुआ करती है।",
      ur: "یہ دعا بیدار ہونے کے شکر کا اظہار کرتی ہے اور دن بھر کی حفاظت اور رہنمائی کی درخواست کرتی ہے۔",
      ar: "تعبّر هذه الدعاء عن الامتنان للاستيقاظ وتطلب الحماية والهداية طوال اليوم."
    }
  },
  {
    id: "md2",
    slug: "morning-002",
    img: "dua2.jpg",
    title: {
      en: "Morning Blessing Dua",
      hi: "सुबह की बरकत की दुआ",
      ur: "صبح کی برکت کی دعا",
      ar: "دعاء البركة في الصباح"
    },
    desc: {
      en: "A prayer to ask for blessings in the new day.",
      hi: "नए दिन में बरकत की मांग करने वाली दुआ।",
      ur: "نئے دن میں برکت مانگنے کی دعا۔",
      ar: "دعاء لطلب البركة في اليوم الجديد."
    },
    explain: {
      en: "Recite this dua to seek ease, provision and blessings for the day's tasks.",
      hi: "इस दुआ को पढ़कर दिन के कामों के लिए सुगमता, रोज़ी और बरकत मांगी जाती है।",
      ur: "اس دعا کو پڑھ کر دن کے کاموں کے لیے آسانی، روزی اور برکت مانگی جاتی ہے۔",
      ar: "اقرأ هذه الدعاء لطلب التيسير والرزق والبركة في أعمال اليوم."
    }
  },
  {
    id: "md3",
    slug: "morning-003",
    img: "dua3.jpg",
    title: {
      en: "Protection Dua (Morning)",
      hi: "सुरक्षा की दुआ (सुबह)",
      ur: "حفاظتی دعا (صبح)",
      ar: "دعاء الحماية (الصباح)"
    },
    desc: {
      en: "A morning supplication seeking protection from harm.",
      hi: "हानि से सुरक्षा के लिए सुबह की दुआ।",
      ur: "نقصان سے حفاظت کے لیے صبح کی دعا۔",
      ar: "دعاء صباحي لطلب الحماية من الشر."
    },
    explain: {
      en: "This dua asks Allah to protect you from visible and unseen harms during the day.",
      hi: "यह दुआ दिन भर की दिखाई और न दिखाई समस्याओं से आप की सुरक्षा मांगेगी।",
      ur: "یہ دعا دن بھر دکھائی اور نہ دکھائی جانے والی آفات سے آپ کی حفاظت مانگتی ہے۔",
      ar: "تطلب هذه الدعاء من الله حمايتك من الأذى الظاهر والباطن طوال اليوم."
    }
  },
  {
    id: "md4",
    slug: "morning-004",
    img: "images/morning/md4.jpg",
    title: { en: "Dua for Ease", hi: "आसानियों की दुआ", ur: "آسانی کی دعا", ar: "دعاء التيسير" },
    desc: { en: "Ask Allah for ease in your affairs today.", hi: "अपने कार्यों में आसानी के लिए दुआ।", ur: "اپنے امور میں آسانی کے لئے دعا۔", ar: "طلب السهولة في أمورك اليوم." },
    explain: { en: "A simple dua to request facilitation in tasks and decisions.", hi: "कामों और निर्णयों में सुगमता के लिए छोटी दुआ।", ur: "کاموں اور فیصلوں میں آسانی کے لئے دعا۔", ar: "دعاء لطلب التيسير في الأعمال والقرارات." }
  },
  {
    id: "md5",
    slug: "morning-005",
    img: "images/morning/md5.jpg",
    title: { en: "Prayer for Guidance", hi: "मार्गदर्शन की दुआ", ur: "رہنمائی کی دعا", ar: "دعاء الهداية" },
    desc: { en: "Seek Allah's guidance for the decisions of the day.", hi: "दिन के फ़ैसलों के लिए अल्लाह से मार्गदर्शन माँगे।", ur: "دن کے فیصلوں کیلئے اللہ سے رہنمائی مانگیں۔", ar: "اطلب هداية الله لقرارات اليوم." },
    explain: { en: "Includes seeking wisdom, patience and right choices.", hi: "इसमें बुद्धिमत्ता, धैर्य और सही चुनाव माँगे जाते हैं।", ur: "اس میں حکمت، صبر اور صحیح انتخاب کی دعا شامل ہے۔", ar: "يشمل طلب الحكمة والصبر والاختيارات الصالحة." }
  },
  {
    id: "md6",
    slug: "morning-006",
    img: "images/morning/md6.jpg",
    title: { en: "Gratitude Dua", hi: "शुक्राना दुआ", ur: "شکرگزاری دعا", ar: "دعاء الشكر" },
    desc: { en: "Thank Allah for waking and new opportunities.", hi: "उठने और नए अवसरों के लिए शुक्रिया अदा करें।", ur: "جاگنے اور نئے مواقع کے لیے اللہ کا شکر ادا کریں۔", ar: "اشكر الله على الاستيقاظ والفرص الجديدة." },
    explain: { en: "This dua expresses thankfulness and contentment for life and provisions.", hi: "यह दुआ जीवन और रोज़ी के लिए आभार प्रकट करती है।", ur: "یہ دعا زندگی اور روزی کے لیے شکرگزاری ظاہر کرتی ہے۔", ar: "تعبر هذه الدعاء عن الامتنان والرضا على الحياة والرزق." }
  },
  {
    id: "md7",
    slug: "morning-007",
    img: "images/morning/md7.jpg",
    title: { en: "Health & Wellbeing Dua", hi: "स्वास्थ्य की दुआ", ur: "صحت کی دعا", ar: "دعاء الصحة" },
    desc: { en: "Pray for physical and spiritual health.", hi: "शारीरिक और आध्यात्मिक स्वास्थ्य की दुआ करें।", ur: "جسمانی اور روحانی صحت کے لئے دعا کریں۔", ar: "ادع للشفاء والصحة البدنية والروحية." },
    explain: { en: "Use this dua daily for protection of body and soul.", hi: "रोज़ाना शरीर और आत्मा की सुरक्षा के लिए पढ़ें।", ur: "روزانہ جسم اور روح کی حفاظت کے لیے پڑھیں۔", ar: "استعمل هذه الدعاء يومياً لحماية الجسد والروح." }
  },
  {
    id: "md8",
    slug: "morning-008",
    img: "images/morning/md8.jpg",
    title: { en: "Family Blessings Dua", hi: "परिवार के लिए बरकत", ur: "خاندان کے لئے برکت", ar: "دعاء البركة للعائلة" },
    desc: { en: "Ask Allah to bless and protect your family.", hi: "अपने परिवार के लिये बरकत और सुरक्षा माँगे।", ur: "اپنے خاندان کے لیے برکت اور حفاظت مانگیں۔", ar: "اطلب من الله البركة والحماية لعائلتك." },
    explain: { en: "Short prayer to seek goodness and safety for loved ones.", hi: "प्यारे लोगों के लिए भलाई और सुरक्षा की छोटी दुआ।", ur: "محبوبوں کے لیے بھلائی اور حفاظت کی مختصر دعا۔", ar: "دعاء قصيرة لطلب الخير والأمان للأحباب." }
  },
  {
    id: "md9",
    slug: "morning-009",
    img: "images/morning/md9.jpg",
    title: { en: "Sincerity & Intention Dua", hi: "नियत और नेक इरादों की दुआ", ur: "نیت اور اخلاص کی دعا", ar: "دعاء النية والإخلاص" },
    desc: { en: "Seek sincerity in actions and pure intentions.", hi: "कर्मों में ईमानदारी और नेक नियत चाहिये।", ur: "اعمال میں اخلاص اور نیک نیت مانگیں۔", ar: "اطلب الصدق في الأعمال والنوايا الطيبة." },
    explain: { en: "Good for starting any work with pure intention.", hi: "किसी भी काम को नेक नीयत से शुरू करने के लिये उत्तम।", ur: "کسی کام کو نیک نیت سے شروع کرنے کے لئے بہترین۔", ar: "مناسب لبدء أي عمل بنية صالحة." }
  },
  {
    id: "md10",
    slug: "morning-010",
    img: "images/morning/md10.jpg",
    title: { en: "Day's Success Dua", hi: "दिन की कामयाबी की दुआ", ur: "دن کی کامیابی کی دعا", ar: "دعاء نجاح اليوم" },
    desc: { en: "Pray for success and good outcomes in your work.", hi: "अपने काम में सफलता और अच्छे नतीजों के लिये दुआ।", ur: "اپنے کام میں کامیابی کے لیے دعا کریں۔", ar: "ادع للنجاح والنتائج الحسنة في عملك." },
    explain: { en: "Short dua to ask Allah for productive and blessed results.", hi: "फलदायी और बरकत भरे परिणामों के लिए छोटी दुआ।", ur: "مفید اور بابرکت نتائج کے لئے مختصر دعا۔", ar: "دعاء قصيرة لطلب نتائج مثمرة ومباركة." }
  }
];
