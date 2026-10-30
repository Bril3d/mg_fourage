/**
 * Ste Mgaidi Commerce Agricole (mg_fourage) - Application Logic
 * Interactive Bilingual Support, Forage Calculator, Product Filtering & Quote Dispatch
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Bilingual Translation Engine (FR / AR)
     -------------------------------------------------------------------------- */
  const translations = {
    fr: {
      announcement: "🌾 <strong>Campagne Fourragère Active :</strong> Stock disponible en foin, luzerne 1ère coupe & paille à Tabarka",
      nav_home: "Accueil",
      nav_products: "Fourrages",
      nav_calculator: "Simulateur",
      nav_quality: "Qualité",
      nav_logistics: "Livraison",
      nav_contact: "Contact",
      cta_quote: "Devis Express",
      call_btn_label: "Appeler",
      call_line2: "Ligne 2 :",
      hero_badge: "SOCIÉTÉ MGAIDI • TABARKA, TUNISIE",
      hero_title_fr: "L'Excellence Fourragère pour Vos Élevages",
      hero_title_ar: "المقايدي لبيع الأعلاف — جودة مضمونة وتغذية متكاملة لقطيعك",
      hero_desc: "Fournisseur de référence en foin pressé d'avoine, luzerne de première coupe riche en protéines, pailles dépoussiérées, orges et céréales calibrées. Qualité contrôlée, stockage abrité sous hangar ventilé et livraison directe sur exploitation partout en Tunisie.",
      metric_humidity: "Humidité Contrôlée (Anti-moisissure)",
      metric_protein: "Protéines Brutes (Luzerne sélectionnée)",
      metric_depot: "Dépôt Régional & Camion Dédié",
      hero_cta_catalog: "Consulter les Fourrages",
      hero_cta_calc: "Simulateur de Besoins",
      tag_commitments: "Nos Engagements Professionnels",
      pillars_title: "Pourquoi les Éleveurs Choisissent Ste Mgaidi ?",
      pillars_sub: "Dans l'élevage bovin et ovin, la rentabilité commence par la qualité du fourrage : une ingestion maximale sans pertes ni complications digestives.",
      p1_title: "Teneur en Matière Sèche Garantie",
      p1_desc: "Nos fourrages sont pressés à maturité optimale avec un taux d'humidité strictement mesuré (< 14%). Pas de fermentation acide, pas d'échauffement ni de moisissures toxiques pour vos ruminants.",
      p2_title: "Luzerne Feuilles Préservées (Haute Protéine)",
      p2_desc: "La richesse nutritive de la luzerne réside dans ses folioles. Notre méthode de manipulation préserve le rapport feuilles/tiges pour garantir un apport de 18% à 20% de MAT (Matière Azotée Totale).",
      p3_title: "Stockage Abrité sous Hangar Ventilé",
      p3_desc: "À Tabarka, où les pluies peuvent être intenses, l'ensemble de nos stocks est entreposé sous abris couverts surélevés et aérés, préservant la fraîcheur, l'arôme et l'appétence naturelle du foin.",
      p4_title: "Logistique & Déchargement Direct",
      p4_desc: "Nous disposons de solutions logistiques adaptées aux pistes et exploitations rurales (petites ou grosses commandes, balles rondes ou rectangulaires) pour une livraison ponctuelle au plus près de vos étables.",
      tag_catalog: "Gamme Complète",
      catalog_title: "Nos Fourrages & Aliments de Nutrition Animale",
      catalog_sub: "Sélectionnés pour les élevages laitiers, d'engraissement et ovins de la région du Nord-Ouest et de toute la Tunisie.",
      filter_all: "Tous les Produits",
      filter_fourrage: "Fourrages & Luzerne",
      filter_paille: "Foins & Pailles",
      filter_cereales: "Céréales & Concentrés",
      btn_order: "Commander",
      calc_badge: "OUTIL PROFESSIONNEL ÉLEVEUR",
      calc_title: "Simulateur de Besoins Fourragers Mensuels",
      calc_sub: "Évaluez immédiatement les tonnages de foin, luzerne et concentrés nécessaires pour sécuriser l'alimentation de votre troupeau.",
      calc_step1: "1. Choisissez Votre Troupeau",
      animal_dairy: "Vaches Laitières",
      animal_beef: "Bovins Engraissement",
      animal_sheep: "Brebis & Agneaux",
      animal_horse: "Chevaux & Équins",
      label_herd_size: "Nombre de têtes :",
      label_system: "Mode de Conduite :",
      opt_stable: "Stabulation permanente (100% à l'étable)",
      opt_semi: "Mixte : Pâturage en journée + Complément soir (60%)",
      opt_pasture: "Pâturage abondant + Complément sécuritaire (35%)",
      calc_step2: "2. Estimation Mensuelle Conseillée",
      res_hay: "Foin & Paille Pressée",
      res_alfalfa: "Luzerne Riche (MAT)",
      res_grain: "Orge & Concentré Élevage",
      calc_share_btn: "Demander le Tarif de ce Lot sur WhatsApp",
      calc_note: "* Les estimations sont basées sur les normes INAT/OEP. Possibilité d'ajuster le mélange selon la disponibilité en paille et votre calendrier de vêlage/agnelage.",
      tag_logistics: "Dépôt Régional & Acheminement",
      log_title: "Un Service de Livraison Direct Sur Votre Ferme",
      log_sub: "Depuis notre dépôt stratégiquement implanté à Tabarka, nous desservons les élevages avec une flotte dédiée pour assurer des livraisons rapides sans rupture de stock.",
      log_pt1_t: "Tabarka & Environs Immédiats :",
      log_pt1_d: "Ras Rajel, Ain Sobah, Melloula, Babouch, Ain Draham. Livraison possible en 24h.",
      log_pt2_t: "Région Nord-Ouest & Tunisie :",
      log_pt2_d: "Jendouba, Nefza, Béja, Fernana, Mateur, Bizerte, et expéditions par semi-remorque sur tout le territoire.",
      log_pt3_t: "Arrimage & Protection Intempéries :",
      log_pt3_d: "Chargement sanglé et bâché pour préserver la sécheresse absolue des balles durant le trajet.",
      log_pt4_t: "Retrait Direct au Dépôt :",
      log_pt4_d: "Possibilité pour les agriculteurs de venir charger directement avec leur propre véhicule ou tracteur.",
      log_phone_label: "Besoin d'une livraison urgente ?",
      log_phone_sub: "Nos chauffeurs et magasiniers sont à votre disposition :",
      tag_quote: "Formulaire Express",
      quote_title: "Demandez Votre Devis & Disponibilité Immédiate",
      quote_sub: "Remplissez les informations ci-dessous pour générer instantanément votre commande ou nous contacter par WhatsApp / Téléphone.",
      form_name: "Votre Nom ou Nom de l'Exploitation :",
      form_phone: "Numéro de Téléphone (Tunisie) :",
      form_product: "Produit Principal Souhaité :",
      form_quantity: "Quantité Estimée :",
      form_loc: "Lieu de Livraison :",
      form_notes: "Remarques ou Besoins Particuliers :",
      form_submit_wa: "Envoyer ma Demande via WhatsApp",
      form_submit_call: "Ou Appelez au <bdi dir=\"ltr\" class=\"phone-number\">92 087 620</bdi>",
      footer_desc: "Société spécialisée dans le commerce agricole et la nutrition animale. Fournisseur de foin pressé, luzerne riche en protéines, pailles, céréales et aliments de bétail à Tabarka et dans toute la Tunisie.",
      footer_nav_title: "Navigation",
      footer_prod_title: "Produits Phares",
      footer_contact_title: "Contact & Dépôt",
      cv_badge: "Étudiant Ingénieur Data Science & IA • TEK-UP",
      cv_name: "Khaled Briki",
      cv_tagline: "AI/ML & Software Engineering • Full-Stack Developer • Ariana / Tabarka",
      cv_bio: "Étudiant en dernière année d'ingénierie Data Science & IA à TEK-UP avec une expérience en développement logiciel depuis 2022. Concepteur d'applications IA de bout en bout (entraînement de modèles, RAG, FastAPI) et de plateformes Web & Mobiles réactives (React, Next.js, Vue, Laravel, Spring Boot).",
      cv_edu1: "Master Data Science & IA — TEK-UP (2024–2027)",
      cv_edu2: "Licence Technologies de l'Information — ISET Jendouba",
      cv_cert: "Oracle OCI 2025 Certified AI Foundations Associate",
      cv_lang: "Arabe (natif) • Anglais (professionnel) • Français",
      cv_links_title: "Portfolio & Coordonnées Directes",
      cv_portfolio_label: "Site Web / Portfolio Officiel",
      cv_phone_label: "Téléphone Direct",
      cv_email_label: "Email Professionnel",
      cv_copy_btn: "Copier les coordonnées"
    },
    ar: {
      announcement: "🌾 <strong>موسم الأعلاف مفتوح :</strong> متوفر الآن فصة قصة أولى، قرط قصيبة وتبن في طبرقة",
      nav_home: "الرئيسية",
      nav_products: "أعلافنا",
      nav_calculator: "الحاسبة",
      nav_quality: "الجودة",
      nav_logistics: "التوصيل",
      nav_contact: "اتصل بنا",
      cta_quote: "طلب تسعيرة",
      call_btn_label: "اتصل الآن",
      call_line2: "الخط 2 :",
      hero_badge: "شركة المقايدي • طبرقة، الجمهورية التونسية",
      hero_title_fr: "الجودة الفلاحية الممتازة لتغذية قطيعك",
      hero_title_ar: "المقايدي لبيع الأعلاف — جودة مضمونة وتغذية متكاملة لقطيعك",
      hero_desc: "مزودكم الموثوق في بيع وتوزيع القرط المضغوط، الفصة الخضراء الغنية بالبروتين، التبن الصافي الخالي من الغبار، الشعير العلفي والسداري. تخزين محمي في مستودعات مهواة وتوصيل مباشر حتى الضيعة في كامل تراب الجمهورية.",
      metric_humidity: "رطوبة مضبوطة (< 14%) تحمي من التعفن",
      metric_protein: "بروتين عالي (فصة ممتازة 18-20%)",
      metric_depot: "مستودع جهوي بطبرقة وشاحنات جاهزة",
      hero_cta_catalog: "استعراض منتجات الأعلاف",
      hero_cta_calc: "حساب حاجيات القطيع",
      tag_commitments: "التزاماتنا المهنية",
      pillars_title: "لماذا يفضل المربون التعامل مع شركة المقايدي ؟",
      pillars_sub: "نجاح تربية الماشية وإنتاج الحليب يبدأ من نوعية العلف الأخضر والجاف : استهلاك كامل دون إهدار ولا اضطرابات هضمية.",
      p1_title: "نسبة مادة جافة مضمونة",
      p1_desc: "أعلافنا مضغوطة في الوقت المناسب مع مراقبة صارمة لنسبة الرطوبة أقل من 14%. لا تخمر حمضي ولا ارتفاع حرارة ولا فطريات تضر بصحة الحيوانات.",
      p2_title: "فصة كاملة الأوراق (بروتين مكثف)",
      p2_desc: "الفائدة الغذائية للفصة تكمن في أوراقها. نحرص على عدم تكسر الأوراق لضمان نسبة بروتين صافي تتراوح بين 18% و 21%.",
      p3_title: "تخزين محمي تحت مستودعات مهواة",
      p3_desc: "في طبرقة المعروفة بأمطارها الغزيرة، يتم تخزين كافة البالات في هناغر مغطاة ومرفوعة عن الأرض لضمان النضارة والرائحة الزكية الدائمة.",
      p4_title: "توصيل وتفريغ مباشر بالضيعة",
      p4_desc: "نوفر أسطول نقل مجهز للمسالك الفلاحية للكميات الصغيرة والكبيرة، بالات مربعة أو دائرية مع التزام تام بمواعيد التسليم.",
      tag_catalog: "قائمة المنتجات",
      catalog_title: "الأعلاف والمكملات الغذائية للماشية",
      catalog_sub: "منتجات مختارة بعناية لأبقار الحليب وعجول التسمين وقطعان الأغنام والماعز.",
      filter_all: "جميع المواد",
      filter_fourrage: "الفصة والأعلاف الخضراء",
      filter_paille: "القرط والتبن",
      filter_cereales: "الحبوب والأعلاف المركبة",
      btn_order: "اطلب الآن",
      calc_badge: "أداة عملية للمربين والفلاحين",
      calc_title: "حاسبة استهلاك الأعلاف الشهرية للقطيع",
      calc_sub: "احسب بسهولة الكميات التقديرية من القرط والفصة والشعير لتأمين تغذية قطيعك وتفادي نقص المخزون.",
      calc_step1: "1. حدد نوع قطيعك",
      animal_dairy: "أبقار حلوب",
      animal_beef: "عجول تسمين",
      animal_sheep: "أغنام وخراف",
      animal_horse: "خيول",
      label_herd_size: "عدد الرؤوس :",
      label_system: "نظام التربية :",
      opt_stable: "تربية داخل الإسطبل 100% (تغذية كاملة)",
      opt_semi: "نظام مختلط : مرعى بالنهار + علف بالمساء (60%)",
      opt_pasture: "مرعى وفير + تكملة خفيفة (35%)",
      calc_step2: "2. التقدير الشهري الموصى به",
      res_hay: "قرط وتبن مضغوط",
      res_alfalfa: "فصة غنية بالبروتين",
      res_grain: "شعير علفي وعلف مركب",
      calc_share_btn: "طلب تسعيرة هذه الكمية عبر واتساب",
      calc_note: "* التقديرات مبنية على معايير المعهد الوطني للعلوم الفلاحية وديوان تربية الماشية. يمكن تعديل الحصص حسب توفر المرعى والوزن.",
      tag_logistics: "المستودع والنقل",
      log_title: "خدمة توصيل سريعة ومباشرة إلى ضيعتكم",
      log_sub: "انطلاقاً من مستودعنا الرئيسي بطبرقة، نضمن تزويد ضيعاتكم بكافة المواد العلفية في الوقت المناسب دون انقطاع.",
      log_pt1_t: "طبرقة والمناطق المجاورة :",
      log_pt1_d: "رأس الراجل، عين الصبح، ملولة، ببوش، عين دراهم. إمكانية التسليم في أقل من 24 ساعة.",
      log_pt2_t: "ولايات الشمال الغربي وكامل الجمهورية :",
      log_pt2_d: "جندوبة، نفزة، باجة، فرنانة، ماطر، بنزرت، وشحنات نصف مقطورة لكافة المناطق.",
      log_pt3_t: "تثبيت وتغطية محكمة ضد الأمطار :",
      log_pt3_d: "ربط مشدود وتغطية عازلة لحماية البالات وضمان جفافها التام أثناء الطريق.",
      log_pt4_t: "رفع مباشر من المستودع :",
      log_pt4_d: "مرحب بكل الفلاحين للتزود والتحميل مباشرة بشاحناتهم أو جراراتهم الخاصة.",
      log_phone_label: "هل تحتاج توصيلاً عاجلاً ؟",
      log_phone_sub: "فريقنا وسائقونا على أتم الاستعداد لخدمتكم :",
      tag_quote: "نموذج طلب سريع",
      quote_title: "اطلب تسعيرة وتأكد من توفر المواد فوراً",
      quote_sub: "املأ البيانات أدناه لإرسال طلبك مباشرة عبر واتساب أو الاتصال بنا هاتفياً.",
      form_name: "الاسم أو اسم الضيعة / الفيرمة :",
      form_phone: "رقم الهاتف (تونس) :",
      form_product: "المادة العلفية المطلوبة :",
      form_quantity: "الكمية التقديرية :",
      form_loc: "مكان التوصيل :",
      form_notes: "ملاحظات أو متطلبات خاصة :",
      form_submit_wa: "إرسال الطلب عبر واتساب",
      form_submit_call: "أو اتصل فوراً على <bdi dir=\"ltr\" class=\"phone-number\">92 087 620</bdi>",
      footer_desc: "شركة تجارية فلاحية متخصصة في توفير كافة أنواع الأعلاف الحيوانية (قرط، فصة، تبن، شعير، حبوب وسداري) بطبرقة وكامل تونس.",
      footer_nav_title: "أقسام الموقع",
      footer_prod_title: "أبرز المنتجات",
      footer_contact_title: "المستودع والاتصال",
      cv_badge: "طالب هندسة في علوم البيانات والذكاء الاصطناعي • TEK-UP",
      cv_name: "خالد بريكي (Khaled Briki)",
      cv_tagline: "هندسة الذكاء الاصطناعي والبرمجيات • مطور Full-Stack • أريانة / طبرقة",
      cv_bio: "طالب في السنة الأخيرة في هندسة علوم البيانات والذكاء الاصطناعي (TEK-UP) وخريج المعهد العالي للدراسات التكنولوجية بجندوبة (ISET). مطور برمجيات متكامل يتمتع بخبرة قوية في حلول الذكاء الاصطناعي (FastAPI, RAG, LLMs, Computer Vision) وبناء منصات الويب وتطبيقات الجوال (React, Next.js, Vue, Laravel).",
      cv_edu1: "ماجستير مهني في علوم البيانات والذكاء الاصطناعي — TEK-UP (2024–2027)",
      cv_edu2: "الإجازة في تكنولوجيات المعلومات — المعهد العالي للدراسات التكنولوجية بجندوبة",
      cv_cert: "شهادة معتمدة: Oracle OCI 2025 Certified AI Foundations Associate",
      cv_lang: "العربية (اللغة الأم) • الإنجليزية (مستوى مهني) • الفرنسية",
      cv_links_title: "الموقع الشخصي وقنوات التواصل المباشرة",
      cv_portfolio_label: "الموقع الشخصي / البورتفوليو الرسمي",
      cv_phone_label: "الهاتف المباشر",
      cv_email_label: "البريد الإلكتروني المهني",
      cv_copy_btn: "نسخ بيانات الاتصال"
    }
  };

  let currentLang = 'fr';

  function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang] || translations.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Update calculator labels and units
    updateCalculator();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  /* --------------------------------------------------------------------------
     2. Mobile Menu Toggle
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Product Catalog Filter
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Pre-fill quote form when clicking "Commander" on any product card
  document.querySelectorAll('.btn-order-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.getAttribute('data-product');
      const selectEl = document.getElementById('productSelect');
      if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].value.includes(prodName) || prodName.includes(selectEl.options[i].value)) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }
      const quoteSection = document.getElementById('contact');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Interactive Forage Calculator
     -------------------------------------------------------------------------- */
  const animalOptions = document.querySelectorAll('.animal-option');
  const headCountSlider = document.getElementById('headCount');
  const headCountValBadge = document.getElementById('headCountVal');
  const feedingSystemSelect = document.getElementById('feedingSystem');

  const resHayEl = document.getElementById('resHay');
  const resHayBalesEl = document.getElementById('resHayBales');
  const resAlfalfaEl = document.getElementById('resAlfalfa');
  const resAlfalfaBalesEl = document.getElementById('resAlfalfaBales');
  const resGrainsEl = document.getElementById('resGrains');
  const resGrainsSacksEl = document.getElementById('resGrainsSacks');
  const btnShareEstimate = document.getElementById('btnShareEstimate');

  // Daily intakes in kg per head: [Hay/Straw, Alfalfa, Grains/Concentrate]
  const rationTable = {
    cow_dairy: { hay: 8.0, alfalfa: 5.0, grain: 4.0 },
    cow_beef: { hay: 7.0, alfalfa: 2.5, grain: 4.5 },
    sheep: { hay: 1.5, alfalfa: 0.8, grain: 0.4 },
    horse: { hay: 9.5, alfalfa: 1.5, grain: 2.2 }
  };

  const systemMultipliers = {
    stable: 1.0,
    semi: 0.60,
    pasture: 0.35
  };

  function updateCalculator() {
    let selectedAnimal = 'cow_dairy';
    animalOptions.forEach(opt => {
      const radio = opt.querySelector('input[type="radio"]');
      if (radio && radio.checked) {
        selectedAnimal = radio.value;
      }
    });

    const heads = parseInt(headCountSlider.value, 10) || 15;
    const system = feedingSystemSelect.value || 'stable';
    const mult = systemMultipliers[system] || 1.0;

    const baseRation = rationTable[selectedAnimal] || rationTable.cow_dairy;

    // Monthly values (30 days) in kg
    const monthlyHayKg = Math.round(heads * baseRation.hay * mult * 30);
    const monthlyAlfalfaKg = Math.round(heads * baseRation.alfalfa * mult * 30);
    const monthlyGrainsKg = Math.round(heads * baseRation.grain * mult * 30);

    // Convert to tonnes
    const hayTonnes = (monthlyHayKg / 1000).toFixed(1);
    const alfalfaTonnes = (monthlyAlfalfaKg / 1000).toFixed(1);
    const grainsTonnes = (monthlyGrainsKg / 1000).toFixed(1);

    // Estimate bale counts (avg 22 kg per rectangular bale) and sacks (50kg)
    const hayBales = Math.round(monthlyHayKg / 22);
    const alfalfaBales = Math.round(monthlyAlfalfaKg / 22);
    const grainsSacks = Math.round(monthlyGrainsKg / 50);

    // Update UI
    if (headCountValBadge) {
      headCountValBadge.textContent = (currentLang === 'ar')
        ? `${heads} رأس`
        : `${heads} têtes`;
    }

    if (resHayEl) {
      resHayEl.textContent = (currentLang === 'ar') ? `${hayTonnes} طن` : `${hayTonnes} Tonnes`;
    }
    if (resHayBalesEl) {
      resHayBalesEl.textContent = (currentLang === 'ar') ? `≈ ${hayBales} بالة مستطيلة` : `≈ ${hayBales} balles rectangulaires`;
    }

    if (resAlfalfaEl) {
      resAlfalfaEl.textContent = (currentLang === 'ar') ? `${alfalfaTonnes} طن` : `${alfalfaTonnes} Tonnes`;
    }
    if (resAlfalfaBalesEl) {
      resAlfalfaBalesEl.textContent = (currentLang === 'ar') ? `≈ ${alfalfaBales} بالة فصة` : `≈ ${alfalfaBales} balles de luzerne`;
    }

    if (resGrainsEl) {
      resGrainsEl.textContent = (currentLang === 'ar') ? `${grainsTonnes} طن` : `${grainsTonnes} Tonnes`;
    }
    if (resGrainsSacksEl) {
      resGrainsSacksEl.textContent = (currentLang === 'ar') ? `≈ ${grainsSacks} كيس 50 كغ` : `≈ ${grainsSacks} sacs de 50 kg`;
    }
  }

  // Animal radio selector styling
  animalOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      animalOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
      updateCalculator();
    });
  });

  if (headCountSlider) {
    headCountSlider.addEventListener('input', updateCalculator);
  }

  if (feedingSystemSelect) {
    feedingSystemSelect.addEventListener('change', updateCalculator);
  }

  // Calculator WhatsApp Share Button
  if (btnShareEstimate) {
    btnShareEstimate.addEventListener('click', () => {
      let animalName = 'Vaches laitières';
      const checkedRadio = document.querySelector('input[name="animalType"]:checked');
      if (checkedRadio) {
        if (checkedRadio.value === 'cow_dairy') animalName = 'Vaches Laitières';
        if (checkedRadio.value === 'cow_beef') animalName = 'Bovins Engraissement';
        if (checkedRadio.value === 'sheep') animalName = 'Brebis & Agneaux';
        if (checkedRadio.value === 'horse') animalName = 'Chevaux';
      }

      const heads = headCountSlider.value;
      const hay = resHayEl.textContent;
      const hayB = resHayBalesEl.textContent;
      const alfalfa = resAlfalfaEl.textContent;
      const alfalfaB = resAlfalfaBalesEl.textContent;
      const grain = resGrainsEl.textContent;
      const grainS = resGrainsSacksEl.textContent;

      const messageText =
        `Bonjour Ste Mgaidi Commerce Agricole,
Je souhaite connaître le tarif et la disponibilité pour l'alimentation de mon troupeau à Tabarka / Tunisie :

- Type de troupeau : ${animalName} (${heads} têtes)
- Foin/Paille estimé : ${hay} (${hayB})
- Luzerne riche estimée : ${alfalfa} (${alfalfaB})
- Orge & Concentrés estimés : ${grain} (${grainS})

Merci de me communiquer vos meilleurs prix et les conditions de livraison.`;

      const waUrl = `https://wa.me/21692087620?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, '_blank');
    });
  }

  /* --------------------------------------------------------------------------
     5. Quote Form Dispatch (WhatsApp & Validation)
     -------------------------------------------------------------------------- */
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const product = document.getElementById('productSelect').value;
      const quantity = document.getElementById('quantitySelect').value;
      const location = document.getElementById('deliveryLocation').value;
      const notes = document.getElementById('notes').value.trim();

      const message =
        `🌾 *DEMANDE DE DEVIS — STE MGAIDI COMMERCE AGRICOLE*

👤 *Nom / Exploitation :* ${name}
📞 *Téléphone :* ${phone}
📦 *Produit :* ${product}
⚖️ *Quantité :* ${quantity}
📍 *Lieu de livraison :* ${location}
📝 *Remarques :* ${notes || 'Aucune'}

Merci de me confirmer la disponibilité et le tarif total.`;

      const waUrl = `https://wa.me/21692087620?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  /* --------------------------------------------------------------------------
     6. Navigation Active Spy
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* --------------------------------------------------------------------------
     7. Khaled Briki Creator & Portfolio Modal Logic
     -------------------------------------------------------------------------- */
  const openCreatorModalBtn = document.getElementById('openCreatorModal');
  const closeCreatorModalBtn = document.getElementById('closeCreatorModal');
  const creatorModal = document.getElementById('creatorModal');
  const btnCopyContact = document.getElementById('btnCopyContact');
  const copyBtnText = document.getElementById('copyBtnText');

  function openModal() {
    if (!creatorModal) return;
    creatorModal.classList.add('active');
    creatorModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeCreatorModalBtn) {
      closeCreatorModalBtn.focus();
    }
  }

  function closeModal() {
    if (!creatorModal) return;
    creatorModal.classList.remove('active');
    creatorModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (openCreatorModalBtn) {
      openCreatorModalBtn.focus();
    }
  }

  if (openCreatorModalBtn) {
    openCreatorModalBtn.addEventListener('click', openModal);
  }

  if (closeCreatorModalBtn) {
    closeCreatorModalBtn.addEventListener('click', closeModal);
  }

  if (creatorModal) {
    creatorModal.addEventListener('click', (e) => {
      if (e.target === creatorModal) {
        closeModal();
      }
    });
  }

  // Keyboard accessibility (Escape key to dismiss modal or mobile drawer)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (creatorModal && creatorModal.classList.contains('active')) {
        closeModal();
      }
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        if (mobileToggle) {
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.focus();
        }
      }
    }
  });

  // Copy Contact to Clipboard
  if (btnCopyContact && copyBtnText) {
    btnCopyContact.addEventListener('click', () => {
      const contactInfo = "Khaled Briki — AI/ML & Software Engineer | Email: Khaledtbk@gmail.com | Tel: +216 94 323 728 | Website: https://briki.tn | GitHub: https://github.com/Bril3d | LinkedIn: https://linkedin.com/in/khaled-briki";
      navigator.clipboard.writeText(contactInfo).then(() => {
        btnCopyContact.classList.add('copied');
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = "Copié dans le presse-papier ! ✨";
        setTimeout(() => {
          btnCopyContact.classList.remove('copied');
          copyBtnText.textContent = originalText;
        }, 2500);
      }).catch(() => {
        // Fallback for older browsers/restrictions
        const tempInput = document.createElement('textarea');
        tempInput.value = contactInfo;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        btnCopyContact.classList.add('copied');
        copyBtnText.textContent = "Copié ! ✨";
        setTimeout(() => {
          btnCopyContact.classList.remove('copied');
          copyBtnText.textContent = "Copier le contact";
        }, 2500);
      });
    });
  }

  // Initial calculation
  updateCalculator();
});

