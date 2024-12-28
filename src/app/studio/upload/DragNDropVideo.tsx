import * as m from 'framer-motion/m'
import { Upload } from 'lucide-react'
import { type ChangeEvent, type DragEvent, useState } from 'react'
import type { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

import { useUpload } from '@/ui/upload-field/useUpload'

import type { IVideoFormData } from '@/types/studio-video.types'

interface Props {
  reset: UseFormReset<IVideoFormData>
}

export function DragNDropVideo({ reset }: Props) {
  const { uploadFile, isLoading: isUploading } = useUpload({
    // 3gb
    maxFileSize: 3 * 1024 * 1024 * 1024,
    folder: 'videos',
    onSuccess(data) {
      const file = data[0]
      if (!file) return

      reset({
        videoFileName: file.name,
        maxResolution: file.maxResolution,
        title: file.name
      })

      toast.success('Файл удачно загрузился!')
    },
    onError() {
      toast.error('Файл имеет ошибку!')
    }
  })

  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file)
      uploadFile({
        target: { files: [file] }
      } as unknown as ChangeEvent<HTMLInputElement>)
  }

  return isUploading ? (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <p>Загрузка...</p>
    </m.div>
  ) : (
    <label
      className={twMerge(
        'flex flex-col items-center justify-center px-4 py-6 h-72 border border-dashed border-gray-500 rounded-md cursor-pointer transition-all duration-200',
        isDragging ? 'bg-gray-700 border-solid' : 'hover:bg-gray-700'
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload
        size={50}
        className='text-gray-400 mb-4'
      />
      <p className='text-center text-gray-400'>
        {isDragging
          ? 'Бросьте файл сюда'
          : 'Перетащите видеофайл сюда, или нажмите, чтобы выбрать'}
      </p>
      <input
        type='file'
        accept='video/*'
        className='hidden'
        onChange={uploadFile}
      />
    </label>
  )
}
