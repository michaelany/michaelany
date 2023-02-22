import {useState, useEffect} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Snackbar, SnackbarOrigin, IconButton} from '@material-ui/core'
import {CloseRounded as CloseIcon} from '@material-ui/icons'

import './StopWar.scss'
import {ReactComponent as RuUaIcon} from 'assets/icons/ru-ua.svg'
import {BLANK_LINK_PROPS} from 'utils/constants'
import {DURATION} from 'styles/theme'

export default function StopWar() {
  const [open, setOpen] = useState<boolean>(false)
  const {t} = useTranslation()

  useEffect(() => {
    setTimeout(setOpen, DURATION.longest, true)
  }, [])

  const handleClose = (): void => setOpen(false)

  return (
    <Snackbar
      className="StopWar"
      open={open}
      anchorOrigin={anchorOrigin}
      message={
        <>
          <RuUaIcon className="StopWar-Icon" />
          <p>
            <Trans i18nKey="stopWar.text" components={transComponents} />
            <br />
            <a
              {...BLANK_LINK_PROPS}
              className="StopWar-Link Link"
              href="https://war.ukraine.ua/support-ukraine"
            >
              {t('stopWar.firstHelp')}
            </a>{' '}
            🕊{' '}
            <a
              {...BLANK_LINK_PROPS}
              className="StopWar-Link Link"
              href="https://www.stopputin.net/more-ways-to-help"
            >
              {t('stopWar.secondHelp')}
            </a>
          </p>
          <IconButton
            className="StopWar-Close"
            aria-label="Close"
            onClick={handleClose}
          >
            <CloseIcon className="ButtonIcon" />
          </IconButton>
        </>
      }
    />
  )
}

const anchorOrigin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center',
}

const transComponents: JSX.Element[] = [<strong />]
