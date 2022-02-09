import clsx from 'clsx'
import { VFC } from 'react'
import * as AllIcon from '@heroicons/react/solid'

import LoadingIcon from '@icon/loading3circle.svg'

export const a = '1'

interface PropButton {
  label?: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  icon?: string
  isDisabled?: boolean
  isLoading?: boolean
  width?: number
}

export const Button: VFC<PropButton> = ({
  width,
  label,
  size = 'medium',
  color = 'primary',
  icon,
  isDisabled = false,
  isLoading = false,
}) => {
  const renderSize = (size: string) => {
    if (size === 'small') {
      return 'text-white font-bold py-1 px-2 text-sm'
    }

    if (size === 'medium') {
      return 'text-white font-bold py-2 px-4 text-base'
    }

    if (size === 'large') {
      return 'text-white font-bold py-3 px-6 text-lg'
    }
  }

  const renderColor = (color: string) => {
    const _isDisabled = isDisabled || isLoading
    if (color === 'primary') {
      return clsx(
        'bg-primary-default hover:bg-primary-hover active:bg-primary-pressed',
        _isDisabled && 'disabled:bg-primary-disabled cursor-not-allowed',
      )
    }

    if (color === 'secondary') {
      return clsx(
        'bg-secondary-default hover:bg-secondary-hover active:bg-secondary-pressed',
        _isDisabled && 'disabled:bg-secondary-disabled cursor-not-allowed',
      )
    }
  }

  const renderIcon = () => {
    const iconName = Object.keys(AllIcon).find((iconName) => iconName === icon)

    if (iconName) {
      const Icon = AllIcon[iconName as 'ArchiveIcon']

      return <Icon className={clsx(label ? 'w-8 pr-2' : 'w-6')} />
    }
  }

  const renderLoading = () => {
    return (
      <div className='absolute'>
        <LoadingIcon className='w-6 fill-gray-500 stroke-2' />
      </div>
    )
  }

  return (
    <button
      className={`
        ${renderSize(size)}
        ${renderColor(color)}
        relative rounded flex justify-center items-center
      `}
      style={{ width }}
      disabled={isDisabled || isLoading}
    >
      {icon && renderIcon()} {label}
      {isLoading && renderLoading()}
    </button>
  )
}
