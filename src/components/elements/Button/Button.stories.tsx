import clsx from 'clsx'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BUTTON_STYLE, COLOR, SIZE } from '@constants'
import { Button } from '@element/Button'

const ButtonSizeAssembleComponent: React.FC<
  React.ComponentProps<typeof Button>
> = (props) => {
  const classCard = clsx('flex', 'justify-start', 'items-center', 'm-3')

  return (
    <div className=''>
      <div className={classCard}>
        <Button label='Mini' {...props} size={SIZE.XS} isAutoWidth={false} />
      </div>

      <div className={classCard}>
        <Button label='Small' {...props} size={SIZE.SM} isAutoWidth={false} />
      </div>

      <div className={classCard}>
        <Button label='Medium' {...props} size={SIZE.MD} isAutoWidth={false} />
      </div>

      <div className={classCard}>
        <Button label='Large' {...props} size={SIZE.LG} isAutoWidth={false} />
      </div>

      <div className={classCard}>
        <Button label='XLarge' {...props} size={SIZE.XL} isAutoWidth={false} />
      </div>

      <div className={classCard}>
        <Button label='Auto width' {...props} isAutoWidth />
      </div>

      <div className={classCard}>
        <Button label='Custom width(300px)' {...props} width={300} />
      </div>

      <div className={classCard}>
        <Button label='Custom width(600px)' {...props} width={600} />
      </div>
    </div>
  )
}

const ButtonAssembleComponent: React.FC<
  React.ComponentProps<typeof Button> & { title?: string }
> = (props) => {
  const classCard = clsx(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'm-3',
  )

  return (
    <>
      <span className='text-white'>{props.title}</span>
      <div className='flex flex-wrap'>
        <div className={classCard}>
          <Button
            label='Primary'
            {...props}
            color={COLOR.PRIMARY}
            {...(props.isLoading && { width: 91.69 })}
          />
        </div>

        <div className={classCard}>
          <Button
            label='Secondary'
            {...props}
            color={COLOR.SECONDARY}
            {...(props.isLoading && { width: 110.91 })}
          />
        </div>

        <div className={classCard}>
          <Button
            label='Success'
            {...props}
            color={COLOR.SUCCESS}
            {...(props.isLoading && { width: 88.75 })}
          />
        </div>

        <div className={classCard}>
          <Button
            label='Warning'
            {...props}
            color={COLOR.WARNING}
            {...(props.isLoading && { width: 96.28 })}
          />
        </div>

        <div className={classCard}>
          <Button
            label='Info'
            {...props}
            color={COLOR.INFO}
            {...(props.isLoading && { width: 62.67 })}
          />
        </div>

        <div className={classCard}>
          <Button
            label='Danger'
            {...props}
            color={COLOR.DANGER}
            {...(props.isLoading && { width: 87.02 })}
          />
        </div>
      </div>
    </>
  )
}

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Button description
          * In the Docs menu will no effect ripple when click button
        `,
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

const ButtonSizeAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <ButtonSizeAssembleComponent {...props} />
)

export const Size = ButtonSizeAssembleTemplate.bind({})

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
export const Rounded = ButtonAssembleTemplate.bind({})
Rounded.args = {
  buttonStyle: BUTTON_STYLE.OUTLINE,
  isRounded: true,
}
export const OutlineStyle = ButtonAssembleTemplate.bind({})
OutlineStyle.args = {
  buttonStyle: BUTTON_STYLE.OUTLINE,
}
export const GhostStyle = ButtonAssembleTemplate.bind({})
GhostStyle.args = {
  buttonStyle: BUTTON_STYLE.GHOST,
  isRounded: true,
}
export const FlatStyle = ButtonAssembleTemplate.bind({})
FlatStyle.args = {
  buttonStyle: BUTTON_STYLE.FLAT,
}
export const LightStyle = ButtonAssembleTemplate.bind({})
LightStyle.args = {
  buttonStyle: BUTTON_STYLE.LIGHT,
  isRounded: true,
}

const AllButtonAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <>
    <ButtonAssembleComponent {...props} title='Default style' />
    <ButtonAssembleComponent
      {...props}
      buttonStyle={BUTTON_STYLE.OUTLINE}
      title='Outline style'
    />
    <ButtonAssembleComponent
      {...props}
      buttonStyle={BUTTON_STYLE.GHOST}
      title='Ghost style'
    />
    <ButtonAssembleComponent
      {...props}
      buttonStyle={BUTTON_STYLE.FLAT}
      title='Flat style'
    />
    <ButtonAssembleComponent
      {...props}
      buttonStyle={BUTTON_STYLE.LIGHT}
      title='Light style'
    />
  </>
)

export const AllOnlyIcons = AllButtonAssembleTemplate.bind({})
AllOnlyIcons.args = {
  label: '',
  icon: 'ArchiveIcon',
}

export const AllIcons = AllButtonAssembleTemplate.bind({})
AllIcons.args = {
  icon: 'ArchiveIcon',
}

export const AllLoading = AllButtonAssembleTemplate.bind({})
AllLoading.args = {
  isLoading: true,
}

export const AllDisabled = AllButtonAssembleTemplate.bind({})
AllDisabled.args = {
  isDisabled: true,
}

export const AllDisabledWithOnlyIcon = AllButtonAssembleTemplate.bind({})
AllDisabledWithOnlyIcon.args = {
  label: '',
  icon: 'ArchiveIcon',
  isDisabled: true,
}

export const AllDisabledWithIcon = AllButtonAssembleTemplate.bind({})
AllDisabledWithIcon.args = {
  icon: 'ArchiveIcon',
  isDisabled: true,
}
