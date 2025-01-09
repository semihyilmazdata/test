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
      heading: `Interactive 3D Menu Visualization`,
      description: `Transform your menu into an immersive AR experience with photorealistic 3D models that customers can view from every angle.`,
      icon: <i className="las la-cube"></i>,
    },
    {
      heading: `Smart Analytics Dashboard`,
      description: `Gain valuable insights into customer preferences and ordering patterns to optimize your menu and operations.`,
      icon: <i className="las la-chart-bar"></i>,
    },
    {
      heading: `Easy Menu Management`,
      description: `Update your AR menu items, prices, and descriptions instantly through our intuitive dashboard.`,
      icon: <i className="las la-edit"></i>,
    },
    {
      heading: `Customer Engagement Tracking`,
      description: `Monitor how customers interact with your AR menu items and identify your most popular dishes.`,
      icon: <i className="las la-users"></i>,
    },
    {
      heading: `Multi-language Support`,
      description: `Break language barriers with automatic menu translation and visualization for international guests.`,
      icon: <i className="las la-language"></i>,
    },
    {
      heading: `Seamless Integration`,
      description: `Works with your existing POS system and requires minimal setup - be up and running in hours, not weeks.`,
      icon: <i className="las la-sync"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Michael Chen`,
      designation: `Owner, Fusion Kitchen`,
      content: `Since implementing the AR menu, our average order value has increased by 23%. Customers love seeing their dishes before ordering, and our servers spend less time explaining menu items.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Martinez`,
      designation: `Restaurant Manager, The Olive Grove`,
      content: `We've seen a 35% reduction in returned dishes and much happier customers. The AR visualization helps manage expectations perfectly.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Head Chef, Ocean Blue`,
      content: `The analytics have been eye-opening. We've optimized our menu based on customer interaction data and increased our profits by 18%.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small restaurants getting started with AR menus`,
      monthly: 99,
      yearly: 990,
      features: [`Up to 30 menu items`, `Basic analytics`, `Email support`],
    },
    {
      title: `Professional`,
      description: `Most popular for growing restaurants`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Unlimited menu items`,
        `Advanced analytics`,
        `Priority support`,
        `Multi-language support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for restaurant chains`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Custom integration`,
        `Dedicated account manager`,
        `Custom branding`,
        `API access`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How long does it take to set up the AR menu?`,
      answer: `Setup typically takes 24-48 hours. We handle the 3D modeling of your menu items while you focus on running your restaurant.`,
    },
    {
      question: `Do customers need to download an app?`,
      answer: `No! Your AR menu works directly through customers' web browsers - no app download required.`,
    },
    {
      question: `Can I update menu items myself?`,
      answer: `Yes! You can easily update prices, descriptions, and even swap out menu items through our intuitive dashboard.`,
    },
    {
      question: `What kind of support do you provide?`,
      answer: `We offer 24/7 technical support, regular training sessions, and a dedicated account manager for enterprise clients.`,
    },
  ]

  const steps = [
    {
      heading: `Share Your Menu`,
      description: `Send us your menu items and photos - we'll handle the 3D modeling.`,
    },
    {
      heading: `Quick Setup`,
      description: `We'll configure your dashboard and train your staff in under 48 hours.`,
    },
    {
      heading: `Go Live`,
      description: `Launch your AR menu and watch customer engagement soar.`,
    },
    {
      heading: `Optimize & Grow`,
      description: `Use analytics to refine your menu and boost profits.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😕`,
      title: `Customers uncertain about menu choices`,
    },
    {
      emoji: `😤`,
      title: `High rate of returned dishes`,
    },
    {
      emoji: `💸`,
      title: `Lost revenue from dissatisfied diners`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Menu Into an Interactive Dining Experience`}
        subtitle={`Help customers order with confidence using stunning 3D visualizations of your dishes. Reduce returns, increase satisfaction, and boost your average order value by 20%.`}
        buttonText={`Start Free Trial`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/uEl6lC-bidimenu-CATw`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`satisfied restaurants`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Leading Restaurants`} />
      <LandingPainPoints
        title={`25% of diners feel disappointed when their food arrives different from expectations. Stop losing customers to menu uncertainty.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks title={t('landing.howItWorks.title')} steps={steps} />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Revolutionize the Dining Experience`}
        subtitle={`Powerful tools to delight your customers and grow your business`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Hundreds of Successful Restaurants`}
        subtitle={`See how restaurants like yours are transforming their dining experience`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Path to Higher Profits`}
        subtitle={`Plans that grow with your business`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions`}
        subtitle={`Everything you need to know about getting started`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Restaurant?`}
        subtitle={`Join the future of dining today. Start your free trial - no credit card required.`}
        buttonText={`Start Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
