import clsx from 'clsx'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { COLOR } from '@constants'
import { Button } from '@element/Button'

const ButtonAssembleComponent: React.FC<React.ComponentProps<typeof Button>> = (
  props,
) => {
  const classCard = clsx(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'm-3',
  )

  return (
    <div className='flex flex-wrap'>
      <div className={classCard}>
        <Button
          {...props}
          label='Primary'
          color={COLOR.PRIMARY}
          {...(props.isLoading && { width: 91.69 })}
        />
      </div>

      <div className={classCard}>
        <Button
          {...props}
          label='Secondary'
          color={COLOR.SECONDARY}
          {...(props.isLoading && { width: 110.91 })}
        />
      </div>

      <div className={classCard}>
        <Button
          {...props}
          label='Success'
          color={COLOR.SUCCESS}
          {...(props.isLoading && { width: 88.75 })}
        />
      </div>

      <div className={classCard}>
        <Button
          {...props}
          label='Warning'
          color={COLOR.WARNING}
          {...(props.isLoading && { width: 96.28 })}
        />
      </div>

      <div className={classCard}>
        <Button
          {...props}
          label='Info'
          color={COLOR.INFO}
          {...(props.isLoading && { width: 62.67 })}
        />
      </div>

      <div className={classCard}>
        <Button
          {...props}
          label='Danger'
          color={COLOR.DANGER}
          {...(props.isLoading && { width: 87.02 })}
        />
      </div>
    </div>
  )
}

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button description',
      },
      page: null,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => (
  <Button label='Default' {...props} />
)

export const DefaultButton = Template.bind({})
DefaultButton.story = {
  name: 'Default',
}

const ButtonAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <ButtonAssembleComponent {...props} />
)

export const Color = ButtonAssembleTemplate.bind({})
export const Shadow = ButtonAssembleTemplate.bind({})
Shadow.args = {
  hasShadow: true,
}
export const Disabled = ButtonAssembleTemplate.bind({})
Disabled.args = {
  isDisabled: true,
}
export const Loading = ButtonAssembleTemplate.bind({})
Loading.args = {
  isLoading: true,
}
export const Bordered = ButtonAssembleTemplate.bind({})
Bordered.args = {
  isBordered: true,
}
export const Rounded = ButtonAssembleTemplate.bind({})
Rounded.args = {
  isBordered: true,
  isRounded: true,
}
export const Ghost = ButtonAssembleTemplate.bind({})
Ghost.args = {
  isBordered: true,
  isRounded: true,
  isGhost: true,
}
export const Flat = ButtonAssembleTemplate.bind({})
Flat.args = {
  isBordered: true,
  isRounded: true,
  isGhost: true,
}
export const Light = ButtonAssembleTemplate.bind({})
Light.args = {
  isBordered: true,
  isRounded: true,
  isGhost: true,
}
export const Icons = ButtonAssembleTemplate.bind({})
Icons.args = {
  isBordered: true,
  isRounded: true,
  isGhost: true,
}
