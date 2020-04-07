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
import PersonIcon from '@material-ui/icons/PersonTwoTone'
import MailIcon from '@material-ui/icons/MailTwoTone'
import SendIcon from '@material-ui/icons/SendRounded'

import './ContactForm.scss'
import {IMap} from '../../utils/types'

enum Field {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}

const emailRegExp: RegExp = /.+@.+\..+/i

const initialValues: IMap<string> = {
  [Field.Name]: '',
  [Field.Email]: '',
  [Field.Message]: '',
}

const initialErrors: IMap<boolean> = {
  [Field.Name]: false,
  [Field.Email]: false,
  [Field.Message]: false,
}

const inputProps: IMap<InputProps> = {
  [Field.Name]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <MailIcon />
      </InputAdornment>
    ),
  },
  [Field.Email]: {
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <PersonIcon />
      </InputAdornment>
    ),
  },
  [Field.Message]: {
    disableUnderline: true,
  },
}

export default function ContactForm(): JSX.Element {
  const [values, changeValues] = useState<IMap<string>>(initialValues)
  const [errors, setErrors] = useState<IMap<boolean>>(initialErrors)
  const fieldElements: IMap<MutableRefObject<HTMLInputElement>> = {
    [Field.Name]: useRef<HTMLInputElement>(null!),
    [Field.Email]: useRef<HTMLInputElement>(null!),
    [Field.Message]: useRef<HTMLInputElement>(null!),
  }

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    const newErrors: IMap<boolean> = {}
    Object.keys(values).forEach((name: string): void => {
      if (
        (name === Field.Email &&
          (!values[name].trim() || !emailRegExp.test(values[name]))) ||
        (name !== Field.Email && !values[name].trim())
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
      (name === Field.Email && value.trim() && emailRegExp.test(value)) ||
      (name !== Field.Email && value.trim() && errors[name])
    ) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }
  }

  return (
    <form noValidate className="ContactForm" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name={Field.Name}
            label="Имя"
            variant="filled"
            InputProps={inputProps[Field.Name]}
            inputProps={{ref: fieldElements[Field.Name]}}
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name={Field.Email}
            type="email"
            label="Email"
            variant="filled"
            InputProps={inputProps[Field.Email]}
            inputProps={{ref: fieldElements[Field.Email]}}
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            name={Field.Message}
            label="Сообщение"
            rows="5"
            variant="filled"
            InputProps={inputProps[Field.Message]}
            inputProps={{ref: fieldElements[Field.Message]}}
            value={values.message}
            error={errors.message}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        className="ContactForm-Submit Button Button_color_white"
        type="submit"
        size="large"
        endIcon={<SendIcon />}
      >
        Отправить
      </Button>
    </form>
  )
}
