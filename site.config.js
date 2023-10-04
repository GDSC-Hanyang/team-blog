const CONFIG = {
  // profile setting (required)
  profile: {
    name: "GDSC Hanyang",
    image: "/gdsc_hyu_logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "GDSC 한양대 팀 블로그",
    bio: "🤗💻🙋‍♂️🔥",
    email: "hanyanggdsc@gmail.com",
    linkedin: "",
    github: "GDSC-Hanyang",
    instagram: "gdsc_hanyang",
  },
  projects: [
    {
      name: `Landing page`,
      href: "https://gdsc-hanyang.oopy.io/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "GDSC Hanyang Team blog",
    description: "GDSC 한양 팀 블로그",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://gdsc-hanyang.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL:
    "https://og-image-korean.vercel.app/GDSC%20Hanyang%20Team%20Blog.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "GDSC-Hanyang/team-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = CONFIG
