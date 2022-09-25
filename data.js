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
    url: "https://twitter.com/thefakequake",
    id: "thefakequake",
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
    url: "https://github.com/thefakequake",
    id: "thefakequake",
    icon: <FaGithub />
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/thefakequake",
    id: "thefakequake",
    icon: <FaTwitch />
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
    name: "QuaKe Logo Generator",
    url: "https://thefakequake.github.io",
    image: "/pixel_quake.png",
    title: "One gradient, infinite possibilities",
    description: "A QuaKe pixel logo generator built with Python for the browser."
  },
  {
    name: "Evengen",
    url: "https://github.com/thefakequake/evengen",
    image: "/golang.png",
    title: "Discord API made simple(r)",
    description:
      "A Markdown parser that creates Go structs from the Discord API docs. " +
      "Although a bit inconsistent, most of the output it produces is usable code which saves a " +
      "huge amount of time."
  },
  {
    name: "gopartpicker",
    url: "https://github.com/thefakequake/gopartpicker",
    image: "/golang.png",
    title: "PCPartPicker in Go",
    description:
      "gopartpicker is an easy to use PCPartPicker scraping wrapper that allows you to integrate " +
      "PCPartPicker into your Go applications."
  },
  {
    name: "PartMatcher",
    url: "https://github.com/thefakequake/partmatcher",
    image: "/partmatcher.png",
    title: "Building a PC. Simplified.",
    description:
      "PartMatcher is a cancelled PCPartPicker-like website that planned to take the concept " +
      "of a PC part manage further than ever before. Unfortunately, the project was cancelled in mid 2021."
  },
  {
    name: "quakechat",
    url: "https://github.com/thefakequake/quakechat",
    image: "/quakechat.png",
    title: "The world's worst messaging service.",
    description:
      "Bored of using mature and stable communication services like Discord? " +
      "Me neither. But check out quakechat anyways, it's pretty cool."
  },
  {
    name: "Old PartsBot",
    url: "https://github.com/thefakequake/Old-PartsBot",
    image: "/partsbot.png",
    title: "This code sucks",
    description:
      "Old PartsBot was the original PartsBot, written in Python. It has been replaced " +
      "by the newer one written in Go."
  },
  {
    name: "PyPartPicker",
    url: "https://github.com/thefakequake/pypartpicker",
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
    url: "https://github.com/thefakequake/MCHotbarScroll",
    image: "/python.png",
    title: "Autoscrolling has never been this easy.",
    description:
      "Making randomized patterns of blocks in Minecraft can be annoying, especially " +
      "if you have to scroll while trying to place. MCHotbarScroll makes this frustrating task " +
      "easy, and lets you alter the settings to your preference."
  },
  {
    name: "Coronapyrus",
    url: "https://github.com/thefakequake/coronapyrus",
    image: "/python.png",
    title: "Don't run this on your machine.",
    description: "Seriously, don't. You will regret it."
  }
]

export const languages = [
  {
    name: "Go",
    image: "/golang.png"
  },
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
    Storage: "Kingston A2000 500GB NVMe SSD + WD Blue SN550 1TB NVMe SSD",
    "Graphics Card": "MSI RX 5500 XT 8GB Gaming X",
    Case: "Aerocool Aero One Mini Eclipse",
    "Power Supply": "Cooler Master MWE Bronze V2 550W 80+ Bronze"
  },
  Peripherals: {
    Mouse: "Logitech G PRO Wireless + Razer Viper Mini (old)",
    Keyboard: "Tecware Phantom 88 TKL Outemu Red",
    Mousepad: "Razer Gigantus V2 Medium",
    Monitor: "AOC 24G2U 1080p 144hz IPS",
    Headphones: "Superlux HD668B (broken)",
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
    `Go, because it just makes so much sense. Although it seems limiting at first with its sometimes
bizarre semantics and unintuitive interfaces, it's a modern language that excels at keeping things simple
while maintaining the performance and reliability of your application.`
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
  ["Why don't you use Linux?", `It doesn't have the app support that I need.`],
  [
    "Light or dark theme?",
    `Dark, obviously. This site is dark theme by default.`
  ],
  ["Why did you capitalise a random letter in your name?", "idk"],
  [
    "How did you make your profile picture?",
    "A friend of mine called Bogdan made the original one, and I converted it to a pixel form for the hell of it using a Python script."
  ],
  [
    "Have you played the game Quake?",
    "No, I hadn't even heard of the game when I chose my username."
  ]
]
