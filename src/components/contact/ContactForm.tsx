import React, {
  useState,
  useRef,
  ChangeEvent,
  SyntheticEvent,
  MutableRefObject,
} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import {InputProps} from '@material-ui/core/Input'
import PersonIcon from '@material-ui/icons/PersonRounded'
import MailIcon from '@material-ui/icons/MailRounded'
import SendIcon from '@material-ui/icons/SendRounded'

import './ContactForm.scss'
import Animate, {EFFECTS} from '../common/Animate'
import {Map} from '../../utils/types'

interface Fields {
  name: string
  email: string
  message: string
}

const emailRegExp: RegExp = /.+@.+\..+/i

const fields: Fields = {
  name: 'name',
  email: 'email',
  message: 'message',
}

const initialValues: Map<string> = {
  [fields.name]: '',
  [fields.email]: '',
  [fields.message]: '',
}

const initialErrors: Map<boolean> = {
  [fields.name]: false,
  [fields.email]: false,
  [fields.message]: false,
}

const inputProps: Map<InputProps> = {
  [fields.name]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <PersonIcon />
      </InputAdornment>
    ),
  },
  [fields.email]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <MailIcon />
      </InputAdornment>
    ),
  },
  [fields.message]: {
    disableUnderline: true,
  },
}

export default function ContactForm(): JSX.Element {
  const [values, changeValues] = useState<typeof initialValues>(initialValues)
  const [errors, setErrors] = useState<typeof initialErrors>(initialErrors)
  const fieldElements: Map<MutableRefObject<HTMLInputElement>> = {
    [fields.name]: useRef<HTMLInputElement>(null!),
    [fields.email]: useRef<HTMLInputElement>(null!),
    [fields.message]: useRef<HTMLInputElement>(null!),
  }

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    const newErrors: typeof initialErrors = {}
    Object.keys(values).forEach((name: string): void => {
      if (
        (name === fields.email &&
          (!values[name].trim() || !emailRegExp.test(values[name]))) ||
        (name !== fields.email && !values[name].trim())
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
      (name === fields.email && value.trim() && emailRegExp.test(value)) ||
      (name !== fields.email && value.trim() && errors[name])
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
      effect={EFFECTS.bottomSm}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <TextField
            fullWidth
            name={fields.name}
            label="Имя"
            variant="filled"
            InputProps={inputProps[fields.name]}
            inputProps={{ref: fieldElements[fields.name]}}
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <TextField
            fullWidth
            name={fields.email}
            type="email"
            label="Email"
            variant="filled"
            InputProps={inputProps[fields.email]}
            inputProps={{ref: fieldElements[fields.email]}}
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            name={fields.message}
            label="Сообщение"
            rows="5"
            variant="filled"
            InputProps={inputProps[fields.message]}
            inputProps={{ref: fieldElements[fields.message]}}
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
