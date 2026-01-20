function app() {
    return {
        page: 'home',
        finderStep: 0,
        finderAnswers: {},
        finderResults: [],
        selectedCategory: '',
        currentTool: null,

        categories: [
            { name: 'Kodlama', slug: 'coding', desc: 'AI IDE & DEV TOOLS', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>' },
            { name: 'Görsel', slug: 'image', desc: 'CREATIVE GENERATION', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>' },
            { name: 'Video', slug: 'video', desc: 'CINEMATIC & EDITING', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>' },
            { name: 'Metin', slug: 'writing', desc: 'NLP & CONTENT AI', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>' },
            { name: 'Pazarlama', slug: 'marketing', desc: 'GROWTH & SEO ENGINE', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>' },
            { name: 'Tasarım', slug: 'design', desc: 'UI/UX & PRODUCT DESIGN', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>' },
            { name: 'Finans', slug: 'finance', desc: 'STRATEGY & ANALYSIS', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' },
            { name: 'Eğitim', slug: 'edu', desc: 'LEARNING & RESEARCH', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>' },
            { name: 'Otomasyon', slug: 'automation', desc: 'WORKFLOW & AI AGENTS', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
            { name: 'Ses & Müzik', slug: 'audio', desc: 'SOUND & VOICE AI', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>' }
        ],

        tools: [
            { name: "ChatGPT (GPT-4o)", slug: "chatgpt", category: "writing", pricingType: "Freemium", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", shortDesc: "En popüler ve çok yönlü yapay zeka asistanı.", pros: ["Muazzam genel bilgi", "Mükemmel Türkçe", "Çok hızlı"], cons: ["Halüsinasyon riski", "Stili bazen monoton"], guidance: { tip: "Ona bir rol verin: 'Sen profesyonel bir editörsün.'", prompt: "Aşağıdaki konuyu profesyonel bir blog yazısı yap: [Konu]" }, url: "https://chatgpt.com" },
            { name: "Midjourney v6", slug: "midjourney", category: "image", pricingType: "Paid", logo: "https://cdn.worldvectorlogo.com/logos/midjourney-icon.svg", shortDesc: "Sanatsal görsel üretiminde dünya lideri.", pros: ["Eşsiz kalite", "Sanatsal derinlik"], cons: ["Discord zorunluluğu", "Ücretli"], guidance: { tip: "Parametreleri sona ekleyin.", prompt: "Cyberpunk city, neon, 8k --ar 16:9" }, url: "https://midjourney.com" },
            { name: "Claude 3.5 Sonnet", slug: "claude", category: "writing", pricingType: "Freemium", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Claude_AI_logo.svg", shortDesc: "En insansı ve güvenli yazım deneyimi.", pros: ["Çok doğal dil", "Güçlü analiz"], cons: ["Görsel üretmez"], guidance: { tip: "Uzun dökümanları analiz ettirin.", prompt: "Analyze this PDF and summarize key points." }, url: "https://claude.ai" },
            { name: "Cursor", slug: "cursor", category: "coding", pricingType: "Freemium", logo: "https://mintlify.s3-us-west-1.amazonaws.com/cursor/logo/light.svg", shortDesc: "AI ile güçlendirilmiş yeni nesil kod editörü.", pros: ["Kodun tamamını anlar", "Hızlı hata ayıklama"], cons: ["Ücretli özellikler pahalı"], guidance: { tip: "Ctrl+K ile doğrudan kod yazdırın.", prompt: "Fix the database connection in this file." }, url: "https://cursor.sh" },
            { name: "Leonardo AI", slug: "leonardo", category: "image", pricingType: "Freemium", logo: "https://via.placeholder.com/100", shortDesc: "Kullanıcı dostu güçlü görsel motoru.", pros: ["Canvas editörü", "Ücretsiz kredi"], cons: ["Stil kısıtlılığı"], guidance: { tip: "Alchemy özelliğini kullanın.", prompt: "Hyperrealistic portrait of a king." }, url: "https://leonardo.ai" },
            { name: "Perplexity AI", slug: "perplexity", category: "edu", pricingType: "Freemium", logo: "https://via.placeholder.com/100", shortDesc: "Kaynak göstererek cevap veren arama motoru.", pros: ["Güncel bilgi", "Akademik kaynak"], cons: ["Kreatif yazım zayıf"], guidance: { tip: "Kaynakları kontrol edin.", prompt: "Explain quantum physics with sources." }, url: "https://perplexity.ai" },
            { name: "Gemini Pro", slug: "gemini", category: "writing", pricingType: "Freemium", logo: "https://via.placeholder.com/100", shortDesc: "Google'ın en gelişmiş dil modeli.", pros: ["Google entegrasyonu", "Hızlı"], cons: ["Bazen çok yüzeysel"], guidance: { tip: "Google dökümanlarla bağlayın.", prompt: "Summarize my emails." }, url: "https://gemini.google.com" },
            { name: "ElevenLabs", slug: "elevenlabs", category: "audio", pricingType: "Freemium", logo: "https://via.placeholder.com/100", shortDesc: "Dünyanın en iyi AI seslendirme motoru.", pros: ["Gerçekçi vurgu", "Ses klonlama"], cons: ["Pahalı krediler"], guidance: { tip: "Duygu etiketlerini kullanın.", prompt: "[Excited] Today is a great day." }, url: "https://elevenlabs.io" },
            { name: "Synthesia", slug: "synthesia", category: "video", pricingType: "Paid", logo: "https://via.placeholder.com/100", shortDesc: "Avatar videoları üretme platformu.", pros: ["Profesyonel sunum", "Çok dilli"], cons: ["Maliyetli"], guidance: { tip: "Mimikleri ayarlayın.", prompt: "Hello and welcome to our training." }, url: "https://synthesia.io" },
            { name: "Jasper", slug: "jasper", category: "marketing", pricingType: "Paid", logo: "https://via.placeholder.com/100", shortDesc: "Kurumsal pazarlama ve SEO asistanı.", pros: ["Marka sesi", "Ekip çalışması"], cons: ["Karmaşık"], guidance: { tip: "Kampanya modunu kullanın.", prompt: "Create a Facebook ad campaign." }, url: "https://jasper.ai" },
            { name: "Notion AI", slug: "notion", category: "automation", pricingType: "Paid", logo: "https://via.placeholder.com/100", shortDesc: "Notlarınızı AI ile organize edin.", pros: ["Entegre yapı", "Tablo yönetimi"], cons: ["Düşük limitler"], guidance: { tip: "Tabloları otomatik doldurun.", prompt: "Extract key points from this meeting." }, url: "https://notion.so" },
            { name: "Suno AI", slug: "suno", category: "audio", pricingType: "Freemium", logo: "https://via.placeholder.com/100", shortDesc: "Saniyeler içinde tam şarkı besteleyen AI.", pros: ["Vokal kalitesi", "Hız"], cons: ["Kısıtlı düzenleme"], guidance: { tip: "Stil anahtar kelimeleri verin.", prompt: "A jazz song about Istanbul." }, url: "https://suno.com" }
        ],

        finderQuestions: [
            {
                v: 'goal', q: 'Yapay zekayı neden kullanmak istiyorsunuz?', a: [
                    { t: 'Zaman Kazanmak / Verimlilik', v: 'productivity' },
                    { t: 'Yaratıcı Bir Şeyler Üretmek', v: 'creative' },
                    { t: 'Öğrenmek / Araştırma', v: 'learn' },
                    { t: 'Para Kazanmak / Kariyer', v: 'career' }
                ]
            },
            {
                v: 'output', q: 'Ne tür bir çıktıya ihtiyacınız var?', a: [
                    { t: 'Metin (Makale, Rapor, Kod)', v: 'text' },
                    { t: 'Görsel (Logo, Resim, Sanat)', v: 'image' },
                    { t: 'Video / Animasyon', v: 'video' },
                    { t: 'Ses / Müzik', v: 'audio' }
                ]
            },
            {
                v: 'level', q: 'Yapay zeka tecrübeniz ne durumda?', a: [
                    { t: 'Hiç Bilmiyorum (Yeni)', v: 'beginner' },
                    { t: 'Biliyorum (Orta)', v: 'intermediate' },
                    { t: 'Profesyonelim (İleri)', v: 'advanced' }
                ]
            },
            {
                v: 'budget', q: 'Bütçe tercihiniz nedir?', a: [
                    { t: 'Ücretsiz / Deneme Sürümü', v: 'free' },
                    { t: 'Önemli Değil (Ücretli)', v: 'paid' }
                ]
            },
            {
                v: 'speed', q: 'Hız mı yoksa kalite mi daha önemli?', a: [
                    { t: 'Saniyeler içinde sonuç', v: 'speed' },
                    { t: 'Yavaş ama mükemmel detay', v: 'quality' }
                ]
            },
            {
                v: 'platform', q: 'Nerede kullanacaksınız?', a: [
                    { t: 'Web Tarayıcıda', v: 'web' },
                    { t: 'Bilgisayarda (Yazılım)', v: 'desktop' },
                    { t: 'Mobil Uygulamada', v: 'mobile' }
                ]
            },
            {
                v: 'domain', q: 'Hangi alan size daha yakın?', a: [
                    { t: 'İş & Finans', v: 'business' },
                    { t: 'Sanat & Tasarım', v: 'design' },
                    { t: 'Yazılım & Teknik', v: 'tech' },
                    { t: 'Pazarlama & SEO', v: 'marketing' }
                ]
            },
            {
                v: 'complexity', q: 'Komut yazma beceriniz nedir?', a: [
                    { t: 'Tek tıkla halletmek isterim', v: 'simple' },
                    { t: 'Uzun komutlar yazabilirim', v: 'pro' }
                ]
            },
            {
                v: 'language', q: 'Türkçe desteği şart mı?', a: [
                    { t: 'Evet, Çok Önemli', v: 'tr' },
                    { t: 'Hayır, İngilizce Yeterli', v: 'en' }
                ]
            },
            {
                v: 'frequency', q: 'Ne sıklıkla kullanacaksınız?', a: [
                    { t: 'Hergün (Profesyonel)', v: 'daily' },
                    { t: 'Ara Sıra (Hobi)', v: 'occasionally' }
                ]
            }
        ],

        get filteredTools() {
            let list = this.tools;
            if (this.selectedCategory) {
                list = list.filter(t => t.category === this.selectedCategory);
            }
            return list;
        },

        startFinder() {
            this.page = 'finder';
            this.finderStep = 0;
            this.finderResults = [];
            this.finderAnswers = {};
            window.scrollTo(0, 0);
        },

        answerFinder(v) {
            this.finderAnswers[this.finderQuestions[this.finderStep].v] = v;
            if (this.finderStep < this.finderQuestions.length - 1) {
                this.finderStep++;
            } else {
                this.calculateResults();
            }
        },

        calculateResults() {
            let scored = this.tools.map(tool => {
                let score = 0;
                if (tool.pricingType === (this.finderAnswers.budget === 'free' ? 'Freemium' : 'Paid')) score += 2;
                if (tool.category === 'writing' && this.finderAnswers.output === 'text') score += 5;
                if (tool.category === 'image' && this.finderAnswers.output === 'image') score += 5;
                if (tool.category === 'coding' && this.finderAnswers.output === 'data') score += 5;
                if (tool.category === 'video' && this.finderAnswers.output === 'video') score += 5;
                if (tool.category === 'audio' && this.finderAnswers.output === 'audio') score += 5;
                return { ...tool, finalScore: score };
            });

            this.finderResults = scored.sort((a, b) => b.finalScore - a.finalScore).slice(0, 6);
        },

        openToolDetail(tool) {
            this.currentTool = tool;
            this.page = 'tool-detail';
            window.scrollTo(0, 0);
        },

        selectCategory(slug) {
            this.selectedCategory = slug;
            this.page = 'tools';
            window.scrollTo(0, 0);
        },

        resetFinder() { this.startFinder(); }
    }
}