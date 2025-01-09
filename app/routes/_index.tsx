import { useTranslation } from 'react-i18next'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const { t } = useTranslation()
  const features = [
    {
      heading: `İnteraktif 3D Menü Görselleştirme`,
      description: `Menünüzü, müşterilerin her açıdan görebileceği gerçekçi 3D modellerle artırılmış gerçeklik deneyimine dönüştürün.`,
      icon: <i className="las la-cube"></i>,
    },
    {
      heading: `Akıllı Analiz Paneli`,
      description: `Menünüzü ve operasyonlarınızı optimize etmek için müşteri tercihlerini ve sipariş modellerini analiz edin.`,
      icon: <i className="las la-chart-bar"></i>,
    },
    {
      heading: `Kolay Menü Yönetimi`,
      description: `Kullanıcı dostu panelimiz üzerinden AR menü ögelerinizi, fiyatlarınızı ve açıklamalarınızı anında güncelleyin.`,
      icon: <i className="las la-edit"></i>,
    },
    {
      heading: `Müşteri Etkileşimi Takibi`,
      description: `Müşterilerinizin AR menü ögeleriyle nasıl etkileşime girdiğini izleyin ve en popüler yemeklerinizi belirleyin.`,
      icon: <i className="las la-users"></i>,
    },
    {
      heading: `Çoklu Dil Desteği`,
      description: `Uluslararası misafirleriniz için otomatik menü çevirisi ve görselleştirme ile dil bariyerlerini aşın.`,
      icon: <i className="las la-language"></i>,
    },
    {
      heading: `Sorunsuz Entegrasyon`,
      description: `Mevcut POS sisteminizle çalışır ve minimal kurulum gerektirir - haftalar değil, saatler içinde kullanıma hazır olun.`,
      icon: <i className="las la-sync"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Michael Chen`,
      designation: `Fusion Kitchen, İşletme Sahibi`,
      content: `AR menüyü uygulamaya başladığımızdan beri ortalama sipariş değerimiz %23 arttı. Müşteriler yemeklerini sipariş etmeden önce görmeyi seviyor ve servis personelimiz menü ögelerini açıklamak için daha az zaman harcıyor.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Martinez`,
      designation: `The Olive Grove, Restoran Müdürü`,
      content: `İade edilen yemeklerde %35 azalma ve çok daha mutlu müşteriler görüyoruz. AR görselleştirme, beklentileri mükemmel şekilde yönetmemize yardımcı oluyor.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Ocean Blue, Baş Şef`,
      content: `Analitik veriler gözlerimizi açtı. Müşteri etkileşim verilerine dayalı olarak menümüzü optimize ettik ve kârımızı %18 artırdık.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Özellikler`,
      link: `#features`,
    },
    {
      title: `Fiyatlandırma`,
      link: `#pricing`,
    },
    {
      title: `SSS`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Başlangıç`,
      description: `AR menülerle tanışan küçük restoranlar için mükemmel`,
      monthly: 99,
      yearly: 990,
      features: [`30 menü ögesine kadar`, `Temel analitik`, `E-posta desteği`],
    },
    {
      title: `Profesyonel`,
      description: `Büyüyen restoranlar için en popüler paket`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Sınırsız menü ögesi`,
        `Gelişmiş analitik`,
        `Öncelikli destek`,
        `Çoklu dil desteği`,
      ],
      highlight: true,
    },
    {
      title: `Kurumsal`,
      description: `Restoran zincirleri için özel çözümler`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Özel entegrasyon`,
        `Özel hesap yöneticisi`,
        `Özel markalama`,
        `API erişimi`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `AR menünün kurulumu ne kadar sürer?`,
      answer: `Kurulum genellikle 24-48 saat sürer. Siz restoranınızı yönetmeye odaklanırken biz menü ögelerinizin 3D modellemesini yaparız.`,
    },
    {
      question: `Müşterilerin uygulama indirmesi gerekiyor mu?`,
      answer: `Hayır! AR menünüz müşterilerin web tarayıcıları üzerinden doğrudan çalışır - uygulama indirmeye gerek yok.`,
    },
    {
      question: `Menü ögelerini kendim güncelleyebilir miyim?`,
      answer: `Evet! Kullanıcı dostu kontrol panelimiz üzerinden fiyatları, açıklamaları ve hatta menü ögelerini kolayca değiştirebilirsiniz.`,
    },
    {
      question: `Ne tür bir destek sağlıyorsunuz?`,
      answer: `7/24 teknik destek, düzenli eğitim seansları ve kurumsal müşteriler için özel hesap yöneticisi hizmeti sunuyoruz.`,
    },
  ]

  const steps = [
    {
      heading: `Menünüzü Paylaşın`,
      description: `Menü ögelerinizi ve fotoğraflarınızı gönderin - 3D modellemeyi biz halledelim.`,
    },
    {
      heading: `Hızlı Kurulum`,
      description: `48 saat içinde kontrol panelinizi yapılandırır ve personelinizi eğitiriz.`,
    },
    {
      heading: `Yayına Alın`,
      description: `AR menünüzü başlatın ve müşteri etkileşiminin nasıl arttığını izleyin.`,
    },
    {
      heading: `Optimize Edin ve Büyüyün`,
      description: `Analitikleri kullanarak menünüzü geliştirin ve kârınızı artırın.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😕`,
      title: `Menü seçimlerinden emin olamayan müşteriler`,
    },
    {
      emoji: `😤`,
      title: `Yüksek yemek iade oranı`,
    },
    {
      emoji: `💸`,
      title: `Memnun olmayan müşterilerden kaynaklanan gelir kaybı`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Menünüzü İnteraktif Bir Yemek Deneyimine Dönüştürün`}
        subtitle={`Yemeklerinizin etkileyici 3D görselleştirmeleriyle müşterilerinizin güvenle sipariş vermesine yardımcı olun. İadeleri azaltın, memnuniyeti artırın ve ortalama sipariş değerinizi %20 yükseltin.`}
        buttonText={`Ücretsiz Deneyin`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/uEl6lC-bidimenu-CATw`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`memnun restoran`}
          />
        }
      />
      <LandingSocialProof title={`Önde Gelen Restoranlar Tarafından Tercih Ediliyor`} />
      <LandingPainPoints
        title={`Müşterilerin %25'i yemekleri beklediklerinden farklı geldiğinde hayal kırıklığına uğruyor. Menü belirsizliği yüzünden müşteri kaybetmeyi durdurun.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks title={t('landing.howItWorks.title')} steps={steps} />
      <LandingFeatures
        id="features"
        title={`Yemek Deneyimini Yeniden Şekillendirmek İçin İhtiyacınız Olan Her Şey`}
        subtitle={`Müşterilerinizi mutlu etmek ve işinizi büyütmek için güçlü araçlar`}
        features={features}
      />
      <LandingTestimonials
        title={`Yüzlerce Başarılı Restorana Katılın`}
        subtitle={`Sizin gibi restoranların yemek deneyimini nasıl dönüştürdüğünü görün`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Daha Yüksek Kârlara Giden Yolunuzu Seçin`}
        subtitle={`İşinizle birlikte büyüyen paketler`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Sık Sorulan Sorular`}
        subtitle={`Başlamak için bilmeniz gereken her şey`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Restoranınızı Dönüştürmeye Hazır mısınız?`}
        subtitle={`Bugün yemek servisinin geleceğine katılın. Kredi kartı gerekmeden ücretsiz denemeye başlayın.`}
        buttonText={`Ücretsiz Deneyin`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}