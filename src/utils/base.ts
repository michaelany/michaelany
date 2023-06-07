import {MY_NAME} from '@data/common'
import {DURATION} from '@styles/theme'

export const handleAppLoaded = () => {
  const preloader = document.getElementById('preloader') as HTMLElement
  preloader.classList.remove('Preloader_show')
  document.body.style.overflow = 'auto'
  setTimeout(() => preloader.remove(), DURATION.longer)
}

export const logConsoleWelcomeMessage = () => {
  const consoleTextStyle = 'font-size: 16px;'
  console.log(
    `%cHi there! 👋 \nI'm %c${MY_NAME}%c, a frontend developer & lead software engineer 👨‍💻\nDetails about this project here 👉 https://github.com/michaelany/michaelany#portfolio-project`,
    consoleTextStyle,
    `${consoleTextStyle} font-weight: bold;`,
    consoleTextStyle
  )
}
