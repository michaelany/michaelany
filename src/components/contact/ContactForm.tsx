import {useState, useRef, ChangeEvent, SyntheticEvent, RefObject} from 'react'
import {useTranslation} from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from 'emailjs-com'
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  InputProps,
  Fade,
  CircularProgress,
  Snackbar,
} from '@mui/material'
import {
  PersonRounded as PersonIcon,
  MailRounded as MailIcon,
  SendRounded as SendIcon,
} from '@mui/icons-material'

import './ContactForm.scss'
import {Animate} from '#components/common'
import SuccessDialog from './SuccessDialog'

interface IField {
  name: string
  email: string
  message: string
}

interface ISnackbarContent {
  open: boolean
  message: string
}

export default function ContactForm() {
  const {t} = useTranslation()
  const [successDialogOpen, setSuccessDialogOpen] = useState<boolean>(false)
  const [snackbar, setSnackbar] = useState<ISnackbarContent>({
    open: false,
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [values, changeValues] = useState<typeof initialValues>(initialValues)
  const [errors, setErrors] = useState<typeof initialErrors>(initialErrors)
  const fieldElements: Record<string, RefObject<HTMLInputElement | null>> = {
    [field.name]: useRef(null),
    [field.email]: useRef(null),
    [field.message]: useRef(null),
  }
  const recaptchaRef = useRef(null) as RefObject<ReCAPTCHA | null>

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()
    const newErrors: typeof initialErrors = {}
    Object.keys(values).forEach((name: string) => {
      if (
        (name === field.email &&
          (!values[name].trim() || !emailRegExp.test(values[name]))) ||
        (name !== field.email && !values[name].trim())
      ) {
        newErrors[name] = true
      }
    })
    if (Object.values(newErrors).includes(true)) {
      Object.keys(newErrors).some((key) => {
        if (newErrors[key]) {
          const inputElement = fieldElements[key].current as HTMLInputElement
          inputElement.focus()
          return true
        }
        return false
      })
      setErrors({...errors, ...newErrors})
      return
    }
    setLoading(true)
    try {
      const recaptcha = recaptchaRef.current
      if (!recaptcha) throw {text: 'reCAPTCHA error'}
      const token = await recaptcha.executeAsync()
      recaptcha.reset()
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {...values, 'g-recaptcha-response': token},
        import.meta.env.VITE_EMAIL_JS_USER_ID
      )
      setSuccessDialogOpen(true)
      changeValues(initialValues)
    } catch (error: any) {
      setSnackbar({open: true, message: error?.text || t('other.error')})
    } finally {
      setLoading(false)
    }
  }

  const handleChange = ({
    target: {name, value},
  }: ChangeEvent<HTMLInputElement>) => {
    changeValues({
      ...values,
      [name]: value,
    })
    if (
      (name === field.email && value.trim() && emailRegExp.test(value)) ||
      (name !== field.email && value.trim() && errors[name])
    ) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }
  }

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false)
  }

  const handleSnackbarClose = () => {
    setSnackbar((state) => ({...state, open: false}))
  }

  return (
    <>
      <Animate noValidate el="form" effect="bottom" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <TextField
              fullWidth
              name={field.name}
              label={t('contact.form.name')}
              variant="filled"
              InputProps={inputProps[field.name]}
              inputProps={{ref: fieldElements[field.name]}}
              value={values.name}
              error={errors.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <TextField
              fullWidth
              name={field.email}
              type="email"
              label="Email"
              variant="filled"
              InputProps={inputProps[field.email]}
              inputProps={{ref: fieldElements[field.email]}}
              value={values.email}
              error={errors.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              name={field.message}
              label={t('contact.form.message')}
              minRows={5}
              variant="filled"
              InputProps={inputProps[field.message]}
              inputProps={{ref: fieldElements[field.message]}}
              value={values.message}
              error={errors.message}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          className="ContactForm-Submit Button"
          type="submit"
          size="large"
          endIcon={<SendIcon />}
          disabled={loading}
        >
          <span>{t('contact.form.send')}</span>
          <Fade in={loading}>
            <div className="ContactForm-Loader">
              <CircularProgress size={36} className="ContactForm-Progress" />
            </div>
          </Fade>
        </Button>
      </Animate>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY}
      />
      <SuccessDialog
        t={t}
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
      />
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        onClose={handleSnackbarClose}
      />
    </>
  )
}

const getInitialData = (value: any): Record<string, any> =>
  Object.fromEntries(Object.entries(field).map(([key]) => [key, value]))

const field: IField = {
  name: 'name',
  email: 'email',
  message: 'message',
}

const inputProps: Record<string, InputProps> = {
  [field.name]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <PersonIcon />
      </InputAdornment>
    ),
  },
  [field.email]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <MailIcon />
      </InputAdornment>
    ),
  },
  [field.message]: {
    disableUnderline: true,
  },
}

const initialValues: Record<string, string> = getInitialData('')

const initialErrors: Record<string, boolean> = getInitialData(false)

const emailRegExp = /.+@.+\..+/i
