import {MY_NAME, CONTACT_LINK} from '#data/common'
import {DURATION} from '#styles/theme'

export const handleAppLoaded = () => {
  const preloader = document.getElementById('preloader') as HTMLElement
  document.body.style.overflow = 'auto'
  preloader.classList.remove('Preloader_show')
  setTimeout(() => preloader.remove(), DURATION.longer)
}

export const logConsoleWelcomeMessage = () => {
  const consoleTextStyle = 'font-size: 16px;'
  const consoleBoldTextStyle = `${consoleTextStyle} font-weight: bold;`
  console.log(
    `%cHi there! 👋\nI'm %c${MY_NAME}%c, a %cLead Frontend Engineer%c 👨‍💻 | %cYouTuber%c 📹\nDetails about this project ${CONTACT_LINK.gitHub.href}/michaelany#portfolio-project 🚀\nMy YouTube channel ${CONTACT_LINK.youTube.href} 📺`,
    consoleTextStyle,
    consoleBoldTextStyle,
    consoleTextStyle,
    consoleBoldTextStyle,
    consoleTextStyle,
    consoleBoldTextStyle,
    consoleTextStyle
  )
}
