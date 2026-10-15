import type { Messages } from './tr';

export const en: Messages = {

  nav: {

    home: 'Home',

    contact: 'Contact',

    reserve: 'Book a Table',

    menuCta: 'Menu',

    openMenu: 'Open menu',

    closeMenu: 'Close menu',

    homeAria: 'Wysteria Works home page',

    call: 'Call',

  },

  hero: {

    openNow: (closes: string) => `Open now · until ${closes}`,

    closedNow: (opens: string) => `Closed · opens at ${opens}`,

    eyebrow: 'Adapazarı · Fire Kitchen',

    title1: 'Cooked over fire,',

    title2: 'served',

    title3: 'with patience.',

    subtitle:

      'Dry-aged cuts on charcoal, vegetables straight from the flames, and hours of quiet care behind every plate that reaches your table.',

    ctaMenu: 'See the Menu',

    ctaReserve: 'Book a Table',

    today: 'Today',

    scroll: 'Explore',

  },

  manifesto: {

    eyebrow: 'Manifesto',

    line1: 'Good meat deserves good fire.',

    copy: "Wysteria Works is the table of people who treat meat as a craft, not a commodity. Every cut from our butcher rests for days, gets seared over oak embers, and rests again before it reaches you. Nothing here is rushed; the fire sets the pace.",

    stat1: 'established',

    stat2: 'days of aging',

    stat3: 'seats in the room',

  },

  signature: {

    eyebrow: 'Signatures',

    title1: 'The cuts we are',

    title2: 'known for',

    copy: 'Each one tested a hundred times, slow to prepare, and worth every minute it asks of you.',

    ctaAll: 'See the Full Menu',

    chefsPick: "Chef's pick",

  },

  craft: {

    eyebrow: 'The Craft',

    title1: 'Three rules',

    title2: 'of the fire',

    steps: [

      {

        n: '01',

        title: 'The Pick',

        copy: 'Every morning we go over each cut from the butcher we trust. If the marbling is not right, it does not make the menu that day.',

      },

      {

        n: '02',

        title: 'The Rest',

        copy: 'Our cuts spend 15 to 29 days in the dry-age cabinet. The meat earns its character patiently before it ever meets the fire.',

      },

      {

        n: '03',

        title: 'The Sear',

        copy: 'Oak embers, direct flame, then rest. Crust on the outside, pink at the center — finished on a hot stone at your table.',

      },

    ],

  },

  story: {

    eyebrow: 'Fire & Patience',

    title1: 'The same fire,',

    title2: 'every single',

    title3: 'evening.',

    p1: 'An open oak-charcoal grill burns at the heart of the room. Our cuts rest for days, meet the flame directly, and arrive at your table on hot stone.',

    p2: 'The sides pass through the same fire too: embered vegetables, smoked mash, bread toasted over coals. Everything that reaches the table has a story with the fire.',

    link: 'Explore the Menu',

    features: [

      '15–29 day dry-age cabinet',

      'Oak charcoal, direct flame',

      'Open kitchen, table-side finish',

    ],

  },

  marquee: {

    items: ['Oak Charcoal', 'Dry-Aged', 'Open Kitchen', 'Table-Side Finish', '15–29 Days Resting', 'Ember Bread'],

  },

  gallery: {

    eyebrow: 'The Space',

    title: 'An evening around the fire',

    labels: ['The Room', 'Grill Fire', 'The Bar', 'The Steak', 'Tomahawk', 'From the Fire'],

    viewAria: 'View photo',

    closeAria: 'Close gallery',

    prevAria: 'Previous photo',

    nextAria: 'Next photo',

    count: 'shots',

  },

  notFound: {

    eyebrow: '404',

    title1: 'This table',

    title2: 'is empty.',

    desc: 'The page you are after either never made it to the grill or was finished long ago. Let us take you somewhere warm.',

    home: 'Back Home',

    menu: 'See the Menu',

  },

  visit: {

    eyebrow: 'Visit',

    title: 'Your table is waiting',

    address: 'Address',

    hours: 'Opening Hours',

    open: 'Open now',

    closed: 'Closed',

    closedDay: 'Closed on Mondays',

    cta: 'Get Directions',

    days: ['Tuesday – Friday', 'Saturday', 'Sunday'],

  },

  cta: {

    eyebrow: 'Reservations',

    title1: 'Take your seat',

    title2: 'by the fire.',

    copy: 'Evenings fill fast — especially on weekends. Call ahead and we will keep the warmest spot for you.',

    reserve: 'Call Now',

    viewMenu: 'See the Menu',

  },

  footer: {

    tagline: 'A fire kitchen on Atatürk Bulvarı. Aged cuts, embered vegetables, and an evening that deserves the table.',

    explore: 'Explore',

    visit: 'Visit',

    kitchen: 'Kitchen',

    rights: 'Wysteria Works. All rights reserved.',

    backToTop: 'Back to Top',

    backToTopAria: 'Back to the top of the page',

    closedMonday: 'Closed on Mondays',

  },

  menu: {

    eyebrow: 'Menu',

    title: 'The fire menu',

    subtitle: 'From starters to dry-aged steaks — every plate passes through the embers.',

    crumb: 'Menu',

    note: 'Prices may shift with the season and the daily cut. All our meat comes from local producers.',

    cta: 'Book a Table',

    popular: "Chef's Choice",

    course: 'Course',

    categories: {

      'Başlangıçlar': 'Starters',

      'Közden': 'From the Fire',

      'Steakler': 'Steaks',

      'Yan Lezzetler': 'Sides',

      'Tatlılar': 'Desserts',

      'İçecekler': 'Drinks',

    } as Record<string, string>,

  },

  contact: {

    crumb: 'Contact',

    headerEyebrow: 'Contact & Reservations',

    headerTitle: 'Book your table',

    headerSubtitle: 'Reservations, private dinners or just saying hello — reach out to us.',

    infoEyebrow: 'Contact Details',

    infoTitle: 'Get in touch',

    address: 'Address',

    phone: 'Phone',

    email: 'Email',

    hours: 'Opening Hours',

    directions: 'Get directions',

    reservationNote: 'Same-day reservations are recommended for weekends.',

    nameLabel: 'Full Name',

    emailLabel: 'Email',

    subjectLabel: 'Subject',

    messageLabel: 'Message',

    namePh: 'Your name',

    emailPh: 'you@example.com',

    subjectPh: 'Reservation, event, other...',

    messagePh: 'Write your message here...',

    send: 'Send Message',

    sending: 'Sending...',

    thanks: 'Thank you!',

    thanksCopy: 'Your message has been received. We will get back to you shortly.',

    newMessage: 'Send Another Message',

    errName: 'Please enter your name.',

    errEmail: 'Please enter your email address.',

    errEmailValid: 'Please enter a valid email address.',

    errSubject: 'Please enter a subject.',

    errMessage: 'Please write your message.',

    errMessageMin: 'Your message must be at least 10 characters.',

  },

  meta: {

    home: {

      title: 'Wysteria Works — Cooked over fire, served with patience.',

      description: 'Dry-aged steaks, embered vegetables and an open kitchen in Adapazarı. Every evening, Tuesday to Sunday.',

    },

    menu: {

      title: 'Menu — Wysteria Works',

      description: 'Starters, dishes from the fire, dry-aged steaks, sides, desserts and drinks.',

    },

    contact: {

      title: 'Contact & Reservations — Wysteria Works',

      description: 'Atatürk Bulvarı, Adapazarı. Phone, email, opening hours and directions.',

    },

  },

  products: {

    p01: { name: 'Beef Carpaccio', notes: 'sirloin · rocket · capers · truffle oil' },

    p02: { name: 'Beef Tartare', notes: 'hand-cut fillet · capers · dijon' },

    p03: { name: 'Embered Tomato Soup', notes: 'wood fire · basil oil' },

    p04: { name: 'Burrata & Embered Pepper', notes: 'fresh burrata · sweet pepper · olive oil' },

    p05: { name: 'Grilled Halloumi', notes: 'over embers · balsamic fig · walnut' },

    p06: { name: 'Slow-Cooked Beef Rib', notes: '12 hours slow fire · house bbq' },

    p07: { name: 'Ember Köfte', notes: 'oak fire · charred onion · flatbread' },

    p08: { name: 'Chicken Shashlik', notes: 'marinated · sumac onion' },

    p09: { name: 'Embered Sea Bass', notes: 'whole fish · lemon-caper butter' },

    p10: { name: 'Mixed Grill for Two', notes: 'rib · köfte · chicken · sujuk' },

    p11: { name: 'T-Bone', notes: '29-day dry-aged · ~700g' },

    p12: { name: 'Ribeye', notes: 'rich marbling · ~400g' },

    p13: { name: 'Dallas Steak', notes: 'hard sear · ~350g' },

    p14: { name: 'New York Strip', notes: 'striploin · smoked butter · ~380g' },

    p15: { name: 'Tomahawk', notes: 'carved at the table · ~1.1kg · for two' },

    p16: { name: 'Fillet', notes: 'the softest cut · ~280g' },

    p17: { name: 'Truffle Fries', notes: 'hand-cut · truffle oil · sea salt' },

    p18: { name: 'Embered Seasonal Greens', notes: 'fire-kissed · smoked yogurt' },

    p19: { name: 'Rocket Salad', notes: 'parmesan · pomegranate glaze' },

    p20: { name: 'Smoked Mash', notes: 'wood-fire smoked · herb oil' },

    p21: { name: 'Chocolate Fondant', notes: 'molten center · vanilla' },

    p22: { name: 'Crème Brûlée', notes: 'torched at the table' },

    p23: { name: 'Pistachio Baklava', notes: 'daily phyllo · Gaziantep pistachio' },

    p24: { name: 'San Sebastian', notes: 'burnt cheesecake · salted caramel' },

    p25: { name: 'Wine by the Glass', notes: 'red · white · rosé' },

    p26: { name: 'Köz Negroni', notes: 'smoky mezcal · orange peel' },

    p27: { name: 'House Lemonade', notes: 'fresh mint · ginger' },

    p28: { name: 'Turkish Coffee', notes: 'slow-brewed over embers' },

  } as Record<string, { name: string; notes: string }>,

  common: {

    home: 'Home',

    skipToContent: 'Skip to content',

    directions: 'Get Directions',

    openMap: 'Open in Maps',

    whatsappMessage: 'Hello! I would like to get information about Wysteria Works.',

    whatsappTooltip: 'Chat on WhatsApp',

    whatsappAria: 'Contact via WhatsApp',

  },

};
