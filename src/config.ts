import AppLogo from "./assets/icons/app-logo.svg";
import Official from "./assets/icons/official.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
// import Medium from "./assets/icons/medium.svg";
import Youtube from "./assets/icons/youtube.svg";
import Discord from "./assets/icons/discord.svg";
import Instagram from "./assets/icons/instagram.svg";
import Telegram from "./assets/icons/telegram.svg";
import GitHub from "./assets/icons/github.svg";
import Email from "./assets/icons/email.svg";

const config = {
  logoUrl: AppLogo,
  favicon: "../favicon.ico",
  title: "Wassup it's Juliaaaaaa",
  description:
    "Give me the puppy!!!!!",
  links: [
    {
      key: "official",
      label: "Official Website",
      iconUrl: Official,
      redirectUrl: "https://spheron.network/",
    },
    {
      key: "twitter",
      label: "Twitter",
      iconUrl: Twitter,
      redirectUrl: "https://twitter.com/SpheronFdn",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/company/spheron/",
    },
    // {
    //   "key": "medium",
    //   "label": "Medium",
    //   "iconUrl": Medium,
    //   "redirectUrl": "",
    // },
    {
      key: "youtube",
      label: "YouTube",
      iconUrl: Youtube,
      redirectUrl: "https://www.youtube.com/channel/UCIe3FlAWg06kGOrm1-c8oJg",
    },
    {
      key: "discord",
      label: "Discord",
      iconUrl: Discord,
      redirectUrl: "https://discord.com/invite/ahxuCtm",
    },
    {
      key: "instagram",
      label: "Instagram",
      iconUrl: Instagram,
      redirectUrl: "https://www.instagram.com/spheronhq/",
    },
    {
      key: "telegram",
      label: "Telegram",
      iconUrl: Telegram,
      redirectUrl: "https://t.me/spheron",
    },
    {
      key: "github",
      label: "GitHub",
      iconUrl: GitHub,
      redirectUrl: "https://github.com/spheronFdn/",
    },
    {
      key: "email",
      label: "Email Support",
      iconUrl: Email,
      redirectUrl: "mailto:info@spheron.network",
    },
  ],
};

export default config;
