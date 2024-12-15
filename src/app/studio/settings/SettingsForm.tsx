'use client'

import { Controller } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'
import { UploadField } from '@/ui/upload-field/UploadField'

import { useSettings } from './useSettings'

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
    <div className='w-9/12'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <Field
              label='Email'
              type='email'
              registration={register('email', { required: 'Email обязательное поле' })}
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
              label='Имя канала'
              type='text'
              registration={register('name')}
              error={errors.name?.message}
              placeholder='Введите имя канала:'
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

          <div>
            <Controller
              control={control}
              name='channel.avatarUrl'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <UploadField
                  label='Аватар:'
                  onChange={onChange}
                  value={value}
                  error={error}
                  folder='avatars'
                  className='mb-5'
                />
              )}
            />

            <Controller
              control={control}
              name='channel.bannerUrl'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <UploadField
                  label='Шапка профиля:'
                  onChange={onChange}
                  value={value}
                  error={error}
                  folder='banners'
                  aspectRation='16:9'
                  overlay='/overlay.png'
                />
              )}
            />
          </div>
        </div>
        <div className='text-center mt-2'>
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
