export const siteConfig = {

  name: 'Wysteria Works',

  legalName: 'Wysteria Works Fire Kitchen',

  tagline: 'Ateşle pişer, sabırla servis edilir.',

  address: 'Atatürk Bulvarı No. 28, Adapazarı, Sakarya',

  shortAddress: 'Atatürk Bulvarı, Adapazarı',

  phone: '0 503 003 03',

  phoneRaw: '+9050300303',

  email: 'rezervasyon@wysteriaworks.com',

  instagram: '@wysteriaworks',

  instagramUrl: 'https://www.instagram.com/wysteriaworks',

  mapsUrl:

    'https://www.google.com/maps/search/?api=1&query=Atat%C3%BCrk+Bulvar%C4%B1+No+28+Adapazar%C4%B1+Sakarya',

  directionsUrl:

    'https://www.google.com/maps/dir/?api=1&destination=Atat%C3%BCrk+Bulvar%C4%B1+No+28+Adapazar%C4%B1+Sakarya',

  menuUrl: '/menu',

  qrUrl: '/menu',

  coordinates: '40.7569° K — 30.3956° D',

  est: '2019',

  hours: {

    weekday: '12:00 – 23:00',

    saturday: '12:00 – 00:00',

    sunday: '12:00 – 22:00',

    monday: null as string | null,

  },

  hoursRows: [

    { key: 'weekday', time: '12:00 – 23:00' },

    { key: 'saturday', time: '12:00 – 00:00' },

    { key: 'sunday', time: '12:00 – 22:00' },

  ],

};

export type Product = {

  id: string;

  name: string;

  description: string;

  category: string;

  price: number;

  image: string;

  alt: string;

  featured?: boolean;

};

export const categories = [

  'Başlangıçlar',

  'Közden',

  'Steakler',

  'Yan Lezzetler',

  'Tatlılar',

  'İçecekler',

];

export const products: Product[] = [

  {

    id: 'p01',

    name: 'Dana Carpaccio',

    description: 'İnce dilimlenmiş antrikot, roka, kapari ve trüf yağı.',

    category: 'Başlangıçlar',

    price: 285,

    image: '/assets/site/img-07.jpg',

    alt: 'İnce dilimlenmiş dana carpaccio tabağı',

  },

  {

    id: 'p02',

    name: 'Tartar',

    description: 'El doğranmış bonfile, kapari, dijon ve tramezzini.',

    category: 'Başlangıçlar',

    price: 340,

    image: '/assets/site/img-06.jpg',

    alt: 'Taze baharatlarla hazırlanmış dana tartar',

    featured: true,

  },

  {

    id: 'p03',

    name: 'Közlenmiş Domates Çorbası',

    description: 'Odun ateşinde közlenmiş domates, fesleğen yağı.',

    category: 'Başlangıçlar',

    price: 165,

    image: '/assets/site/img-28.jpg',

    alt: 'Közlenmiş domates çorbası',

  },

  {

    id: 'p04',

    name: 'Burrata & Közlenmiş Biber',

    description: 'Taze burrata, közlenmiş kapya biber, sızma zeytinyağı.',

    category: 'Başlangıçlar',

    price: 310,

    image: '/assets/site/img-26.jpg',

    alt: 'Burrata ve közlenmiş biber tabağı',

  },

  {

    id: 'p05',

    name: 'Izgara Hellim',

    description: 'Közde hellim, balzamik incir ve ceviz.',

    category: 'Başlangıçlar',

    price: 240,

    image: '/assets/site/img-32.jpg',

    alt: 'Izgara hellim tabağı',

  },

  {

    id: 'p06',

    name: 'Közde Dana Kaburga',

    description: '12 saat ağır ateşte, ev yapımı bbq sos ve turşu.',

    category: 'Közden',

    price: 620,

    image: '/assets/site/img-10.jpg',

    alt: 'Közde ağır pişmiş dana kaburga',

    featured: true,

  },

  {

    id: 'p07',

    name: 'Köz Köfte',

    description: 'Odun ateşinde dana köfte, közlenmiş soğan ve domates.',

    category: 'Közden',

    price: 380,

    image: '/assets/site/img-11.jpg',

    alt: 'Közde köfte tabağı',

  },

  {

    id: 'p08',

    name: 'Tavuk Şaşlık',

    description: 'Közde marine tavuk, sumaklı soğan ve lavaş.',

    category: 'Közden',

    price: 365,

    image: '/assets/site/img-12.jpg',

    alt: 'Izgara tavuk şaşlık',

  },

  {

    id: 'p09',

    name: 'Közde Levrek',

    description: 'Bütün levrek, limon-kapari beurre blanc.',

    category: 'Közden',

    price: 590,

    image: '/assets/site/img-30.jpg',

    alt: 'Közde pişmiş levrek fileto',

  },

  {

    id: 'p10',

    name: 'Karışık Köz Tabağı',

    description: 'Kaburga, köfte, tavuk ve sucuk — iki kişilik.',

    category: 'Közden',

    price: 890,

    image: '/assets/site/img-13.jpg',

    alt: 'Karışık ızgara tabağı',

  },

  {

    id: 'p11',

    name: 'T-Bone',

    description: '29 gün dry-aged, közde mühürlenmiş. ~700g.',

    category: 'Steakler',

    price: 1150,

    image: '/assets/site/img-01.jpg',

    alt: 'Közde pişmiş T-bone steak',

    featured: true,

  },

  {

    id: 'p12',

    name: 'Ribeye',

    description: 'Yoğun yağ dokusu, kemiksiz. ~400g.',

    category: 'Steakler',

    price: 980,

    image: '/assets/site/img-09.jpg',

    alt: 'Izgara ribeye steak dilimi',

    featured: true,

  },

  {

    id: 'p13',

    name: 'Dallas Steak',

    description: 'Klasik kesim, közde harlı mühürleme. ~350g.',

    category: 'Steakler',

    price: 870,

    image: '/assets/site/img-03.jpg',

    alt: 'Dilimlenmiş dallas steak',

  },

  {

    id: 'p14',

    name: 'New York Strip',

    description: 'Antrikot kesimi, deniz tuzu ve isli tereyağı. ~380g.',

    category: 'Steakler',

    price: 920,

    image: '/assets/site/img-04.jpg',

    alt: 'New York strip steak tabağı',

  },

  {

    id: 'p15',

    name: 'Tomahawk',

    description: 'Kemikli ribeye, masada kesim. ~1.1kg, iki kişilik.',

    category: 'Steakler',

    price: 1950,

    image: '/assets/site/img-08.jpg',

    alt: 'Masada kesilen tomahawk steak',

    featured: true,

  },

  {

    id: 'p16',

    name: 'Bonfile',

    description: 'En yumuşak kesim, bone marrow jus. ~280g.',

    category: 'Steakler',

    price: 840,

    image: '/assets/site/img-05.jpg',

    alt: 'Közde pişmiş bonfile',

  },

  {

    id: 'p17',

    name: 'Trüf Yağlı Patates',

    description: 'El kesimi, trüf yağı ve deniz tuzu.',

    category: 'Yan Lezzetler',

    price: 140,

    image: '/assets/site/img-45.jpg',

    alt: 'Trüf yağlı patates kızartması',

  },

  {

    id: 'p18',

    name: 'Közlenmiş Mevsim Sebzeleri',

    description: 'Ateşte pişen mevsim sebzeleri, isli yoğurt.',

    category: 'Yan Lezzetler',

    price: 130,

    image: '/assets/site/img-29.jpg',

    alt: 'Közlenmiş sebze tabağı',

  },

  {

    id: 'p19',

    name: 'Roka Salatası',

    description: 'Roka, parmesan talaşı, nar ekşili sos.',

    category: 'Yan Lezzetler',

    price: 150,

    image: '/assets/site/img-27.jpg',

    alt: 'Roka salatası tabağı',

  },

  {

    id: 'p20',

    name: 'İsli Püre',

    description: 'Odun ateşi isli patates püresi, taze ot yağı.',

    category: 'Yan Lezzetler',

    price: 110,

    image: '/assets/site/img-31.jpg',

    alt: 'İsli patates püresi',

  },

  {

    id: 'p21',

    name: 'Çikolatalı Fondan',

    description: 'Akışkan merkez, vanilyalı dondurma.',

    category: 'Tatlılar',

    price: 220,

    image: '/assets/site/img-34.jpg',

    alt: 'Çikolatalı fondan',

  },

  {

    id: 'p22',

    name: 'Karamelize Crème Brûlée',

    description: 'Masada yakılan şeker kabuğu.',

    category: 'Tatlılar',

    price: 195,

    image: '/assets/site/img-33.jpg',

    alt: 'Crème brûlée tatlısı',

  },

  {

    id: 'p23',

    name: 'Fıstıklı Baklava',

    description: 'Günlük açılan yufka, Antep fıstığı.',

    category: 'Tatlılar',

    price: 210,

    image: '/assets/site/img-35.jpg',

    alt: 'Fıstıklı baklava',

  },

  {

    id: 'p24',

    name: 'San Sebastian',

    description: 'Yanık cheesecake, tuzlu karamel.',

    category: 'Tatlılar',

    price: 230,

    image: '/assets/site/img-36.jpg',

    alt: 'San Sebastian cheesecake',

  },

  {

    id: 'p25',

    name: 'Kadeh Şarap Seçkisi',

    description: 'Şefin kadeh seçkileri — kırmızı, beyaz, roze.',

    category: 'İçecekler',

    price: 320,

    image: '/assets/site/img-37.jpg',

    alt: 'Kadehte kırmızı şarap',

  },

  {

    id: 'p26',

    name: 'Köz Negroni',

    description: 'İsli mezcal notalı, isli portakal kabuğu.',

    category: 'İçecekler',

    price: 360,

    image: '/assets/site/img-39.jpg',

    alt: 'Negroni kokteyl',

  },

  {

    id: 'p27',

    name: 'Ev Yapımı Limonata',

    description: 'Taze nane ve zencefil ile.',

    category: 'İçecekler',

    price: 95,

    image: '/assets/site/img-40.jpg',

    alt: 'Ev yapımı limonata',

  },

  {

    id: 'p28',

    name: 'Türk Kahvesi',

    description: 'Közde ağır ağır pişen geleneksel fincan.',

    category: 'İçecekler',

    price: 75,

    image: '/assets/site/img-38.jpg',

    alt: 'Türk kahvesi fincanı',

  },

];

export const galleryImages = [

  { url: '/assets/site/img-17.jpg', label: 'Salon', alt: 'Loş ışıklı akşam salonu' },

  { url: '/assets/site/img-18.jpg', label: 'Salon', alt: 'Izgara ateşinin yansıdığı salon' },

  { url: '/assets/site/img-19.jpg', label: 'Bar', alt: 'Loş ışıklı bar bölümü' },

  { url: '/assets/site/img-02.jpg', label: 'Steak', alt: 'Dilimlenmiş orta pişmiş steak' },

  { url: '/assets/site/img-09.jpg', label: 'Izgara', alt: 'Köz ızgarasında tomahawk' },

  { url: '/assets/site/img-13.jpg', label: 'Közden', alt: 'Közde ağır pişmiş dana kaburga' },

];

export const siteImages = {

  heroPoster: '/assets/site/img-01.jpg',

  heroVideo: '/assets/site/hero-grill.mp4',

  searVideo: '/assets/site/steak-sear.mp4',

  signature: '/assets/site/img-09.jpg',

  craft1: '/assets/site/img-13.jpg',

  craft2: '/assets/site/img-08.jpg',

  craft3: '/assets/site/img-02.jpg',

  story1: '/assets/site/img-18.jpg',

  story2: '/assets/site/img-09.jpg',

  contact: '/assets/site/img-22.jpg',

};

export const brandLogo = '/wysteria-clear.png';

export const brandMark = '/mark.png';

export function getOpenStatus(): { open: boolean; label: string } {

  const now = new Date();

  const day = now.getDay();

  const mins = now.getHours() * 60 + now.getMinutes();

  const ranges: Record<number, [number, number] | null> = {

    0: [12 * 60, 22 * 60],

    1: null,

    2: [12 * 60, 23 * 60],

    3: [12 * 60, 23 * 60],

    4: [12 * 60, 23 * 60],

    5: [12 * 60, 23 * 60],

    6: [12 * 60, 24 * 60],

  };

  const range = ranges[day];

  if (!range) return { open: false, label: 'closed' };

  return { open: mins >= range[0] && mins < range[1], label: mins >= range[0] && mins < range[1] ? 'open' : 'closed' };

}
