import {forwardRef} from 'react'
import {Dialog, Button, PaperProps, Grow} from '@material-ui/core'
import {TransitionProps} from '@material-ui/core/transitions'
import {ThumbUpRounded as ThumbUpIcon} from '@material-ui/icons'

import './SuccessDialog.scss'
import messageSentImg from '../../assets/img/pictures/message-sent.svg'
import {DURATION} from '../../styles/theme'

interface SuccessDialogProps {
  open: boolean
  onClose: () => void
}

const paperProps: PaperProps = {elevation: 0}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement<any, any>},
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} timeout={DURATION.standard} />
})

export default function SuccessDialog({
  open,
  onClose,
}: SuccessDialogProps): JSX.Element {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      TransitionComponent={Transition}
      PaperProps={paperProps}
      onClose={onClose}
    >
      <div className="SuccessDialog">
        <img
          className="SuccessDialog-Image"
          src={messageSentImg}
          alt="Message sent"
        />
        <h2 className="SuccessDialog-Title">Сообщение отправлено. Спасибо!</h2>
        <p className="MainText MainText_noAnimation">
          В ближайшее время я свяжусь с вами.
        </p>
        <Button
          className="Button Button_color_green"
          size="large"
          endIcon={<ThumbUpIcon />}
          onClick={onClose}
        >
          Хорошо
        </Button>
      </div>
    </Dialog>
  )
}
