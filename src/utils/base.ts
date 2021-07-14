import {MY_NAME} from '../data/common'

export const handleAppLoaded = (): void => {
  const preloader: HTMLElement = document.getElementById('preloader')!
  preloader.classList.remove('Preloader_show')
  document.body.style.overflow = 'auto'
  setTimeout(() => preloader.remove(), 1000)
}

export const logConsoleWelcomeMessage = () => {
  const consoleTextStyle = 'font-size: 16px;'
  console.log(
    `%cHi! 👋 \nI'm %c${MY_NAME}%c, a frontend developer 👨‍💻\nMore about this project here 👉 https://github.com/michaelany/michaelany#portfolio-project 👈`,
    consoleTextStyle,
    `${consoleTextStyle} font-weight: bold;`,
    consoleTextStyle
  )
}
