import type { Locale } from "@/i18n/routing";

export type JourneyStage = {
  index: string;
  title: string;
  description: string;
};

export type ImpactStat = {
  value: string;
  label: string;
  note?: string;
};

export type ProjectStatus = "completed" | "beta" | "ongoing";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  meta?: string;
  overview: string;
  context: string;
  challenge: string;
  role: string;
  strategy: string;
  achievements: string;
  results: string;
  url?: string;
  image: string;
};

export type ExpertiseCategory = {
  title: string;
  items: string[];
};

export type Venture = {
  name: string;
  role: string;
  status: string;
  description: string;
  url?: string;
};

type Content = {
  journey: JourneyStage[];
  impact: ImpactStat[];
  projects: Project[];
  expertise: ExpertiseCategory[];
  ventures: Venture[];
};

const ar: Content = {
  journey: [
    {
      index: "01",
      title: "الهندسة",
      description:
        "أساس تقني في الهندسة الميكانيكية والتنفيذ الميداني، في مشاريع صناعية وبنية تحتية."
    },
    {
      index: "02",
      title: "إدارة المشاريع",
      description:
        "تخطيط وتنسيق وتنفيذ، مع وعي دائم بالتكلفة والجدول الزمني حتى تسليم المشروع."
    },
    {
      index: "03",
      title: "العمليات التشغيلية",
      description:
        "إدارة اللوجستيات والموارد، وتنسيق العمليات، وقيادة فرق العمل الميدانية."
    },
    {
      index: "04",
      title: "التنفيذ الاستراتيجي",
      description:
        "ربط أولويات العمل بالتنفيذ التشغيلي الفعلي على الأرض."
    },
    {
      index: "05",
      title: "ريادة الأعمال",
      description: "بناء مبادرات تجارية جديدة، وتأسيس LEGACY من فكرة إلى منتج."
    }
  ],
  impact: [
    { value: "+15", label: "سنة خبرة مهنية" },
    {
      value: "120",
      label: "قيادة فريق تشغيلي",
      note: "نمو من 7 إلى ~120 فردًا — عمليات نقل الحجاج"
    },
    {
      value: "4.5M SAR",
      label: "مشروع حماية من الحريق (HCIS) مكتمل"
    },
    { value: "7 أشهر وأسبوع", label: "مدة تنفيذ المشروع أعلاه" }
  ],
  projects: [
    {
      id: "ports",
      title: "مشاريع البنية التحتية والموانئ الصناعية",
      status: "completed",
      meta: "ميناء جدة الإسلامي · ميناء الملك عبدالعزيز بالدمام",
      overview:
        "خبرة هندسية وإدارية ضمن بيئات موانئ رئيسية، تشمل التنسيق الفني والتنفيذ الميداني.",
      context:
        "مشاريع بنية تحتية وصناعية ضمن منشآت ذات متطلبات تشغيلية وأمنية صارمة.",
      challenge:
        "تنسيق العمل الفني بين أطراف متعددة ضمن بيئة تشغيلية حساسة زمنيًا.",
      role: "تنسيق هندسي وتنفيذ ميداني ضمن فريق المشروع.",
      strategy:
        "تطبيق منهجيات تنفيذ منظمة تراعي معايير الموانئ والجهات التشغيلية.",
      achievements: "إتمام الأعمال الفنية المطلوبة ضمن بيئة تشغيلية معقدة.",
      results: "— سيُستكمل عند توفر تفاصيل إضافية قابلة للنشر.",
      image: "/images/projects/ports-placeholder.svg"
    },
    {
      id: "hcis-firefighting",
      title: "نظام الحماية من الحريق — HCIS",
      status: "completed",
      meta: "4.5 مليون ريال · 7 أشهر وأسبوع",
      overview:
        "مشروع حماية من الحريق مكتمل بالكامل ضمن متطلبات الامتثال HCIS، بقيمة 4.5 مليون ريال.",
      context: "منشأة صناعية تخضع لمتطلبات امتثال HCIS الصارمة.",
      challenge:
        "تسليم نطاق العمل كاملًا ضمن ميزانية ثابتة وجدول زمني مشدّد.",
      role: "إدارة المشروع من التخطيط حتى التسليم النهائي.",
      strategy:
        "جدولة دقيقة، تنسيق مع المقاولين من الباطن، ومتابعة لصيقة للمشتريات.",
      achievements:
        "تسليم المشروع في الموعد المحدد، ضمن الميزانية، وبكامل النطاق المطلوب.",
      results: "إنجاز بقيمة 4.5 مليون ريال خلال 7 أشهر وأسبوع واحد.",
      image: "/images/projects/hcis-placeholder.svg"
    },
    {
      id: "logistics",
      title: "إدارة اللوجستيات والعمليات",
      status: "completed",
      meta: "نمو الفريق من 7 إلى ~120 فردًا",
      overview:
        "قيادة عمليات لوجستية وتشغيلية ضمن سياق عمليات نقل الحجاج، شملت تنسيق الموارد والنقل.",
      context:
        "عمليات تشغيلية موسمية عالية الكثافة تتطلب قدرة سريعة على التوسّع.",
      challenge: "توسيع الفريق التشغيلي بسرعة دون التأثير على جودة الخدمة.",
      role: "قيادة العمليات وتنسيق الموارد البشرية واللوجستية.",
      strategy: "بناء هيكل تشغيلي مرن يسمح بالنمو السريع المنظم.",
      achievements:
        "نمو الفريق التشغيلي من 7 إلى ما يقارب 120 فردًا ضمن موسم العمليات.",
      results: "توسّع تشغيلي ناجح دون انقطاع في مستوى الخدمة.",
      image: "/images/projects/logistics-placeholder.svg"
    },
    {
      id: "legacy",
      title: "LEGACY",
      status: "beta",
      meta: "legacy.sa · مؤسس",
      overview:
        "LEGACY سوق رقمي سياحي يربط المرشدين السياحيين المرخصين بالمسافرين عبر تجربة حجز رقمية منظمة.",
      context:
        "مبادرة ريادية ضمن توجهات رؤية 2030 لتطوير القطاع السياحي.",
      challenge:
        "بناء نموذج أعمال سوق رقمي (Marketplace) من الصفر وجذب مزوّدي الخدمة.",
      role: "مؤسس — من تطوير الفكرة إلى بناء المنصة واستراتيجية الشراكات.",
      strategy:
        "تطوير نموذج العمل، بناء المنصة، واستراتيجية استقطاب مزوّدي الخدمة والشركاء.",
      achievements:
        "إطلاق المنصة في مرحلة تجريبية (Beta)، والقبول في برنامج TDF GROW للتسريع السياحي.",
      results:
        "المنصة حاليًا في مرحلة تجريبية (Beta) — دون إيرادات أو حجوزات مدفوعة مؤكدة حتى الآن.",
      url: "https://legacy.sa",
      image: "/images/projects/legacy-placeholder.svg"
    }
  ],
  expertise: [
    {
      title: "إدارة المشاريع والبرامج",
      items: [
        "تخطيط المشاريع",
        "تنفيذ المشاريع",
        "تنسيق المشاريع",
        "إدارة النطاق",
        "إدارة الجدول الزمني",
        "إدارة المخاطر",
        "تنسيق الموارد"
      ]
    },
    {
      title: "الهندسة والعمليات التقنية",
      items: [
        "الهندسة الميكانيكية",
        "الأنظمة الصناعية",
        "أنظمة الحماية من الحريق",
        "الإشراف الفني",
        "عمليات الموقع"
      ]
    },
    {
      title: "إدارة الأعمال والعمليات",
      items: [
        "العمليات التشغيلية",
        "إدارة اللوجستيات",
        "التميز التشغيلي",
        "تحسين العمليات",
        "تحسين استخدام الموارد"
      ]
    },
    {
      title: "القيادة والتنفيذ الاستراتيجي",
      items: [
        "قيادة الفرق",
        "إدارة أصحاب المصلحة",
        "التخطيط الاستراتيجي",
        "التنسيق متعدد الوظائف",
        "اتخاذ القرار"
      ]
    },
    {
      title: "تطوير الأعمال وريادتها",
      items: [
        "تطوير نماذج الأعمال",
        "تطوير الشراكات",
        "تطوير الشركات الناشئة",
        "تحديد الفرص السوقية",
        "بناء العلاقات الاستراتيجية"
      ]
    }
  ],
  ventures: [
    {
      name: "LEGACY",
      role: "مؤسس",
      status: "مرحلة تجريبية (Beta)",
      description:
        "سوق رقمي سياحي يربط المرشدين السياحيين المرخصين بالمسافرين، ضمن توجهات رؤية 2030.",
      url: "https://legacy.sa"
    }
  ]
};

const en: Content = {
  journey: [
    {
      index: "01",
      title: "Engineering",
      description:
        "Technical foundations in mechanical engineering and site execution across industrial projects."
    },
    {
      index: "02",
      title: "Project Management",
      description:
        "Planning, coordination, and execution — with constant awareness of cost and schedule through delivery."
    },
    {
      index: "03",
      title: "Business Operations",
      description:
        "Logistics, resource management, operational coordination, and team leadership."
    },
    {
      index: "04",
      title: "Strategic Execution",
      description: "Connecting business priorities with operational implementation."
    },
    {
      index: "05",
      title: "Entrepreneurship",
      description: "Building business initiatives and developing LEGACY from idea to product."
    }
  ],
  impact: [
    { value: "15+", label: "Years of professional experience" },
    {
      value: "120",
      label: "Operational team leadership",
      note: "Grew from 7 to ~120 — Hajj transportation operations"
    },
    { value: "SAR 4.5M", label: "Completed HCIS firefighting project" },
    { value: "7mo + 1wk", label: "Delivery duration of the project above" }
  ],
  projects: [
    {
      id: "ports",
      title: "Port Infrastructure & Industrial Projects",
      status: "completed",
      meta: "Jeddah Islamic Port · King Abdulaziz Port, Dammam",
      overview:
        "Engineering and project experience within major port environments, including technical coordination and site execution.",
      context:
        "Infrastructure and industrial projects within facilities with strict operational and security requirements.",
      challenge:
        "Coordinating technical work across multiple parties within a time-sensitive operational environment.",
      role: "Engineering coordination and site execution within the project team.",
      strategy:
        "Applying structured execution methodologies aligned with port and operator standards.",
      achievements: "Completed the required technical scope within a complex operational environment.",
      results: "— To be expanded once further publishable detail is available.",
      image: "/images/projects/ports-placeholder.svg"
    },
    {
      id: "hcis-firefighting",
      title: "HCIS Firefighting System Project",
      status: "completed",
      meta: "SAR 4.5M · 7 months + 1 week",
      overview:
        "A fully completed firefighting systems project under HCIS compliance requirements, valued at SAR 4.5 million.",
      context: "An industrial facility subject to strict HCIS compliance requirements.",
      challenge: "Delivering the full scope within a fixed budget and a tight schedule.",
      role: "Project management from planning through final delivery.",
      strategy:
        "Precise scheduling, subcontractor coordination, and close procurement follow-up.",
      achievements: "Delivered on schedule, within budget, and with the full required scope.",
      results: "SAR 4.5M delivered over 7 months and 1 week.",
      image: "/images/projects/hcis-placeholder.svg"
    },
    {
      id: "logistics",
      title: "Logistics & Operations Management",
      status: "completed",
      meta: "Team growth from 7 to ~120",
      overview:
        "Led logistics and operational activity within a Hajj transportation operations context, including resource and transport coordination.",
      context: "A high-intensity seasonal operation requiring rapid scaling.",
      challenge: "Scaling the operational team quickly without compromising service quality.",
      role: "Operations leadership and HR/logistics resource coordination.",
      strategy: "Building a flexible operational structure that enables controlled rapid growth.",
      achievements: "Grew the operational team from 7 to approximately 120 during the operations season.",
      results: "Successful operational scale-up with no drop in service level.",
      image: "/images/projects/logistics-placeholder.svg"
    },
    {
      id: "legacy",
      title: "LEGACY",
      status: "beta",
      meta: "legacy.sa · Founder",
      overview:
        "LEGACY is a digital tourism marketplace connecting licensed independent tour guides with travelers through a structured digital booking experience.",
      context: "An entrepreneurial initiative aligned with Saudi Vision 2030 tourism development goals.",
      challenge: "Building a marketplace business model from scratch and acquiring service providers.",
      role: "Founder — from concept development to platform build and partnership strategy.",
      strategy: "Business model development, platform development, and provider/partnership acquisition strategy.",
      achievements: "Platform launched at beta stage; accepted into the TDF GROW tourism acceleration program.",
      results: "Currently at beta stage — no confirmed revenue or paid bookings yet.",
      url: "https://legacy.sa",
      image: "/images/projects/legacy-placeholder.svg"
    }
  ],
  expertise: [
    {
      title: "Project & Program Management",
      items: [
        "Project Planning",
        "Project Execution",
        "Project Coordination",
        "Scope Management",
        "Schedule Management",
        "Risk Management",
        "Resource Coordination"
      ]
    },
    {
      title: "Engineering & Technical Operations",
      items: [
        "Mechanical Engineering",
        "Industrial Systems",
        "Firefighting Systems",
        "Technical Supervision",
        "Site Operations"
      ]
    },
    {
      title: "Business & Operations Management",
      items: [
        "Business Operations",
        "Logistics Management",
        "Operational Excellence",
        "Process Improvement",
        "Resource Optimization"
      ]
    },
    {
      title: "Leadership & Strategic Execution",
      items: [
        "Team Leadership",
        "Stakeholder Management",
        "Strategic Planning",
        "Cross-functional Coordination",
        "Decision Making"
      ]
    },
    {
      title: "Business Development & Entrepreneurship",
      items: [
        "Business Model Development",
        "Partnership Development",
        "Startup Development",
        "Market Opportunity Identification",
        "Strategic Relationships"
      ]
    }
  ],
  ventures: [
    {
      name: "LEGACY",
      role: "Founder",
      status: "Beta",
      description:
        "A digital tourism marketplace connecting licensed independent tour guides with travelers, aligned with Saudi Vision 2030.",
      url: "https://legacy.sa"
    }
  ]
};

const content: Record<Locale, Content> = { ar, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}
