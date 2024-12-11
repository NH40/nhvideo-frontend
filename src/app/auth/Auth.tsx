'use client'

import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { Logo } from '@/components/layout/sidebar/header/Logo'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

import styles from './captcha.module.scss'

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

  // const accessToken = useTypedSelector(state => state.auth.accessToken)
  // const router = useRouter()

  // useEffect(() => {
  //   if (!accessToken) return
  //   router.push(PAGE.HOME)
  // }, [accessToken, router])

  return (
    <div className='w-screen h-screen flex justify-center items-center   transition-theme'>
      <div className='w-1/4 p-layout border-border border rounded  transition-theme'>
        <div className='text-center mb-1'>
          <Logo />
        </div>

        <div className='flex justify-center mb-6'>
          <button
            type='button'
            className={`px-4 py-2 font-semibold transition-colors duration-300 ${
              isLogin
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Логин
          </button>
          <button
            type='button'
            className={`px-4 py-2 font-semibold transition-colors duration-300 ${
              !isLogin
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>
        </div>

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

              <ReCAPTCHA
                ref={recaptchaRef}
                size='normal'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                theme='light'
                className={styles.recaptcha}
              />
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
