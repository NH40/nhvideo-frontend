'use client'

import * as m from 'framer-motion/m'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Heading } from '@/ui/Heading'

import type { IVideoFormData } from '@/types/studio-video.types'

import { CreateVideoForm } from './CreateVideoForm'
import { DragNDropVideo } from './DragNDropVideo'
import { ProgressVideoProcessing } from './ProgressVideoProcessing'

export function UploadVideoMain() {
  const form = useForm<IVideoFormData>({
    mode: 'onChange'
  })

  const [isReadyToPublish, setIsReadyToPublish] = useState(false)

  const fileName = form.watch('videoFileName')

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'relative',
          width: '85%',
          maxWidth: 960
        }}
      >
        <div className='bg-description rounded-lg p-6'>
          <Heading
            classNameHeading='text-xl'
            className='border-b border-border pb-5'
          >
            Загрузка видео
          </Heading>

          {!fileName && <DragNDropVideo reset={form.reset} />}

          <ProgressVideoProcessing
            isReadyToPublish={isReadyToPublish}
            setIsReadyToPublish={setIsReadyToPublish}
            fileName={fileName}
          />

          {!!fileName && (
            <CreateVideoForm
              form={form}
              isReadyToPublish={isReadyToPublish}
            />
          )}
        </div>
      </m.div>
    </div>
  )
}
