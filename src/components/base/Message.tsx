import {useState, useEffect} from 'react'
import {Trans} from 'react-i18next'
import {Snackbar, SnackbarOrigin, IconButton} from '@mui/material'
import {CloseRounded as CloseIcon} from '@mui/icons-material'

import './Message.scss'
import santaImg from '#assets/img/pictures/santa.png'
import {DURATION} from '#styles/theme'

export default function Message() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (sessionStorage.messageChecked) return
    setTimeout(setOpen, DURATION.longest, true)
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('messageChecked', JSON.stringify(true))
    setOpen(false)
  }

  return (
    <Snackbar
      className="Message"
      open={open}
      anchorOrigin={anchorOrigin}
      message={
        <>
          <img width={64} height={64} src={santaImg} alt="Santa Claus" />
          <p>
            <Trans i18nKey="message.newYear" components={transComponents} />
          </p>
          <IconButton
            className="Message-Close"
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
  horizontal: 'right',
}

const transComponents = [<strong />]
