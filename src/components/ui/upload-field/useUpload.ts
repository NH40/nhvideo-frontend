import { useMutation } from '@tanstack/react-query'
import { type ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import type { IFileResponse } from '@/types/file.types'

import { validateFileSize } from './validate-file-size'
import { fileService } from '@/services/studio/file.service'

interface Props {
  folder?: string
  onChange?: (...event: any[]) => void
  onSuccess?: (data: IFileResponse[]) => void
  onError?: () => void
  maxFileSize?: number
}

type TUseUpload = (props: Props) => {
  uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
}

export const useUpload: TUseUpload = ({
  onChange,
  folder,
  onError,
  onSuccess,
  maxFileSize
}) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['upload file'],
    mutationFn: (data: FormData) => fileService.upload(data, folder),
    onSuccess: ({ data }) => {
      onChange && onChange(data[0].url)
      onSuccess && onSuccess(data)
    },
    onError: error => {
      toast.error(error.message)
      onError && onError()
    }
  })

  const uploadFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (!files?.length) return

      const file = files[0]
      if (!validateFileSize(file, maxFileSize)) return

      const formData = new FormData()
      formData.append('file', file)

      mutate(formData)
    },
    [maxFileSize, mutate]
  )

  return {
    uploadFile,
    isLoading: isPending
  }
}
