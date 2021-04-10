import {COLOR} from '../styles/theme'

export const handleAppLoaded = (): void => {
  const preloader: HTMLElement = document.getElementById('preloader')!
  preloader.classList.remove('Preloader_show')
  document.body.style.overflow = 'auto'
  setTimeout(() => preloader.remove(), 1000)
}

export const logConsoleWelcomeMessage = () => {
  const consoleTextStyle = 'font-size: 16px;'
  console.log(
    `%cПривет! 👋🏻\nЯ - %cMichael%c %cAny%c, фронтенд-разработчик 👨🏻‍💻\nРад тебя видеть! 👀😊\n`,
    consoleTextStyle,
    `${consoleTextStyle} color: ${COLOR.blue}; font-weight: bold;`,
    consoleTextStyle,
    `${consoleTextStyle} color: ${COLOR.green}; font-weight: bold;`,
    consoleTextStyle
  )
}
