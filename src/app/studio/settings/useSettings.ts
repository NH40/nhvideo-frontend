import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/user.service'

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
