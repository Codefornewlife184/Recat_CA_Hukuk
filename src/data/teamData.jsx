import React from "react";
import { useLocale } from "../i18n/LocaleContext.jsx";

export const TEAM_MEMBERS = [
  {
    id: 1,
    slug: "tarik-cakmak",
    name: "Av. Tarık Çakmak",
    role: {
      tr: "Kurucu Avukat",
      en: "Founding Attorney",
      ar: "محامٍ مؤسس",
    },
    image: "/assets/img/team/1.jpeg",
    customClass: "item-1",
    description: {
      tr: "23 Mart 1997 doğumlu olan Av. Tarık Çakmak; ilk, orta ve lise eğitimini Bursa’da tamamladıktan sonra 2020 yılında Özyeğin Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. 2021 yılının Aralık ayında avukatlık ruhsatını alarak mesleğe adım atmıştır.",
      en: "Attorney Tarik Cakmak, born on 23 March 1997, completed his primary, secondary and high school education in Bursa and graduated from Ozyegin University Faculty of Law in 2020. He was admitted to the bar in December 2021 and began practising law.",
      ar: "وُلد المحامي طارق تشاكماك في 23 مارس 1997، وأكمل تعليمه الابتدائي والمتوسط والثانوي في بورصة، ثم تخرج في كلية الحقوق بجامعة أوزييجين عام 2020. وحصل على رخصة المحاماة في ديسمبر 2021 وبدأ ممارسة المهنة.",
    },
    email: "tarik@cakmakakbuluthukuk.com",
    phone: "+90 (536) 504 2809",
    phoneHref: "tel:+905365042809",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    professionalInfo: {
      title: {
        tr: "Uzmanlık ve Mesleki Deneyim",
        en: "Practice Areas and Professional Experience",
        ar: "مجالات الخبرة والخبرة المهنية",
      },
      text: {
        tr: "Mesleki faaliyetlerini ağırlıklı olarak Ticaret Hukuku, Şirketler Hukuku, İcra ve İflas Hukuku ve Ceza Hukuku alanlarında sürdüren Çakmak; yaşanan ihtilafların çözümü adına dava takibi ve yanı sıra hukuki danışmanlık hizmetleri sunmaktadır. Mesleğe başladığı tarihten itibaren kurucusu olduğu Çakmak & Akbulut Hukuk Bürosu bünyesinde serbest avukatlık yapmaktadır.",
        en: "Mr. Cakmak mainly practises in Commercial Law, Corporate Law, Enforcement and Bankruptcy Law, and Criminal Law. He provides litigation follow-up and legal consultancy support in disputes. Since the beginning of his career, he has continued to practise as an independent attorney within Cakmak & Akbulut Law Firm, of which he is a founding partner.",
        ar: "يواصل الأستاذ تشاكماك نشاطه المهني بشكل رئيسي في مجالات القانون التجاري وقانون الشركات وقانون التنفيذ والإفلاس والقانون الجنائي. كما يقدم متابعة الدعاوى والاستشارات القانونية في النزاعات المختلفة. ومنذ بداية مسيرته المهنية وهو يمارس المحاماة الحرة ضمن مكتب تشاكماك وأكبولوت للمحاماة الذي يعد من مؤسسيه.",
      },
      list: {
        tr: [
          "Ticaret Hukuku ve Şirketler Hukuku",
          "İcra ve İflas Hukuku",
          "Ceza Hukuku ve Soruşturma / Kovuşturma Süreçleri",
          "Dava Takibi ve Kurumsal Hukuki Danışmanlık",
        ],
        en: [
          "Commercial and Corporate Law",
          "Enforcement and Bankruptcy Law",
          "Criminal Law and Investigation / Prosecution Processes",
          "Litigation Follow-Up and Corporate Legal Consultancy",
        ],
        ar: [
          "القانون التجاري وقانون الشركات",
          "قانون التنفيذ والإفلاس",
          "القانون الجنائي وإجراءات التحقيق والمحاكمة",
          "متابعة الدعاوى والاستشارات القانونية للمؤسسات",
        ],
      },
    },
  },
  {
    id: 2,
    slug: "mesut-enes-akbulut",
    name: "Av. Arb. Mesut Enes Akbulut",
    role: {
      tr: "Kurucu Avukat & Arabulucu",
      en: "Founding Attorney & Mediator",
      ar: "محامٍ مؤسس ووسيط",
    },
    image: "/assets/img/team/2.jpg",
    customClass: "",
    description: {
      tr: "23 Mart 1992 doğumlu Av. Arb. Mesut Enes Akbulut, temel eğitiminin ardından Liselere Giriş Sınavı'nda Türkiye 819'uncusu olarak dereceyle Fen Lisesi eğitimi almıştır. Lisans yerleştirme sınavlarında Sözel alanda Türkiye 31'inciliği ve Eşit Ağırlık alanında Türkiye 72'nciliği derecelerini elde ederek girdiği Hukuk Fakültesi'nden 2015 yılında mezun olmuştur.",
      en: "Attorney Mesut Enes Akbulut, born on 23 March 1992, attended a science high school after ranking 819th nationwide in the high school entrance examination. He later graduated from law school in 2015 after achieving high national rankings in the university placement exams.",
      ar: "وُلد المحامي مسعود أنس أكبولوت في 23 مارس 1992، والتحق بالمدرسة الثانوية العلمية بعد حصوله على المرتبة 819 على مستوى تركيا في امتحان الانتقال إلى المرحلة الثانوية. ثم تخرج في كلية الحقوق عام 2015 بعد تحقيقه مراكز متقدمة على مستوى تركيا في امتحانات القبول الجامعي.",
    },
    email: "mesutenes@cakmakakbuluthukuk.com",
    phone: "+90 (553) 532 31 82",
    phoneHref: "tel:+9055353231 82",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    professionalInfo: {
      title: {
        tr: "Uzmanlık ve Mesleki Deneyim",
        en: "Practice Areas and Professional Experience",
        ar: "مجالات الخبرة والخبرة المهنية",
      },
      text: {
        tr: "2016 yılının Aralık ayında yasal stajını tamamlayarak Avukatlık Ruhsatını alan Akbulut, meslek hayatına kurduğu şahsi bürosunda başlamıştır. Kariyeri boyunca ağırlıklı olarak Ceza Hukuku ve İdare Hukuku alanlarında uzmanlaşan Akbulut, 2023 yılının başından itibaren de Adalet Bakanlığı bünyesinde zorunlu ve ihtiyari arabuluculuk faaliyetlerini aktif olarak sürdürmektedir. 2021 yılından bu yana kurucu ortaklarından biri olduğu Çakmak & Akbulut Hukuk Bürosu çatısı altında avukatlık, arabuluculuk ve hukuki danışmanlık hizmeti vermeye devam etmektedir.",
        en: "After completing his legal internship, Mr. Akbulut was admitted to the bar in December 2016 and started his career in his own office. He has mainly focused on Criminal Law and Administrative Law and has been actively conducting mandatory and voluntary mediation activities under the Ministry of Justice since the beginning of 2023. Since 2021, he has continued to provide advocacy, mediation and legal consultancy services as a founding partner of Cakmak & Akbulut Law Firm.",
        ar: "بعد إتمام تدريبه القانوني، حصل الأستاذ أكبولوت على رخصة المحاماة في ديسمبر 2016 وبدأ مسيرته المهنية في مكتبه الخاص. وخلال مسيرته ركز بشكل رئيسي على القانون الجنائي والقانون الإداري، ومنذ بداية عام 2023 يواصل بشكل فعّال أعمال الوساطة الإلزامية والاختيارية ضمن وزارة العدل. ومنذ عام 2021 يواصل تقديم خدمات المحاماة والوساطة والاستشارات القانونية بصفته أحد الشركاء المؤسسين في مكتب تشاكماك وأكبولوت للمحاماة.",
      },
      list: {
        tr: [
          "Ceza Hukuku",
          "İdare Hukuku ve İdari Yargı Davaları",
          "Adalet Bakanlığı Zorunlu ve İhtiyari Arabuluculuk",
          "Hukuki Danışmanlık ve Uyuşmazlık Çözümü",
        ],
        en: [
          "Criminal Law",
          "Administrative Law and Administrative Litigation",
          "Mandatory and Voluntary Mediation before the Ministry of Justice",
          "Legal Consultancy and Dispute Resolution",
        ],
        ar: [
          "القانون الجنائي",
          "القانون الإداري ودعاوى القضاء الإداري",
          "الوساطة الإلزامية والاختيارية لدى وزارة العدل",
          "الاستشارات القانونية وحل النزاعات",
        ],
      },
    },
  },
  {
    id: 3,
    slug: "irem-yildiztekin",
    name: "İrem Yıldıztekin",
    role: {
      tr: "Avukat",
      en: "Attorney",
      ar: "محامٍ",
    },
    image: "/assets/img/team/3.png",
    customClass: "item-3",
    description: {
      tr: "Çakmak & Akbulut Hukuk bünyesinde müvekkil takibi, dilekçe süreçleri ve uyuşmazlık yönetimi alanlarında görev almaktadır.",
      en: "She works within Cakmak & Akbulut Law Firm on client follow-up, petition processes and dispute management.",
      ar: "تعمل ضمن مكتب تشاكماك وأكبولوت للمحاماة في متابعة الموكلين وإجراءات المذكرات وإدارة النزاعات.",
    },
    email: "info@cakmakakbuluthukuk.com",
    phone: "+90 (536) 504 2809",
    phoneHref: "tel:+905365042809",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    professionalInfo: {
  title: {
    tr: "Çalışma Alanları",
    en: "Practice Focus",
    ar: "مجالات العمل",
  },
  text: {
    tr: "Dava ve icra dosyalarının takibi, hukuki araştırma ve dava hazırlıkları süreçlerinde ekibe aktif destek sağlamaktadır.",
    en: "She actively supports the team in the follow-up of litigation and enforcement files, legal research and litigation preparation.",
    ar: "تقدم دعمًا فعالًا لفريقنا في متابعة ملفات الدعاوى والتنفيذ والبحث القانوني والتحضير للدعاوى.",
  },
  list: {
    tr: ["Dava ve İcra Dosyası Takibi", "Hukuki Araştırma ve Raporlama", "Duruşma ve Süreç Takibi"],
    en: [
      "Litigation and Enforcement File Follow-up",
      "Legal Research and Reporting",
      "Hearing and Process Monitoring",
    ],
    ar: ["متابعة ملفات الدعاوى والتنفيذ", "البحث القانوني وإعداد التقارير", "متابعة الجلسات والإجراءات"],
  },
},
  },
  {
    id: 4,
    slug: "murat-yamac",
    name: "Murat Yamaç",
    role: {
      tr: "İcra Katibi",
      en: "Enforcement Clerk",
      ar: "كاتب التنفيذ",
    },
    image: "/assets/img/team/4.png",
    customClass: "item-4",
    description: {
      tr: "İcra ve iflas dosyalarının takibi ile uyuşmazlık çözüm süreçlerinde görev almaktadır.",
      en: "He works on enforcement and bankruptcy files as well as dispute resolution processes.",
      ar: "يتولى متابعة ملفات التنفيذ والإفلاس وكذلك إجراءات حل النزاعات.",
    },
    email: "info@cakmakakbuluthukuk.com",
    phone: "+90 (553) 532 31 82",
    phoneHref: "tel:+9055353231 82",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    professionalInfo: {
      title: {
        tr: "Çalışma Alanları",
        en: "Practice Focus",
        ar: "مجالات العمل",
      },
      text: {
        tr: "Özellikle icra takibi, alacak yönetimi ve dosya operasyon süreçlerinde destek vermektedir.",
        en: "He primarily supports enforcement proceedings, receivables management and file operations.",
        ar: "يقدم الدعم بشكل خاص في إجراءات التنفيذ وإدارة الذمم المدينة وعمليات الملفات.",
      },
      list: {
        tr: ["İcra ve İflas Takibi", "Alacak Yönetimi", "Dosya Operasyonları"],
        en: [
          "Enforcement and Bankruptcy Proceedings",
          "Receivables Management",
          "File Operations",
        ],
        ar: [
          "متابعة التنفيذ والإفلاس",
          "إدارة الذمم المدينة",
          "عمليات الملفات",
        ],
      },
    },
  },
  {
    id: 5,
    slug: "nurcan-temel",
    name: "Nurcan Temel",
    role: {
      tr: "Avukat",
      en: "Attorney",
      ar: "محامٍ",
    },
    image: "/assets/img/team/3.png",
    customClass: "item-5",
    description: {
      tr: "Hukuki araştırma, dosya hazırlığı ve müvekkil süreçlerinin koordinasyonunda görev almaktadır.",
      en: "She works on legal research, file preparation and the coordination of client processes.",
      ar: "تعمل في البحث القانوني وإعداد الملفات وتنسيق إجراءات الموكلين.",
    },
    email: "info@cakmakakbuluthukuk.com",
    phone: "+90 (553) 532 31 82",
    phoneHref: "tel:+9055353231 82",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    professionalInfo: {
      title: {
        tr: "Çalışma Alanları",
        en: "Practice Focus",
        ar: "مجالات العمل",
      },
      text: {
        tr: "Dava hazırlıkları, hukuki araştırma ve ofis içi süreç koordinasyonunda aktif rol üstlenmektedir.",
        en: "She actively contributes to litigation preparation, legal research and in-office process coordination.",
        ar: "تساهم بفعالية في التحضير للدعاوى والبحث القانوني وتنسيق الإجراءات داخل المكتب.",
      },
      list: {
        tr: ["Hukuki Araştırma", "Dosya Hazırlığı", "Süreç Koordinasyonu"],
        en: ["Legal Research", "File Preparation", "Process Coordination"],
        ar: ["البحث القانوني", "إعداد الملفات", "تنسيق الإجراءات"],
      },
    },
  },
];

export default function TeamDetail({ memberData }) {
  const { locale } = useLocale();
  const member = memberData || TEAM_MEMBERS[0];
  const memberRole = member.role?.[locale] || member.role?.tr || member.role;
  const memberDescription =
    member.description?.[locale] ||
    member.description?.tr ||
    member.description;
  const professionalTitle =
    member.professionalInfo?.title?.[locale] ||
    member.professionalInfo?.title?.tr ||
    member.professionalInfo?.title;
  const professionalText =
    member.professionalInfo?.text?.[locale] ||
    member.professionalInfo?.text?.tr ||
    member.professionalInfo?.text;
  const professionalList =
    member.professionalInfo?.list?.[locale] ||
    member.professionalInfo?.list?.tr ||
    member.professionalInfo?.list ||
    [];

  return (
    <>
      <section className="team-details pt-140 pb-140 pin-section">
        <div className="container container-2">
          <div className="row pin-inner">
            {/* GÖRSEL ALANI */}
            <div className="col-lg-6">
              <div className="team-details-img pin-box">
                <img src={member.image} alt={member.name} />
              </div>
            </div>

            {/* İÇERİK ALANI */}
            <div className="col-lg-6">
              <div className="team-details-content scroll-content">
                <h2 className="name">{member.name}</h2>
                <span className="prof">{memberRole}</span>
                <p className="desc">{memberDescription}</p>

                {/* MESLEKİ BİLGİLER VE LİSTE */}
                {member.professionalInfo && (
                  <div className="team-details-info mb-0 mt-4">
                    <h3 className="details-title">{professionalTitle}</h3>
                    <p>{professionalText}</p>
                    <ul className="team-details-list mt-3">
                      {professionalList.map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fa-sharp fa-solid fa-circle-check me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* UZMANLIK YETENEK ÇUBUKLARI (VARSA) */}
                {member.expertise && (
                  <div className="skill-item-wrap mt-4">
                    <h4 className="details-title">{member.expertise.title}</h4>
                    <p>{member.expertise.text}</p>
                    <div className="skills-items mt-3">
                      {member.expertise.skills?.map((skill, index) => (
                        <div key={index} className="skills-item fade-top mb-3">
                          <h4 className="title">{skill.name}</h4>
                          <div className="progress" style={{ height: "10px" }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${skill.percentage}%`,
                                backgroundColor: "#cca645",
                              }}
                            >
                              <span>{skill.percentage}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EN ALTTA YAN YANA 2 KART ŞEKLİNDE İLETİŞİM ALANI */}
                <div className="team-contact-cards mt-5">
                  <div className="row g-3">
                    {/* E-POSTA KARTI */}
                    <div className="col-sm-8">
                      <div className="contact-card">
                        <div className="contact-card-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="contact-card-info">
                          <span>E-posta Adresi</span>
                          <a href={`mailto:${member.email}`}>{member.email}</a>
                        </div>
                      </div>
                    </div>

                    {/* TELEFON KARTI */}
                    <div className="col-sm-4">
                      <div className="contact-card">
                        <div className="contact-card-icon">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="contact-card-info">
                          <span>Telefon</span>
                          <a href={member.phoneHref || `tel:${member.phone}`}>
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STİL UYARLAMALARI */}
      <style>{`
        .team-details-content .name {
          color: #cca645 !important;
          font-weight: 700 !important;
          margin-bottom: 8px !important;
          font-size: 51px !important;
        }

        .team-details-content .prof {
          color: #0a2b5cff !important;
          font-size: 21px !important;
          font-weight: 700 !important;
          display: block !important;
          margin-bottom: 20px !important;
        }

        .team-details-info .details-title {
          color: #0a2b5cff !important;
          font-weight: 700 !important;
        }

        .team-details-list li i {
          color: #cca645 !important;
        }

        /* 2'Lİ İLETİŞİM KARTLARI CSS */
        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8f9fa;
          border: 1px solid rgba(10, 43, 92, 0.1);
          border-left: 4px solid #cca645;
          padding: 14px 16px;
          border-radius: 6px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .contact-card-icon {
          width: 38px;
          height: 38px;
          background: rgba(204, 166, 69, 0.12);
          color: #cca645;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .contact-card-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .contact-card-info span {
          color: #0a2b5cff !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .contact-card-info a {
          color: #cca645 !important;
          font-size: 13px !important;
          font-weight: 600;
          text-decoration: none;
          word-break: break-word;
          transition: color 0.3s ease;
        }

        .contact-card-info a:hover {
          color: #0a2b5cff !important;
        }
      `}</style>
    </>
  );
}
