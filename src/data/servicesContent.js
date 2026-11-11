// Çakmak & Akbulut Hukuk - Hizmet alanları içeriği (tek veri merkezi)
// NOT: Şu an Türkçe içerik girilmiştir. Bir dil için içerik bulunamazsa
// otomatik olarak Türkçe içeriğe düşülür. Çeviriler eklendiğinde yalnızca
// servicesContent[locale] alanı doldurulmalıdır.
import { serviceLocaleContent } from './serviceLocaleContent.js'

const tr = [
  {
    slug: 'is-hukuku',
    icon: 'fa-solid fa-briefcase',
    title: 'İŞ HUKUKU',
    introTitle: 'İş Hukuku Uyuşmazlıklarında Hukuki Destek',
    introText:
      'İş ilişkisinin kurulması, devamı ve sona ermesi sırasında işçi ve işveren bakımından çeşitli hak ve yükümlülükler doğar. Bu ilişkiden kaynaklanan uyuşmazlıklar; sözleşme hükümleri, çalışma süresi, ücret ve fesih nedenleri gibi unsurlar dikkate alınarak değerlendirilir. Çakmak & Akbulut Hukuk, iş hukuku kapsamındaki başvuru ve uyuşmazlık süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'İşçilik Alacaklarının Tespiti ve Tahsili',
        text: 'Ücret, fazla çalışma, kullanılmayan yıllık izin, hafta tatili ile ulusal bayram ve genel tatil ücreti gibi işçilik alacaklarına ilişkin talepler; çalışma dönemi, iş sözleşmesi, bordro ve diğer bilgi ve belgeler çerçevesinde incelenir. Alacağın dayanağı ve hesaplanmasına ilişkin hususlar değerlendirildikten sonra, uyuşmazlığın çözümü için izlenebilecek hukuki yollar ele alınır.',
      },
      {
        title: 'Feshin Geçerliliği ve İşe İade Süreci',
        text: 'İş sözleşmesinin işveren tarafından sona erdirilmesi hâlinde, fesih bildiriminin içeriği ve fesih sürecinin ilgili mevzuat bakımından değerlendirilmesi gerekebilir. İşe iade talebine ilişkin başvuru ve dava yolları; işçinin statüsü, çalışma süresi ve somut fesih koşulları gözetilerek incelenir.',
      },
      {
        title: 'İş Sözleşmelerinin Hazırlanması ve Hukuki İncelenmesi',
        text: 'İş sözleşmeleri; tarafların görev, ücret, çalışma süresi ve diğer çalışma koşullarına ilişkin hak ve yükümlülüklerini düzenler. Sözleşme hükümlerinin hazırlanması veya incelenmesi sırasında, hükümlerin yürürlükteki mevzuata uygunluğu ve doğurabileceği hukuki sonuçlar değerlendirilir.',
      },
      {
        title: 'İş Uyuşmazlıklarında Arabuluculuk ve Dava Öncesi Süreç',
        text: 'İş hukukundan kaynaklanan bazı uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartıdır. Arabuluculuk sürecinde uyuşmazlık konusu talepler, tarafların hukuki konumu ve olası uzlaşma seçenekleri değerlendirilir; süreç, başvuru aşamasından son tutanağın düzenlenmesine kadar takip edilir.',
      },
    ],
    note: 'Bilgilendirme: Bu içerik genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuza ilişkin hukuki değerlendirme için bir avukata danışınız.',
  },
  {
    slug: 'sosyal-guvenlik-hukuku',
    icon: 'fa-solid fa-user-shield',
    title: 'SOSYAL GÜVENLİK HUKUKU',
    introTitle: 'Sosyal Güvenlik Hukukunda Hakların Korunması',
    introText:
      'Sosyal güvenlik mevzuatı; sigortalılık süresi, prim günleri, aylık bağlanması ve sağlık hizmetlerinden yararlanma gibi birçok konuda hak ve yükümlülükler doğurur. Kurum işlemleri veya kayıtlarla ilgili uyuşmazlıklarda, başvurunun dayanağı ve ilgili belgelerin birlikte değerlendirilmesi önem taşır. Çakmak & Akbulut Hukuk, sosyal güvenlik hukukundan kaynaklanan uyuşmazlıklarda hukuki süreçlerin değerlendirilmesi ve takibi konusunda destek sunar.',
    sections: [
      {
        title: 'Sigortalılık Sürelerinin Tespiti',
        text: 'Çalışmanın sosyal güvenlik kayıtlarına eksik veya hiç yansımadığı durumlarda, hizmet tespiti talebinin koşulları ve bu talebi destekleyen bilgi ve belgeler incelenir. Uyuşmazlığın niteliğine göre izlenebilecek başvuru ve dava yolları değerlendirilir.',
      },
      {
        title: 'Emeklilik ve Yaşlılık Aylığı Uyuşmazlıkları',
        text: 'Yaşlılık aylığına hak kazanma koşulları, sigortalılık süresi ve prim günlerine ilişkin uyuşmazlıklar; Kurum kayıtları ve ilgili mevzuat çerçevesinde ele alınır. Aylık bağlanması, başvurunun reddi veya aylık hesabına yönelik itiraz süreçleri somut olayın özelliklerine göre incelenir.',
      },
      {
        title: 'Malullük ve Ölüm Aylığı Talepleri',
        text: 'Malullük aylığı veya ölüm aylığına ilişkin taleplerde, mevzuatta öngörülen koşullar ile Kurum kararının dayanakları değerlendirilir. Aylık bağlanması, kesilmesi ya da başvurunun reddi konularında uygulanabilecek hukuki yollar ve gerekli belgeler ele alınır.',
      },
      {
        title: 'İş Kazası ve Meslek Hastalığının Tespiti',
        text: 'İş kazası veya meslek hastalığının tespitine ilişkin uyuşmazlıklarda, olayın meydana geliş biçimi, sağlık kayıtları, işyeri belgeleri ve Kurum işlemleri birlikte değerlendirilir. Tespit talebinin hukuki dayanakları ve izlenebilecek süreçler, dosyanın özelliklerine göre incelenir.',
      },
      {
        title: 'SGK Prim Borçları ve İdari Para Cezalarına İtiraz',
        text: 'Sosyal Güvenlik Kurumu tarafından bildirilen prim borçları ve idari para cezalarına ilişkin işlemler; tebligat, hesaplama ve hukuki dayanakları yönünden değerlendirilir. İtiraz veya dava yollarının koşulları ve süreleri bakımından somut işlem esas alınır.',
      },
      {
        title: 'Genel Sağlık Sigortası ve Sağlık Giderlerine İlişkin Uyuşmazlıklar',
        text: 'Genel Sağlık Sigortası kapsamındaki işlemler ile ilaç, tedavi ve sağlık hizmeti bedellerine ilişkin uyuşmazlıklarda, Kurum kararları ve ilgili belgeler incelenir. Talebin niteliğine göre başvuru ve yargı yolları değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'gayrimenkul-hukuku',
    icon: 'fa-solid fa-home',
    title: 'GAYRİMENKUL HUKUKU',
    introTitle: 'Taşınmazlardan Doğan Uyuşmazlıklarda Hukuki Destek',
    introText:
      'Taşınmazların mülkiyeti, kullanımı ve devriyle ilgili uyuşmazlıklar; tapu kayıtları, sözleşmeler, tarafların hak sahipliği ve taşınmazın fiilî durumu birlikte değerlendirilerek ele alınır. Çakmak & Akbulut Hukuk, gayrimenkul hukukundan kaynaklanan dava ve sözleşme süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'Tapu Kaydının İptali ve Mülkiyetin Tescili',
        text: 'Tapu kaydının hukuka aykırı olduğu iddiasıyla açılan iptal ve tescil davalarında, mülkiyetin kazanılma biçimi, mevcut kayıtlar ve uyuşmazlığa dayanak oluşturan belgeler incelenir. Talebin hukuki dayanağı ve izlenebilecek süreç, somut olayın özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Önalım (Şufa) Hakkından Kaynaklanan Davalar',
        text: 'Paylı mülkiyete konu taşınmazlardaki pay satışları nedeniyle doğabilecek önalım hakkı uyuşmazlıklarında; satışın koşulları, bildirimler ve yasal süreler dikkate alınır. Hakkın kullanılması veya bu hakka karşı ileri sürülebilecek itirazlar, ilgili belgeler çerçevesinde incelenir.',
      },
      {
        title: 'Paydaşlığın Giderilmesi (İzale-i Şuyu)',
        text: 'Paylı veya elbirliği mülkiyetinde ortaklığın sürdürülmesinin mümkün olmadığı hâllerde, ortaklığın giderilmesi talebi gündeme gelebilir. Taşınmazın aynen taksiminin mümkün olup olmadığı ve satış yoluyla paylaşım seçenekleri, dosyanın koşullarına göre değerlendirilir.',
      },
      {
        title: 'Haksız Kullanımdan Doğan Ecrimisil Talepleri',
        text: 'Bir taşınmazın hak sahibi olmayan kişi veya kişilerce kullanıldığı iddiasına dayalı ecrimisil taleplerinde; kullanımın niteliği, süresi ve tarafların mülkiyet ya da zilyetlik durumları incelenir. Talep ve hesaplamaya esas olabilecek bilgi ve belgeler değerlendirilerek hukuki süreç takip edilir.',
      },
      {
        title: 'Haksız Müdahalenin Önlenmesi',
        text: 'Taşınmaz üzerindeki mülkiyet veya zilyetlik hakkına yönelik müdahalenin sona erdirilmesi amacıyla açılabilecek el atmanın önlenmesi davalarında, müdahalenin varlığı ve kapsamı ile tarafların hukuki durumları ele alınır.',
      },
      {
        title: 'Tapu Sicilindeki Kayıtların Düzeltilmesi',
        text: 'Tapu sicilinde yer alan kimlik, pay veya taşınmaz bilgilerine ilişkin hata ve uyuşmazlıklarda, mevcut kayıtların dayanakları ve düzeltilmesi istenen hususlar incelenir. Gerekli başvuru ve dava yolları somut uyuşmazlığa göre değerlendirilir.',
      },
      {
        title: 'Taşınmaz Sözleşmelerinin Hazırlanması ve İncelenmesi',
        text: 'Taşınmaz satış vaadi ve kat karşılığı inşaat sözleşmelerinin hazırlanması ya da mevcut sözleşmelerin incelenmesi süreçlerinde; tarafların edimleri, teslim ve süre hükümleri, bedel veya paylaşım esasları ile sözleşmenin sona ermesine ilişkin hükümler değerlendirilir. Sözleşme içeriği, tarafların iradesi ve işlemin özellikleri dikkate alınarak ele alınır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'kira-hukuku',
    icon: 'fa-solid fa-key',
    title: 'KİRA HUKUKU',
    introTitle: 'Kira İlişkilerinde Hukuki Süreç ve Çözüm Yolları',
    introText:
      'Kira ilişkilerinden doğan uyuşmazlıklar; sözleşme hükümleri, taşınmazın kullanım koşulları, tarafların yükümlülükleri ve ilgili mevzuat çerçevesinde değerlendirilir. Çakmak & Akbulut Hukuk, kira bedelinin belirlenmesi, kira sözleşmesinin uyarlanması ve kiralananın tahliyesi gibi konularda hukuki destek sunar.',
    sections: [
      {
        title: 'Kira Bedelinin Belirlenmesine İlişkin Davalar',
        text: 'Kira bedelinin yeniden belirlenmesine yönelik uyuşmazlıklarda; mevcut kira sözleşmesi, kira ilişkisinin süresi, taşınmazın özellikleri ve ilgili yasal düzenlemeler değerlendirilir. Kira bedelinin tespiti talebinin koşulları ve izlenebilecek hukuki yol, somut olay çerçevesinde ele alınır.',
      },
      {
        title: 'Değişen Koşullar Nedeniyle Kira Uyarlaması',
        text: 'Sözleşmenin kurulmasından sonra ortaya çıkan koşulların kira ilişkisine etkisi, uyarlama talebinin hukuki dayanağı bakımından incelenir. Tarafların sözleşme hükümleri, değişen koşullar ve ilgili mevzuat birlikte değerlendirilerek başvuru veya dava süreci ele alınır.',
      },
      {
        title: 'Kiralananın Tahliyesine İlişkin Uyuşmazlıklar',
        text: 'Kiralananın tahliyesi talepleri; tahliye sebebine, sözleşme hükümlerine, yapılan bildirimlere ve yasal sürelere göre farklılık gösterebilir. Tahliye sürecinde uygulanabilecek hukuki yol ve gerekli işlemler, somut olayın özellikleri dikkate alınarak değerlendirilir.',
      },
      {
        title: 'Kira Sözleşmelerinin Hazırlanması ve İncelenmesi',
        text: 'Kira sözleşmelerinin hazırlanması veya mevcut sözleşmelerin incelenmesi sırasında; kira bedeli ve artış koşulları, kullanım amacı, tarafların yükümlülükleri, sözleşme süresi ve sona erme hükümleri ele alınır. Sözleşme hükümlerinin açık ve tarafların iradesine uygun biçimde düzenlenmesine yönelik hukuki destek sağlanır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her kira uyuşmazlığı kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'ticaret-hukuku',
    icon: 'fa-solid fa-chart-line',
    title: 'TİCARET HUKUKU',
    introTitle: 'Ticari Faaliyetlerde Hukuki Yapılanma ve Uyuşmazlık Yönetimi',
    introText:
      'Ticari faaliyetler; şirket kuruluşundan sözleşme ilişkilerine, alacakların tahsilinden ortaklık yapılarının düzenlenmesine kadar farklı hukuki süreçleri kapsar. Bu süreçlerde işlem türünün, tarafların iradesinin ve yürürlükteki mevzuatın birlikte değerlendirilmesi önem taşır. Çakmak & Akbulut Hukuk, ticaret hukuku kapsamında şirketlere ve ticari faaliyet yürüten kişilere hukuki destek sunar.',
    sections: [
      {
        title: 'Şirket Kuruluşu ve Kurumsal Yapılanma',
        text: 'Şirket kuruluşuna ilişkin hukuki süreçlerde şirket türü, ortaklık yapısı ve faaliyet konusu gibi unsurlar değerlendirilir. Kuruluş işlemlerine yönelik gerekli hukuki hazırlıklar ve ilgili belgeler, planlanan yapılanma doğrultusunda ele alınır.',
      },
      {
        title: 'Şube ve İrtibat Bürosu Kuruluşu',
        text: 'Şube veya irtibat bürosu açılmasına ilişkin süreçlerde, kuruluşun hukuki niteliği ve yapılması gereken işlemler değerlendirilir. Faaliyet biçimi ve başvurunun kapsamına göre gerekli belgelerin ve süreç adımlarının belirlenmesine destek verilir.',
      },
      {
        title: 'Şirket Ana Sözleşmesinin Hazırlanması',
        text: 'Şirket ana sözleşmesi hazırlanırken şirketin faaliyet konusu, ortaklık yapısı, sermaye ve yönetim düzeni gibi hususlar dikkate alınır. Sözleşme hükümlerinin şirketin yapısına ve ortakların iradesine uygun biçimde düzenlenmesi üzerinde çalışılır.',
      },
      {
        title: 'Ortak Girişim Yapılarının Düzenlenmesi',
        text: 'Ortak girişim ilişkilerinde tarafların katkıları, görev ve yetkileri, gelir ve giderlerin paylaşımı ile karar alma esaslarının belirlenmesi önem taşır. Ortak girişimin hukuki yapısı ve taraflar arasındaki sözleşmesel düzenlemeler, iş modelinin özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Hisse ve Malvarlığı Devir Sözleşmeleri',
        text: 'Hisse veya malvarlığı devrine ilişkin sözleşmelerde, devrin kapsamı, tarafların edimleri, bedel ve ödeme koşulları ile devir sonrası yükümlülükler incelenir. İşlemin hukuki ve sözleşmesel çerçevesinin tarafların iradesini yansıtacak şekilde düzenlenmesine destek sağlanır.',
      },
      {
        title: 'Ticari Sözleşmelerin Hazırlanması ve İncelenmesi',
        text: 'Ticari sözleşmeler hazırlanırken veya mevcut sözleşmeler incelenirken; tarafların hak ve yükümlülükleri, ifa koşulları, sorumluluk hükümleri ve sözleşmenin sona ermesine ilişkin düzenlemeler değerlendirilir. Sözleşmenin konusu ve ticari ilişkinin niteliği gözetilerek hukuki inceleme yapılır.',
      },
      {
        title: 'Ticari Alacak Uyuşmazlıkları',
        text: 'Ticari ilişkilerden kaynaklanan alacak uyuşmazlıklarında, alacağın dayanağı olan sözleşme ve belgeler incelenir. Alacağın talep edilmesi, tahsili ve gerektiğinde yargı mercilerine taşınmasına ilişkin hukuki yollar somut olay çerçevesinde değerlendirilir.',
      },
      {
        title: 'Kambiyo Senetlerinden Doğan Uyuşmazlıklar',
        text: 'Çek, bono ve poliçe gibi kambiyo senetlerine dayalı uyuşmazlıklarda, senedin şekil ve içerik yönünden durumu ile tarafların hukuki konumu ele alınır. Senede bağlı talepler ve uygulanabilecek başvuru yolları, ilgili belgeler ve mevzuat kapsamında incelenir.',
      },
      {
        title: 'Haksız Rekabetten Kaynaklanan Davalar',
        text: 'Ticari faaliyetler sırasında rakipler veya piyasa aktörleri arasındaki davranışların haksız rekabet oluşturup oluşturmadığı, olayın özellikleri ve ilgili mevzuat çerçevesinde değerlendirilir. İhlalin tespiti ve ileri sürülebilecek hukuki talepler bakımından süreç ele alınır.',
      },
      {
        title: 'Şirketlere Sürekli Hukuki Danışmanlık',
        text: 'Şirketlerin günlük faaliyetleri, sözleşme ilişkileri ve karşılaşabilecekleri hukuki riskler hakkında danışmanlık desteği sunulur. Danışmanlığın kapsamı, şirketin faaliyet alanı ve ihtiyaçları doğrultusunda belirlenir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'fikri-mulkiyet-hukuku',
    icon: 'fa-solid fa-lightbulb',
    title: 'FİKRİ MÜLKİYET HUKUKU',
    introTitle: 'Fikri Mülkiyet Haklarının Korunmasına Yönelik Hukuki Destek',
    introText:
      'Marka, patent ve tasarım gibi fikrî ve sınai mülkiyet hakları, işletmelerin ve hak sahiplerinin ticari değer taşıyan varlıkları arasında yer alır. Bu hakların tescili, kullanımı ve ihlal iddiaları; ilgili sicil kayıtları, başvuru belgeleri ve somut olayın koşulları çerçevesinde değerlendirilir. Çakmak & Akbulut Hukuk, fikri mülkiyet hukukundan doğan süreçlerde hukuki destek sunar.',
    sections: [
      {
        title: 'Marka ve Patent Haklarına İlişkin İhlal Uyuşmazlıkları',
        text: 'Marka veya patent hakkının izinsiz kullanıldığı iddialarında, hakkın kapsamı, tescil durumu ve kullanım biçimi incelenir. İhlalin tespiti ve sona erdirilmesi amacıyla gündeme gelebilecek hukuki başvuru ve dava yolları, olayın özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Marka Tescil Başvuru ve İtiraz Süreçleri',
        text: 'Marka tesciline ilişkin süreçlerde, başvurunun kapsamı ve mevcut marka kayıtları ele alınır. Başvuruya yönelik itirazlar veya tescil sürecinde ortaya çıkabilecek uyuşmazlıklar, ilgili belgeler ve mevzuat çerçevesinde değerlendirilir.',
      },
      {
        title: 'Tasarım Haklarının Korunması',
        text: 'Tescilli tasarımlara ilişkin hak sahipliği, koruma kapsamı ve izinsiz kullanım iddiaları incelenir. Tasarım hakkının ihlal edildiği ileri sürülen durumlarda, mevcut kayıtlar ve kullanımın niteliği gözetilerek izlenebilecek hukuki yollar ele alınır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'bilisim-hukuku-ve-kisisel-veriler',
    icon: 'fa-solid fa-laptop-code',
    title: 'BİLİŞİM HUKUKU VE KİŞİSEL VERİLER',
    introTitle: 'Dijital Dünyada Hakların ve Kişisel Verilerin Korunması',
    introText:
      'İnternet ortamındaki içerikler, sosyal medya paylaşımları ve kişisel verilerin işlenmesi; kişilik hakları, özel hayatın gizliliği ve veri güvenliği bakımından çeşitli hukuki sorunlara yol açabilir. Çakmak & Akbulut Hukuk, bilişim hukuku ve kişisel verilerin korunması alanındaki başvuru, uyum ve uyuşmazlık süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'İnternet İçeriğinin Kaldırılması ve Erişimin Engellenmesi Talepleri',
        text: 'İnternet ortamında yayımlanan içeriklerin hukuka aykırı olduğu iddialarında, içeriğin niteliği ve ilgili haklara etkisi değerlendirilir. İçeriğin kaldırılması veya erişimin engellenmesi için başvurulabilecek hukuki yollar, somut olay ve yürürlükteki mevzuat çerçevesinde ele alınır.',
      },
      {
        title: 'Sosyal Medya Paylaşımlarından Doğan Kişilik Hakkı İhlalleri',
        text: 'Sosyal medya paylaşımlarının kişilik haklarına zarar verdiği ileri sürülen durumlarda, paylaşımın içeriği, yayılma biçimi ve ilgili kişinin haklarına etkisi incelenir. İçeriğin kaldırılması, ihlalin sona erdirilmesi veya diğer hukuki talepler bakımından izlenebilecek süreçler değerlendirilir.',
      },
      {
        title: 'Kişisel Verileri Koruma Kurulu’na Başvuru ve Şikâyetler',
        text: 'Kişisel verilerin hukuka aykırı işlendiği veya ilgili kişi taleplerinin karşılanmadığı iddialarında, veri sorumlusuna yapılan başvurular ve alınan yanıtlar incelenir. Koşulların oluşması hâlinde Kişisel Verileri Koruma Kurulu’na yapılabilecek şikâyet ve başvuru süreçleri ele alınır.',
      },
      {
        title: 'Veri Sorumluları İçin KVKK Uyum Danışmanlığı',
        text: 'Veri sorumlularının kişisel veri işleme faaliyetleri, aydınlatma yükümlülükleri, ilgili kişi başvuruları ve veri güvenliğine ilişkin süreçleri değerlendirilir. Uyum çalışmalarının kapsamı, kurumun faaliyetleri ve işlediği verilerin niteliği doğrultusunda belirlenir.',
      },
      {
        title: 'Bilişim Suçlarına İlişkin Şikâyet ve Ceza Süreçleri',
        text: 'Bilişim sistemleri kullanılarak işlendiği ileri sürülen suçlarda, olayın özellikleri ve mevcut dijital deliller değerlendirilir. Şikâyet başvurusu ve soruşturma aşamasındaki hukuki süreçler, somut olayın niteliğine göre takip edilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'icra-ve-iflas-hukuku',
    icon: 'fa-solid fa-gavel',
    title: 'İCRA VE İFLAS HUKUKU',
    introTitle: 'Alacakların Takibi ve Borç Uyuşmazlıklarında Hukuki Destek',
    introText:
      'İcra ve iflas hukuku; alacakların tahsili, borca ilişkin itiraz ve davalar ile borçluların mali durumlarına bağlı yeniden yapılandırma ve iflas süreçlerini kapsar. Bu süreçlerde takip türü, alacağın dayanağı, tarafların hukuki konumu ve kanuni süreler önem taşır. Çakmak & Akbulut Hukuk, icra ve iflas hukukundan kaynaklanan başvuru ve uyuşmazlıklarda hukuki destek sunar.',
    sections: [
      {
        title: 'Alacakların İcra Yoluyla Takibi',
        text: 'Alacağın dayanağı ve niteliğine göre uygun icra takip yolunun belirlenmesi, takip işlemlerinin yürütülmesi ve borçlunun itirazı hâlinde izlenebilecek hukuki yollar değerlendirilir. Süreç, ilgili belgeler ve mevzuat hükümleri çerçevesinde takip edilir.',
      },
      {
        title: 'Borçlu Olunmadığının Tespiti',
        text: 'Bir icra takibine konu edilen borcun mevcut olmadığı veya talep edildiği şekilde doğmadığı iddialarında, menfi tespit davasının koşulları ve hukuki dayanakları incelenir. Takibin aşaması ve mevcut deliller, izlenecek yol bakımından değerlendirilir.',
      },
      {
        title: 'Ödenen Borcun Geri Alınmasına Yönelik İstirdat Davaları',
        text: 'Takip kapsamında ödenen bir bedelin gerçekte borçlu olunmadığı hâlde ödendiği iddiasıyla geri istenmesi gündeme gelebilir. İstirdat talebinin koşulları, ödeme belgeleri ve icra dosyasının içeriği birlikte ele alınır.',
      },
      {
        title: 'Alacaklılardan Mal Kaçırmaya Yönelik İşlemlerin İptali',
        text: 'Borçlunun alacaklıların tahsil imkânını etkileyen tasarruflarına ilişkin uyuşmazlıklarda, işlemin zamanı ve niteliği ile alacaklı üzerindeki etkisi incelenir. Tasarrufun iptali davasının koşulları ve takip süreci somut olay çerçevesinde değerlendirilir.',
      },
      {
        title: 'İflas ve Konkordato Süreçleri',
        text: 'İflas ve konkordato süreçlerinde, borçlunun mali durumu, alacaklıların konumu ve mevzuatta öngörülen başvuru ve takip aşamaları ele alınır. Sürecin kapsamı ve tarafların hukuki hakları, somut durum ve mevcut belgeler doğrultusunda değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. İcra ve iflas süreçlerinde kanuni süreler önem taşıyabileceğinden, her uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'borclar-hukuku',
    icon: 'fa-solid fa-file-contract',
    title: 'BORÇLAR HUKUKU',
    introTitle: 'Borç İlişkilerinden Doğan Uyuşmazlıklarda Hukuki Destek',
    introText:
      'Borçlar hukuku; sözleşmelerden doğan hak ve yükümlülüklerin yanı sıra haksız fiil, alacak ve sebepsiz zenginleşme gibi hukuki ilişkileri de kapsar. Uyuşmazlığın çözümünde ilişkinin kaynağı, tarafların iradesi, mevcut belgeler ve ortaya çıkan zarar birlikte değerlendirilir. Çakmak & Akbulut Hukuk, borçlar hukukundan kaynaklanan uyuşmazlıklarda hukuki süreçlerin değerlendirilmesi ve takibi konusunda destek sunar.',
    sections: [
      {
        title: 'Sözleşme İhlalinden Kaynaklanan Uyuşmazlıklar',
        text: 'Sözleşme hükümlerinin hiç veya gereği gibi yerine getirilmediği iddialarında, tarafların üstlendiği edimler ve sözleşmenin kapsamı incelenir. İfa, temerrüt, sözleşmenin sona ermesi ve ihlalin sonuçlarına ilişkin hukuki talepler somut olay çerçevesinde değerlendirilir.',
      },
      {
        title: 'Maddi ve Manevi Tazminat Talepleri',
        text: 'Bir hukuka aykırılık nedeniyle zarara uğranıldığı ileri sürülen durumlarda, zararın niteliği, olayla zarar arasındaki bağlantı ve sorumluluğun hukuki dayanağı ele alınır. Maddi veya manevi tazminat taleplerinin koşulları ve dayanakları mevcut bilgi ve belgeler üzerinden incelenir.',
      },
      {
        title: 'Alacağın Tahsiline Yönelik Davalar',
        text: 'Sözleşme veya başka bir hukuki ilişkiden doğduğu ileri sürülen alacaklarda, alacağın kaynağı ve kapsamı değerlendirilir. Alacağın talep edilmesi, tahsili ve uyuşmazlığın yargı yoluyla çözümlenmesine ilişkin seçenekler somut duruma göre ele alınır.',
      },
      {
        title: 'Sebepsiz Zenginleşmeden Doğan Talepler',
        text: 'Hukuki bir sebep olmaksızın bir kişinin malvarlığında meydana gelen artışın geri verilmesine ilişkin uyuşmazlıklarda, zenginleşmenin ve bunun diğer tarafın malvarlığındaki eksilmeyle bağlantısının koşulları incelenir. İade talebinin kapsamı, olayın özellikleri ve mevcut belgeler doğrultusunda değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'tuketici-hukuku',
    icon: 'fa-solid fa-shopping-cart',
    title: 'TÜKETİCİ HUKUKU',
    introTitle: 'Tüketici İşlemlerinden Doğan Uyuşmazlıklarda Hukuki Destek',
    introText:
      'Tüketici işlemleri; mal ve hizmet alımlarından aboneliklere, mesafeli sözleşmelerden konut satışlarına kadar farklı hukuki ilişkileri kapsar. Uyuşmazlığın değerlendirilmesinde sözleşme ve işlem belgeleri, yapılan başvurular, tüketicinin talebi ve ilgili mevzuat dikkate alınır. Çakmak & Akbulut Hukuk, tüketici hukukundan kaynaklanan başvuru ve dava süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'Ayıplı Mal ve Hizmet Uyuşmazlıkları',
        text: 'Satın alınan malın veya sunulan hizmetin sözleşmeye ya da mevzuata uygun olmadığı iddialarında, ayıbın niteliği ve tüketicinin talebi değerlendirilir. Bedel iadesi, ücretsiz onarım, değişim veya bedel indirimi gibi seçimlik hakların uygulanma koşulları somut olay çerçevesinde ele alınır.',
      },
      {
        title: 'Tüketici Hakem Heyeti Başvuruları',
        text: 'Uyuşmazlığın niteliği ve parasal sınır bakımından hakem heyetine başvuru koşulları değerlendirilir. Başvuruya konu talebin ve destekleyici belgelerin belirlenmesi ile başvuru sürecinin takibi konusunda hukuki destek sağlanır.',
      },
      {
        title: 'Tüketici Mahkemesi Davaları',
        text: 'Tüketici mahkemelerinde görülebilecek uyuşmazlıklarda, dava şartları, talebin hukuki dayanağı ve başvuru süreci incelenir. Hakem heyeti kararlarına itirazlar ve tüketici işlemlerinden doğan diğer talepler, somut olayın özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Abonelik ve Mesafeli Sözleşme Uyuşmazlıkları',
        text: 'Abonelik ilişkilerinin kurulması ve sona erdirilmesi, ücretlendirme, cayma hakkı ve internet veya telefon üzerinden yapılan sözleşmelere ilişkin uyuşmazlıklar ele alınır. Sözleşme koşulları, bilgilendirme yükümlülükleri ve tarafların yaptığı işlemler birlikte değerlendirilir.',
      },
      {
        title: 'Konut Satışı ve Ön Ödemeli Satış Uyuşmazlıkları',
        text: 'Konut satışına veya ön ödemeli satış ilişkisine dair uyuşmazlıklarda, sözleşme hükümleri, ödeme ve teslim koşulları ile tarafların yükümlülükleri incelenir. Teslimin gecikmesi, sözleşmeden dönme veya bedelin iadesi gibi taleplerin koşulları somut dosya kapsamında değerlendirilir.',
      },
      {
        title: 'Banka ve Kredi Sözleşmelerinden Doğan Uyuşmazlıklar',
        text: 'Banka işlemleri ve kredi sözleşmelerine ilişkin uyuşmazlıklarda, sözleşme ve hesap kayıtları ile ücret, faiz ve ödeme koşulları incelenir. Tüketicinin talebi ve uyuşmazlığın niteliğine göre başvuru veya dava yolları değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'sigorta-hukuku',
    icon: 'fa-solid fa-car-crash',
    title: 'SİGORTA HUKUKU',
    introTitle: 'Sigorta Uyuşmazlıklarında Tazminat ve Başvuru Süreçleri',
    introText:
      'Sigorta sözleşmelerinden doğan talepler; poliçe hükümleri, hasarın niteliği, olayın koşulları ve sigorta şirketinin değerlendirmesi dikkate alınarak incelenir. Çakmak & Akbulut Hukuk, sigorta hukukundan kaynaklanan tazminat talepleri ve başvuru süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'Araç Hasarı ve Değer Kaybı Talepleri',
        text: 'Trafik kazası sonrasında araçta meydana gelen maddi hasar ve araç değer kaybına ilişkin taleplerde; kaza tespit tutanağı, ekspertiz raporları, poliçe bilgileri ve diğer belgeler değerlendirilir. Sigorta şirketine yapılacak başvuru ve talebin kapsamı, olayın özelliklerine göre ele alınır.',
      },
      {
        title: 'Bedensel Zararlar Nedeniyle Tazminat Talepleri',
        text: 'Trafik kazası veya sigorta kapsamındaki başka bir olay nedeniyle meydana geldiği ileri sürülen bedensel zararlar bakımından, sağlık belgeleri, olay kayıtları ve poliçe hükümleri incelenir. Tazminat talebinin dayanağı ve ilgili başvuru süreci somut durum çerçevesinde değerlendirilir.',
      },
      {
        title: 'Sigorta Tahkim Komisyonu Başvuruları',
        text: 'Sigorta şirketiyle yaşanan uyuşmazlıklarda, Tahkim Komisyonu’na başvuru koşulları ve izlenecek süreç ele alınır. Başvuru öncesindeki işlemler, uyuşmazlığın konusu ve destekleyici belgeler dikkate alınarak hukuki değerlendirme yapılır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'saglik-hukuku-ve-malpraktis',
    icon: 'fa-solid fa-stethoscope',
    title: 'SAĞLIK HUKUKU VE MALPAKTRİS',
    introTitle: 'Sağlık Hizmetlerinden Doğan Uyuşmazlıklarda Hukuki Destek',
    introText:
      'Sağlık hizmetleri sırasında ortaya çıkan uyuşmazlıklar; tıbbi müdahalenin niteliği, hastanın bilgilendirilmesi ve rızası, sağlık kayıtları ve zararla müdahale arasındaki ilişki gibi unsurlar gözetilerek değerlendirilir. Çakmak & Akbulut Hukuk, sağlık hukuku ve malpraktis iddialarına ilişkin başvuru, tazminat ve yargılama süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'Tıbbi Hata İddialarına Dayalı Tazminat Talepleri',
        text: 'Tıbbi müdahalenin hukuka veya mesleki yükümlülüklere aykırı olduğu iddialarında, olayın gelişimi, sağlık kayıtları ve ileri sürülen zarar birlikte incelenir. Tazminat talebinin hukuki dayanağı ve izlenebilecek süreç, somut olayın özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Özel Hastane ve Hekimlere Yönelik Tazminat Davaları',
        text: 'Özel sağlık kuruluşlarında sunulan hizmet veya hekim müdahalesi nedeniyle zarar doğduğu iddiasıyla gündeme gelen maddi ve manevi tazminat taleplerinde, tarafların hukuki konumu, tedavi süreci ve ilgili belgeler ele alınır. Sorumluluk ve talep kapsamı dosya özelinde değerlendirilir.',
      },
      {
        title: 'Kamu Hastanelerine Karşı Tam Yargı Davaları',
        text: 'Kamu sağlık hizmetinin yürütülmesinden kaynaklandığı ileri sürülen zararlar bakımından, idari başvuru koşulları ve tam yargı davası süreci incelenir. Başvurulması gereken merci ve süreler, olayın niteliği ve ilgili mevzuat çerçevesinde değerlendirilir.',
      },
      {
        title: 'Tıbbi Hata İddialarına İlişkin Şikâyet ve Ceza Süreçleri',
        text: 'Tıbbi müdahalenin suç teşkil ettiği iddialarında, olayın özellikleri ve mevcut bilgi ve belgeler değerlendirilerek şikâyet ve ceza soruşturması sürecine ilişkin hukuki destek sunulur. Sürecin seyri, yetkili mercilerin incelemesi ve dosya kapsamındaki delillere bağlıdır.',
      },
      {
        title: 'SGK’ya Karşı İlaç ve Tedavi Bedeli Uyuşmazlıkları',
        text: 'İlaç, tedavi veya sağlık hizmeti bedelinin karşılanmasına ilişkin SGK işlemlerinden kaynaklanan uyuşmazlıklarda, Kurum kararı, tedavi belgeleri ve ilgili mevzuat incelenir. Başvuru veya dava yolunun koşulları somut durum doğrultusunda ele alınır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'aile-ve-miras-hukuku',
    icon: 'fa-solid fa-users',
    title: 'AİLE VE MİRAS HUKUKU',
    introTitle: 'Aile ve Miras Hukukunda Hakların Korunmasına Yönelik Destek',
    introText:
      'Aile ve miras hukukundan kaynaklanan uyuşmazlıklar; tarafların kişisel ve mali durumları, aile ilişkileri, malvarlığı ve ilgili belgeler birlikte değerlendirilerek ele alınır. Çakmak & Akbulut Hukuk, aile hukukuna ilişkin dava ve başvuruların yanı sıra mirasçılık ve tereke uyuşmazlıklarında hukuki destek sunar.',
    sections: [
      {
        title: 'Boşanma Davaları',
        text: 'Boşanma sürecinde evlilik birliğinin sona ermesine ilişkin talepler, tarafların iddia ve savunmaları ile mevcut deliller çerçevesinde değerlendirilir. Davaya eşlik edebilecek velayet, nafaka ve mal paylaşımı talepleri de somut durum gözetilerek ele alınır.',
      },
      {
        title: 'Velayet Uyuşmazlıkları',
        text: 'Velayete ilişkin uyuşmazlıklarda, çocuğun üstün yararı temelinde tarafların koşulları ve çocuğun ihtiyaçları değerlendirilir. Velayetin belirlenmesi veya değiştirilmesine yönelik talepler, ilgili bilgi ve belgeler çerçevesinde ele alınır.',
      },
      {
        title: 'Evlilik Birliğinin Sona Ermesinde Mal Rejiminin Tasfiyesi',
        text: 'Eşler arasındaki malvarlığının paylaşımına ilişkin uyuşmazlıklarda, uygulanacak mal rejimi, edinimlerin niteliği ve tarafların katkıları incelenir. Mal rejiminin tasfiyesine yönelik talepler, ilgili kayıt ve belgeler doğrultusunda değerlendirilir.',
      },
      {
        title: 'Nafaka Talepleri ve Nafaka Uyuşmazlıkları',
        text: 'Nafaka taleplerinde tarafların ekonomik ve sosyal koşulları ile talebin hukuki dayanağı ele alınır. Nafakanın belirlenmesi, artırılması, azaltılması veya kaldırılmasına ilişkin uyuşmazlıklar somut olayın özelliklerine göre incelenir.',
      },
      {
        title: 'Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi',
        text: 'Yabancı mahkemelerce verilen kararların Türkiye’de hukuki sonuç doğurması için gerekli tanıma veya tenfiz süreçleri değerlendirilir. Kararın niteliği, kesinleşme durumu ve başvuru için gereken belgeler ilgili mevzuat çerçevesinde ele alınır.',
      },
      {
        title: 'Miras Bırakanın İşlemlerinden Doğan Muris Muvazaası Davaları',
        text: 'Miras bırakanın yaptığı işlemlerin gerçek iradeyi yansıtmadığı ve mirasçılardan mal kaçırma amacı taşıdığı iddialarında, işlemin niteliği ve tarafların durumu incelenir. Tapu kayıtları ve diğer deliller doğrultusunda ileri sürülebilecek talepler değerlendirilir.',
      },
      {
        title: 'Saklı Payın Korunmasına Yönelik Tenkis Davaları',
        text: 'Saklı payın ihlal edildiği iddialarında, miras bırakanın tasarrufları ve mirasçıların yasal hakları incelenir. Tenkis talebinin koşulları ile dava sürecine ilişkin hususlar somut dosya kapsamında değerlendirilir.',
      },
      {
        title: 'Mirasçılık Belgesinin Alınması',
        text: 'Mirasçıların ve miras paylarının belirlenmesine yönelik mirasçılık belgesi başvurularında, nüfus ve mirasçılık kayıtları incelenir. Belgenin alınması veya mevcut belgedeki kayıtlarla ilgili uyuşmazlıklar bakımından izlenebilecek yollar ele alınır.',
      },
      {
        title: 'Mirasın Reddi',
        text: 'Mirasın reddine ilişkin başvurularda, yasal süreler ve ret beyanının usulü önem taşır. Mirasçının hukuki durumu ve terekeye ilişkin bilgiler dikkate alınarak başvuru süreci değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'ceza-hukuku',
    icon: 'fa-solid fa-balance-scale',
    title: 'CEZA HUKUKU',
    introTitle: 'Ceza Yargılamasının Her Aşamasında Hukuki Destek',
    introText:
      'Ceza soruşturması ve kovuşturması, kişilerin hak ve özgürlüklerini doğrudan etkileyen usul kurallarına tabidir. Sürecin her aşamasında isnadın niteliği, dosya kapsamı, deliller ve yasal süreler dikkatle değerlendirilmelidir. Çakmak & Akbulut Hukuk, ceza yargılamalarında müdafilik ve mağdur vekilliği hizmeti sunar.',
    sections: [
      {
        title: 'Soruşturma Aşamasında Müdafilik',
        text: 'Soruşturma sürecinde ifade ve sorgu işlemleri, delillerin değerlendirilmesi ve koruma tedbirlerine ilişkin işlemler bakımından hukuki destek sağlanır. Dosyanın içeriği ve isnadın niteliği gözetilerek şüphelinin haklarının korunmasına yönelik süreç takip edilir.',
      },
      {
        title: 'Kovuşturma Aşamasında Müdafilik',
        text: 'Mahkeme önündeki yargılama sürecinde iddianame, deliller ve taraf beyanları incelenir. Savunmanın hazırlanması, duruşmaların takibi ve yargılama sırasında yapılacak usul işlemleri dosyanın özelliklerine göre yürütülür.',
      },
      {
        title: 'Mağdur ve Katılan Vekilliği',
        text: 'Suçtan zarar gören kişilerin haklarının korunması amacıyla şikâyet ve delil sunma süreçleri takip edilir. Koşulları oluştuğunda davaya katılma talebi ve kovuşturma aşamasındaki diğer işlemler bakımından hukuki destek verilir.',
      },
      {
        title: 'Kanun Yolu Başvuruları',
        text: 'Mahkeme kararlarına karşı başvurulabilecek kanun yolları; kararın türü, gerekçesi ve başvuru süreleri dikkate alınarak değerlendirilir. İtiraz, istinaf veya temyiz başvurularının koşulları somut dosya kapsamında incelenir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Ceza yargılamalarında usul ve başvuru süreleri önem taşıyabileceğinden, her dosya kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'idare-ve-imar-hukuku',
    icon: 'fa-solid fa-landmark',
    title: 'İDARE VE İMAR HUKUKU',
    introTitle: 'İdari İşlemler ve İmar Uyuşmazlıklarında Hukuki Destek',
    introText:
      'İdarenin tesis ettiği işlemler ve gerçekleştirdiği eylemler, kişilerin hak ve menfaatlerini etkileyebilir. Bu işlemlere karşı başvurulabilecek hukuki yollar; işlemin niteliği, tebliğ tarihi, dayanakları ve ilgili mevzuat çerçevesinde değerlendirilir. Çakmak & Akbulut Hukuk, idare ve imar hukukundan kaynaklanan başvuru ve dava süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'İdari İşlemlere Karşı İptal Davaları',
        text: 'Hukuka aykırı olduğu ileri sürülen idari işlemlerin iptali talebiyle açılabilecek davalarda, işlemin yetki, şekil, sebep, konu ve maksat yönlerinden hukuka uygunluğu incelenir. Dava açma süresi ve başvuru koşulları, işlemin özelliklerine göre değerlendirilir.',
      },
      {
        title: 'İdarenin İşlem ve Eylemlerinden Doğan Tam Yargı Davaları',
        text: 'İdarenin işlem veya eylemleri nedeniyle zarara uğranıldığı iddialarında, zararın niteliği, idari faaliyetle arasındaki bağlantı ve talebin hukuki dayanağı ele alınır. Tam yargı davası öncesinde yerine getirilmesi gereken başvuru koşulları ve süreler somut olay çerçevesinde incelenir.',
      },
      {
        title: 'İmar Para Cezalarına İtiraz ve İptal Davaları',
        text: 'İmar mevzuatına aykırılık iddiasıyla uygulanan para cezalarında, idari yaptırımın dayanağı, tespit ve tebligat işlemleri ile cezanın kapsamı değerlendirilir. İtiraz veya iptal davası yoluna başvurulup başvurulamayacağı, ilgili karar ve belgeler üzerinden ele alınır.',
      },
      {
        title: 'Yıkım Kararlarına Karşı İptal Davaları',
        text: 'Yapı hakkında verilen yıkım kararlarının hukuka uygunluğu; kararın dayanakları, tespit süreci, yapı ve taşınmaz bilgileri ile usul işlemleri dikkate alınarak incelenir. Karara karşı başvurulabilecek hukuki yollar ve süreler, somut durum çerçevesinde değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. İdari uyuşmazlıklarda başvuru ve dava süreleri önem taşıyabileceğinden, her dosya kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'arabuluculuk',
    icon: 'fa-solid fa-handshake',
    title: 'ARABULUCULUK',
    introText:
      'Arabuluculuk, tarafların bir uyuşmazlığı mahkeme dışında, tarafsız ve bağımsız bir arabulucunun kolaylaştırıcılığıyla müzakere ederek çözüme kavuşturmalarına imkân tanıyan bir yöntemdir. Süreç, tarafların ihtiyaç ve menfaatlerini doğrudan ele almasına ve karşılıklı olarak kabul edilebilir bir çözüm üzerinde çalışmasına olanak sağlayabilir. Arabuluculuğun uygulanma biçimi ve dava şartı olup olmadığı, uyuşmazlığın türüne ve ilgili mevzuata göre değişir.\n\nÇakmak & Akbulut Hukuk, arabuluculuk sürecinin farklı aşamalarında hukuki destek sunar. Her uyuşmazlığı kendi koşulları içinde değerlendirerek müvekkillerimizin süreci anlamalarına, seçeneklerini değerlendirmelerine ve haklarını gözeten bir müzakere yürütmelerine yardımcı oluruz.',
    listIntro: 'Hizmet kapsamımız, ihtiyacın ve sürecin niteliğine göre aşağıdakileri içerebilir:',
    list: [
      'Arabuluculuğa başvuru öncesinde uyuşmazlığın ve hukuki seçeneklerin değerlendirilmesi',
      'İhtiyari arabuluculuk sürecinin başlatılması ve gerekli hazırlıkların yapılması',
      'Arabuluculuk sözleşmesi veya sürece ilişkin diğer belgelerin hazırlanması ve incelenmesi',
      'Arabuluculuk görüşmelerinde taraf vekilliği ve müzakere desteği',
      'Dava şartı arabuluculuk sürecinde başvuru, görüşme ve son tutanak aşamalarına ilişkin hukuki destek',
      'Görüşmelerde gündeme gelen çözüm önerilerinin ve olası sonuçlarının değerlendirilmesi',
      'Tarafların anlaşması hâlinde, anlaşma metninin kapsam ve hükümlerinin incelenmesi veya hazırlanması',
      'Mevzuatın aradığı koşulların bulunması hâlinde, anlaşma belgesinin icra edilebilirliğine ilişkin işlemlerde destek',
      'Anlaşma belgesinin yerine getirilmemesi durumunda başvurulabilecek hukuki yolların değerlendirilmesi',
    ],
    outro:
      'Arabuluculukta anlaşma sağlanması tarafların iradesine bağlıdır; süreç her uyuşmazlıkta aynı şekilde sonuçlanmayabilir. Bu nedenle sürecin başından itibaren uyuşmazlığın özelliklerinin, anlaşma koşullarının ve belgenin hukuki sonuçlarının dikkatle değerlendirilmesi önem taşır.',
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. İdari uyuşmazlıklarda başvuru ve dava süreleri önem taşıyabileceğinden, her dosya kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'tahkim',
    icon: 'fa-solid fa-file-signature',
    title: 'TAHKİM',
    introText:
      'Tahkim, tarafların aralarındaki uyuşmazlığın devlet mahkemeleri yerine, seçtikleri hakem veya hakem kurulu tarafından karara bağlanmasını kararlaştırabildikleri bir uyuşmazlık çözüm yoludur. Tahkim anlaşmasının kapsamı, uygulanacak kurallar ve sürecin yürütülme biçimi; tarafların anlaşmasına, uyuşmazlığın niteliğine ve ilgili mevzuata göre değişir. Bu nedenle tahkim her uyuşmazlık için uygun olmayabilir; tahkim şartının ve sürecin baştan dikkatle değerlendirilmesi önem taşır.\n\nÇakmak & Akbulut Hukuk, tahkim şartı veya sözleşmesinin hazırlanması ve incelenmesinden karar sonrası işlemlere kadar, tahkim sürecinin farklı aşamalarında hukuki destek sunar. Destek kapsamı uyuşmazlığın özelliklerine ve uygulanacak tahkim kurallarına göre belirlenir.',
    listIntro: 'Hizmetlerimiz şunları içerebilir:',
    list: [
      'Tahkim şartı ve tahkim sözleşmesinin hazırlanması, incelenmesi ve geliştirilmesi',
      'Tahkim yolunun uygulanabilirliğinin ve olası usul seçeneklerinin değerlendirilmesi',
      'Kurumsal tahkim veya ad hoc tahkim süreçlerinde taraf vekilliği',
      'Tahkim başvurusunun hazırlanması ve dosyanın süreç boyunca takibi',
      'Hakem seçimi, görev ve yetkiye ilişkin itirazlar ile usule dair başvurularda hukuki destek',
      'Tahkim yargılamasında iddia, savunma ve delillerin hazırlanması ve sunulması',
      'Uygun olduğu hâllerde, mahkemeden geçici hukuki koruma veya delil tespiti talep edilmesine ilişkin destek',
      'Tahkim süreciyle bağlantılı olarak mahkemeye başvurulması gereken konuların değerlendirilmesi',
      'Hakem kararının tanınması, tenfizi veya icrası süreçlerinde destek',
      'Mevzuatta öngörülen şartların bulunması hâlinde hakem kararına karşı iptal yolunun değerlendirilmesi',
    ],
    outro:
      'Tahkim sürecinin süresi, usulü ve sonucu; uyuşmazlığın niteliği, tarafların anlaşmaları ve uygulanacak tahkim kuralları gibi etkenlere bağlıdır. Bu nedenle her dosyada tahkim anlaşmasının kapsamı ve izlenecek yol somut olay özelinde ele alınır.',
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. İdari uyuşmazlıklarda başvuru ve dava süreleri önem taşıyabileceğinden, her dosya kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'kamulastirma-davalari',
    icon: 'fa-solid fa-road',
    title: 'KAMULAŞTIRMA DAVALARI',
    introTitle: 'Kamulaştırma Süreçlerinde Mülkiyet Hakkının Korunması',
    introText:
      'Kamulaştırma ve taşınmaza fiilen el konulmasına ilişkin uyuşmazlıklarda; idari kararlar, tapu kayıtları, taşınmazın niteliği ve değer tespitine esas unsurlar birlikte değerlendirilir. Çakmak & Akbulut Hukuk, kamulaştırma işlemlerinden doğan dava ve tazminat süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'Kamulaştırma Bedelinin Tespiti ve Tescil Davaları',
        text: 'Kamulaştırmaya konu taşınmaz için belirlenen bedelin ve taşınmazın idare adına tesciline ilişkin sürecin hukuki çerçevesi değerlendirilir. Taşınmazın özellikleri, değer tespitine dayanak veriler ve tarafların beyanları, dava kapsamında incelenir.',
      },
      {
        title: 'Kamulaştırma Bedeline İlişkin Uyuşmazlıklar',
        text: 'Belirlenen kamulaştırma bedelinin taşınmazın niteliğini ve değerini yansıtmadığı iddialarında, bedelin tespitinde dikkate alınan unsurlar ele alınır. Talebin hukuki dayanağı ve izlenebilecek süreç, dosyanın özelliklerine göre değerlendirilir.',
      },
      {
        title: 'Kamulaştırma İşleminin İptali Talepleri',
        text: 'Kamulaştırma kararının veya işlem sürecinin hukuka aykırı olduğu iddiasında, işlemin dayanakları ve usul koşulları incelenir. İptal davası açılabilmesi ve başvuru süreleri, somut işlem ve ilgili mevzuat çerçevesinde değerlendirilir.',
      },
      {
        title: 'Acele Kamulaştırma Süreçleri',
        text: 'Acele kamulaştırma kararlarına ilişkin süreçlerde, kararın hukuki dayanağı, taşınmaz üzerindeki etkileri ve izlenebilecek başvuru yolları ele alınır. Sürecin niteliği ve uygulanmış işlemler, ilgili belgeler üzerinden incelenir.',
      },
      {
        title: 'Kamulaştırmasız El Atmadan Doğan Tazminat Talepleri',
        text: 'İdarenin kamulaştırma usulünü tamamlamadan taşınmaza fiilen müdahale ettiği veya taşınmaz üzerindeki mülkiyet hakkını kısıtladığı iddialarında, müdahalenin niteliği ve süresi değerlendirilir. Tazminat talebinin koşulları ve uygulanabilecek hukuki yollar somut olay çerçevesinde ele alınır.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Kamulaştırma uyuşmazlıklarında başvuru ve dava süreleri önem taşıyabileceğinden, her dosya kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'yabancilar-ve-vatandaslik-hukuku',
    icon: 'fa-solid fa-passport',
    title: 'YABANCILAR VE VATANDAŞLIK HUKUKU',
    introTitle: 'Yabancılar ve Vatandaşlık İşlemlerinde Hukuki Destek',
    introText:
      'Türkiye’de ikamet, çalışma ve vatandaşlık süreçleri; başvurunun türüne, kişinin hukuki durumuna ve ilgili mevzuatta aranan koşullara göre farklılık gösterir. Çakmak & Akbulut Hukuk, yabancılar ve vatandaşlık hukukuna ilişkin başvuru ve idari işlem süreçlerinde hukuki destek sunar.',
    sections: [
      {
        title: 'İkamet İzni Başvuruları',
        text: 'İkamet izni başvurularında izin türü, başvuru koşulları ve sunulması gereken belgeler değerlendirilir. Başvuru, uzatma veya ret kararına ilişkin süreçler kişinin durumuna ve ilgili mevzuata göre ele alınır.',
      },
      {
        title: 'Çalışma İzni Süreçleri',
        text: 'Çalışma izni başvurularında başvuru sahibinin ve işverenin durumuna, çalışma ilişkisinin niteliğine ve gerekli belgelere ilişkin hususlar incelenir. Başvurunun hazırlanması ve idari süreçlerin takibi konusunda hukuki destek sağlanır.',
      },
      {
        title: 'Sınır Dışı Etme Kararlarına Karşı Başvuru Yolları',
        text: 'Sınır dışı etme kararlarının hukuki dayanakları, tebliğ süreci ve karara karşı başvurulabilecek yollar değerlendirilir. Bu tür işlemlerde uygulanabilecek süreler önem taşıdığından, somut karar ve kişinin durumu birlikte incelenir.',
      },
      {
        title: 'Yatırım Yoluyla Vatandaşlık Başvuruları',
        text: 'Yatırım yoluyla vatandaşlık başvurularında, yatırımın türü ve mevzuatta öngörülen koşullar çerçevesinde gerekli bilgi ve belgeler değerlendirilir. Başvuru süreci ve idari işlemler, başvurunun özelliklerine göre takip edilir.',
      },
      {
        title: 'Evlilik Yoluyla Vatandaşlık Başvuruları',
        text: 'Evlilik yoluyla vatandaşlık başvurularında, kanuni koşullar ve başvuru sürecinde sunulması gereken belgeler ele alınır. Başvurunun değerlendirilmesi sırasında gündeme gelebilecek idari işlemler hakkında hukuki destek verilir.',
      },
      {
        title: 'Genel Yoldan Türk Vatandaşlığı Başvuruları',
        text: 'Genel yoldan vatandaşlık başvurularında, başvuru sahibinin hukuki durumu ve mevzuatta aranan şartlar incelenir. Başvuru dosyasının hazırlanması, idari sürecin takibi ve olası kararlar karşısında başvurulabilecek yollar değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Yabancılar ve vatandaşlık hukukuna ilişkin koşullar kişinin durumuna ve yürürlükteki mevzuata göre değişebilir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'tazminat-hukuku',
    icon: 'fa-solid fa-hand-holding-dollar',
    title: 'TAZMİNAT HUKUKU',
    introTitle: 'Tazminat Hukuku Kapsamındaki Çalışmalarımız',
    introText:
      'Hukuka aykırı bir fiil, sözleşmeye aykırılık veya başka bir sorumluluk sebebiyle zarara uğrandığı iddiası, olayın özellikleri ve ilgili belgeler çerçevesinde değerlendirilir. Çakmak & Akbulut Hukuk, maddi ve manevi zarar taleplerinin incelenmesi, başvuru yollarının değerlendirilmesi ve dava süreçlerinin takibi konusunda hukuki destek sunar.',
    sections: [
      {
        title: 'Maddi ve Manevi Tazminat Talepleri',
        text: 'Kişilik haklarına yönelik ihlaller veya başka hukuki sebeplerle ortaya çıktığı ileri sürülen zararlar bakımından, olayın niteliği, zararın kapsamı ve sorumluluğun dayanağı incelenir. Maddi ve manevi tazminat talepleri, somut durum ve mevcut deliller doğrultusunda değerlendirilir.',
      },
      {
        title: 'Haksız Fiilden Doğan Tazminat Davaları',
        text: 'Hukuka aykırı bir fiil nedeniyle zarar meydana geldiği iddiasında; fiil, zarar, kusur ve illiyet bağına ilişkin hususlar ele alınır. Tazminat talebinin koşulları ve ileri sürülebilecek hukuki yollar dosya özelinde incelenir.',
      },
      {
        title: 'Sözleşmeye Aykırılıktan Doğan Tazminat Talepleri',
        text: 'Sözleşmeden kaynaklanan yükümlülüklerin yerine getirilmemesi veya gereği gibi ifa edilmemesi nedeniyle doğduğu ileri sürülen zararlar değerlendirilir. Sözleşme hükümleri, tarafların edimleri ve zarar iddiasının dayanakları birlikte ele alınır.',
      },
      {
        title: 'Bedensel Zarar ve Destekten Yoksun Kalma Talepleri',
        text: 'Bedensel zarar veya ölüm nedeniyle ortaya çıkan tazminat taleplerinde, olayın oluş biçimi, sağlık ve gelir belgeleri ile zararın kapsamı incelenir. Talep hakkı ve tazminat kalemleri, somut olayın koşulları çerçevesinde değerlendirilir.',
      },
      {
        title: 'Tazminat Taleplerinde Delillerin ve Zararın Değerlendirilmesi',
        text: 'Tazminat uyuşmazlıklarında olay kayıtları, sözleşmeler, yazışmalar, sağlık belgeleri ve diğer delillerin talep üzerindeki etkisi incelenir. Zararın belirlenmesi ve talebin hukuki dayanağının ortaya konulmasına yönelik süreç takip edilir.',
      },
      {
        title: 'Tazminat Davaları ve Başvuru Süreçleri',
        text: 'Dava veya diğer hukuki yollara başvurulup başvurulamayacağı; uyuşmazlığın türü, görevli ve yetkili merciler ile uygulanabilecek süreler dikkate alınarak değerlendirilir. Sürecin kapsamı, somut olay ve ilgili belgeler doğrultusunda belirlenir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Her hukuki uyuşmazlık kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'anayasa-mahkemesi-bireysel-basvuru',
    icon: 'fa-solid fa-university',
    title: 'ANAYASA MAHKEMESİ BİREYSEL BAŞVURU',
    introTitle: 'Anayasa Mahkemesi Bireysel Başvurularında Hukuki Destek',
    introText:
      'Temel hak ve özgürlüklerin kamu gücü tarafından ihlal edildiği iddiasıyla Anayasa Mahkemesine bireysel başvuru yapılması, kabul edilebilirlik koşullarına ve başvuru sürelerine tabidir. Başvurunun dayanağı, olağan başvuru yollarının tüketilip tüketilmediği ve ihlal iddiasının somutlaştırılması başvuru sürecinde önem taşır. Çakmak & Akbulut Hukuk, bireysel başvuru dosyalarının hazırlanması ve takibi konusunda hukuki destek sunar.',
    sections: [
      {
        title: 'Bireysel Başvuru Formunun Hazırlanması',
        text: 'Başvuru formunda olayların, ihlal edildiği ileri sürülen hakların ve başvuru yollarına ilişkin bilgilerin açık ve tutarlı biçimde ortaya konulması gerekir. Dosyanın içeriği, ilgili kararlar ve destekleyici belgeler incelenerek başvurunun hazırlanmasına yönelik hukuki çalışma yürütülür.',
      },
      {
        title: 'Adil Yargılanma Hakkına İlişkin İhlal İddiaları',
        text: 'Yargılamanın yürütülmesi ve mahkeme kararlarının gerekçelendirilmesiyle ilgili adil yargılanma hakkı iddiaları, yargılama dosyası ve başvuru yollarında verilen kararlar çerçevesinde değerlendirilir.',
      },
      {
        title: 'Makul Sürede Yargılanma Hakkı İddiaları',
        text: 'Yargılamanın süresine ilişkin şikâyetlerde, sürecin başlangıç ve bitiş tarihleri, yargılamanın aşamaları ve gecikmeye yol açan unsurlar incelenir. Başvurunun tabi olduğu koşullar ve izlenebilecek yol, güncel mevzuat ve somut durum doğrultusunda değerlendirilir.',
      },
      {
        title: 'Mülkiyet Hakkına İlişkin İhlal İddiaları',
        text: 'Malvarlığına yönelik kamu gücü işlemleri veya yargı kararlarının mülkiyet hakkını ihlal ettiği iddialarında, müdahalenin niteliği ve etkileri ile ilgili karar ve belgeler ele alınır.',
      },
      {
        title: 'Kişi Özgürlüğü ve Güvenliği Hakkına İlişkin İhlal İddiaları',
        text: 'Yakalama, tutuklama veya özgürlüğün kısıtlanmasına ilişkin işlemler bakımından, müdahalenin hukuki dayanağı ve başvuru yollarında verilen kararlar değerlendirilir. Bireysel başvurunun koşulları, dosyanın özelliklerine göre incelenir.',
      },
      {
        title: 'İfade Özgürlüğüne İlişkin İhlal İddiaları',
        text: 'İfade açıklamaları veya bu açıklamalara yönelik yaptırımlar nedeniyle ortaya çıktığı ileri sürülen ihlallerde, müdahalenin içeriği, gerekçesi ve başvurucunun durumuna etkisi ele alınır. İhlal iddiası, ilgili kararlar ve dosya kapsamındaki bilgiler doğrultusunda değerlendirilir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. Anayasa Mahkemesine bireysel başvuruda süreler ve kabul edilebilirlik koşulları önem taşıdığından, her başvuru kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
  {
    slug: 'avrupa-insan-haklari-basvurulari',
    icon: 'fa-solid fa-globe-europe',
    title: 'AVRUPA İNSAN HAKLARI BAŞVURULARI',
    introTitle: 'Avrupa İnsan Hakları Mahkemesi Başvurularında Hukuki Destek',
    introText:
      'Avrupa İnsan Hakları Mahkemesine bireysel başvuru; iç hukuk sürecinin, ileri sürülen hak ihlallerinin ve başvuru koşullarının dikkatle değerlendirilmesini gerektirir. Çakmak & Akbulut Hukuk, AİHM başvurularının hazırlanması ve Mahkeme önündeki sürecin takibine ilişkin hukuki destek sunar.',
    sections: [
      {
        title: 'Başvuru Formunun Hazırlanması',
        text: 'Başvuruda olayların, ihlal iddialarının ve iç hukukta izlenen yolların açık ve tutarlı biçimde aktarılması önem taşır. Başvuru formu ve ekleri, dosyadaki kararlar ile destekleyici belgeler dikkate alınarak hazırlanır.',
      },
      {
        title: 'Kabul Edilebilirlik Koşullarının Değerlendirilmesi',
        text: 'Başvurucunun mağdur sıfatı, iç hukuk yollarının tüketilmesi, başvuru süresi ve şikâyetlerin dayanakları gibi kabul edilebilirlik ölçütleri dosya özelinde incelenir. Başvurunun kapsamı ve sunuluş biçimi, ilgili usul kuralları çerçevesinde değerlendirilir.',
      },
      {
        title: 'Hükümet Görüşüne Cevap ve Dostane Çözüm Süreçleri',
        text: 'Mahkeme tarafından Hükümet görüşünün iletilmesi hâlinde, bu görüşe sunulacak yanıt dosyanın içeriği ve başvurudaki ihlal iddiaları doğrultusunda hazırlanır. Mahkeme sürecinde gündeme gelebilecek dostane çözüm önerileri de başvurucunun hukuki durumu gözetilerek değerlendirilir.',
      },
      {
        title: 'Adil Yargılanma Hakkına İlişkin İddialar — Sözleşme’nin 6. Maddesi',
        text: 'Yargılamanın adilliğine ilişkin şikâyetler; yargılama süreci, başvurucuya tanınan usul güvenceleri ve ulusal mahkeme kararları üzerinden incelenir. İddiaların Sözleşme’nin 6. maddesi kapsamında değerlendirilip değerlendirilemeyeceği somut dosya çerçevesinde ele alınır.',
      },
      {
        title: 'Mülkiyetin Korunmasına İlişkin İddialar — 1 No.lu Protokol’ün 1. Maddesi',
        text: 'Malvarlığına yönelik kamu gücü müdahalesinin mülkiyet hakkını ihlal ettiği iddialarında, müdahalenin niteliği, hukuki dayanağı ve başvurucu üzerindeki etkileri değerlendirilir. İlgili ulusal kararlar ve belgeler, 1 No.lu Protokol’ün 1. maddesi kapsamında incelenir.',
      },
    ],
    note: 'Bilgilendirme: Bu sayfadaki açıklamalar genel bilgilendirme amacı taşır; hukuki görüş veya danışmanlık niteliğinde değildir. AİHM başvurularında kabul edilebilirlik koşulları ve süreler önem taşıdığından, her başvuru kendi koşulları ve ilgili belgeler çerçevesinde değerlendirilmelidir. Somut durumunuz hakkında hukuki değerlendirme için bir avukata danışmanız önerilir.',
  },
]

export const servicesContent = { tr }

// EN / AR çevirileri dizi olarak tutulduğu için eşleştirme slug'a göre
// değil, SIRAYA (index) göre yapılır.
function getTranslationList(locale) {
  if (locale === 'tr') return null

  const list = serviceLocaleContent[locale]
  return Array.isArray(list) ? list : null
}

export function getServices(locale = 'tr') {
  const baseList = servicesContent.tr
  const translations = getTranslationList(locale)

  if (!translations) return baseList

  if (translations.length !== baseList.length) {
    console.warn(
      `[servicesContent] "${locale}" listesinde ${translations.length} çeviri var, ` +
        `Türkçe listede ${baseList.length} hizmet var. Sıralama kaymış olabilir; ` +
        'iki dizinin hizmet sırasını kontrol edin.'
    )
  }

  return baseList.map((item, index) => {
    const translation = translations[index]

    // Bu sıradaki çeviri bulunamazsa Türkçe içeriği koru.
    if (!translation) return item

    return {
      ...item,
      ...translation,
      slug: item.slug, // URL'deki slug her dilde Türkçe slug olur
      icon: item.icon, // ikon her dilde Font Awesome sınıfı olarak kalır
      sections: translation.sections ?? item.sections,
      list: translation.list ?? item.list,
      listIntro: translation.listIntro ?? item.listIntro,
      outro: translation.outro ?? item.outro,
      note: translation.note ?? item.note,
    }
  })
}

export function getServiceBySlug(slug, locale = 'tr') {
  const list = getServices(locale)
  return (
    list.find((item) => item.slug === slug) ||
    servicesContent.tr.find((item) => item.slug === slug) ||
    null
  )
}