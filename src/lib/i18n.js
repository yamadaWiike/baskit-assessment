export const strings = {
  en: {
    // Nav
    lang_en: 'EN',
    lang_id: 'ID',

    // Assessment — progress
    question_of: (n) => `Question ${n} of 5`,

    // Assessment — Q1
    q1_text: 'What margin can you offer to distributors?',
    q1_a: 'More than 40%',
    q1_b: '25–39%',
    q1_c: '15–24%',
    q1_d: '5–14%',
    q1_e: 'Less than 5%',
  

    // Assessment — Q2
    q2_text: 'What payment terms (TOP) can you offer to distributors?',
    q2_a: 'More than 60 days',
    q2_b: '8–14 days',
    q2_c: '15–21 days',
    q2_d: '21–30 days',
    q2_e: '0 days',

    // Assessment — Q3
    q3_text: 'How quickly can your team respond to new business opportunities?',
    q3_a: 'Same day',
    q3_b: '1–2 days',
    q3_c: '3–5 business days',
    q3_d: '1–2 weeks',
    q3_e: 'More than 2 weeks',

    // Assessment — Q4
    q4_text: 'How ready is your brand for retail expansion in Indonesia?',
    q4_a: 'Fully ready',
    q4_b: 'Mostly ready',
    q4_c: 'Partially ready',
    q4_d: 'Limited readiness',
    q4_e: 'Not ready yet',

    // Assessment — Q5
    q5_text: 'How many units does your brand sell per month?',
    q5_a: 'More than 10,000',
    q5_b: '5,000–10,000',
    q5_c: '3,000–4,999',
    q5_d: '1,000–2,999',
    q5_e: 'Less than 1,000',

    // Assessment — feedback titles and messages (Q1 Margin)
    q1_fb_a_title: 'Excellent margin.',
    q1_fb_a_msg: 'Distributors will compete for your product. You have real channel leverage.',
    q1_fb_b_title: 'Competitive margin.',
    q1_fb_b_msg: 'You have room to negotiate terms with distributors.',
    q1_fb_c_title: 'Tight margin.',
    q1_fb_c_msg: "Baskit's shared logistics cost can help make this work.",
    q1_fb_d_title: 'Thin margin.',
    q1_fb_d_msg: 'Channel economics need to be addressed before scaling.',
    q1_fb_e_title: 'Critical margin.',
    q1_fb_e_msg: 'This is the first thing to work through together.',

    // Q2 TOP
    q2_fb_a_title: 'Short terms.',
    q2_fb_a_msg: 'Too tight for most distributors. Longer terms open more doors.',
    q2_fb_b_title: 'Acceptable terms.',
    q2_fb_b_msg: 'A little more flexibility would open more doors.',
    q2_fb_c_title: 'Good terms.',
    q2_fb_c_msg: 'Most distributors work comfortably in this range.',
    q2_fb_d_title: 'Sweet spot.',
    q2_fb_d_msg: 'Exactly what most distributors look for.',
    q2_fb_e_title: 'Generous terms.',
    q2_fb_e_msg: "Attracts distributors but ties up cash flow. Baskit's financing solves this.",

    // Q3 Agility
    q3_fb_a_title: 'Highly agile.',
    q3_fb_a_msg: 'Same-day response is a real competitive advantage.',
    q3_fb_b_title: 'Good agility.',
    q3_fb_b_msg: 'Fast enough to capture important opportunities.',
    q3_fb_c_title: 'Moderate speed.',
    q3_fb_c_msg: 'Some fast-moving opportunities may need quicker turnaround.',
    q3_fb_d_title: 'Slower cadence.',
    q3_fb_d_msg: 'Worth streamlining your decision process.',
    q3_fb_e_title: 'Response lag.',
    q3_fb_e_msg: 'Creates friction with distribution partners.',

    // Q4 Readiness
    q4_fb_a_title: 'Fully ready.',
    q4_fb_a_msg: 'Zero barriers to activation. You can move fast from day one.',
    q4_fb_b_title: 'Almost there.',
    q4_fb_b_msg: "Minor gaps won't slow things down much.",
    q4_fb_c_title: 'Getting there.',
    q4_fb_c_msg: 'The right support closes these gaps faster than going alone.',
    q4_fb_d_title: 'Building readiness.',
    q4_fb_d_msg: 'With the right guidance, brands get retail-ready faster than expected.',
    q4_fb_e_title: 'Early stage.',
    q4_fb_e_msg: 'What matters is having the right partner to guide the journey.',

    // Q5 Volume
    q5_fb_a_title: 'Strong traction.',
    q5_fb_a_msg: 'Distributors will prioritize your brand. You have real leverage.',
    q5_fb_b_title: 'Solid volume.',
    q5_fb_b_msg: 'The right infrastructure can multiply this fast.',
    q5_fb_c_title: 'Growing stage.',
    q5_fb_c_msg: 'The right channels now will compound this significantly.',
    q5_fb_d_title: 'Early traction.',
    q5_fb_d_msg: 'Distribution infrastructure is the next unlock.',
    q5_fb_e_title: 'Building momentum.',
    q5_fb_e_msg: 'Early stage is the right time to build the right foundation.',

    // Next button
    next: 'Next',

    // Loading screen
    loading_msg_1: 'Analyzing your distribution profile...',
    loading_msg_2: 'Calculating your readiness score...',
    loading_msg_3: 'Mapping your growth gaps...',
    loading_msg_4: 'Preparing your personal report...',
    testimonial_label: 'What brands say about Baskit',

    // Gate form
    gate_eyebrow: 'YOUR PERSONAL REPORT IS READY',
    gate_headline: 'Fill in your details to view the report.',
    gate_sub: "Your Distribution Readiness Report is ready. Enter your information below and you'll see it right away.",
    gate_preview_1: 'Your distribution readiness score',
    gate_preview_2: 'What\'s holding back your growth right now',
    gate_preview_3: 'What brands like yours have achieved with Baskit',
    gate_preview_4: 'Specific next steps for your brand',
    field_brand_name: 'Brand Name',
    field_brand_category: 'Brand Category',
    field_org_name: 'Organization Name',
    field_pic_name: 'PIC Name',
    field_whatsapp: 'WhatsApp / Phone Number',
    field_email: 'Email',
    field_email_required: 'Email',
    cat_fmcg: 'FMCG',
    cat_bpc: 'Beauty & Personal Care',
    cat_others: 'Others',
    gate_cta: 'View my report →',
    gate_privacy: '🔒 Your information is safe with us. We will not share it with any third party.',

    // Report page
    score_label_high: 'Distribution Ready',
    score_label_good: 'Almost Ready',
    score_label_mid: 'Building Readiness',
    score_label_low: 'Early Stage',
    score_label_vlow: 'Foundation Stage',

    scale_early: 'Early Stage',
    scale_scaling: 'Scaling',
    scale_expansion: 'Expansion Ready',

    section_potential: 'Potential with Baskit',
    chart_subtitle: "Here's what brands like yours typically achieve.",
    with_baskit: 'With Baskit',
    without_baskit: 'Without Baskit',
    comparison_title: 'Now vs. with Baskit',
    now_label: 'Now',

    chart_axis_now: 'Now',
    chart_axis_3m: '3 Months',
    chart_axis_6m: '6 Months',

    metric_outlet: 'Outlet Reach',
    metric_activation: 'Activation Speed',
    metric_cost: 'Cost Efficiency',
    metric_potential: 'potential',
    metric_faster: 'faster',
    metric_improvement: 'improvement',

    social_proof: 'High-volume brands that consolidated under Baskit typically reduce distribution inefficiency by <strong>20–35%</strong> within 6 months while improving <strong>outlet coverage</strong> simultaneously.',

    next_steps_headline: 'What happens next.',
    next_steps_sub: "We've received your results and will review them shortly. If it's a fit, our team will be in touch within <strong>7 business days.</strong>",
    next_steps_italic: "Don't want to wait? Reach out to our team directly we'd love to talk.",
    btn_home: 'Back to Homepage',
    btn_schedule: 'Schedule a Meeting →',

    footer_copyright: 'Copyright © 2024 Baskit Pte. Ltd.',
    footer_terms: 'Term & Condition',
    footer_privacy: 'Privacy Policy',

    // Contact form
    contact_tab_brand: 'Brand',
    contact_tab_distributor: 'Distributor',
    contact_tab_others: 'Others',

    field_distributor_name: 'Distributor Name',
    field_full_name: 'Full Name',
    field_company_name: 'Brand / Company Name',
    field_phone: 'Phone / WhatsApp',

    field_how_heard: 'How did you hear about us?',
    how_heard_search: 'Search Engine (Google, etc.)',
    how_heard_social: 'Social Media',
    how_heard_referral: 'Referral',
    how_heard_event: 'Event, PR, Webinar',
    how_heard_other: 'Other',

    field_how_help: 'How can we help you?',
    how_help_general: 'General Inquiry',
    how_help_demo: 'Request a Demo',
    how_help_sales: 'Sales or Product Question',
    how_help_support: 'Customer Support',
    how_help_tech: 'Technical Assistance',
    how_help_partner: 'Partnership Opportunities',

    field_biz_size: 'Business Size',
    biz_small: 'Small Business (1–10 employees)',
    biz_medium: 'Medium Business (11–50 employees)',
    biz_large: 'Large Business (51–200 employees)',
    biz_enterprise: 'Enterprise (200+ employees)',

    field_intention: 'What is your intention working with Baskit?',
    intention_placeholder: "Share what you aim to do or explore with Baskit, whether it's collaboration, partnership or something else",

    checkbox_comms: 'I agree to receive other communication from Baskit Team',
    checkbox_decision: 'I am the decision maker in business partnership or software purchase',

    contact_success_title: 'Submitted!',
    contact_success_sub: "We'll be in touch within 7 business days.",
    contact_cta: 'Submit',

    contact_sidebar_brand_q: 'Not sure how your brand can grow?',
    contact_sidebar_brand_cta: 'Take the Assessment →',
    sidebar_brand_sub: 'Take the quick brand assessment and get a personalized recommendation before talking to our team.',
    sidebar_brand_b1: 'See your distribution readiness score',
    sidebar_brand_b2: 'Know which Baskit solution fits you',
    sidebar_brand_b3: 'Get a directional growth estimate',
    sidebar_brand_b4: 'Only 5 questions — takes 2 minutes',
    sidebar_brand_note: 'or just fill the form',

    contact_sidebar_dist_q: 'Not sure how to grow your distribution business?',
    sidebar_dist_sub: "Tell us about your distribution network and we'll explore how Baskit can work with you.",
    sidebar_dist_b1: 'Access to 50+ active brand partners',
    sidebar_dist_b2: 'Shared logistics and last-mile infrastructure',
    sidebar_dist_b3: 'Real-time sell-out data across channels',
    sidebar_dist_b4: 'Embedded financing for your network',
    sidebar_dist_note: 'Fill in the form and our team will reach out within 7 business day.',

    contact_sidebar_others_q: 'Not sure how your business can grow?',
    sidebar_others_sub: "Tell us what you're looking for and our team will find the best way Baskit can help.",
    sidebar_others_b1: 'Access to nationwide distribution infrastructure',
    sidebar_others_b2: 'Embedded financing and cash flow solutions',
    sidebar_others_b3: 'Real-time data and channel visibility',
    sidebar_others_b4: 'Flexible partnerships for any stage',
    sidebar_others_note: 'Fill in the form and our team will reach out within 7 business day.',

    select_placeholder: 'Select an option',
  },

  id: {
    lang_en: 'EN',
    lang_id: 'ID',

    question_of: (n) => `Pertanyaan ${n} dari 5`,

    q1_text: 'Berapa margin yang bisa kamu tawarkan ke distributor?',
    q1_a: 'Lebih dari 40%',
    q1_b: '25–39%',
    q1_c: '15–24%',
    q1_d: '5–14%',
    q1_e: 'Kurang dari 5%',

    q2_text: 'Berapa hari terms of payment (TOP) yang bisa kamu tawarkan ke distributor?',
    q2_a: 'Lebih dari 60 hari',
    q2_b: '30-45 hari',
    q2_c: '21 hari',
    q2_d: '7-14 hari',
    q2_e: '0 hari',

    q3_text: 'Seberapa cepat tim kamu bisa merespons peluang bisnis baru?',
    q3_a: 'Hari yang sama',
    q3_b: '1–2 hari',
    q3_c: '3–5 hari kerja',
    q3_d: '1–2 minggu',
    q3_e: 'Lebih dari 2 minggu',

    q4_text: 'Seberapa siap brand kamu untuk ekspansi ke retail di Indonesia?',
    q4_a: 'Sudah siap sepenuhnya',
    q4_b: 'Sebagian besar sudah siap',
    q4_c: 'Sebagian sudah siap',
    q4_d: 'Kesiapan terbatas',
    q4_e: 'Belum siap',

    q5_text: 'Berapa unit yang brand kamu jual per bulan?',
    q5_a: 'Lebih dari 10.000',
    q5_b: '5.000–10.000',
    q5_c: '3.000–4.999',
    q5_d: '1.000–2.999',
    q5_e: 'Kurang dari 1.000',

    // Feedback titles and messages (Q1 Margin)
    q1_fb_a_title: 'Margin sangat baik.',
    q1_fb_a_msg: 'Distributor akan bersaing untuk produkmu. Kamu punya leverage channel yang nyata.',
    q1_fb_b_title: 'Margin kompetitif.',
    q1_fb_b_msg: 'Kamu punya ruang untuk menegosiasikan terms dengan distributor.',
    q1_fb_c_title: 'Margin ketat.',
    q1_fb_c_msg: 'Biaya logistik bersama Baskit dapat membantu ini berhasil.',
    q1_fb_d_title: 'Margin tipis.',
    q1_fb_d_msg: 'Ekonomi channel perlu diperbaiki sebelum scaling.',
    q1_fb_e_title: 'Margin kritis.',
    q1_fb_e_msg: 'Ini hal pertama yang perlu kita selesaikan bersama.',

    // Q2 TOP
    q2_fb_a_title: 'Terms terlalu ketat.',
    q2_fb_a_msg: 'Terlalu ketat untuk kebanyakan distributor. Terms yang lebih panjang membuka lebih banyak pintu.',
    q2_fb_b_title: 'Terms yang bisa diterima.',
    q2_fb_b_msg: 'Sedikit lebih fleksibel akan membuka lebih banyak pintu.',
    q2_fb_c_title: 'Terms yang bagus.',
    q2_fb_c_msg: 'Kebanyakan distributor bekerja nyaman dalam range ini.',
    q2_fb_d_title: 'Sweet spot.',
    q2_fb_d_msg: 'Tepat apa yang dicari kebanyakan distributor.',
    q2_fb_e_title: 'Terms yang murah hati.',
    q2_fb_e_msg: 'Menarik distributor tapi mengikat cash flow. Pembiayaan Baskit menyelesaikan ini.',

    // Q3 Agility
    q3_fb_a_title: 'Sangat agile.',
    q3_fb_a_msg: 'Respons hari yang sama adalah keunggulan kompetitif nyata.',
    q3_fb_b_title: 'Agile yang bagus.',
    q3_fb_b_msg: 'Cukup cepat untuk menangkap peluang penting.',
    q3_fb_c_title: 'Kecepatan sedang.',
    q3_fb_c_msg: 'Beberapa peluang yang bergerak cepat mungkin butuh waktu lebih singkat.',
    q3_fb_d_title: 'Kecepatan lebih lambat.',
    q3_fb_d_msg: 'Layak untuk menyederhanakan proses keputusan kamu.',
    q3_fb_e_title: 'Keterlambatan respons.',
    q3_fb_e_msg: 'Menciptakan gesekan dengan mitra distribusi.',

    // Q4 Readiness
    q4_fb_a_title: 'Siap sepenuhnya.',
    q4_fb_a_msg: 'Nol hambatan untuk aktivasi. Kamu bisa bergerak cepat dari hari pertama.',
    q4_fb_b_title: 'Hampir siap.',
    q4_fb_b_msg: 'Gap kecil tidak akan banyak memperlambat.',
    q4_fb_c_title: 'Sedang dalam proses.',
    q4_fb_c_msg: 'Support yang tepat menutup gap ini lebih cepat daripada sendirian.',
    q4_fb_d_title: 'Membangun kesiapan.',
    q4_fb_d_msg: 'Dengan panduan yang tepat, brand bisa retail-ready lebih cepat dari perkiraan.',
    q4_fb_e_title: 'Tahap awal.',
    q4_fb_e_msg: 'Yang penting adalah punya partner yang tepat untuk membimbing perjalanan.',

    // Q5 Volume
    q5_fb_a_title: 'Traksi yang kuat.',
    q5_fb_a_msg: 'Distributor akan memprioritaskan brand kamu. Kamu punya leverage nyata.',
    q5_fb_b_title: 'Volume solid.',
    q5_fb_b_msg: 'Infrastruktur yang tepat dapat melipatgandakan ini dengan cepat.',
    q5_fb_c_title: 'Tahap berkembang.',
    q5_fb_c_msg: 'Channel yang tepat sekarang akan memberikan efek compounding yang signifikan.',
    q5_fb_d_title: 'Traksi awal.',
    q5_fb_d_msg: 'Infrastruktur distribusi adalah unlock berikutnya.',
    q5_fb_e_title: 'Membangun momentum.',
    q5_fb_e_msg: 'Tahap awal adalah waktu yang tepat untuk membangun fondasi yang benar.',

    next: 'Lanjut',

    loading_msg_1: 'Menganalisis profil distribusi kamu...',
    loading_msg_2: 'Menghitung skor kesiapan kamu...',
    loading_msg_3: 'Memetakan gap pertumbuhan kamu...',
    loading_msg_4: 'Menyiapkan laporan personal kamu...',
    testimonial_label: 'Apa kata brand tentang Baskit',

    gate_eyebrow: 'LAPORAN PERSONAL KAMU SUDAH SIAP',
    gate_headline: 'Isi data kamu untuk melihat laporannya.',
    gate_sub: 'Laporan Kesiapan Distribusi kamu sudah siap. Masukkan informasi di bawah dan kamu akan langsung melihat hasilnya.',
    gate_preview_1: 'Skor kesiapan distribusi kamu',
    gate_preview_2: 'Apa yang menghambat pertumbuhan kamu saat ini',
    gate_preview_3: 'Apa yang dicapai brand seperti kamu bersama Baskit',
    gate_preview_4: 'Langkah spesifik ke depan untuk brand kamu',
    field_brand_name: 'Nama Brand',
    field_brand_category: 'Kategori Brand',
    field_org_name: 'Nama Organisasi',
    field_pic_name: 'Nama PIC',
    field_whatsapp: 'WhatsApp / Nomor HP',
    field_email: 'Email',
    field_email_required: 'Email',
    cat_fmcg: 'FMCG',
    cat_bpc: 'Kecantikan & Perawatan Diri',
    cat_others: 'Lainnya',
    gate_cta: 'Lihat laporan saya →',
    gate_privacy: '🔒 Informasi kamu aman bersama kami. Tidak akan kami bagikan ke pihak lain.',

    score_label_high: 'Siap Distribusi',
    score_label_good: 'Hampir Siap',
    score_label_mid: 'Membangun Kesiapan',
    score_label_low: 'Tahap Awal',
    score_label_vlow: 'Tahap Fondasi',

    scale_early: 'Tahap Awal',
    scale_scaling: 'Berkembang',
    scale_expansion: 'Siap Ekspansi',

    section_potential: 'Potensi bersama Baskit',
    chart_subtitle: 'Inilah yang biasanya dicapai brand seperti milikmu.',
    with_baskit: 'Dengan Baskit',
    without_baskit: 'Tanpa Baskit',
    comparison_title: 'Sekarang vs. dengan Baskit',
    now_label: 'Sekarang',

    chart_axis_now: 'Sekarang',
    chart_axis_3m: '3 Bulan',
    chart_axis_6m: '6 Bulan',

    metric_outlet: 'Jangkauan Outlet',
    metric_activation: 'Kecepatan Aktivasi',
    metric_cost: 'Efisiensi Biaya',
    metric_potential: 'potensi',
    metric_faster: 'lebih cepat',
    metric_improvement: 'peningkatan',

    social_proof: 'Brand dengan volume tinggi yang bergabung dengan Baskit biasanya mengurangi inefisiensi distribusi sebesar <strong>20–35%</strong> dalam 6 bulan sambil meningkatkan <strong>jangkauan outlet</strong> secara bersamaan.',

    next_steps_headline: 'Apa yang terjadi selanjutnya.',
    next_steps_sub: 'Kami sudah menerima hasilmu dan akan segera meninjaunya. Jika cocok, tim kami akan menghubungi dalam <strong>7 hari kerja.</strong>',
    next_steps_italic: 'Tidak mau menunggu? Hubungi tim kami langsung, kami senang untuk berbicara.',
    btn_home: 'Kembali ke Beranda',
    btn_schedule: 'Jadwalkan Pertemuan →',

    footer_copyright: 'Copyright © 2024 Baskit Pte. Ltd.',
    footer_terms: 'Term & Condition',
    footer_privacy: 'Privacy Policy',

    contact_tab_brand: 'Brand',
    contact_tab_distributor: 'Distributor',
    contact_tab_others: 'Lainnya',

    field_distributor_name: 'Nama Distributor',
    field_full_name: 'Nama Lengkap',
    field_company_name: 'Nama Brand / Perusahaan',
    field_phone: 'Nomor HP / WhatsApp',

    field_how_heard: 'Dari mana kamu mendengar tentang kami?',
    how_heard_search: 'Mesin Pencari (Google, dll.)',
    how_heard_social: 'Media Sosial',
    how_heard_referral: 'Referral',
    how_heard_event: 'Event, PR, Webinar',
    how_heard_other: 'Lainnya',

    field_how_help: 'Bagaimana kami bisa membantu?',
    how_help_general: 'Pertanyaan Umum',
    how_help_demo: 'Minta Demo',
    how_help_sales: 'Pertanyaan Penjualan atau Produk',
    how_help_support: 'Dukungan Pelanggan',
    how_help_tech: 'Bantuan Teknis',
    how_help_partner: 'Peluang Kemitraan',

    field_biz_size: 'Ukuran Bisnis',
    biz_small: 'Bisnis Kecil (1–10 karyawan)',
    biz_medium: 'Bisnis Menengah (11–50 karyawan)',
    biz_large: 'Bisnis Besar (51–200 karyawan)',
    biz_enterprise: 'Enterprise (200+ karyawan)',

    field_intention: 'Apa tujuan kamu bekerja sama dengan Baskit?',
    intention_placeholder: 'Ceritakan apa yang ingin kamu lakukan atau eksplorasi bersama Baskit, baik itu kolaborasi, kemitraan, atau hal lainnya',

    checkbox_comms: 'Saya setuju menerima komunikasi dari Baskit',
    checkbox_decision: 'Saya adalah pengambil keputusan dalam kemitraan bisnis atau pembelian perangkat lunak',

    contact_success_title: 'Terkirim!',
    contact_success_sub: 'Kami akan menghubungi dalam 7 hari kerja.',
    contact_cta: 'Kirim',

    contact_sidebar_brand_q: 'Tidak yakin bagaimana brand kamu bisa berkembang?',
    contact_sidebar_brand_cta: 'Ikuti Assessment →',
    sidebar_brand_sub: 'Ikuti assessment brand singkat dan dapatkan rekomendasi personal sebelum berbicara dengan tim kami.',
    sidebar_brand_b1: 'Lihat skor kesiapan distribusi kamu',
    sidebar_brand_b2: 'Ketahui solusi Baskit yang tepat untukmu',
    sidebar_brand_b3: 'Dapatkan estimasi pertumbuhan arahmu',
    sidebar_brand_b4: 'Hanya 5 pertanyaan — hanya 2 menit',
    sidebar_brand_note: 'atau isi saja formulir',

    contact_sidebar_dist_q: 'Tidak yakin bagaimana mengembangkan bisnis distribusi kamu?',
    sidebar_dist_sub: 'Ceritakan tentang jaringan distribusimu dan kami akan menjajaki bagaimana Baskit bisa bekerja sama denganmu.',
    sidebar_dist_b1: 'Akses ke 50+ mitra brand aktif',
    sidebar_dist_b2: 'Logistik bersama dan infrastruktur last-mile',
    sidebar_dist_b3: 'Data sell-out real-time di semua channel',
    sidebar_dist_b4: 'Pembiayaan embedded untuk jaringanmu',
    sidebar_dist_note: 'Isi formulir dan tim kami akan menghubungi dalam 7 hari kerja.',

    contact_sidebar_others_q: 'Tidak yakin bagaimana bisnis kamu bisa berkembang?',
    sidebar_others_sub: 'Ceritakan apa yang kamu cari dan tim kami akan menemukan cara terbaik Baskit bisa membantu.',
    sidebar_others_b1: 'Akses ke infrastruktur distribusi nasional',
    sidebar_others_b2: 'Pembiayaan embedded dan solusi cash flow',
    sidebar_others_b3: 'Data real-time dan visibilitas channel',
    sidebar_others_b4: 'Kemitraan fleksibel untuk setiap tahap',
    sidebar_others_note: 'Isi formulir dan tim kami akan menghubungi dalam 7 hari kerja.',

    select_placeholder: 'Pilih opsi',
  },
}

export const t = (lang, key, ...args) => {
  const val = strings[lang]?.[key] ?? strings.en[key]
  if (typeof val === 'function') return val(...args)
  return val ?? key
}
