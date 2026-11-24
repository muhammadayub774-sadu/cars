/* ==========================================================================
   FERRARI STORE — COMPLETE APPLICATION LOGIC & 65 UNIQUE FERRARI MODELS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. CURATED HIGH-RESOLUTION AUTOMOTIVE PHOTO POOL (UNIQUE PER CAR)
    const FERRARI_PHOTO_IDS = [
        "1592198084033-aade902d1aae", "1583121274602-3e2820c69888", "1503376780353-7e6692767b70",
        "1544636331-e26879cd4d9b", "1614200187524-dc4b892acf16", "1617814076367-b759c7d7e738",
        "1603584173870-7f23fdae1b7a", "1552519507-da3b142c6e3d", "1580273916550-e323be2ae537",
        "1525609004556-c46c7d6cf023", "1566023888476-6f17e362fbb7", "1514316454349-750a7fd3da3a",
        "1542362567-b07e54358753", "1553440569-bcc63803a83d", "1494976388531-d1058494cdd8",
        "1511919884226-fd3cad34687c", "1533473359331-0135ef1b58bf", "1549399542-7e3f8b79c341",
        "1502877338535-766e1452684a", "1492144534655-ae79c964c9d7", "1526726538690-5cbf956ae2fd",
        "1555215695-3004980ad54e", "1563720223185-11003d516935", "1570733577524-3a047079e80d",
        "1580274455191-1c62238fa333", "1597007066704-67bf2068d5b2", "1605559424843-9e4c228bf1c2",
        "1618843479313-40f8afb4b4d8", "1621135802920-133df287f89c", "1632245889029-e406faaa34cd",
        "1635770311293-b09d08a247a1", "1493238792000-8113da705763", "1507136566006-cfc505b114fc",
        "1517524008697-84bbe3c3fd98", "1532581140115-3e355d1ed1de", "1536700503339-1e4b06520771",
        "1541443131876-44b03de101c5", "1541899481282-d53bffe3c35d", "1549317661-bd32c8ce0db2",
        "1550355291-bbee04a92027", "1551830820-330a71b99659", "1555353540-64580b51c258",
        "1562911791-c7a97b729ec5", "1567808291548-fc3ee04dbcf0", "1568605117036-5fe5e7bab0b7",
        "1571607388263-1044f9ea01dd", "1573950940509-d924ee3fd345", "1584345604476-8ec5e12e42dd",
        "1588258219511-64eb629cb833", "1590362891991-f776e747a588", "1594502184342-2e12f877aa73",
        "1600712242805-5f78671b24da", "1603386329225-868f9b1ee6c9", "1606664515524-ed2f786a0bd6",
        "1609521263047-f8f205293f24", "1611821064430-0d40291d0f0b", "1612825173281-9a193378527e",
        "1614162692292-7ac56d7f7f1e", "1616422285623-13ff0162193c", "1619767886558-efdc259cde1a",
        "1626668893632-6f3a4466d22f", "1627454820516-dc767bcb4d3e", "1631295868223-63265b40d9e4",
        "1577495508048-b635879837f1", "1520050206274-a1ae44613e6d"
    ];

    const FALLBACK_SVG = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#080808"/>
                    <stop offset="100%" stop-color="#220000"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#bg)"/>
            <rect x="40" y="40" width="720" height="420" rx="16" fill="none" stroke="#D4AF37" stroke-width="2" stroke-opacity="0.5"/>
            <text x="400" y="235" fill="#DC0000" font-family="Georgia, serif" font-size="42" font-weight="bold" text-anchor="middle" letter-spacing="6">FERRARI</text>
            <text x="400" y="280" fill="#D4AF37" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" letter-spacing="4">MARANELLO HERITAGE EDITION</text>
        </svg>
    `);

    // 2. 65 AUTHENTIC FERRARI MODELS DATABASE
    const RAW_CARS = [
        { name: "Ferrari SF90 XX Stradale", year: 2024, price: 890000, speed: "320 km/h", hp: 1030, engine: "V8 Hybrid", cat: "V8", colors: ["Red", "Black", "Yellow"], desc: "Yo'l uchun ruxsat etilgan ilk XX dasturi giperkari, 1030 ot kuchi va ekstremal aerodinamika." },
        { name: "Ferrari SF90 XX Spider", year: 2024, price: 965000, speed: "320 km/h", hp: 1030, engine: "V8 Hybrid", cat: "V8", colors: ["Yellow", "Red", "White"], desc: "Ochiq osmon ostida 1030 ot kuchili gibrid quvvatni his etish imkonini beruvchi cheklangan seriya." },
        { name: "Ferrari 12Cilindri", year: 2024, price: 465000, speed: "340 km/h", hp: 830, engine: "V12", cat: "V12", colors: ["Silver", "Red", "Black"], desc: "Atmosferali 6.5 litrli V12 dvigatelning sof an'analarini zamonaviy dizaynda davom ettiruvchi flagman." },
        { name: "Ferrari 12Cilindri Spider", year: 2024, price: 510000, speed: "340 km/h", hp: 830, engine: "V12", cat: "V12", colors: ["Blue", "Silver", "Red"], desc: "9500 ayl/daq tezlikda kuylovchi V12 simfoniyasini ochiq tomda taqdim etuvchi gran-turismo." },
        { name: "Ferrari Daytona SP3", year: 2022, price: 2250000, speed: "340 km/h", hp: 840, engine: "V12", cat: "Classic", colors: ["Red", "White", "Blue"], desc: "1960-yillardagi sport prototiplaridan ilhomlangan Icona seriyasining eng kuchli atmosferali V12 durdonasi." },
        { name: "Ferrari Purosangue", year: 2023, price: 430000, speed: "310 km/h", hp: 725, engine: "V12", cat: "V12", colors: ["Black", "Silver", "Red"], desc: "Ferrari tarixidagi ilk to'rt eshikli, to'rt o'rindiqli V12 dvigatelli hashamatli sport krossoveri." },
        { name: "Ferrari SF90 Stradale", year: 2020, price: 525000, speed: "340 km/h", hp: 1000, engine: "V8 Hybrid", cat: "V8", colors: ["Red", "Yellow", "Silver"], desc: "Uchta elektr motor va twin-turbo V8 uyg'unligidagi 1000 ot kuchili ilk seriyali PHEV superkar." },
        { name: "Ferrari SF90 Spider", year: 2021, price: 575000, speed: "340 km/h", hp: 1000, engine: "V8 Hybrid", cat: "V8", colors: ["Yellow", "Red", "Black"], desc: "14 soniyada yig'iladigan qattiq tomga ega 1000 ot kuchili gibrid rodster." },
        { name: "Ferrari 296 GTB", year: 2022, price: 342000, speed: "330 km/h", hp: 830, engine: "V6 Hybrid", cat: "V6", colors: ["Red", "Blue", "Yellow"], desc: "120 gradusli V6 turbo va elektr motor bilan jihozlangan, haydash zavqini qayta belgilagan berlinetta." },
        { name: "Ferrari 296 GTS", year: 2023, price: 375000, speed: "330 km/h", hp: 830, engine: "V6 Hybrid", cat: "V6", colors: ["Green", "Red", "White"], desc: "Ochiq tomli V6 gibrid sportkar — ajoyib muvozanat va chaqqon boshqaruv sohibi." },
        { name: "Ferrari 812 Competizione", year: 2021, price: 680000, speed: "340 km/h", hp: 830, engine: "V12", cat: "V12", colors: ["Silver", "Yellow", "Red"], desc: "812 Superfast asosida yaratilgan, to'rt g'ildirakli boshqaruvga ega cheklangan trek-fokusli V12." },
        { name: "Ferrari 812 Competizione A", year: 2022, price: 760000, speed: "340 km/h", hp: 830, engine: "V12", cat: "V12", colors: ["Yellow", "Black", "Red"], desc: "Atigi 599 dona ishlab chiqarilgan Targa uslubidagi V12 kolleksiya shedevri." },
        { name: "Ferrari 812 Superfast", year: 2018, price: 365000, speed: "340 km/h", hp: 800, engine: "V12", cat: "V12", colors: ["Red", "Black", "Silver"], desc: "Oldinda joylashgan 6.5L V12 dvigatelli, 0 dan 100 km/soatgacha 2.9 soniyada chiquvchi gran-turismo." },
        { name: "Ferrari 812 GTS", year: 2020, price: 410000, speed: "340 km/h", hp: 800, engine: "V12", cat: "V12", colors: ["Blue", "Silver", "Red"], desc: "50 yillik tanaffusdan so'ng seriyali ishlab chiqarishga qaytgan old V12 dvigatelli Ferrari spider." },
        { name: "Ferrari F8 Tributo", year: 2020, price: 315000, speed: "340 km/h", hp: 720, engine: "V8", cat: "V8", colors: ["Red", "Yellow", "Blue"], desc: "Ferrari tarixidagi eng mukofotlangan twin-turbo V8 dvigateliga bag'ishlangan o'rta motorli berlinetta." },
        { name: "Ferrari F8 Spider", year: 2020, price: 345000, speed: "340 km/h", hp: 720, engine: "V8", cat: "V8", colors: ["Yellow", "Red", "White"], desc: "720 ot kuchili V8 quvvatini ochiq osmon erkinligi bilan birlashtirgan mukammal spider." },
        { name: "Ferrari 488 Pista", year: 2019, price: 440000, speed: "340 km/h", hp: 720, engine: "V8", cat: "V8", colors: ["Red", "White", "Blue"], desc: "488 Challenge va GTE poyga tajribasi asosida yaratilgan yengil va o'ta tezkor trek avtomobili." },
        { name: "Ferrari 488 Pista Spider", year: 2019, price: 495000, speed: "340 km/h", hp: 720, engine: "V8", cat: "V8", colors: ["Blue", "White", "Red"], desc: "Maranelloning 50-chi ochiq tomli modeli, rekord darajadagi quvvat va og'irlik nisbatiga ega." },
        { name: "Ferrari 488 GTB", year: 2016, price: 265000, speed: "330 km/h", hp: 670, engine: "V8", cat: "V8", colors: ["Red", "Black", "Yellow"], desc: "O'rta motorli V8 turbo erasini yangi bosqichga olib chiqqan aerodinamik superkar." },
        { name: "Ferrari 488 Spider", year: 2016, price: 290000, speed: "325 km/h", hp: 670, engine: "V8", cat: "V8", colors: ["White", "Red", "Blue"], desc: "Eng yengil buklanuvchi qattiq tomga ega 670 ot kuchili V8 rodster." },
        { name: "Ferrari Roma", year: 2020, price: 245000, speed: "320 km/h", hp: 620, engine: "V8", cat: "V8", colors: ["Silver", "Blue", "Red"], desc: "1950-60 yillardagi Rimning 'La Nuova Dolce Vita' uslubini aks ettiruvchi nafis kupe." },
        { name: "Ferrari Roma Spider", year: 2023, price: 275000, speed: "320 km/h", hp: 620, engine: "V8", cat: "V8", colors: ["Green", "Silver", "White"], desc: "54 yildan so'ng old motorli Ferrariga qaytgan zamonaviy matoli ochiq tom egasi." },
        { name: "Ferrari Portofino M", year: 2021, price: 235000, speed: "320 km/h", hp: 620, engine: "V8", cat: "V8", colors: ["Red", "Black", "Silver"], desc: "'Modificata' indeksi bilan 8 pog'onali F1 uzatmalar qutisi va Race rejimiga ega GT kabriolet." },
        { name: "Ferrari Portofino", year: 2018, price: 215000, speed: "320 km/h", hp: 600, engine: "V8", cat: "V8", colors: ["Blue", "Red", "White"], desc: "Kundalik qulaylik va haqiqiy Ferrari dinamikasini uyg'unlashtirgan 2+2 GT rodster." },
        { name: "Ferrari Monza SP1", year: 2019, price: 1850000, speed: "300 km/h", hp: 810, engine: "V12", cat: "Classic", colors: ["Silver", "Red", "Black"], desc: "Bir o'rindiqli barchetta dizayni va Virtual Wind Shield texnologiyasiga ega Icona kolleksiyasi." },
        { name: "Ferrari Monza SP2", year: 2019, price: 1950000, speed: "300 km/h", hp: 810, engine: "V12", cat: "Classic", colors: ["Black", "Red", "Yellow"], desc: "Ikki o'rindiqli barchetta, 1950-yillar poyga Ferrarilarining zamonaviy talqini." },
        { name: "Ferrari LaFerrari", year: 2014, price: 3400000, speed: "352 km/h", hp: 963, engine: "V12 Hybrid", cat: "Classic", colors: ["Red", "Yellow", "Black"], desc: "Ferrari tarixidagi eng afsonaviy gibrid giperkar, atigi 499 nusxada ishlab chiqarilgan." },
        { name: "Ferrari LaFerrari Aperta", year: 2017, price: 4600000, speed: "350 km/h", hp: 963, engine: "V12 Hybrid", cat: "Classic", colors: ["Black", "Red", "White"], desc: "Brendning 70 yillik yubileyiga bag'ishlab yaratilgan 210 nusxadagi ochiq tomli giperkar." },
        { name: "Ferrari Enzo", year: 2003, price: 3800000, speed: "355 km/h", hp: 660, engine: "V12", cat: "Classic", colors: ["Red", "Yellow", "Black"], desc: "Asoschisi sharafiga nomlangan, karbon-tolali monokok va F1 texnologiyali XXI asr ikonasi." },
        { name: "Ferrari F50", year: 1995, price: 4200000, speed: "325 km/h", hp: 520, engine: "V12", cat: "Classic", colors: ["Red", "Yellow", "Black"], desc: "Formula-1 bolidi dvigateli to'g'ridan-to'g'ri shassiga o'rnatilgan mexanik uzatmali durdona." },
        { name: "Ferrari F40", year: 1987, price: 2950000, speed: "324 km/h", hp: 478, engine: "V8", cat: "Classic", colors: ["Red"], desc: "Enzo Ferrari tasdiqlagan so'nggi avtomobil, sof poyga ruhi va twin-turbo V8 afsonasi." },
        { name: "Ferrari 288 GTO", year: 1984, price: 3600000, speed: "305 km/h", hp: 400, engine: "V8", cat: "Classic", colors: ["Red"], desc: "Group B poygalari uchun yaratilgan, zamonaviy Ferrari giperkarlarining ajdodi." },
        { name: "Ferrari Testarossa", year: 1986, price: 245000, speed: "290 km/h", hp: 390, engine: "Flat-12", cat: "Classic", colors: ["Red", "White", "Black"], desc: "Yon havo yo'llari va 12 silindrli oppozit dvigateli bilan 1980-yillar pop-madaniyati ramzi." },
        { name: "Ferrari 512 TR", year: 1992, price: 285000, speed: "314 km/h", hp: 428, engine: "Flat-12", cat: "Classic", colors: ["Red", "Black", "Yellow"], desc: "Testarossaning takomillashtirilgan, yanada kuchli va muvozanatli evolyutsiyasi." },
        { name: "Ferrari F512 M", year: 1995, price: 340000, speed: "315 km/h", hp: 440, engine: "Flat-12", cat: "Classic", colors: ["Red", "Silver", "Black"], desc: "Afsonaviy Flat-12 dvigatelli o'rta motorli Ferrari seriyasining yakuniy va noyob modeli." },
        { name: "Ferrari 512 BB", year: 1978, price: 310000, speed: "283 km/h", hp: 360, engine: "Flat-12", cat: "Classic", colors: ["Red", "Black", "Silver"], desc: "Berlinetta Boxer — Pininfarina dizayni va 5.0 litrli 12 silindrli quvvat uyg'unligi." },
        { name: "Ferrari 458 Speciale", year: 2014, price: 460000, speed: "325 km/h", hp: 605, engine: "V8", cat: "V8", colors: ["Red", "Yellow", "Blue"], desc: "Ferrari tarixidagi so'nggi atmosferali o'rta motorli V8, 9000 ayl/daq aylanish tezligiga ega." },
        { name: "Ferrari 458 Speciale A", year: 2015, price: 690000, speed: "320 km/h", hp: 605, engine: "V8", cat: "V8", colors: ["Yellow", "Red", "White"], desc: "Atigi 499 nusxada chiqarilgan eng kuchli atmosferali V8 spider." },
        { name: "Ferrari 458 Italia", year: 2011, price: 225000, speed: "325 km/h", hp: 570, engine: "V8", cat: "V8", colors: ["Red", "White", "Black"], desc: "Michael Schumacher maslahati bilan yaratilgan, zamonaviy superkar dizaynini o'zgartirgan model." },
        { name: "Ferrari 458 Spider", year: 2013, price: 248000, speed: "320 km/h", hp: 570, engine: "V8", cat: "V8", colors: ["White", "Red", "Yellow"], desc: "Dunyodagi ilk alyuminiy buklanuvchi qattiq tomga ega o'rta motorli superkar." },
        { name: "Ferrari 430 Scuderia", year: 2008, price: 310000, speed: "320 km/h", hp: 510, engine: "V8", cat: "V8", colors: ["Red", "Silver", "Blue"], desc: "F1 Superfast2 uzatmalar qutisi va yengillashtirilgan kuzovga ega trek-yo'naltirilgan V8." },
        { name: "Ferrari Scuderia Spider 16M", year: 2009, price: 420000, speed: "315 km/h", hp: 510, engine: "V8", cat: "V8", colors: ["Black", "Red", "Yellow"], desc: "16-chi F1 Konstruktorlar kubogi sharafiga 499 dona ishlab chiqarilgan maxsus rodster." },
        { name: "Ferrari F430", year: 2006, price: 165000, speed: "315 km/h", hp: 490, engine: "V8", cat: "V8", colors: ["Red", "Silver", "Black"], desc: "E-Diff elektron differensiali va rulda Manettino tugmasiga ega ilk seriyali Ferrari." },
        { name: "Ferrari 360 Challenge Stradale", year: 2004, price: 295000, speed: "300 km/h", hp: 425, engine: "V8", cat: "V8", colors: ["Red", "Blue", "White"], desc: "Poyga avtomobili hissiyotini ko'cha yo'llariga olib chiqqan afsonaviy V8 kupe." },
        { name: "Ferrari 360 Modena", year: 2001, price: 125000, speed: "295 km/h", hp: 400, engine: "V8", cat: "V8", colors: ["Red", "Silver", "Yellow"], desc: "To'liq alyuminiy shassiga ega ilk Ferrari, Enzo Ferrari tug'ilgan shahar sharafiga nomlangan." },
        { name: "Ferrari F355 Berlinetta", year: 1996, price: 155000, speed: "295 km/h", hp: 380, engine: "V8", cat: "V8", colors: ["Red", "Yellow", "Blue"], desc: "Har bir silindrda 5 ta klapanli V8 dvigateli va o'ziga xos yuqori chastotali ovozi bilan mashhur." },
        { name: "Ferrari 348 TB", year: 1991, price: 110000, speed: "275 km/h", hp: 300, engine: "V8", cat: "Classic", colors: ["Red", "Black", "Yellow"], desc: "Testarossa uslubidagi yon panellarga ega klassik o'rta motorli 90-yillar kupesi." },
        { name: "Ferrari 328 GTB", year: 1988, price: 145000, speed: "267 km/h", hp: 270, engine: "V8", cat: "Classic", colors: ["Red", "Silver", "Black"], desc: "308 seriyasining eng mukammal va ishonchli klassik ko'rinishidagi davomchisi." },
        { name: "Ferrari 308 GTS", year: 1982, price: 135000, speed: "255 km/h", hp: 255, engine: "V8", cat: "Classic", colors: ["Red", "Yellow", "Black"], desc: "Pininfarina chizgilari va Targa tomi bilan 1980-yillarning eng taniqli sportkari." },
        { name: "Ferrari 250 GTO", year: 1962, price: 48000000, speed: "280 km/h", hp: 300, engine: "V12", cat: "Classic", colors: ["Red", "Blue"], desc: "Avtomobilsozlik tarixidagi eng qimmat va noyob san'at asari — atigi 36 dona yaratilgan." },
        { name: "Ferrari 250 GT California", year: 1961, price: 16500000, speed: "240 km/h", hp: 280, engine: "V12", cat: "Classic", colors: ["Silver", "Red", "Black"], desc: "Colombo V12 dvigatelli, ochiq tomli klassik Italiya hashamatining timsoli." },
        { name: "Ferrari 365 GTB/4 Daytona", year: 1971, price: 720000, speed: "280 km/h", hp: 352, engine: "V12", cat: "Classic", colors: ["Red", "Yellow", "Silver"], desc: "1967-yilgi Daytona 24 soatlik poygasidagi 1-2-3 g'alaba sharafiga nomlangan afsonaviy GT." },
        { name: "Ferrari 599 GTO", year: 2011, price: 850000, speed: "335 km/h", hp: 670, engine: "V12", cat: "V12", colors: ["Red", "Black", "Silver"], desc: "599XX trek bolidi asosida 599 nusxada ishlab chiqarilgan o'ta tezkor V12 kupe." },
        { name: "Ferrari 599 GTB Fiorano", year: 2008, price: 185000, speed: "330 km/h", hp: 620, engine: "V12", cat: "V12", colors: ["Red", "Silver", "Black"], desc: "Enzo Ferrari dvigateli va magnitoreologik osma tizimga ega flagman gran-turismo." },
        { name: "Ferrari 612 Scaglietti", year: 2007, price: 145000, speed: "320 km/h", hp: 540, engine: "V12", cat: "V12", colors: ["Silver", "Blue", "Black"], desc: "To'rt nafar yo'lovchi uchun mo'ljallangan, to'liq alyuminiy kuzovli hashamatli V12 kupe." },
        { name: "Ferrari GTC4Lusso", year: 2018, price: 255000, speed: "335 km/h", hp: 690, engine: "V12", cat: "V12", colors: ["Blue", "Silver", "Black"], desc: "To'rt g'ildirakli tortish (4RM-S) va 690 ot kuchili V12 dvigatelga ega universal GT." },
        { name: "Ferrari FF", year: 2013, price: 175000, speed: "335 km/h", hp: 660, engine: "V12", cat: "V12", colors: ["White", "Silver", "Red"], desc: "Ferrari tarixidagi ilk to'liq uzatmali (4WD) shooting-brake uslubidagi V12." },
        { name: "Ferrari 575M Maranello", year: 2003, price: 195000, speed: "325 km/h", hp: 515, engine: "V12", cat: "V12", colors: ["Silver", "Red", "Black"], desc: "F1 tipidagi uzatmalar qutisi bilan jihozlangan ilk V12 gran-turismo." },
        { name: "Ferrari 550 Maranello", year: 1998, price: 215000, speed: "320 km/h", hp: 485, engine: "V12", cat: "V12", colors: ["Red", "Silver", "Blue"], desc: "23 yildan so'ng oldinda joylashgan V12 va mexanik uzatmani qaytargan klassik kupe." },
        { name: "Ferrari California T", year: 2016, price: 168000, speed: "316 km/h", hp: 560, engine: "V8", cat: "V8", colors: ["Red", "White", "Blue"], desc: "Turbo quvvat va nafis ochiluvchi tomni birlashtirgan dinamik GT kabriolet." },
        { name: "Ferrari California", year: 2011, price: 132000, speed: "310 km/h", hp: 460, engine: "V8", cat: "V8", colors: ["Red", "Black", "Silver"], desc: "To'g'ridan-to'g'ri yonilg'i purkash va buklanuvchi qattiq tomga ega ilk V8 Ferrari." },
        { name: "Ferrari Dino 246 GT", year: 1972, price: 480000, speed: "235 km/h", hp: 195, engine: "V6", cat: "Classic", colors: ["Yellow", "Red", "Blue"], desc: "Enzo Ferrarining o'g'li Alfredo sharafiga nomlangan, tarixdagi eng chiroyli klassik sportkarlardan biri." },
        { name: "Ferrari Mondial t", year: 1991, price: 88000, speed: "255 km/h", hp: 300, engine: "V8", cat: "Classic", colors: ["Red", "Black", "White"], desc: "To'rt o'rindiqli o'rta motorli noyob klassik Ferrari kabriolet/kupe." },
        { name: "Ferrari 412", year: 1987, price: 115000, speed: "250 km/h", hp: 340, engine: "V12", cat: "Classic", colors: ["Silver", "Blue", "Black"], desc: "O'z davrining eng hashamatli va keng 2+2 V12 gran-turismo flagmani." },
        { name: "Ferrari SP38 Deborah", year: 2018, price: 3200000, speed: "330 km/h", hp: 670, engine: "V8", cat: "Classic", colors: ["Red"], desc: "Ferrari Special Projects bo'limi tomonidan F40 ruhida yaratilgan yagona (One-Off) ekzotik model." }
    ];

    const CARS_DATA = RAW_CARS.map((item, idx) => {
        const primaryPhoto = `https://images.unsplash.com/photo-${FERRARI_PHOTO_IDS[idx % FERRARI_PHOTO_IDS.length]}?auto=format&fit=crop&w=950&q=85`;
        const altPhoto1 = `https://images.unsplash.com/photo-${FERRARI_PHOTO_IDS[(idx + 7) % FERRARI_PHOTO_IDS.length]}?auto=format&fit=crop&w=950&q=85`;
        const altPhoto2 = `https://images.unsplash.com/photo-${FERRARI_PHOTO_IDS[(idx + 19) % FERRARI_PHOTO_IDS.length]}?auto=format&fit=crop&w=950&q=85`;
        return {
            id: idx + 1,
            name: item.name,
            year: item.year,
            price: item.price,
            speed: item.speed,
            hp: item.hp,
            engine: item.engine,
            category: item.cat,
            colors: item.colors,
            desc: item.desc,
            image: primaryPhoto,
            gallery: [primaryPhoto, altPhoto1, altPhoto2]
        };
    });

    // 3. STATE MANAGEMENT WITH LOCALSTORAGE
    const STORAGE_KEYS = {
        THEME: 'ferrari_theme_v1',
        FAVORITES: 'ferrari_favorites_v1',
        CART: 'ferrari_cart_v1',
        USERS: 'ferrari_users_v1',
        CURRENT_USER: 'ferrari_current_user_v1',
        ORDERS: 'ferrari_orders_v1'
    };

    let state = {
        theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
        favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [],
        cart: JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [],
        users: JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [],
        currentUser: JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || null,
        orders: JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [],
        filters: {
            search: '',
            category: 'all',
            engine: 'all',
            year: 'all',
            hp: 'all',
            priceRange: 'all',
            color: 'all',
            sort: 'default'
        },
        carouselIndex: 0,
        directCheckoutItem: null
    };

    function saveState() {
        localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(state.users));
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(state.currentUser));
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
    }

    function formatPrice(num) {
        return '$' + Number(num).toLocaleString('en-US');
    }

    function showToast(message, type = 'default') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-shield-halved'}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    function attachImageFallback(imgEl) {
        imgEl.onerror = function () {
            this.onerror = null;
            this.src = FALLBACK_SVG;
        };
    }

    // 4. THEME TOGGLE (DARK / LIGHT MODE)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    applyTheme(state.theme);

    themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        saveState();
        showToast(state.theme === 'dark' ? 'Tungi rejim (Dark Mode) yoqildi' : 'Kunduzgi rejim (Light Mode) yoqildi');
    });

    // 5. NAVBAR SCROLL & MOBILE MENU
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('open');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('navSearchBtn').addEventListener('click', () => {
        const carsSection = document.getElementById('cars');
        carsSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('searchInput').focus(), 450);
    });

    document.getElementById('navFavBtn').addEventListener('click', () => {
        document.getElementById('favorites-section').scrollIntoView({ behavior: 'smooth' });
    });

    // 6. INTERACTIVE FEATURED CAROUSEL (AUTOPLAY, SWIPE, DRAG, DOTS)
    const featuredCars = CARS_DATA.slice(0, 8);
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPagination = document.getElementById('carouselPagination');
    const carouselWrapper = document.getElementById('carouselWrapper');
    let carouselTimer = null;

    function initCarousel() {
        carouselTrack.innerHTML = '';
        carouselPagination.innerHTML = '';

        featuredCars.forEach((car, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <div class="carousel-slide-overlay"></div>
                <div class="carousel-slide-content">
                    <div>
                        <div class="slide-meta">
                            <span class="slide-year">${car.year}</span>
                            <span class="slide-engine">${car.engine} • ${car.hp} HP</span>
                        </div>
                        <h3 class="slide-title">${car.name}</h3>
                        <p class="slide-price">${formatPrice(car.price)}</p>
                    </div>
                    <button class="btn btn-primary carousel-explore-btn" data-id="${car.id}">
                        <span>Explore</span>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                </div>
            `;
            attachImageFallback(slide.querySelector('img'));
            carouselTrack.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = `dot-indicator ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            carouselPagination.appendChild(dot);
        });

        carouselTrack.querySelectorAll('.carousel-explore-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openProductModal(Number(btn.dataset.id));
            });
        });

        startCarouselAutoplay();
    }

    function goToSlide(index) {
        if (index < 0) index = featuredCars.length - 1;
        if (index >= featuredCars.length) index = 0;
        state.carouselIndex = index;
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.dot-indicator').forEach((d, idx) => {
            d.classList.toggle('active', idx === index);
        });
    }

    function startCarouselAutoplay() {
        stopCarouselAutoplay();
        carouselTimer = setInterval(() => {
            goToSlide(state.carouselIndex + 1);
        }, 4800);
    }

    function stopCarouselAutoplay() {
        if (carouselTimer) clearInterval(carouselTimer);
    }

    document.getElementById('prevSlideBtn').addEventListener('click', () => {
        goToSlide(state.carouselIndex - 1);
        startCarouselAutoplay();
    });

    document.getElementById('nextSlideBtn').addEventListener('click', () => {
        goToSlide(state.carouselIndex + 1);
        startCarouselAutoplay();
    });

    // Touch Swipe & Mouse Drag Support
    let startX = 0;
    let isDragging = false;

    carouselWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        stopCarouselAutoplay();
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 50) {
            goToSlide(diff < 0 ? state.carouselIndex + 1 : state.carouselIndex - 1);
        }
        startCarouselAutoplay();
    });

    carouselWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopCarouselAutoplay();
    }, { passive: true });

    carouselWrapper.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 45) {
            goToSlide(diff < 0 ? state.carouselIndex + 1 : state.carouselIndex - 1);
        }
        startCarouselAutoplay();
    });

    // 7. RENDER CAR CARDS & CATALOG FILTERING
    const carsGrid = document.getElementById('carsGrid');
    const resultsCounter = document.getElementById('resultsCounter');
    const noResultsBox = document.getElementById('noResultsBox');
    const activeFiltersBar = document.getElementById('activeFiltersBar');

    function getColorCss(colorName) {
        const map = {
            Red: '#DC0000',
            Black: '#141414',
            White: '#F8F9FA',
            Yellow: '#FFD100',
            Blue: '#0047AB',
            Silver: '#C0C0C0',
            Green: '#0B5D1E'
        };
        return map[colorName] || '#DC0000';
    }

    function createCarCardElement(car) {
        const isFav = state.favorites.includes(car.id);
        const card = document.createElement('article');
        card.className = 'car-card';

        const colorDotsHtml = car.colors.map(c =>
            `<span class="mini-color-dot" title="${c}" style="background:${getColorCss(c)}"></span>`
        ).join('');

        card.innerHTML = `
            <div class="car-img-box" data-id="${car.id}">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
                <span class="car-year-tag">${car.year}</span>
                <button class="fav-card-btn ${isFav ? 'active' : ''}" data-fav-id="${car.id}" title="Sevimlilarga qo'shish" aria-label="Favorite">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
            <div class="car-body">
                <span class="car-engine-label">${car.engine}</span>
                <h3 class="car-title" data-id="${car.id}">${car.name}</h3>
                <p class="car-short-desc">${car.desc}</p>
                <div class="car-specs-mini">
                    <div class="spec-mini-item">
                        <span>Quvvat</span>
                        <strong>${car.hp} HP</strong>
                    </div>
                    <div class="spec-mini-item">
                        <span>Max Tezlik</span>
                        <strong>${car.speed}</strong>
                    </div>
                    <div class="spec-mini-item">
                        <span>Yil</span>
                        <strong>${car.year}</strong>
                    </div>
                </div>
                <div class="car-colors-preview">
                    <span class="label">Ranglar:</span>
                    ${colorDotsHtml}
                </div>
                <div class="car-footer">
                    <span class="car-price">${formatPrice(car.price)}</span>
                    <div class="car-card-actions">
                        <button class="btn-card-detail" data-detail-id="${car.id}">Batafsil</button>
                        <button class="btn-card-buy" data-buy-id="${car.id}">Sotib olish</button>
                    </div>
                </div>
            </div>
        `;

        attachImageFallback(card.querySelector('img'));

        // Card events
        card.querySelector('.car-img-box').addEventListener('click', (e) => {
            if (!e.target.closest('.fav-card-btn')) {
                openProductModal(car.id);
            }
        });
        card.querySelector('.car-title').addEventListener('click', () => openProductModal(car.id));
        card.querySelector('.btn-card-detail').addEventListener('click', () => openProductModal(car.id));
        card.querySelector('.btn-card-buy').addEventListener('click', () => {
            addToCart(car.id, car.colors[0]);
            openCartDrawer();
        });
        card.querySelector('.fav-card-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(car.id);
        });

        return card;
    }

    function getFilteredCars() {
        const { search, category, engine, year, hp, priceRange, color, sort } = state.filters;
        const q = search.trim().toLowerCase();

        let list = CARS_DATA.filter(car => {
            if (q) {
                const matchText = `${car.name} ${car.engine} ${car.year} ${car.hp} ${car.colors.join(' ')} ${car.price}`.toLowerCase();
                if (!matchText.includes(q)) return false;
            }
            if (category !== 'all') {
                if (category === 'Classic') {
                    if (car.category !== 'Classic') return false;
                } else if (!car.engine.includes(category)) {
                    return false;
                }
            }
            if (engine !== 'all' && !car.engine.includes(engine)) return false;

            if (year !== 'all') {
                const [minY, maxY] = year.split('-').map(Number);
                if (car.year < minY || car.year > maxY) return false;
            }

            if (hp !== 'all') {
                if (hp === '800+' && car.hp < 800) return false;
                if (hp === '600-799' && (car.hp < 600 || car.hp > 799)) return false;
                if (hp === '400-599' && (car.hp < 400 || car.hp > 599)) return false;
                if (hp === '0-399' && car.hp >= 400) return false;
            }

            if (priceRange !== 'all') {
                if (priceRange === '0-300000' && car.price > 300000) return false;
                if (priceRange === '300000-600000' && (car.price < 300000 || car.price > 600000)) return false;
                if (priceRange === '600000-1500000' && (car.price < 600000 || car.price > 1500000)) return false;
                if (priceRange === '1500000+' && car.price <= 1500000) return false;
            }

            if (color !== 'all' && !car.colors.includes(color)) return false;

            return true;
        });

        if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
        if (sort === 'year-desc') list.sort((a, b) => b.year - a.year);
        if (sort === 'hp-desc') list.sort((a, b) => b.hp - a.hp);

        return list;
    }

    function renderActiveFilterBadges() {
        const badges = [];
        const f = state.filters;
        if (f.search) badges.push({ key: 'search', label: `Qidiruv: "${f.search}"` });
        if (f.category !== 'all') badges.push({ key: 'category', label: `Toifa: ${f.category}` });
        if (f.engine !== 'all') badges.push({ key: 'engine', label: `Dvigatel: ${f.engine}` });
        if (f.year !== 'all') badges.push({ key: 'year', label: `Yil: ${f.year}` });
        if (f.hp !== 'all') badges.push({ key: 'hp', label: `Quvvat: ${f.hp} HP` });
        if (f.priceRange !== 'all') badges.push({ key: 'priceRange', label: `Narx: ${f.priceRange}` });
        if (f.color !== 'all') badges.push({ key: 'color', label: `Rang: ${f.color}` });

        if (badges.length === 0) {
            activeFiltersBar.classList.add('hidden');
            activeFiltersBar.innerHTML = '';
            return;
        }

        activeFiltersBar.classList.remove('hidden');
        activeFiltersBar.innerHTML = badges.map(b => `
            <span class="filter-badge">
                ${b.label}
                <button type="button" data-clear-key="${b.key}" aria-label="Remove filter">×</button>
            </span>
        `).join('');

        activeFiltersBar.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.dataset.clearKey;
                state.filters[key] = key === 'search' ? '' : 'all';
                syncFilterInputs();
                renderCatalog();
            });
        });
    }

    function syncFilterInputs() {
        document.getElementById('searchInput').value = state.filters.search;
        document.getElementById('clearSearchInput').classList.toggle('hidden', !state.filters.search);
        document.getElementById('engineFilter').value = state.filters.engine;
        document.getElementById('yearFilter').value = state.filters.year;
        document.getElementById('hpFilter').value = state.filters.hp;
        document.getElementById('priceRangeFilter').value = state.filters.priceRange;
        document.getElementById('sortFilter').value = state.filters.sort;

        document.querySelectorAll('.color-chip').forEach(c => {
            c.classList.toggle('active', c.dataset.color === state.filters.color);
        });
        document.querySelectorAll('.category-card').forEach(c => {
            c.classList.toggle('active', c.dataset.category === state.filters.category);
        });
    }

    function renderCatalog() {
        const filtered = getFilteredCars();
        carsGrid.innerHTML = '';
        resultsCounter.textContent = `${filtered.length} ta avtomobil ko'rsatilmoqda`;
        renderActiveFilterBadges();

        if (filtered.length === 0) {
            noResultsBox.classList.remove('hidden');
        } else {
            noResultsBox.classList.add('hidden');
            filtered.forEach(car => {
                carsGrid.appendChild(createCarCardElement(car));
            });
        }
    }

    function resetAllFilters() {
        state.filters = {
            search: '',
            category: 'all',
            engine: 'all',
            year: 'all',
            hp: 'all',
            priceRange: 'all',
            color: 'all',
            sort: 'default'
        };
        syncFilterInputs();
        renderCatalog();
    }

    // Search & Filter Listeners
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const clearSearchInput = document.getElementById('clearSearchInput');

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        state.filters.search = val;
        clearSearchInput.classList.toggle('hidden', !val);
        renderCatalog();

        // Live suggestions
        const trimmed = val.trim().toLowerCase();
        if (trimmed.length >= 2) {
            const matches = CARS_DATA.filter(c =>
                c.name.toLowerCase().includes(trimmed) ||
                c.engine.toLowerCase().includes(trimmed) ||
                String(c.year).includes(trimmed)
            ).slice(0, 6);

            if (matches.length > 0) {
                searchSuggestions.classList.remove('hidden');
                searchSuggestions.innerHTML = matches.map(m => `
                    <div class="suggestion-item" data-name="${m.name}">
                        <span><strong>${m.name}</strong> (${m.year} • ${m.engine})</span>
                        <span style="color:var(--gold);font-weight:700">${formatPrice(m.price)}</span>
                    </div>
                `).join('');
                searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        state.filters.search = item.dataset.name;
                        searchInput.value = item.dataset.name;
                        searchSuggestions.classList.add('hidden');
                        renderCatalog();
                    });
                });
            } else {
                searchSuggestions.classList.add('hidden');
            }
        } else {
            searchSuggestions.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box-wrapper')) {
            searchSuggestions.classList.add('hidden');
        }
    });

    clearSearchInput.addEventListener('click', () => {
        state.filters.search = '';
        searchInput.value = '';
        clearSearchInput.classList.add('hidden');
        searchSuggestions.classList.add('hidden');
        renderCatalog();
    });

    document.getElementById('engineFilter').addEventListener('change', (e) => {
        state.filters.engine = e.target.value;
        renderCatalog();
    });
    document.getElementById('yearFilter').addEventListener('change', (e) => {
        state.filters.year = e.target.value;
        renderCatalog();
    });
    document.getElementById('hpFilter').addEventListener('change', (e) => {
        state.filters.hp = e.target.value;
        renderCatalog();
    });
    document.getElementById('priceRangeFilter').addEventListener('change', (e) => {
        state.filters.priceRange = e.target.value;
        renderCatalog();
    });
    document.getElementById('sortFilter').addEventListener('change', (e) => {
        state.filters.sort = e.target.value;
        renderCatalog();
    });

    document.querySelectorAll('.color-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            state.filters.color = chip.dataset.color;
            syncFilterInputs();
            renderCatalog();
        });
    });

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            state.filters.category = card.dataset.category;
            syncFilterInputs();
            renderCatalog();
            document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('clearAllFiltersBtn').addEventListener('click', resetAllFilters);
    document.getElementById('noResultsResetBtn').addEventListener('click', resetAllFilters);

    // 8. FAVORITES SYSTEM
    const favCountBadge = document.getElementById('favCountBadge');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavoritesBox = document.getElementById('emptyFavoritesBox');
    const favSectionCount = document.getElementById('favSectionCount');

    function toggleFavorite(carId) {
        const idx = state.favorites.indexOf(carId);
        const car = CARS_DATA.find(c => c.id === carId);
        if (idx === -1) {
            state.favorites.push(carId);
            showToast(`${car.name} sevimlilarga qo'shildi`, 'success');
        } else {
            state.favorites.splice(idx, 1);
            showToast(`${car.name} sevimlilardan olib tashlandi`);
        }
        saveState();
        updateFavoritesUI();
        renderCatalog();
    }

    function updateFavoritesUI() {
        favCountBadge.textContent = state.favorites.length;
        favSectionCount.textContent = `${state.favorites.length} ta saqlangan`;
        favoritesGrid.innerHTML = '';

        if (state.favorites.length === 0) {
            emptyFavoritesBox.classList.remove('hidden');
        } else {
            emptyFavoritesBox.classList.add('hidden');
            state.favorites.forEach(id => {
                const car = CARS_DATA.find(c => c.id === id);
                if (car) favoritesGrid.appendChild(createCarCardElement(car));
            });
        }
    }

    // 9. PRODUCT DETAILS MODAL
    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');

    function openProductModal(carId) {
        const car = CARS_DATA.find(c => c.id === carId);
        if (!car) return;

        let selectedColor = car.colors[0];
        const isFav = state.favorites.includes(car.id);

        productModalContent.innerHTML = `
            <div class="pd-grid">
                <div>
                    <img src="${car.gallery[0]}" alt="${car.name}" class="pd-main-img" id="pdMainImg">
                    <div class="pd-thumbs">
                        ${car.gallery.map((imgUrl, i) => `
                            <img src="${imgUrl}" alt="${car.name} view ${i + 1}" class="pd-thumb ${i === 0 ? 'active' : ''}" data-src="${imgUrl}">
                        `).join('')}
                    </div>
                </div>
                <div>
                    <span class="section-subtitle">${car.engine} • ${car.year}</span>
                    <h2 class="pd-title">${car.name}</h2>
                    <div class="pd-price">${formatPrice(car.price)}</div>
                    <p style="color:var(--text-secondary);font-size:0.92rem;">${car.desc}</p>

                    <div class="pd-specs-grid">
                        <div class="pd-spec-box"><span>Dvigatel turi</span><strong>${car.engine}</strong></div>
                        <div class="pd-spec-box"><span>Ot kuchi</span><strong>${car.hp} HP</strong></div>
                        <div class="pd-spec-box"><span>Maksimal tezlik</span><strong>${car.speed}</strong></div>
                        <div class="pd-spec-box"><span>Ishlab chiqarilgan yili</span><strong>${car.year}</strong></div>
                    </div>

                    <div class="pd-color-selector">
                        <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);">Kuzov rangini tanlang:</label>
                        <div class="pd-color-options" id="pdColorOptions">
                            ${car.colors.map((col, idx) => `
                                <button type="button" class="pd-color-btn ${idx === 0 ? 'selected' : ''}" data-color="${col}">
                                    <span class="dot" style="background:${getColorCss(col)}"></span>
                                    <span>${col}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="pd-actions">
                        <button type="button" class="btn btn-primary" id="pdAddToCartBtn">
                            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                        </button>
                        <button type="button" class="btn btn-gold" id="pdBuyNowBtn">
                            <i class="fa-solid fa-bolt"></i> Buy Now
                        </button>
                        <button type="button" class="btn btn-card-detail" id="pdFavBtn">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart" style="color:var(--ferrari-red)"></i>
                            <span>${isFav ? 'Sevimlilarda' : 'Add to Favorites'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const mainImg = document.getElementById('pdMainImg');
        attachImageFallback(mainImg);
        productModalContent.querySelectorAll('.pd-thumb').forEach(thumb => {
            attachImageFallback(thumb);
            thumb.addEventListener('click', () => {
                mainImg.src = thumb.dataset.src;
                productModalContent.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        productModalContent.querySelectorAll('.pd-color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedColor = btn.dataset.color;
                productModalContent.querySelectorAll('.pd-color-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });

        document.getElementById('pdAddToCartBtn').addEventListener('click', () => {
            addToCart(car.id, selectedColor);
        });

        document.getElementById('pdBuyNowBtn').addEventListener('click', () => {
            productModal.classList.add('hidden');
            openCheckoutModal([{ carId: car.id, color: selectedColor, qty: 1 }], true);
        });

        document.getElementById('pdFavBtn').addEventListener('click', () => {
            toggleFavorite(car.id);
            const nowFav = state.favorites.includes(car.id);
            document.getElementById('pdFavBtn').innerHTML = `
                <i class="${nowFav ? 'fa-solid' : 'fa-regular'} fa-heart" style="color:var(--ferrari-red)"></i>
                <span>${nowFav ? 'Sevimlilarda' : 'Add to Favorites'}</span>
            `;
        });

        productModal.classList.remove('hidden');
    }

    document.getElementById('closeProductModal').addEventListener('click', () => productModal.classList.add('hidden'));
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.classList.add('hidden');
    });

    // 10. SHOPPING CART SYSTEM
    const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const drawerCartCount = document.getElementById('drawerCartCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartFooter = document.getElementById('cartFooter');

    function addToCart(carId, color = 'Red') {
        const car = CARS_DATA.find(c => c.id === carId);
        if (!car) return;

        const existing = state.cart.find(item => item.carId === carId && item.color === color);
        if (existing) {
            existing.qty += 1;
        } else {
            state.cart.push({ carId, color, qty: 1 });
        }
        saveState();
        updateCartUI();
        showToast(`${car.name} (${color}) savatchaga qo'shildi`, 'success');
    }

    function updateCartQty(index, delta) {
        if (!state.cart[index]) return;
        state.cart[index].qty += delta;
        if (state.cart[index].qty <= 0) {
            state.cart.splice(index, 1);
        }
        saveState();
        updateCartUI();
    }

    function removeFromCart(index) {
        state.cart.splice(index, 1);
        saveState();
        updateCartUI();
        showToast('Avtomobil savatchadan olib tashlandi');
    }

    function calculateCartTotal(items) {
        return items.reduce((sum, item) => {
            const car = CARS_DATA.find(c => c.id === item.carId);
            return sum + (car ? car.price * item.qty : 0);
        }, 0);
    }

    function updateCartUI() {
        const totalQty = state.cart.reduce((acc, i) => acc + i.qty, 0);
        cartCountBadge.textContent = totalQty;
        drawerCartCount.textContent = totalQty;

        if (state.cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h3>Savatchangiz bo'sh</h3>
                    <p>Katalogdan o'zingizga yoqqan Ferrari modelini tanlang.</p>
                </div>
            `;
            cartFooter.classList.add('hidden');
            return;
        }

        cartFooter.classList.remove('hidden');
        cartItemsContainer.innerHTML = '';

        state.cart.forEach((item, idx) => {
            const car = CARS_DATA.find(c => c.id === item.carId);
            if (!car) return;

            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <div class="cart-item-info">
                    <h4>${car.name}</h4>
                    <div class="cart-item-color">Rang: <strong>${item.color}</strong></div>
                    <div class="cart-item-price">${formatPrice(car.price * item.qty)}</div>
                    <div class="cart-qty-controls">
                        <button type="button" class="qty-btn dec-btn" aria-label="Kamaytirish">-</button>
                        <span>${item.qty}</span>
                        <button type="button" class="qty-btn inc-btn" aria-label="Ko'paytirish">+</button>
                        <button type="button" class="remove-cart-btn" title="O'chirish"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `;
            attachImageFallback(row.querySelector('img'));
            row.querySelector('.dec-btn').addEventListener('click', () => updateCartQty(idx, -1));
            row.querySelector('.inc-btn').addEventListener('click', () => updateCartQty(idx, 1));
            row.querySelector('.remove-cart-btn').addEventListener('click', () => removeFromCart(idx));
            cartItemsContainer.appendChild(row);
        });

        cartTotalPrice.textContent = formatPrice(calculateCartTotal(state.cart));
    }

    function openCartDrawer() {
        updateCartUI();
        cartDrawerBackdrop.classList.remove('hidden');
    }

    document.getElementById('navCartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('closeCartDrawer').addEventListener('click', () => cartDrawerBackdrop.classList.add('hidden'));
    cartDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === cartDrawerBackdrop) cartDrawerBackdrop.classList.add('hidden');
    });

    // 11. BUY NOW & CHECKOUT SYSTEM
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutForm = document.getElementById('checkoutForm');
    let activeCheckoutItems = [];
    let isDirectBuyNow = false;

    function openCheckoutModal(items, isDirect = false) {
        activeCheckoutItems = items;
        isDirectBuyNow = isDirect;

        const modelNames = items.map(i => {
            const c = CARS_DATA.find(car => car.id === i.carId);
            return c ? `${c.name} (${i.color}) x${i.qty}` : '';
        }).filter(Boolean).join(', ');

        document.getElementById('chkCarModels').textContent = modelNames;
        document.getElementById('chkTotalPrice').textContent = formatPrice(calculateCartTotal(items));

        if (state.currentUser) {
            document.getElementById('chkFirstName').value = state.currentUser.firstName || '';
            document.getElementById('chkLastName').value = state.currentUser.lastName || '';
            document.getElementById('chkPhone').value = state.currentUser.phone || '';
            document.getElementById('chkEmail').value = state.currentUser.email || '';
        }

        cartDrawerBackdrop.classList.add('hidden');
        checkoutModal.classList.remove('hidden');
    }

    document.getElementById('proceedCheckoutBtn').addEventListener('click', () => {
        if (state.cart.length === 0) return;
        openCheckoutModal([...state.cart], false);
    });

    document.getElementById('closeCheckoutModal').addEventListener('click', () => checkoutModal.classList.add('hidden'));
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) checkoutModal.classList.add('hidden');
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('chkFirstName').value.trim();
        const lastName = document.getElementById('chkLastName').value.trim();
        const phone = document.getElementById('chkPhone').value.trim();
        const email = document.getElementById('chkEmail').value.trim();
        const address = document.getElementById('chkAddress').value.trim();

        if (!firstName || !lastName || phone.length < 7 || !email.includes('@') || !address) {
            showToast("Iltimos, barcha maydonlarni to'g'ri to'ldiring!");
            return;
        }

        const newOrder = {
            orderId: 'FR-' + Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleDateString('uz-UZ'),
            customer: `${firstName} ${lastName}`,
            email,
            phone,
            address,
            items: activeCheckoutItems.map(i => {
                const c = CARS_DATA.find(car => car.id === i.carId);
                return { name: c.name, color: i.color, qty: i.qty, price: c.price * i.qty };
            }),
            total: calculateCartTotal(activeCheckoutItems),
            status: 'Rasmiylashtirildi (Demo)'
        };

        state.orders.unshift(newOrder);
        if (!isDirectBuyNow) {
            state.cart = [];
        }
        saveState();
        updateCartUI();
        checkoutForm.reset();
        checkoutModal.classList.add('hidden');
        showToast(`Tabriklaymiz! Buyurtma #${newOrder.orderId} muvaffaqiyatli rasmiylashtirildi!`, 'success');
    });

    // 12. PROFILE & AUTHENTICATION SYSTEM
    const profileModal = document.getElementById('profileModal');
    const profileModalContent = document.getElementById('profileModalContent');
    const navUserName = document.getElementById('navUserName');

    function updateNavbarUser() {
        navUserName.textContent = state.currentUser ? state.currentUser.firstName : 'Kirish';
    }

    function openProfileModal(activeTab = 'overview') {
        if (!state.currentUser) {
            renderAuthView('login');
        } else {
            renderDashboardView(activeTab);
        }
        profileModal.classList.remove('hidden');
    }

    function renderAuthView(mode = 'login') {
        profileModalContent.innerHTML = `
            <span class="section-subtitle">FERRARI CLUB ACCOUNT</span>
            <h2 style="font-family:var(--font-display);margin-bottom:8px;">Shaxsiy Kabinet</h2>
            <p class="demo-notice" style="margin-bottom:18px;">
                Demo eslatma: Ma'lumotlar brauzeringizning LocalStorage xotirasida saqlanadi. Haqiqiy xavfsiz avtorizatsiya uchun server (backend) talab etiladi.
            </p>
            <div class="auth-tabs">
                <button type="button" class="auth-tab-btn ${mode === 'login' ? 'active' : ''}" id="tabLoginBtn">Kirish (Login)</button>
                <button type="button" class="auth-tab-btn ${mode === 'register' ? 'active' : ''}" id="tabRegisterBtn">Ro'yxatdan o'tish (Register)</button>
            </div>

            ${mode === 'login' ? `
                <form id="loginForm" class="profile-form" novalidate>
                    <div class="input-field">
                        <label>Email *</label>
                        <input type="email" id="loginEmail" required placeholder="email@example.com">
                    </div>
                    <div class="input-field">
                        <label>Parol *</label>
                        <input type="password" id="loginPassword" required placeholder="Parolingizni kiriting">
                    </div>
                    <button type="submit" class="btn btn-primary full-width">Tizimga Kirish</button>
                </form>
            ` : `
                <form id="registerForm" class="profile-form" novalidate>
                    <div class="form-row">
                        <div class="input-field">
                            <label>Ism *</label>
                            <input type="text" id="regFirstName" required placeholder="Ismingiz">
                        </div>
                        <div class="input-field">
                            <label>Familiya *</label>
                            <input type="text" id="regLastName" required placeholder="Familiyangiz">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-field">
                            <label>Email *</label>
                            <input type="email" id="regEmail" required placeholder="email@example.com">
                        </div>
                        <div class="input-field">
                            <label>Telefon raqam *</label>
                            <input type="tel" id="regPhone" required placeholder="+998 90 123 45 67">
                        </div>
                    </div>
                    <div class="input-field">
                        <label>Parol (kamida 6 ta belgi) *</label>
                        <input type="password" id="regPassword" required placeholder="Yangi parol yarating">
                    </div>
                    <button type="submit" class="btn btn-primary full-width">Ro'yxatdan O'tish</button>
                </form>
            `}
        `;

        document.getElementById('tabLoginBtn').addEventListener('click', () => renderAuthView('login'));
        document.getElementById('tabRegisterBtn').addEventListener('click', () => renderAuthView('register'));

        if (mode === 'login') {
            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value.trim();

                const user = state.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
                if (!user) {
                    showToast("Email yoki parol noto'g'ri! Avval ro'yxatdan o'ting.");
                    return;
                }
                state.currentUser = user;
                saveState();
                updateNavbarUser();
                showToast(`Xush kelibsiz, ${user.firstName}!`, 'success');
                renderDashboardView('overview');
            });
        } else {
            document.getElementById('registerForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const firstName = document.getElementById('regFirstName').value.trim();
                const lastName = document.getElementById('regLastName').value.trim();
                const email = document.getElementById('regEmail').value.trim();
                const phone = document.getElementById('regPhone').value.trim();
                const password = document.getElementById('regPassword').value.trim();

                if (!firstName || !lastName || !email.includes('@') || phone.length < 7 || password.length < 6) {
                    showToast("Barcha maydonlarni to'g'ri to'ldiring (parol kamida 6 belgi)!");
                    return;
                }

                if (state.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
                    showToast("Bu email allaqachon ro'yxatdan o'tgan!");
                    return;
                }

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName + '+' + lastName)}&background=DC0000&color=fff&size=128`
                };
                state.users.push(newUser);
                state.currentUser = newUser;
                saveState();
                updateNavbarUser();
                showToast("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!", 'success');
                renderDashboardView('overview');
            });
        }
    }

    function renderDashboardView(tab = 'overview') {
        const u = state.currentUser;
        const userFavCars = CARS_DATA.filter(c => state.favorites.includes(c.id));

        let tabContentHtml = '';

        if (tab === 'overview') {
            tabContentHtml = `
                <form id="editProfileForm" class="profile-form">
                    <h3 style="margin-bottom:14px;">Profil Ma'lumotlarini Tahrirlash</h3>
                    <div class="form-row">
                        <div class="input-field">
                            <label>Ism</label>
                            <input type="text" id="editFirstName" value="${u.firstName}" required>
                        </div>
                        <div class="input-field">
                            <label>Familiya</label>
                            <input type="text" id="editLastName" value="${u.lastName}" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-field">
                            <label>Email</label>
                            <input type="email" id="editEmail" value="${u.email}" required>
                        </div>
                        <div class="input-field">
                            <label>Telefon raqam</label>
                            <input type="tel" id="editPhone" value="${u.phone}" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">O'zgarishlarni Saqlash</button>
                </form>
            `;
        } else if (tab === 'orders') {
            tabContentHtml = state.orders.length === 0
                ? `<p style="color:var(--text-secondary);">Hozircha buyurtmalar mavjud emas.</p>`
                : state.orders.map(o => `
                    <div class="order-card">
                        <div class="order-card-top">
                            <span>Buyurtma #${o.orderId}</span>
                            <span>${o.date} • ${o.status}</span>
                        </div>
                        <div style="font-size:0.88rem;margin-bottom:4px;">
                            ${o.items.map(i => `${i.name} (${i.color}) x${i.qty}`).join(', ')}
                        </div>
                        <strong style="color:var(--gold);">${formatPrice(o.total)}</strong>
                    </div>
                `).join('');
        } else if (tab === 'favorites') {
            tabContentHtml = userFavCars.length === 0
                ? `<p style="color:var(--text-secondary);">Sevimlilar ro'yxati bo'sh.</p>`
                : userFavCars.map(c => `
                    <div class="order-card" style="display:flex;justify-content:space-between;align-items:center;">
                        <div>
                            <strong>${c.name}</strong> (${c.year})
                            <div style="color:var(--gold);font-size:0.85rem;">${formatPrice(c.price)}</div>
                        </div>
                        <button type="button" class="btn-card-buy p-open-car" data-id="${c.id}">Ko'rish</button>
                    </div>
                `).join('');
        } else if (tab === 'cart') {
            tabContentHtml = state.cart.length === 0
                ? `<p style="color:var(--text-secondary);">Savatchangiz bo'sh.</p>`
                : state.cart.map(item => {
                    const c = CARS_DATA.find(car => car.id === item.carId);
                    return `
                        <div class="order-card" style="display:flex;justify-content:space-between;align-items:center;">
                            <div>
                                <strong>${c.name}</strong> — Rang: ${item.color} (x${item.qty})
                                <div style="color:var(--gold);font-size:0.85rem;">${formatPrice(c.price * item.qty)}</div>
                            </div>
                        </div>
                    `;
                }).join('') + `<button type="button" class="btn btn-primary full-width" id="pGoCartBtn">Savatchani Ochish</button>`;
        }

        profileModalContent.innerHTML = `
            <div class="profile-header-card">
                <img src="${u.avatar}" alt="${u.firstName}" class="profile-avatar">
                <div>
                    <h3 style="font-family:var(--font-display);">${u.firstName} ${u.lastName}</h3>
                    <p style="font-size:0.84rem;color:var(--text-secondary);">${u.email} • ${u.phone}</p>
                </div>
            </div>

            <div class="profile-nav-tabs">
                <button type="button" class="p-tab-btn ${tab === 'overview' ? 'active' : ''}" data-ptab="overview">Edit Profile</button>
                <button type="button" class="p-tab-btn ${tab === 'orders' ? 'active' : ''}" data-ptab="orders">My Orders (${state.orders.length})</button>
                <button type="button" class="p-tab-btn ${tab === 'favorites' ? 'active' : ''}" data-ptab="favorites">My Favorites (${userFavCars.length})</button>
                <button type="button" class="p-tab-btn ${tab === 'cart' ? 'active' : ''}" data-ptab="cart">My Cart (${state.cart.length})</button>
                <button type="button" class="p-tab-btn" id="logoutBtn" style="margin-left:auto;color:var(--ferrari-red);">Logout</button>
            </div>

            <div>${tabContentHtml}</div>
        `;

        profileModalContent.querySelectorAll('[data-ptab]').forEach(btn => {
            btn.addEventListener('click', () => renderDashboardView(btn.dataset.ptab));
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            state.currentUser = null;
            saveState();
            updateNavbarUser();
            showToast('Tizimdan chiqdingiz');
            renderAuthView('login');
        });

        const editForm = document.getElementById('editProfileForm');
        if (editForm) {
            editForm.addEventListener('submit', (e) => {
                e.preventDefault();
                u.firstName = document.getElementById('editFirstName').value.trim();
                u.lastName = document.getElementById('editLastName').value.trim();
                u.email = document.getElementById('editEmail').value.trim();
                u.phone = document.getElementById('editPhone').value.trim();
                u.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(u.firstName + '+' + u.lastName)}&background=DC0000&color=fff&size=128`;

                const userIdx = state.users.findIndex(usr => usr.email === u.email);
                if (userIdx !== -1) state.users[userIdx] = u;

                saveState();
                updateNavbarUser();
                showToast("Profil ma'lumotlari yangilandi!", 'success');
                renderDashboardView('overview');
            });
        }

        profileModalContent.querySelectorAll('.p-open-car').forEach(btn => {
            btn.addEventListener('click', () => {
                profileModal.classList.add('hidden');
                openProductModal(Number(btn.dataset.id));
            });
        });

        const pGoCartBtn = document.getElementById('pGoCartBtn');
        if (pGoCartBtn) {
            pGoCartBtn.addEventListener('click', () => {
                profileModal.classList.add('hidden');
                openCartDrawer();
            });
        }
    }

    document.getElementById('navProfileBtn').addEventListener('click', () => openProfileModal('overview'));
    document.getElementById('closeProfileModal').addEventListener('click', () => profileModal.classList.add('hidden'));
    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) profileModal.classList.add('hidden');
    });

    // 13. CONTACT FORM VALIDATION
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const msg = document.getElementById('contactMessage').value.trim();

        if (!name || phone.length < 7 || !email.includes('@') || !msg) {
            showToast("Iltimos, aloqa formasidagi barcha maydonlarni to'g'ri to'ldiring!");
            return;
        }
        e.target.reset();
        showToast("Xabaringiz qabul qilindi! Ferrari menejeri tez orada bog'lanadi.", 'success');
    });

    // 14. INITIALIZE ALL MODULES
    attachImageFallback(document.getElementById('heroImg'));
    initCarousel();
    renderCatalog();
    updateFavoritesUI();
    updateCartUI();
    updateNavbarUser();
});