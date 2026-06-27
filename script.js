// القراء والسور
const readers = {
    ajmi: {
        name: 'احمد العجمي',
        color: '#0CAF00',
        baseUrl: 'https://quran.com/api/v4/recitations/1',
        apiKey: 'ajmi'
    },
    yamani: {
        name: 'وديع حمادي اليمني',
        color: '#87CEEB',
        baseUrl: 'https://quran.com/api/v4/recitations/2',
        apiKey: 'yamani'
    },
    nafis: {
        name: 'احمد النفيس',
        color: '#FF3333',
        baseUrl: 'https://quran.com/api/v4/recitations/4',
        apiKey: 'nafis'
    },
    jilani: {
        name: 'خالد الجليل',
        color: '#9B59B6',
        baseUrl: 'https://quran.com/api/v4/recitations/5',
        apiKey: 'jilani'
    }
};

const surahs = [
    { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha' },
    { number: 2, name: 'البقرة', englishName: 'Al-Baqarah' },
    { number: 3, name: 'آل عمران', englishName: 'Ali Imran' },
    { number: 4, name: 'النساء', englishName: 'An-Nisa' },
    { number: 5, name: 'المائدة', englishName: 'Al-Maidah' },
    { number: 6, name: 'الأنعام', englishName: 'Al-Anam' },
    { number: 7, name: 'الأعراف', englishName: 'Al-Araf' },
    { number: 8, name: 'الأنفال', englishName: 'Al-Anfal' },
    { number: 9, name: 'التوبة', englishName: 'At-Tawbah' },
    { number: 10, name: 'يونس', englishName: 'Yunus' },
    { number: 11, name: 'هود', englishName: 'Hud' },
    { number: 12, name: 'يوسف', englishName: 'Yusuf' },
    { number: 13, name: 'الرعد', englishName: 'Ar-Rad' },
    { number: 14, name: 'إبراهيم', englishName: 'Ibrahim' },
    { number: 15, name: 'الحجر', englishName: 'Al-Hijr' },
    { number: 16, name: 'النحل', englishName: 'An-Nahl' },
    { number: 17, name: 'الإسراء', englishName: 'Al-Isra' },
    { number: 18, name: 'الكهف', englishName: 'Al-Kahf' },
    { number: 19, name: 'مريم', englishName: 'Maryam' },
    { number: 20, name: 'طه', englishName: 'Taha' },
    { number: 21, name: 'الأنبياء', englishName: 'Al-Anbiya' },
    { number: 22, name: 'الحج', englishName: 'Al-Hajj' },
    { number: 23, name: 'المؤمنون', englishName: 'Al-Muminun' },
    { number: 24, name: 'النور', englishName: 'An-Nur' },
    { number: 25, name: 'الفرقان', englishName: 'Al-Furqan' },
    { number: 26, name: 'الشعراء', englishName: 'Ash-Shuara' },
    { number: 27, name: 'النمل', englishName: 'An-Naml' },
    { number: 28, name: 'القصص', englishName: 'Al-Qasas' },
    { number: 29, name: 'العنكبوت', englishName: 'Al-Ankabut' },
    { number: 30, name: 'الروم', englishName: 'Ar-Rum' },
    { number: 31, name: 'لقمان', englishName: 'Luqman' },
    { number: 32, name: 'السجدة', englishName: 'As-Sajdah' },
    { number: 33, name: 'الأحزاب', englishName: 'Al-Ahzab' },
    { number: 34, name: 'سبأ', englishName: 'Saba' },
    { number: 35, name: 'فاطر', englishName: 'Fatir' },
    { number: 36, name: 'يس', englishName: 'Ya-Sin' },
    { number: 37, name: 'الصافات', englishName: 'As-Saffat' },
    { number: 38, name: 'ص', englishName: 'Sad' },
    { number: 39, name: 'الزمر', englishName: 'Az-Zumar' },
    { number: 40, name: 'غافر', englishName: 'Ghafir' },
    { number: 41, name: 'فصلت', englishName: 'Fussilat' },
    { number: 42, name: 'الشورى', englishName: 'Ash-Shura' },
    { number: 43, name: 'الزخرف', englishName: 'Az-Zukhruf' },
    { number: 44, name: 'الدخان', englishName: 'Ad-Dukhan' },
    { number: 45, name: 'الجاثية', englishName: 'Al-Jathiyah' },
    { number: 46, name: 'الأحقاف', englishName: 'Al-Ahqaf' },
    { number: 47, name: 'محمد', englishName: 'Muhammad' },
    { number: 48, name: 'الفتح', englishName: 'Al-Fath' },
    { number: 49, name: 'الحجرات', englishName: 'Al-Hujurat' },
    { number: 50, name: 'ق', englishName: 'Qaf' },
    { number: 51, name: 'الذاريات', englishName: 'Ad-Dhariyat' },
    { number: 52, name: 'الطور', englishName: 'At-Tur' },
    { number: 53, name: 'النجم', englishName: 'An-Najm' },
    { number: 54, name: 'القمر', englishName: 'Al-Qamar' },
    { number: 55, name: 'الرحمن', englishName: 'Ar-Rahman' },
    { number: 56, name: 'الواقعة', englishName: 'Al-Waqiah' },
    { number: 57, name: 'الحديد', englishName: 'Al-Hadid' },
    { number: 58, name: 'المجادلة', englishName: 'Al-Mujadilah' },
    { number: 59, name: 'الحشر', englishName: 'Al-Hashr' },
    { number: 60, name: 'الممتحنة', englishName: 'Al-Mumtahanah' },
    { number: 61, name: 'الصف', englishName: 'As-Saff' },
    { number: 62, name: 'الجمعة', englishName: 'Al-Jumuah' },
    { number: 63, name: 'المنافقون', englishName: 'Al-Munafiqun' },
    { number: 64, name: 'التغابن', englishName: 'At-Taghabun' },
    { number: 65, name: 'الطلاق', englishName: 'At-Talaq' },
    { number: 66, name: 'التحريم', englishName: 'At-Tahrim' },
    { number: 67, name: 'الملك', englishName: 'Al-Mulk' },
    { number: 68, name: 'القلم', englishName: 'Al-Qalam' },
    { number: 69, name: 'الحاقة', englishName: 'Al-Haqqah' },
    { number: 70, name: 'المعارج', englishName: 'Al-Maarij' },
    { number: 71, name: 'نوح', englishName: 'Nuh' },
    { number: 72, name: 'الجن', englishName: 'Al-Jinn' },
    { number: 73, name: 'المزمل', englishName: 'Al-Muzzammil' },
    { number: 74, name: 'المدثر', englishName: 'Al-Muddaththir' },
    { number: 75, name: 'القيامة', englishName: 'Al-Qiyamah' },
    { number: 76, name: 'الإنسان', englishName: 'Al-Insan' },
    { number: 77, name: 'المرسلات', englishName: 'Al-Mursalat' },
    { number: 78, name: 'النبأ', englishName: 'An-Naba' },
    { number: 79, name: 'النازعات', englishName: 'An-Naziat' },
    { number: 80, name: 'عبس', englishName: 'Abasa' },
    { number: 81, name: 'التكوير', englishName: 'At-Takwir' },
    { number: 82, name: 'الإنفطار', englishName: 'Al-Infitar' },
    { number: 83, name: 'المطففين', englishName: 'Al-Mutaffifin' },
    { number: 84, name: 'الإنشقاق', englishName: 'Al-Inshiqaq' },
    { number: 85, name: 'البروج', englishName: 'Al-Buruj' },
    { number: 86, name: 'الطارق', englishName: 'At-Tariq' },
    { number: 87, name: 'الأعلى', englishName: 'Al-Ala' },
    { number: 88, name: 'الغاشية', englishName: 'Al-Ghashiyah' },
    { number: 89, name: 'الفجر', englishName: 'Al-Fajr' },
    { number: 90, name: 'البلد', englishName: 'Al-Balad' },
    { number: 91, name: 'الشمس', englishName: 'Ash-Shams' },
    { number: 92, name: 'الليل', englishName: 'Al-Layl' },
    { number: 93, name: 'الضحى', englishName: 'Ad-Duha' },
    { number: 94, name: 'الشرح', englishName: 'Ash-Sharh' },
    { number: 95, name: 'التين', englishName: 'At-Tin' },
    { number: 96, name: 'العلق', englishName: 'Al-Alaq' },
    { number: 97, name: 'القدر', englishName: 'Al-Qadr' },
    { number: 98, name: 'البينة', englishName: 'Al-Bayyinah' },
    { number: 99, name: 'الزلزلة', englishName: 'Az-Zalzalah' },
    { number: 100, name: 'العاديات', englishName: 'Al-Adiyat' },
    { number: 101, name: 'القارعة', englishName: 'Al-Qariahh' },
    { number: 102, name: 'التكاثر', englishName: 'At-Takathur' },
    { number: 103, name: 'العصر', englishName: 'Al-Asr' },
    { number: 104, name: 'الهمزة', englishName: 'Al-Humaza' },
    { number: 105, name: 'الفيل', englishName: 'Al-Fil' },
    { number: 106, name: 'قريش', englishName: 'Quraysh' },
    { number: 107, name: 'الماعون', englishName: 'Al-Maun' },
    { number: 108, name: 'الكوثر', englishName: 'Al-Kawthar' },
    { number: 109, name: 'الكافرون', englishName: 'Al-Kafirun' },
    { number: 110, name: 'النصر', englishName: 'An-Nasr' },
    { number: 111, name: 'المسد', englishName: 'Al-Masad' },
    { number: 112, name: 'الإخلاص', englishName: 'Al-Ikhlas' },
    { number: 113, name: 'الفلق', englishName: 'Al-Falaq' },
    { number: 114, name: 'الناس', englishName: 'An-Nas' }
];

// متغيرات عامة
let currentReader = null;
let currentSurah = null;
let repeatMode = 'off';
let autoPlayNext = false;
let isPlaying = false;

// عناصر DOM
const audioPlayer = document.getElementById('audioPlayer');
const surahsList = document.getElementById('surahsList');
const playerSection = document.getElementById('playerSection');
const searchInput = document.getElementById('searchInput');

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    renderSurahs(surahs);
    setupEventListeners();
});

// عرض السور
function renderSurahs(surahsToShow = surahs) {
    surahsList.innerHTML = '';
    
    surahsToShow.forEach(surah => {
        const btn = document.createElement('button');
        btn.className = 'surah-btn';
        btn.onclick = () => selectSurah(surah);
        
        if (currentReader) {
            const readerColor = readers[currentReader].color;
            btn.style.borderColor = readerColor;
            btn.style.borderWidth = '2px';
        }
        
        btn.innerHTML = `
            <span class="surah-number">${surah.number}</span>
            <span class="surah-name">${surah.name}</span>
        `;
        
        surahsList.appendChild(btn);
    });
}

// اختيار القارئ
function selectReader(readerKey) {
    currentReader = readerKey;
    
    document.querySelectorAll('.reader-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.reader-${readerKey}`).classList.add('active');
    
    renderSurahs(surahs);
    
    if (currentSurah) {
        selectSurah(currentSurah);
    }
}

// اختيار السورة
async function selectSurah(surah) {
    if (!currentReader) {
        alert('يرجى اختيار قارئ أولاً');
        return;
    }
    
    currentSurah = surah;
    const reader = readers[currentReader];
    
    playerSection.style.display = 'block';
    
    document.getElementById('surahName').textContent = `سورة ${surah.name}`;
    document.getElementById('readerName').textContent = `القارئ: ${reader.name}`;
    
    playerSection.style.borderTopColor = reader.color;
    document.querySelector('.player-header h2').style.color = reader.color;
    document.querySelector('.player-header p').style.color = reader.color;
    
    try {
        const audioUrl = await getAudioUrl(surah.number, currentReader);
        if (audioUrl) {
            audioPlayer.src = audioUrl;
            audioPlayer.load();
        }
    } catch (error) {
        console.error('خطأ:', error);
    }
}

// الحصول على رابط التلاوة
async function getAudioUrl(surahNumber, readerKey) {
    const audioBaseUrls = {
        ajmi: `https://cdn.quran.com/audio/ahmed_al_ajmi/${String(surahNumber).padStart(3, '0')}.mp3`,
        yamani: `https://cdn.quran.com/audio/wadee_al_yamani/${String(surahNumber).padStart(3, '0')}.mp3`,
        nafis: `https://cdn.quran.com/audio/ahmed_al_nafees/${String(surahNumber).padStart(3, '0')}.mp3`,
        jilani: `https://cdn.quran.com/audio/khalid_al_jalil/${String(surahNumber).padStart(3, '0')}.mp3`
    };
    
    return audioBaseUrls[readerKey] || null;
}

// تشغيل/إيقاف
function togglePlayPause() {
    const btn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        audioPlayer.pause();
        btn.textContent = '▶️';
        isPlaying = false;
    } else {
        audioPlayer.play();
        btn.textContent = '⏸️';
        isPlaying = true;
    }
}

// وضع التكرار
function repeatToggle() {
    const btn = document.getElementById('repeatBtn');
    
    if (repeatMode === 'off') {
        repeatMode = 'once';
        btn.textContent = '🔄 مرة واحدة';
        btn.classList.add('active');
    } else if (repeatMode === 'once') {
        repeatMode = 'all';
        btn.textContent = '🔄 تكرار الكل';
    } else {
        repeatMode = 'off';
        btn.textContent = '🔄 بدون تكرار';
        btn.classList.remove('active');
    }
}

// التشغيل التلقائي للسورة التالية
function toggleAutoPlay() {
    const btn = document.getElementById('autoPlayBtn');
    autoPlayNext = !autoPlayNext;
    btn.textContent = autoPlayNext ? '🔁 تشغيل تلقائي: مفعل' : '🔁 تشغيل تلقائي: متوقف';
    btn.classList.toggle('active');
}

// تحميل السورة
function downloadSurah() {
    if (!audioPlayer.src) {
        alert('لا توجد تلاوة للتحميل');
        return;
    }
    
    const a = document.createElement('a');
    a.href = audioPlayer.src;
    a.download = `${currentSurah.name}_${readers[currentReader].name}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// التحكم في مستوى الصوت
function setVolume() {
    const slider = document.getElementById('volumeSlider');
    const percent = document.getElementById('volumePercent');
    audioPlayer.volume = slider.value / 100;
    percent.textContent = slider.value + '%';
}

// إغلاق لوحة التشغيل
function closePlayer() {
    playerSection.style.display = 'none';
    audioPlayer.pause();
    document.getElementById('playPauseBtn').textContent = '▶️';
    isPlaying = false;
}

// نسخ رابط التطبيق
function copyAppLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('تم نسخ الرابط بنجاح!');
    }).catch(err => {
        console.error('خطأ:', err);
    });
}

// البحث عن السور
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm === '') {
            renderSurahs(surahs);
        } else {
            const filtered = surahs.filter(s => 
                s.name.includes(searchTerm) || 
                s.englishName.includes(searchTerm) ||
                s.number.toString().includes(searchTerm)
            );
            renderSurahs(filtered);
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressCircle').style.left = progress + '%';
        document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('ended', () => {
        if (repeatMode === 'once') {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (repeatMode === 'all' || autoPlayNext) {
            const currentIndex = surahs.findIndex(s => s.number === currentSurah.number);
            if (currentIndex < surahs.length - 1) {
                selectSurah(surahs[currentIndex + 1]);
                audioPlayer.play();
            }
        } else {
            document.getElementById('playPauseBtn').textContent = '▶️';
            isPlaying = false;
        }
    });

    document.getElementById('progressSlider').addEventListener('input', (e) => {
        audioPlayer.currentTime = (e.target.value / 100) * audioPlayer.duration;
    });
}

// تنسيق الوقت
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}