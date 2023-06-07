import {forwardRef} from 'react'
import {TFunction} from 'react-i18next'
import {Dialog, Button, Grow} from '@material-ui/core'
import {TransitionProps} from '@material-ui/core/transitions'
import {ThumbUpRounded as ThumbUpIcon} from '@material-ui/icons'

import './SuccessDialog.scss'
import messageSentImg from '@assets/img/pictures/message-sent.svg'
import {DURATION} from '@styles/theme'

interface SuccessDialogProps {
  t: TFunction
  open: boolean
  onClose: () => void
}

export default function SuccessDialog({t, open, onClose}: SuccessDialogProps) {
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
  props: TransitionProps & {children?: React.ReactElement<any, any>},
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} timeout={DURATION.standard} />
})
