import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaReddit,
  FaSteam
} from "react-icons/fa"

export const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/405798011172814868",
    id: "QuaKe#9535",
    icon: <FaDiscord />
  },
  {
    name: "Twitter",
    url: "https://twitter.com/quakecodes",
    id: "quakecodes",
    icon: <FaTwitter />
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCtOKqv3Jh7i4_nmP3PxhzxQ",
    id: "thefakequake",
    icon: <FaYoutube />
  },
  {
    name: "GitHub",
    url: "https://github.com/quakecodes",
    id: "quakecodes",
    icon: <FaGithub />
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/quake8782",
    id: "quake8782",
    icon: <FaTwitch />
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/MLG_G0D",
    id: "u/MLG_GOD",
    icon: <FaReddit />
  },
  {
    name: "Steam",
    url: "https://steamcommunity.com/id/thefakequake/",
    id: "thefakequake",
    icon: <FaSteam />
  }
]

export const pages = [
  {
    name: "About me",
    url: "/aboutme"
  },
  {
    name: "Projects",
    url: "/projects"
  },
  {
    name: "FAQ",
    url: "/faq"
  }
]

export const projects = [
  {
    name: "PartsBot",
    url: "https://github.com/quakecodes/PartsBot",
    image: "/partsbot.png",
    title: "This code still sucks",
    description:
      "PartsBot is a Discord bot that fetches information from PCPartPicker from Discord. " +
      "Essential for any PC/tech server, and written in Go using discordgo."
  },
  {
    name: "gopartpicker",
    url: "https://github.com/quakecodes/gopartpicker",
    image: "/golang.png",
    title: "PCPartPicker in Go",
    description:
      "gopartpicker is an easy to use PCPartPicker scraping wrapper that allows you to integrate " +
      "PCPartPicker into your Go applications."
  },
  {
    name: "PartMatcher",
    url: "https://github.com/quakecodes/partmatcher",
    image: "/partmatcher.png",
    title: "Building a PC. Simplified.",
    description:
      "PartMatcher is a cancelled PCPartPicker-like website that planned to take the concept " +
      "of a PC part manage further than ever before. Unfortunately, the project was cancelled in mid 2021."
  },
  {
    name: "quakechat",
    url: "https://github.com/quakecodes/quakechat",
    image: "/quakechat.png",
    title: "The world's worst messaging service.",
    description:
      "Bored of using mature and stable communication services like Discord? " +
      "Me neither. But check out quakechat anyways, it's pretty cool."
  },
  {
    name: "Old PartsBot",
    url: "https://github.com/quakecodes/Old-PartsBot",
    image: "/partsbot.png",
    title: "This code sucks",
    description:
      "Old PartsBot was the original PartsBot, written in Python. It has been replaced " +
      "by the newer one written in Go."
  },
  {
    name: "PyPartPicker",
    url: "https://github.com/quakecodes/pypartpicker",
    image: "/python.png",
    title: "PCPartPicker in Python.",
    description:
      "If PartsBot isn't enough for you, PyPartPicker provides a simple " +
      "yet powerful API to integrate PCPartPicker into your applications. Whether you want to " +
      "make a stock/price checker on parts or automatically rate lists out of 10, PyPartPicker " +
      "gives you the tooling to do so."
  },
  {
    name: "MCHotbarScroll",
    url: "https://github.com/quakecodes/MCHotbarScroll",
    image: "/python.png",
    title: "Autoscrolling has never been this easy.",
    description:
      "Making randomized patterns of blocks in Minecraft can be annoying, especially " +
      "if you have to scroll while trying to place. MCHotbarScroll makes this frustrating task " +
      "easy, and lets you alter the settings to your preference."
  },
  {
    name: "Coronapyrus",
    url: "https://github.com/quakecodes/coronapyrus",
    image: "/python.png",
    title: "Don't run this on your machine.",
    description: "Seriously, don't. You will regret it."
  }
]

export const languages = [
  {
    name: "Python",
    image: "/python.png"
  },
  {
    name: "JavaScript",
    image: "/javascript.png"
  },
  {
    name: "TypeScript",
    image: "/typescript.png"
  },
  {
    name: "HTML",
    image: "/html.png"
  },
  {
    name: "CSS",
    image: "/css.png"
  },
  {
    name: "Go",
    image: "/golang.png"
  },
  {
    name: "C#",
    image: "/csharp.png"
  }
]

export const technologies = [
  {
    name: "React",
    image: "/react.png"
  },
  {
    name: "Next.js",
    image: "/nextjs.png"
  },
  {
    name: "Flask",
    image: "/flask.png"
  },
  {
    name: "Express",
    image: "/express.png"
  },
  {
    name: "MongoDB",
    image: "/mongodb.png"
  },
  {
    name: "ASP.NET",
    image: "/aspnet.png"
  }
]

export const setup = {
  PC: {
    CPU: "Intel Core i5-10400F Hex-core",
    Motherbooard: "MSI B460M PRO-VDH WIFI",
    Memory: "Corsair Vengeance 4x8GB 3200MHz CL16",
    Storage: "Kingston A2000 500GB NVMe SSD",
    "Graphics Card": "MSI RX 5500 XT 8GB Gaming X",
    Case: "Aerocool Aero One Mini Eclipse",
    "Power Supply": "Cooler Master MWE Bronze V2 550W 80+ Bronze"
  },
  Peripherals: {
    Mouse: "Razer Viper Mini",
    Keyboard: "Tecware Phantom 88 TKL Outemu Red",
    Mousepad: "Razer Gigantus V2 Medium",
    Monitor: "AOC 24G2U 1080p 144hz IPS",
    Microphone: "Fifine K669",
    Controller: "Xbox One Wireless Bluetooth Controller"
  },
  Other: {
    "Raspberry Pi": "Pi 3B 1GB RAM"
  }
}

export const faq = [
  [
    "Why did you make this website?",
    `Mainly to practice my React and TypeScript skills. This is my first ever TypeScript project and
 I'm still getting to grips with the language. I also think this website will be useful for hosting
 important resources, and giving more insight to myself for other people.`
  ],
  [
    "When did you get into coding?",
    `I've been interested in programming for a while, ever since I used Scratch years ago. I never
 really tried a proper programming language until early-mid 2020 though, when I started learning
 Python. It's all kind of unravelled from there.`
  ],
  [
    "What's your favourite programming language?",
    `Probably Go, its a very flexible language that offers speed while keeping your projects simple.
 I've used it to make bots in DiscordGo and I've even written a PCPartPicker scraper in it. If I could
 improve it, I would copy and paste the TypeScript type system into it.`
  ],
  [
    "What's your favourite video game?",
    `Minecraft, without a doubt. Although I've had a lot of fun playing other games, I always come back to
 Minecraft. There's so much content in it, through vanilla as well as modded. I've run multiple Minecraft
 servers for my friends, and I've programmed utilities for them as well as hosted one on a VPS.`
  ],
  [
    "What do you use your Raspberry Pi for?",
    "Hosting Discord bots or other scripts that I choose to have running 24/7."
  ],
  [
    "Why don't you use Linux?",
    `I play a lot of games, and Linux hasn't gotten to the point where I can comfortably say that a popular 
 game will be supported. There's also probably a lot of programs that I depend on that aren't on Linux. I
 really like Linux though, especially the terminal.`
  ],
  [
    "Light or dark theme?",
    `Dark, obviously. Light theme makes my eyes bleed. If you're reading this on light theme now I strongly
 recommend hitting that toggle on the right of the Navbar.`
  ],
  ["Why did you capitalise a random letter in your name?", "idk"],
  [
    "How did you make your profile picture?",
    "I didn't. A Discord friend of mine called Bogdan did."
  ],
  [
    "Have you played the game Quake?",
    "No, but it was a revolutionary game that changed the industry and I respect it for that."
  ]
]
