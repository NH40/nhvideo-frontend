'use client'

import dynamic from 'next/dynamic'
import { forwardRef, useState } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Logo } from '@/components/layout/sidebar/header/Logo'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { SwitchAuth } from './SwitchAuth'
import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

const DynamicRecaptcha = dynamic(() => import('./Recaptcha').then(mod => mod.Recaptcha))
const ForwardedRefRecaptcha = forwardRef<ReCAPTCHA>((props, ref) => (
  <DynamicRecaptcha
    {...props}
    forwardedRef={ref}
  />
))
ForwardedRefRecaptcha.displayName = 'ForwardedRefRecaptcha'

export function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const { isLoading, onSubmit, recaptchaRef } = useAuthForm(
    isLogin ? 'login' : 'register',
    reset
  )

  return (
    <div className='w-screen h-screen flex justify-center items-center   transition-theme'>
      <div className='w-1/4 p-layout border-border border rounded  transition-theme'>
        <div className='text-center mb-1'>
          <Logo />
        </div>

        <SwitchAuth
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <SkeletonLoader count={3} />
          ) : (
            <>
              <Field
                label='Email'
                type='email'
                registration={register('email', { required: 'Email обязателен!' })}
                error={errors.email?.message}
                placeholder='Введите email:'
              />
              <Field
                label='Пароль'
                type='password'
                registration={register('password', { required: 'Пароль обязательный!' })}
                error={errors.password?.message}
                placeholder='Введите пароль:'
              />
              {!isLogin && (
                <Field
                  label='Подтверждение пароля'
                  type='password'
                  registration={register('confirmPassword', {
                    required: 'Подтверждение пароля обязательно!',
                    validate: value =>
                      value === watch('password') || 'Пароли не совпадают!'
                  })}
                  error={errors.confirmPassword?.message}
                  placeholder='Подтвердите пароль:'
                />
              )}

              <ForwardedRefRecaptcha ref={recaptchaRef} />
            </>
          )}

          <div className='text-center mt-4'>
            <Button
              type='submit'
              isLoading={isLoading}
            >
              {isLogin ? 'Вход' : 'Регистрация'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
