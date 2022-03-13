import clsx from 'clsx'
import {
  ArchiveIcon,
  AnnotationIcon,
  AdjustmentsIcon,
} from '@heroicons/react/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BUTTON_STYLE, VARIANT, SIZE } from '@constants'
import { Button } from '@element/Button'

const ButtonSizeAssembleComponent: React.FC<
  React.ComponentProps<typeof Button>
> = (props) => {
  const classCard = clsx('flex', 'justify-start', 'items-center', 'm-3')

  return (
    <div className=''>
      <div className={classCard}>
        <Button label='Mini' {...props} size={SIZE.XS} />
      </div>

      <div className={classCard}>
        <Button label='Small' {...props} size={SIZE.SM} />
      </div>

      <div className={classCard}>
        <Button label='Medium' {...props} size={SIZE.MD} />
      </div>

      <div className={classCard}>
        <Button label='Large' {...props} size={SIZE.LG} />
      </div>

      <div className={classCard}>
        <Button label='XLarge' {...props} size={SIZE.XL} />
      </div>

      <div className={classCard}>
        <Button label='Auto width' {...props} wAuto />
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
            variant={VARIANT.PRIMARY}
            {...(props.loading && { width: 91.69 })}
            wAuto
          />
        </div>

        <div className={classCard}>
          <Button
            label='Secondary'
            {...props}
            variant={VARIANT.SECONDARY}
            {...(props.loading && { width: 110.91 })}
            wAuto
          />
        </div>

        <div className={classCard}>
          <Button
            label='Success'
            {...props}
            variant={VARIANT.SUCCESS}
            {...(props.loading && { width: 88.75 })}
            wAuto
          />
        </div>

        <div className={classCard}>
          <Button
            label='Warning'
            {...props}
            variant={VARIANT.WARNING}
            {...(props.loading && { width: 96.28 })}
            wAuto
          />
        </div>

        <div className={classCard}>
          <Button
            label='Info'
            {...props}
            variant={VARIANT.INFO}
            {...(props.loading && { width: 62.67 })}
            wAuto
          />
        </div>

        <div className={classCard}>
          <Button
            label='Danger'
            {...props}
            variant={VARIANT.DANGER}
            {...(props.loading && { width: 87.02 })}
            wAuto
          />
        </div>
      </div>
    </>
  )
}

const IconMapping = {
  '-': '',
  ArchiveIcon: <ArchiveIcon />,
  AnnotationIcon: <AnnotationIcon />,
  AdjustmentsIcon: <AdjustmentsIcon />,
}
const iconOptions = {
  options: Object.keys(IconMapping),
  mapping: { ...IconMapping },
  control: {
    type: 'select',
  },
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
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
    btnStyle: {
      control: {
        type: 'select',
      },
    },
    icon: iconOptions,
    iconRight: iconOptions,
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => (
  <Button label='Default' {...props} />
)

export const DefaultButton = Template.bind({})
DefaultButton.storyName = 'Default'

export const Gradient = Template.bind({})
Gradient.args = {
  gradients: ['primary-default', 'danger-default'],
}

const ButtonSizeAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <ButtonSizeAssembleComponent {...props} />
)

export const Size = ButtonSizeAssembleTemplate.bind({})

const ButtonAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <ButtonAssembleComponent {...props} />
)

export const Variant = ButtonAssembleTemplate.bind({})
export const Shadow = ButtonAssembleTemplate.bind({})
Shadow.args = {
  shadow: true,
}
export const Rounded = ButtonAssembleTemplate.bind({})
Rounded.args = {
  btnStyle: BUTTON_STYLE.OUTLINE,
  rounded: true,
}
export const Loading = ButtonAssembleTemplate.bind({})
Loading.args = {
  loading: true,
}
export const Disabled = ButtonAssembleTemplate.bind({})
Disabled.args = {
  disabled: true,
}
export const OutlineStyle = ButtonAssembleTemplate.bind({})
OutlineStyle.args = {
  btnStyle: BUTTON_STYLE.OUTLINE,
}
export const GhostStyle = ButtonAssembleTemplate.bind({})
GhostStyle.args = {
  btnStyle: BUTTON_STYLE.GHOST,
  rounded: true,
}
export const FlatStyle = ButtonAssembleTemplate.bind({})
FlatStyle.args = {
  btnStyle: BUTTON_STYLE.FLAT,
}
export const LightStyle = ButtonAssembleTemplate.bind({})
LightStyle.args = {
  btnStyle: BUTTON_STYLE.LIGHT,
  rounded: true,
}

const AllButtonAssembleTemplate: ComponentStory<typeof Button> = (props) => (
  <>
    <ButtonAssembleComponent {...props} title='Default style' />
    <ButtonAssembleComponent
      {...props}
      btnStyle={BUTTON_STYLE.OUTLINE}
      title='Outline style'
    />
    <ButtonAssembleComponent
      {...props}
      btnStyle={BUTTON_STYLE.GHOST}
      title='Ghost style'
    />
    <ButtonAssembleComponent
      {...props}
      btnStyle={BUTTON_STYLE.FLAT}
      title='Flat style'
    />
    <ButtonAssembleComponent
      {...props}
      btnStyle={BUTTON_STYLE.LIGHT}
      title='Light style'
    />
  </>
)

export const IconOnly = AllButtonAssembleTemplate.bind({})
IconOnly.args = {
  label: '',
  icon: <ArchiveIcon />,
}

export const WithIcon = AllButtonAssembleTemplate.bind({})
WithIcon.args = {
  icon: <ArchiveIcon />,
}

export const Loadings = AllButtonAssembleTemplate.bind({})
Loadings.args = {
  loading: true,
}

export const Disables = AllButtonAssembleTemplate.bind({})
Disables.args = {
  disabled: true,
}

export const DisableWithIcon = AllButtonAssembleTemplate.bind({})
DisableWithIcon.args = {
  icon: <ArchiveIcon />,
  disabled: true,
}

export const DisablesWithIconOnly = AllButtonAssembleTemplate.bind({})
DisablesWithIconOnly.args = {
  label: '',
  icon: <ArchiveIcon />,
  disabled: true,
}
