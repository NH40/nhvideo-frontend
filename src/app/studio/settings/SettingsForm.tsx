'use client'

import dynamic from 'next/dynamic'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'

import { useSettings } from './useSettings'

const DynamicSettingsMediaFields = dynamic(() =>
  import('./SettingsMediaFields').then(mod => mod.SettingsMediaFields)
)

export function SettingsForm() {
  const {
    formObject: {
      handleSubmit,
      register,
      formState: { errors },
      control
    },
    isLoading,
    isProfileLoading,
    onSubmit
  } = useSettings()

  if (isProfileLoading) return <div>Загрузка...</div>

  return (
    <div className='w-3/5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <Field
              label='Email'
              type='email'
              registration={register('email', { required: 'Email is required!' })}
              error={errors.email?.message}
              placeholder='Введите email:'
            />
            <Field
              label='Пароль'
              type='password'
              registration={register('password')}
              error={errors.password?.message}
              placeholder='Введите пароль:'
            />
            <Field
              label='Имя'
              type='text'
              registration={register('name')}
              error={errors.name?.message}
              placeholder='Введите имя:'
            />
            <Field
              label='Slug (alias)'
              type='text'
              registration={register('channel.slug')}
              error={errors.channel?.slug?.message}
              placeholder='Введите slug:'
            />
            <Textarea
              label='Описание'
              registration={register('channel.description')}
              error={errors.channel?.description?.message}
              placeholder='Введите описание:'
              rows={4}
            />
          </div>

          <DynamicSettingsMediaFields control={control} />
        </div>
        <div className='text-center mt-10'>
          <Button
            type='submit'
            isLoading={isLoading}
          >
            Обновить
          </Button>
        </div>
      </form>
    </div>
  )
}
