import clsx from 'clsx'
import { VFC } from 'react'
import Image from 'next/image'

interface ButtonType {
  title: string
  size: 'small' | 'medium' | 'large'
  color: 'yellow' | 'red' | 'white' | 'bg'
  icon?: string
  isDisabled?: boolean
  width?: number
}

export const Button: VFC<ButtonType> = ({
  width,
  title,
  size,
  color,
  icon,
  isDisabled = false,
}) => {
  const renderSize = (size: string) => {
    if (size === 'small') {
      return 'h-6-5 w-52-7 text-xss rounded'
    }

    if (size === 'small' && color === 'white') {
      return 'h-6 w-28-1 text-xss rounded'
    }

    if (size === 'medium') {
      return 'h-7-5 w-64-2 text-xss rounded-md'
    }

    if (size === 'medium' && color === 'white') {
      return 'h-6 w-64-8 text-xss rounded-md'
    }

    if (size === 'large') {
      return 'h-10 w-64-2 text-xs rounded-lg'
    }

    if (size === 'large' && color === 'white') {
      return 'h-6 w-64-8 text-xs rounded-lg'
    }
  }

  const renderColor = (color: string) => {
    if (color === 'yellow') {
      return clsx(
        'bg-action-default hover:bg-action-hover active:bg-action-pressed',
        isDisabled && 'disabled:bg-action-default opacity-40',
      )
    }

    if (color === 'red') {
      return clsx(
        'bg-secondary-candy hover:bg-candy-hover active:bg-candy-pressed',
        isDisabled && 'disabled:bg-secondary-candy opacity-40',
      )
    }

    if (color === 'white') {
      return clsx(
        'bg-neutral-fade-100 hover:bg-neutral-gray-200 active:bg-neutral-dark-400',
        isDisabled && 'disabled:bg-neutral-fade-100 opacity-40',
      )
    }

    if (color === 'bg') {
      return clsx(
        'bg-neutral-gray-300 hover:bg-neutral-gray-200 active:bg-neutral-dark-400',
        isDisabled && 'disabled:bg-neutral-gray-300 opacity-40',
      )
    }
  }

  return (
    <button
      className={`
        ${renderSize(size)}
        ${renderColor(color)}
        flex items-center justify-center font-medium text-neutral-black
      `}
      style={{ width }}
      disabled={isDisabled}
    >
      {icon && (
        <Image className='w-3 h-3 m-1 pointer-events-none' src={icon} alt='' />
      )}{' '}
      {title}
    </button>
  )
}
