export const siteConfig = {
  personal: {
    name: 'Yanuar Rizky',
    firstName: 'YANUAR',
    lastName: 'RIZKY',
    role: 'Motion Graphic & UI/UX Designer',
    bio: 'Crafting digital experiences that tell stories and work seamlessly. Blending motion graphics and UI/UX to deliver intuitive interfaces, living brands, and lasting impressions.',
    aboutQuote: '“Design is not just what it looks like and feels like. Design is how it works and speaks.”',
    aboutParagraphs: [
      "I'm a motion graphic and UI/UX designer who believes that great design comes from the intersection of strong storytelling, precise visual execution, and a deep understanding of user needs. With a creative, explorative, and adaptive approach, I translate ideas into visual work that doesn't just function well, but also leaves a lasting impression.",
      "With experience as a UI/UX designer at a startup, a video editor for a YouTube channel, and a freelance motion graphic designer, I've learned to adapt across industries from building intuitive interfaces to bringing brands to life through motion. To me, design isn't just about how it looks, but how it works, speaks, and tells its story."
    ],
    profileImage: '/images/yanuar-bulat.png',
    aboutImage: '/images/aboutme2.png', // Reusing profile image based on design, can swap here
    email: 'yanuarrizky214@gmail.com',
    whatsapp: '+62 896-6301-8197',
    waLink: 'https://wa.me/6289663018197',
    yearsExperience: '4+',
    projectsFinished: '20+',
    satisfiedClients: '15+',
    cvLink: '/CV_Yanuar_Rizky.pdf',
  },
  googleSheetScriptUrl: 'https://script.google.com/macros/s/AKfycbwGOUlkxja8QqwrKAm6mBcHnlVNlnebIKoBvycpI4ivHmhV-E_2SWp0o2OZ1Rw6DzeoUA/exec',
  socials: [
    { name: 'LinkedIn', url: 'linkedin.com/in/yanuar-rizki-94805b23b', id: 'linkedin' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@hatsu6961?is_from_webapp=1&sender_device=pc', id: 'tiktok' },
    { name: 'Instagram', url: 'https://www.instagram.com/hatsu_214?stkn=MTMwd242bnIyM284bg==', id: 'instagram' },
  ],
  capabilities: [
    { name: 'Motion Graphic Designer', percentage: 90, desc: 'Motion design for ads, social content, and brand visual assets. Creating seamless kinetic transitions and micro-interactions.', color: '#ffffff' },
    { name: 'UI/UX Designer', percentage: 85, desc: 'Human-centered interfaces, wireframing, high-fidelity prototypes, design system curation, and cross-platform UX validation.', color: '#ffffff' }
  ],
  tools: [
    { name: 'After Effect', icon: '/icons/After Effect.png' },
    { name: 'Premiere Pro', icon: '/icons/Premiere Pro.png' },
    { name: 'Figma', icon: '/icons/Figma.png' },
    { name: 'Capcut', icon: '/icons/Capcut.png' },
    { name: 'Illustrator', icon: '/icons/Illustrator.png' },
    { name: 'Photoshop', icon: '/icons/Photoshop.png' },
  ],
  portfolio: [
    { 
      title: 'SaaS Figma animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'A personal project explaining the Figma application workflow, component architecture, and cloud collaboration.',
      thumbnail: '/images/portfolio/Figma.png',
      video: '/videos/Figma.mp4',
      accent: '#F25623'
    },
    { 
      title: 'SaaS Chat GPT animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'A personal project explaining the Chat GPT generative application, prompts handling, and AI interface mechanics.',
      thumbnail: '/images/portfolio/Chat Gpt.png',
      video: '/videos/Chat Gpt.mp4',
      accent: '#F25623'
    },
    { 
      title: 'SaaS Pinterest animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'A personal project explaining the Pinterest visual search, curated boards, and creative discovery engine.',
      thumbnail: '/images/portfolio/Pinterest.png',
      video: '/videos/Pinterest.mp4',
      accent: '#F25623'
    },
    { 
      title: 'SaaS Gojek animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'A promotional explainer video visualizing on-demand ride-hailing and localized digital logistics ecosystem.',
      thumbnail: '/images/portfolio/Gojek.png',
      video: '/videos/Gojek.mp4',
      accent: '#F25623'
    },
    { 
      title: 'SaaS Vaelun animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'A promotional motion video crafted for a German trading community platform highlighting real-time market signals.',
      thumbnail: '/images/portfolio/Vaelun.png',
      video: '/videos/Vaelun.mp4',
      accent: '#F25623'
    },
    { 
      title: 'SaaS Discord animation', 
      category: 'motion',
      type: 'Motion Graphic',
      tools: 'Ae, Pr',
      desc: 'An energetic walkthrough showcasing community server setup, voice channels, and bot integrations.',
      video: '/videos/Discord.mp4',
      accent: '#F25623'
    },
    { 
      title: "Time Won't Wait",
      category: 'uiux',
      type: 'UI/UX Designer',
      tools: 'Figma',
      desc: 'A luxury e-commerce watch store website interface designed for connoisseurs seeking timeless elegance and checkout velocity.',
      thumbnail: '/images/portfolio/195.png',
      prototypeUrl: 'https://www.figma.com/proto/eySVfZxn07UHqzSXgKVYt0/yanuar?node-id=221-1650&t=nukABymmIBsIwc8P-1',
    },
    { 
      title: 'ANIWEB', 
      category: 'uiux',
      type: 'UI/UX Designer',
      tools: 'Figma',
      desc: 'A sleek anime streaming and community platform offering episode cataloging, watchlist tracking, and interactive discussions.',
      thumbnail: '/images/portfolio/194.png',
      prototypeUrl: 'https://www.figma.com/proto/eySVfZxn07UHqzSXgKVYt0/yanuar?node-id=27-14&t=nukABymmIBsIwc8P-1',
    },
    { 
      title: 'Mangan Yuk', 
      category: 'uiux',
      type: 'UI/UX Designer',
      tools: 'Figma',
      desc: 'A mobile food ordering and purchasing application designed to streamline contactless menus, cart checkout, and vendor discovery.',
      thumbnail: '/images/portfolio/193.png',
      prototypeUrl: 'https://www.figma.com/proto/BTwWkmEETLdjNciaZKguKJ/Design?node-id=1-3&t=HLHpaKAqq4OeGUxQ-1',
    },
    { 
      title: 'Ceramic Village', 
      category: 'design',
      type: 'Campaign • Design',
      tools: 'Figma, Ps',
      desc: 'Holistic marketing and branding identity campaign designed to revitalize local heritage ceramic crafts for modern audiences.',
      thumbnail: '/images/portfolio/192.png',
      visualClass: 'from-cyan-950 via-zinc-900 to-black border-cyan-500/20',
      badgeClass: 'bg-cyan-900/60 text-cyan-300 border-cyan-400/30'
    },
    { 
      title: 'Ceramic Village Poster', 
      category: 'design',
      type: 'Poster • Design',
      tools: 'Figma, Ps',
      desc: 'Visual poster and presentation board design for an exhibition app showcase hosted at the university.',
      thumbnail: '/images/portfolio/191.png',
      visualClass: 'from-emerald-950 via-zinc-900 to-black border-emerald-500/20',
      badgeClass: 'bg-emerald-900/60 text-emerald-300 border-emerald-400/30'
    }
  ],
}
