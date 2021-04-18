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
    `%cПривет! 👋\nЯ - %c${MY_NAME}%c. Фронтенд-разработчик 👨‍💻\nОписание этого проекта находится здесь 👉 https://github.com/michaelany/michaelany/blob/master/README.md 👈`,
    consoleTextStyle,
    `${consoleTextStyle} font-weight: bold;`,
    consoleTextStyle
  )
}
