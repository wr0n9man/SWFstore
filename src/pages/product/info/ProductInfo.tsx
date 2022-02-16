import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { string } from 'yup'

import { preOrder } from '../../../api/preOrderProduct'
import { ICard } from '../../../ui/Card/CardInterface'
import {
  Card,
  Description,
  EmailField,
  EmailInput,
  Image,
  Info,
  InputButton,
  Title,
} from './ProductInfoComoponent'

export const ProductInfo = ({ id, description, image, name }: ICard) => {
  const [email, setEmail] = useState<string>('')

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const validateEmail = string().email().required('Email is required')

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailIsValid = await validateEmail
      .validate(email)
      .then(() => true)
      .catch(() => toast.error('invalid email'))

    if (emailIsValid) {
      const orderStatus = await preOrder(id, email)

      if (orderStatus.error) {
        toast.error(orderStatus.error)
      }

      if (orderStatus.data.message) {
        toast(orderStatus.data.message)
      }
    }
  }

  return (
    <Card>
      <Image src={image} alt={name} />
      <Info>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <EmailField onSubmit={onSubmit}>
          <EmailInput
            value={email}
            placeholder="Email"
            onChange={changeEmail}
          />
          <InputButton type="submit">Pre-order Now</InputButton>
        </EmailField>
      </Info>
    </Card>
  )
}
