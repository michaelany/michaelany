import {
  useState,
  useRef,
  ChangeEvent,
  SyntheticEvent,
  MutableRefObject,
} from 'react'
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
} from '@material-ui/core'
import {
  PersonRounded as PersonIcon,
  MailRounded as MailIcon,
  SendRounded as SendIcon,
} from '@material-ui/icons'

import './ContactForm.scss'
import {Animate} from '../common'
import SuccessDialog from './SuccessDialog'
import {Map} from '../../utils/types'

interface Field {
  name: string
  email: string
  message: string
}

interface SnackbarContent {
  open: boolean
  message: string
}

const emailRegExp: RegExp = /.+@.+\..+/i

const field: Field = {
  name: 'name',
  email: 'email',
  message: 'message',
}

const getInitialData = (value: any): Map<any> =>
  Object.fromEntries(Object.entries(field).map(([key]) => [key, value]))

const initialValues: Map<string> = getInitialData('')

const initialErrors: Map<boolean> = getInitialData(false)

const inputProps: Map<InputProps> = {
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

export default function ContactForm(): JSX.Element {
  const {t} = useTranslation()
  const [successDialog, setSuccessDialog] = useState<boolean>(false)
  const [snackbar, setSnackbar] = useState<SnackbarContent>({
    open: false,
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [values, changeValues] = useState<typeof initialValues>(initialValues)
  const [errors, setErrors] = useState<typeof initialErrors>(initialErrors)
  const fieldElements: Map<MutableRefObject<HTMLInputElement>> = {
    [field.name]: useRef<HTMLInputElement>(null!),
    [field.email]: useRef<HTMLInputElement>(null!),
    [field.message]: useRef<HTMLInputElement>(null!),
  }
  const recaptchaRef = useRef<ReCAPTCHA>(null!)

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()

    const newErrors: typeof initialErrors = {}
    Object.keys(values).forEach((name: string): void => {
      if (
        (name === field.email &&
          (!values[name].trim() || !emailRegExp.test(values[name]))) ||
        (name !== field.email && !values[name].trim())
      ) {
        newErrors[name] = true
      }
    })
    if (Object.values(newErrors).includes(true)) {
      Object.keys(newErrors).some((key: string): boolean => {
        if (newErrors[key]) {
          fieldElements[key].current.focus()
          return true
        }
        return false
      })
      setErrors({...errors, ...newErrors})
      return
    }

    setLoading(true)
    try {
      const token = await recaptchaRef.current.executeAsync()
      recaptchaRef.current.reset()
      await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID!,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID!,
        {...values, 'g-recaptcha-response': token},
        process.env.REACT_APP_EMAIL_JS_USER_ID
      )
      setSuccessDialog(true)
      changeValues(initialValues)
      setLoading(false)
    } catch (error: any) {
      setSnackbar({open: true, message: error?.text || t('other.error')})
      setLoading(false)
    }
  }

  const handleChange = ({
    target: {name, value},
  }: ChangeEvent<HTMLInputElement>): void => {
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

  const handleSuccessDialogClose = (): void => {
    setSuccessDialog(false)
  }

  const handleSnackbarClose = (): void => {
    setSnackbar((state) => ({...state, open: false}))
  }

  return (
    <>
      <Animate
        noValidate
        el="form"
        className="ContactForm"
        effect="bottom"
        onSubmit={handleSubmit}
      >
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
              rows="5"
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
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY as string}
      />
      <SuccessDialog
        t={t}
        open={successDialog}
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
