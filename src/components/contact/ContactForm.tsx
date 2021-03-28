import {
  useState,
  useRef,
  ChangeEvent,
  SyntheticEvent,
  MutableRefObject,
} from 'react'
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  InputProps,
} from '@material-ui/core'
import {
  PersonRounded as PersonIcon,
  MailRounded as MailIcon,
  SendRounded as SendIcon,
} from '@material-ui/icons'

import './ContactForm.scss'
import {Animate} from '../common'
import {Map} from '../../utils/types'

interface Field {
  name: string
  email: string
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
  const [values, changeValues] = useState<typeof initialValues>(initialValues)
  const [errors, setErrors] = useState<typeof initialErrors>(initialErrors)
  const fieldElements: Map<MutableRefObject<HTMLInputElement>> = {
    [field.name]: useRef<HTMLInputElement>(null!),
    [field.email]: useRef<HTMLInputElement>(null!),
    [field.message]: useRef<HTMLInputElement>(null!),
  }

  const handleSubmit = (e: SyntheticEvent): void => {
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
    console.log('submit!')
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

  return (
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
            label="Имя"
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
            label="Сообщение"
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
      >
        Отправить
      </Button>
    </Animate>
  )
}
