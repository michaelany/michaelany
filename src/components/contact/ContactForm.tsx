import React, {useState, useRef, ChangeEvent, SyntheticEvent} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {InputProps} from '@material-ui/core'
import SendIcon from '@material-ui/icons/SendRounded'

import './ContactForm.scss'
import {IMap} from '../../utils/types'

enum Field {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}

const emailRegExp: RegExp = /.+@.+\..+/i

const inputProps: InputProps = {
  disableUnderline: true,
}

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

export default function ContactForm(): JSX.Element {
  const [values, changeValues] = useState<IMap<string>>(initialValues)
  const [errors, setErrors] = useState<IMap<boolean>>(initialErrors)
  const nameEl = useRef<HTMLInputElement>(null!)
  const emailEl = useRef<HTMLInputElement>(null!)
  const messageEl = useRef<HTMLInputElement>(null!)

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
      if (newErrors.name) {
        nameEl.current.focus()
      } else if (newErrors.email) {
        emailEl.current.focus()
      } else {
        messageEl.current.focus()
      }
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name={Field.Name}
            label="Имя"
            variant="filled"
            InputProps={inputProps}
            inputProps={{ref: nameEl}}
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
            InputProps={inputProps}
            inputProps={{ref: emailEl}}
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
            InputProps={inputProps}
            inputProps={{ref: messageEl}}
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
