import React from 'react'

import { PropButton } from '@element/Button'
import { clsx } from '@libs'

export type PropButtonGroup = {
  vertical?: boolean
} & PropButton

export const ButtonGroup: React.FC<PropButtonGroup> = (props) => {
  const children = React.Children.map(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    const _props = { ...props }

    delete _props.children

    return React.cloneElement(child, {
      ..._props,
      ...child.props,
    })
  })

  return (
    <div
      className={clsx('btn__group', props.vertical && 'btn__group-vertical')}
    >
      {children}
    </div>
  )
}