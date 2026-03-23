export interface ServiceData {
  id: string
  slug: string
  title: string
  shortDescription: string
  icon: string
  returns: {
    title: string
    description: string
  }[]
  importance: {
    title: string
    reason: string
  }[]
  features: string[]
  pricing: {
    amount: number
    currency: string
    type: 'one-time' | 'monthly'
  }
  roiHighlight: string
  contactCTA: string
}

export const servicesData: ServiceData[] = [
  {
    id: 'whatsapp-agent',
    slug: 'whatsapp-agent',
    title: 'WhatsApp Agent',
    shortDescription: 'Auto-reply to messages, capture leads, and manage conversations 24/7',
    icon: 'MessageSquare',
    returns: [
      {
        title: 'Instant Lead Capture',
        description: 'Convert every WhatsApp inquiry into a lead automatically, never miss a potential customer again.',
      },
      {
        title: '24/7 Customer Engagement',
        description: 'Your business responds instantly even when you sleep, increasing customer satisfaction by 85%.',
      },
      {
        title: 'Reduced Response Time',
        description: 'Average response time drops from hours to seconds, improving conversion rates by 45%.',
      },
      {
        title: 'Cost Savings',
        description: 'Automate 70% of customer inquiries, freeing your team for high-value tasks.',
      },
    ],
    importance: [
      {
        title: 'Customer Expectations',
        reason: 'Customers expect instant responses on WhatsApp—failing to respond costs you sales.',
      },
      {
        title: 'Market Availability',
        reason: 'Your competitors are already using WhatsApp bots; stay competitive or fall behind.',
      },
      {
        title: 'Lead Quality',
        reason: 'Qualifying leads automatically ensures your team only handles serious prospects.',
      },
    ],
    features: [
      'Automated instant replies',
      'Lead qualification questions',
      'Conversation routing',
      'Analytics dashboard',
      'Multi-user team collaboration',
      'Integration with CRM',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Capture 20-40 additional leads per month with zero extra effort',
    contactCTA: 'Get Your WhatsApp Agent',
  },
  {
    id: 'web-chatbot',
    slug: 'web-chatbot',
    title: 'Web Chatbot',
    shortDescription: 'Smart AI chatbot that answers FAQs and qualifies leads instantly',
    icon: 'Globe',
    returns: [
      {
        title: 'Reduced Support Costs',
        description: 'Handle 80% of FAQs automatically, cutting customer support expenses in half.',
      },
      {
        title: 'Increased Conversions',
        description: 'Answer customer questions instantly during browsing, converting 35% more visitors.',
      },
      {
        title: 'Always Available',
        description: 'Your chatbot works 24/7, capturing leads even during your closed hours.',
      },
      {
        title: 'Better User Experience',
        description: 'Visitors get instant answers, reducing bounce rates and improving satisfaction.',
      },
    ],
    importance: [
      {
        title: 'Visitor Expectations',
        reason: '72% of web visitors expect instant responses—chatbots meet this demand.',
      },
      {
        title: 'Lead Recovery',
        reason: 'Most visitors leave without contacting you; chatbots re-engage them before they go.',
      },
      {
        title: 'Competitive Advantage',
        reason: 'Professional websites have chatbots; yours needs one to look modern and trustworthy.',
      },
    ],
    features: [
      'AI-powered responses',
      'FAQ database management',
      'Lead qualification',
      'Custom bot personality',
      'Analytics & insights',
      'Easy integration',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Convert 30-50 additional website visitors to leads every month',
    contactCTA: 'Deploy Your Web Chatbot',
  },
  {
    id: 'google-maps',
    slug: 'google-maps',
    title: 'Google Maps Optimization',
    shortDescription: 'Get discovered by local customers with optimized listings',
    icon: 'BarChart3',
    returns: [
      {
        title: 'Local Visibility',
        description: 'Appear at the top of Google Maps for your area, reaching customers actively searching for your service.',
      },
      {
        title: 'Qualified Foot Traffic',
        description: 'Drive 5-10 additional customers to your physical location monthly.',
      },
      {
        title: 'Trust Building',
        description: 'Reviews and ratings increase customer confidence, boosting sales by 25%+.',
      },
      {
        title: 'Cost-Effective Marketing',
        description: 'Free visibility—no ad spend required, just pure organic local discovery.',
      },
    ],
    importance: [
      {
        title: 'Local Search Behavior',
        reason: '76% of people search for local businesses on Google Maps—you need to be there.',
      },
      {
        title: 'Review Management',
        reason: 'Negative reviews can destroy your reputation; we manage and improve your online image.',
      },
      {
        title: 'Competition',
        reason: 'Your competitors are optimizing their Google Maps profiles; falling behind costs you customers.',
      },
    ],
    features: [
      'Complete profile optimization',
      'Review management',
      'Photo updates & gallery',
      'Local keyword targeting',
      'Monthly performance reports',
      'Response to customer inquiries',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Get 5-10 additional local customers monthly from Google Maps',
    contactCTA: 'Optimize Your Google Maps',
  },
  {
    id: 'customer-support',
    slug: 'customer-support',
    title: 'AI Customer Support',
    shortDescription: 'FAQ-trained AI handling support queries across all channels',
    icon: 'Clock',
    returns: [
      {
        title: 'Support Team Relief',
        description: 'Automate 75% of support tickets, letting your team focus on complex issues.',
      },
      {
        title: 'Faster Resolution',
        description: 'Customers get instant answers, increasing satisfaction scores by 40%.',
      },
      {
        title: 'Cost Efficiency',
        description: 'Eliminate need for multiple support staff—one AI handles thousands of inquiries.',
      },
      {
        title: 'Customer Retention',
        description: 'Happy customers stay longer—better support reduces churn by 30%.',
      },
    ],
    importance: [
      {
        title: 'Customer Satisfaction',
        reason: 'Poor support is the #1 reason customers leave; AI ensures consistent quality support.',
      },
      {
        title: 'Scaling Support',
        reason: 'As you grow, hiring more staff gets expensive; AI scales infinitely at fixed cost.',
      },
      {
        title: 'Response SLAs',
        reason: 'Customers demand quick responses; AI meets SLAs that humans cannot maintain 24/7.',
      },
    ],
    features: [
      'Multi-channel support',
      'FAQ knowledge base',
      'Ticket routing',
      'Escalation management',
      'Performance analytics',
      'Integration with email & messaging',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Handle 100+ support tickets monthly without hiring additional staff',
    contactCTA: 'Setup Your AI Support',
  },
  {
    id: 'lead-analytics',
    slug: 'lead-analytics',
    title: 'Lead Analytics Dashboard',
    shortDescription: 'Real-time insights on lead quality, response times, and conversions',
    icon: 'TrendingUp',
    returns: [
      {
        title: 'Data-Driven Decisions',
        description: 'See exactly which channels generate the best leads, optimize your spending.',
      },
      {
        title: 'Performance Visibility',
        description: 'Track response times, conversion rates, and sales pipeline in one dashboard.',
      },
      {
        title: 'Revenue Growth',
        description: 'Identify bottlenecks and fix them—improve conversion by 20-35%.',
      },
      {
        title: 'Team Accountability',
        description: 'Monitor team performance and identify top performers and areas for improvement.',
      },
    ],
    importance: [
      {
        title: 'Know Your Numbers',
        reason: 'You cannot improve what you cannot measure—analytics reveal hidden opportunities.',
      },
      {
        title: 'ROI Tracking',
        reason: 'Prove which marketing efforts work and eliminate those that don\'t.',
      },
      {
        title: 'Scaling Efficiently',
        description: 'Grow faster by knowing exactly what drives your business.',
      },
    ],
    features: [
      'Real-time dashboards',
      'Lead source tracking',
      'Conversion funnel analysis',
      'Team performance metrics',
      'Custom reports',
      'Automated alerts',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Discover 10-15% more revenue opportunities in your existing leads',
    contactCTA: 'Get Your Analytics Dashboard',
  },
  {
    id: 'website-builder',
    slug: 'website-builder',
    title: 'AI Website Builder',
    shortDescription: 'Create professional websites instantly with AI-powered tools',
    icon: 'Layout',
    returns: [
      {
        title: 'Professional Online Presence',
        description: 'Get a stunning website that builds customer trust and credibility instantly.',
      },
      {
        title: 'Sales 24/7',
        description: 'Your website sells while you sleep—converting visitors into customers daily.',
      },
      {
        title: 'No Technical Skills Needed',
        description: 'Create and update your site in minutes without knowing code or design.',
      },
      {
        title: 'Mobile-Optimized',
        description: 'Works perfectly on all devices—reach customers browsing on phones.',
      },
    ],
    importance: [
      {
        title: 'Digital Credibility',
        reason: '81% of people judge businesses by their website—no website means lost credibility.',
      },
      {
        title: 'Affordable Online Store',
        reason: 'Traditional websites are expensive; AI builders democratize digital presence.',
      },
      {
        title: 'Search Visibility',
        reason: 'A proper website helps you rank in Google and capture organic customers.',
      },
    ],
    features: [
      'AI-powered design suggestions',
      'Drag-and-drop editor',
      'Mobile responsive',
      'SEO optimization',
      'Payment integration ready',
      'Email capture forms',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Generate 10-20 new leads monthly from your website',
    contactCTA: 'Build Your Website Now',
  },
  {
    id: 'business-dashboard',
    slug: 'business-dashboard',
    title: 'Business Management Dashboard',
    shortDescription: 'Track sales, purchases, expenses, and profits from one place',
    icon: 'Settings',
    returns: [
      {
        title: 'Real-Time Profitability',
        description: 'Know your exact profit margin in real-time, not weeks later after accounting.',
      },
      {
        title: 'Better Financial Control',
        description: 'Track where every shilling goes, eliminate waste, boost margins by 15%.',
      },
      {
        title: 'Time Savings',
        description: 'Automated reporting saves 10+ hours weekly on manual data entry and analysis.',
      },
      {
        title: 'Tax Compliance',
        description: 'All records organized for easy tax filing—reduce stress and penalties.',
      },
    ],
    importance: [
      {
        title: 'Business Health',
        reason: 'Most businesses fail from poor cash flow visibility—you need real-time numbers.',
      },
      {
        title: 'Growth Decisions',
        reason: 'Expand confidently when you understand your true profitability.',
      },
      {
        title: 'Scaling Operations',
        reason: 'Manual tracking breaks down as you grow; systems scale infinitely.',
      },
    ],
    features: [
      'Sales tracking',
      'Expense management',
      'Profit calculations',
      'Financial reports',
      'Cash flow projections',
      'Multi-user access',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Increase profit margins by 10-20% through better cost management',
    contactCTA: 'Setup Business Dashboard',
  },
  {
    id: 'inventory-sales',
    slug: 'inventory-sales',
    title: 'Inventory & Sales Tracking',
    shortDescription: 'Monitor stock levels and sales performance in real time',
    icon: 'Package',
    returns: [
      {
        title: 'Eliminate Stockouts',
        description: 'Never run out of bestselling items—automated alerts prevent lost sales.',
      },
      {
        title: 'Reduce Overstocking',
        description: 'Stop tying up cash in excess inventory—improve cash flow by 20%+.',
      },
      {
        title: 'Sales Performance Insights',
        description: 'See which products sell best, optimize your inventory mix for maximum profit.',
      },
      {
        title: 'Quick Decision Making',
        description: 'Real-time data helps you make fast, profitable business decisions.',
      },
    ],
    importance: [
      {
        title: 'Inventory Costs',
        reason: 'Poor inventory management eats 15-30% of retail profits—accurate tracking saves money.',
      },
      {
        title: 'Sales Velocity',
        reason: 'Knowing what sells fastest helps you stock smarter and earn more.',
      },
      {
        title: 'Customer Satisfaction',
        reason: 'Available products mean happy customers; stockouts frustrate and send them to competitors.',
      },
    ],
    features: [
      'Real-time stock tracking',
      'Automated reorder alerts',
      'Sales trend analysis',
      'Product performance reports',
      'Multi-location management',
      'Barcode scanning',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Reduce inventory costs by 15-25% and increase sales by 20%',
    contactCTA: 'Optimize Your Inventory',
  },
  {
    id: 'mpesa-integration',
    slug: 'mpesa-integration',
    title: 'MPESA Payment Integration',
    shortDescription: 'Accept secure MPESA payments directly from your website',
    icon: 'CreditCard',
    returns: [
      {
        title: 'Instant Payments',
        description: 'Customers pay directly via MPESA—money lands in your account in seconds.',
      },
      {
        title: 'Increased Sales',
        description: 'Easy payment options increase conversion by 30-40%.',
      },
      {
        title: 'Payment Security',
        description: 'Bank-level security protects your customers and your business.',
      },
      {
        title: 'Reduced Unpaid Invoices',
        description: 'Real-time payments eliminate chasing customers for money.',
      },
    ],
    importance: [
      {
        title: 'Payment Expectations',
        reason: 'Kenyans expect MPESA—not offering it costs you customers.',
      },
      {
        title: 'Cash Flow',
        reason: 'Instant payments improve working capital—critical for growing businesses.',
      },
      {
        title: 'Trust & Legitimacy',
        reason: 'Professional payment systems build customer confidence.',
      },
    ],
    features: [
      'MPESA payment gateway',
      'Instant verification',
      'Automated receipts',
      'Transaction reports',
      'Invoice integration',
      '24/7 support',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Process 50-100 payments monthly with zero manual work',
    contactCTA: 'Setup MPESA Payments',
  },
  {
    id: 'billing-system',
    slug: 'billing-system',
    title: 'Automated Billing System',
    shortDescription: 'Create invoices, automate reminders, and manage subscriptions',
    icon: 'FileText',
    returns: [
      {
        title: 'Recurring Revenue',
        description: 'Set up subscriptions that bill automatically—predictable, passive income.',
      },
      {
        title: 'Faster Payments',
        description: 'Automated reminders increase on-time payment by 50%.',
      },
      {
        title: 'Professional Image',
        description: 'Polished invoices improve client perception and payment compliance.',
      },
      {
        title: 'Time Savings',
        description: 'Eliminate manual invoicing—save 5+ hours weekly.',
      },
    ],
    importance: [
      {
        title: 'Cash Collection',
        reason: 'Slow payments hurt cash flow; automation ensures fast, reliable collection.',
      },
      {
        title: 'Subscription Model',
        reason: 'Recurring revenue is the most profitable business model—automation enables it.',
      },
      {
        title: 'Scalability',
        reason: 'Manual invoicing doesn\'t scale; systems handle thousands of invoices.',
      },
    ],
    features: [
      'Invoice templates',
      'Recurring billing',
      'Payment reminders',
      'Subscription management',
      'Late payment notifications',
      'Integration with payment gateways',
    ],
    pricing: {
      amount: 500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Collect payments 40% faster and build recurring revenue streams',
    contactCTA: 'Setup Billing Automation',
  },
  {
    id: 'marketing-tools',
    slug: 'marketing-tools',
    title: 'AI Marketing Tools',
    shortDescription: 'Generate content, schedule posts, and launch campaigns effortlessly',
    icon: 'Share2',
    returns: [
      {
        title: 'Content at Scale',
        description: 'Create weeks of social media content in hours with AI assistance.',
      },
      {
        title: 'Consistent Visibility',
        description: 'Regular posts keep your brand top-of-mind—engagement and sales increase.',
      },
      {
        title: 'Multi-Channel Reach',
        description: 'Schedule to all platforms at once—reach more customers with less effort.',
      },
      {
        title: 'Cost Savings',
        description: 'Replace expensive copywriters and designers with AI—90% cost reduction.',
      },
    ],
    importance: [
      {
        title: 'Social Media Presence',
        reason: 'Consistent content builds audience; sporadic posting wastes the platform.',
      },
      {
        title: 'Customer Engagement',
        reason: 'Active businesses on social media earn 5x more customer trust.',
      },
      {
        title: 'Competitive Edge',
        reason: 'Well-marketed businesses outcompete silent ones—you must be visible.',
      },
    ],
    features: [
      'AI content generation',
      'Social scheduling',
      'Email campaign builder',
      'SMS marketing',
      'Performance analytics',
      'Content calendar',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Reach 2-3x more customers with consistent marketing campaigns',
    contactCTA: 'Launch Your Marketing',
  },
  {
    id: 'business-assistant',
    slug: 'business-assistant',
    title: 'AI Business Assistant',
    shortDescription: 'Get smart insights and automated reports powered by AI',
    icon: 'Brain',
    returns: [
      {
        title: 'Strategic Insights',
        description: 'AI identifies growth opportunities, cost savings, and risks you might miss.',
      },
      {
        title: 'Faster Planning',
        description: 'Get comprehensive business reports in minutes instead of days.',
      },
      {
        title: 'Better Decisions',
        description: 'Data-backed recommendations reduce guesswork, improve success rate.',
      },
      {
        title: 'Competitive Intelligence',
        description: 'Stay ahead by understanding market trends and competitor moves.',
      },
    ],
    importance: [
      {
        title: 'Business Strategy',
        reason: 'Without insights, strategy is guesswork; AI turns data into actionable plans.',
      },
      {
        title: 'Growth Acceleration',
        reason: 'Fast-growing businesses use AI insights; slow ones rely on intuition.',
      },
      {
        title: 'Risk Management',
        reason: 'AI identifies problems early, preventing costly mistakes.',
      },
    ],
    features: [
      'Business analytics',
      'Performance reports',
      'Predictive forecasting',
      'Opportunity identification',
      'Competitor analysis',
      'Custom insights',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Identify 5-10 new growth opportunities and cost-saving initiatives monthly',
    contactCTA: 'Get Your AI Business Assistant',
  },
  {
    id: 'multi-branch',
    slug: 'multi-branch',
    title: 'Multi-Branch Management',
    shortDescription: 'Manage multiple locations with unified systems and staff tracking',
    icon: 'Building',
    returns: [
      {
        title: 'Centralized Control',
        description: 'Manage all branches from one dashboard—consistency across locations.',
      },
      {
        title: 'Performance Visibility',
        description: 'See which branches perform best and why—optimize underperformers.',
      },
      {
        title: 'Scalable Growth',
        description: 'Add locations without adding management complexity or costs.',
      },
      {
        title: 'Staff Accountability',
        description: 'Track individual and branch performance—reward top performers.',
      },
    ],
    importance: [
      {
        title: 'Growth Control',
        reason: 'Managing branches manually leads to inconsistency and lost profits—systems scale.',
      },
      {
        title: 'Quality Assurance',
        reason: 'All locations must maintain standards; visibility ensures consistency.',
      },
      {
        title: 'Financial Management',
        reason: 'Track each location\'s profitability independently—optimize pricing and operations.',
      },
    ],
    features: [
      'Centralized dashboard',
      'Branch performance tracking',
      'Staff management',
      'Role-based permissions',
      'Consolidated reporting',
      'Inventory sync across branches',
    ],
    pricing: {
      amount: 1500,
      currency: 'USD',
      type: 'one-time',
    },
    roiHighlight: 'Manage 3-5 branches with 50% less management overhead',
    contactCTA: 'Setup Multi-Branch System',
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getAllServices(): ServiceData[] {
  return servicesData
}
