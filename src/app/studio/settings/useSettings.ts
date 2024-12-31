import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/studio/user.service'

export const useSettings = () => {
  const form = useForm<ISettingsData>({
    mode: 'onChange'
  })
  const { profile, isSuccess, isLoading, refetch } = useProfile()

  const { mutate, isPending } = useMutation({
    mutationKey: ['update-settings'],
    mutationFn: (data: ISettingsData) => userService.updateProfile(data),
    onSuccess() {
      refetch()
    }
  })

  useEffect(() => {
    if (!isSuccess) return

    const channel = profile?.channel
      ? {
          avatarUrl: profile?.channel?.avatarUrl,
          bannerUrl: profile?.channel?.bannerUrl,
          description: profile?.channel?.description,
          slug: profile?.channel?.slug
        }
      : {}

    form.reset({
      channel,
      email: profile?.email,
      name: profile?.name
    })
  }, [isSuccess, profile, form])

  const onSubmit: SubmitHandler<ISettingsData> = data => {
    mutate(data)
  }

  return {
    onSubmit,
    formObject: form,
    isLoading: isPending,
    isProfileLoading: isLoading
  }
}
