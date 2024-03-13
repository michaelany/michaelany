import {forwardRef} from 'react'
import {TFunction} from 'i18next'
import {Dialog, Button, Grow} from '@mui/material'
import {TransitionProps} from '@mui/material/transitions'
import {ThumbUpRounded as ThumbUpIcon} from '@mui/icons-material'

import './SuccessDialog.scss'
import messageSentImg from '#assets/img/pictures/message-sent.svg'

interface ISuccessDialogProps {
  t: TFunction
  open: boolean
  onClose: () => void
}

export default function SuccessDialog({t, open, onClose}: ISuccessDialogProps) {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      TransitionComponent={Transition}
      onClose={onClose}
    >
      <div className="SuccessDialog">
        <img
          className="SuccessDialog-Image"
          width={80}
          height={80}
          src={messageSentImg}
          alt={t('contact.success.sent')}
        />
        <h2 className="SuccessDialog-Title">{t('contact.success.thank')}!</h2>
        <p className="MainText MainText_noAnimation">
          {t('contact.success.callback')}.
        </p>
        <Button
          className="Button Button_color_green"
          size="large"
          endIcon={<ThumbUpIcon />}
          onClick={onClose}
        >
          {t('contact.success.ok')}
        </Button>
      </div>
    </Dialog>
  )
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {children: React.ReactElement<any, any>},
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />
})
