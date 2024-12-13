import cn from 'clsx'
import type { TextareaHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  registration: UseFormRegisterReturn
}

export function Textarea({ label, error, registration, ...props }: Props) {
  return (
    <div className='mb-4'>
      <label>
        <span className='block text-gray-400 font-semibold mb-2'>{label}</span>
        <textarea
          className={cn(
            'w-full px-3 py-2 border rounded shadow-sm transition-colors focus:outline-none focus:ring-0 focus:border-gray-500 bg-transparent resize-none',
            error ? 'border-red-500' : 'border-border'
          )}
          {...registration}
          {...props}
        />
      </label>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}
