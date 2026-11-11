// Çakmak Akbulut Hukuk - Marka ve iletişim bilgileri (tek veri merkezi)
// NOT: İletişim bilgileri geçici yer tutucudur. Gerçek bilgiler iletildiğinde
// yalnızca bu dosyadaki değerleri güncellemeniz yeterlidir.

export const siteInfo = {
  brand: 'Çakmak Akbulut Hukuk',
  brandEn: 'Cakmak Akbulut Law Firm',
  brandAr: 'مكتب تشاكماك أقبولوت للمحاماة',
  ownerName: 'Av. Tarık Çakmak & Av. Arb. Mesut Enes Akbulut',
  domain: 'cakmakakbuluthukuk.com',
  url: 'https://cakmakakbuluthukuk.com',
  email: 'info@cakmakakbuluthukuk.com',
  phones: [
    {
      label: 'Tarik Cakmak',
      display: '+90 (536) 504 28 09',
      href: 'tel:+905365042809',
      raw: '905365042809',
    },
    {
      label: 'Mesut Enes Akbulut',
      display: '+90 (553) 532 31 82',
      href: 'tel:+905535323182',
      raw: '905535323182',
    },
  ],
  phoneDisplay: '+90 (536) 504 28 09',
  phoneHref: 'tel:+905365042809',
  whatsappNumber: '905365042809',
  instagram: '#',
  address: {
    tr: '',
    en: '',
    ar: '',
  },
  addressFull: {
    tr: 'Ruzi Plaza Konak Mah. Kudret Sk. No: 20, Kat: 2, İç Kapı No: 1 16210 Nilüfer / BURSA',
    en: 'Ruzi Plaza Konak Mah. Kudret Sk. No: 20, Kat: 2, İç Kapı No: 1 16210 Nilüfer / BURSA',
    ar: 'Ruzi Plaza Konak Mah. Kudret Sk. No: 20, Kat: 2, İç Kapı No: 1 16210 Nilüfer / BURSA',
  },
}

export function getWhatsappUrl(message = '') {
  const base = `https://wa.me/${siteInfo.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function getPrimaryPhone() {
  return siteInfo.phones[0]
}
