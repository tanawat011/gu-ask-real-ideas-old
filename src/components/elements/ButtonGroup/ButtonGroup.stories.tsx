import {
  AdjustmentsIcon,
  AnnotationIcon,
  ArchiveIcon,
} from '@heroicons/react/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@element/Button'
import { ButtonGroup } from '@element/ButtonGroup'
import { BUTTON_STYLE, SIZE, VARIANT } from '@constants'

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
  title: 'ButtonGroup',
  component: ButtonGroup,
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
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (props) => (
  <>
    <ButtonGroup {...props}>
      <Button label='One' />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' />
      <Button label='Two' />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' />
      <Button label='Two' />
      <Button label='Three' />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' />
      <Button label='Two' />
      <Button label='Three' />
      <Button label='Four' />
    </ButtonGroup>
  </>
)

const TemplateSize: ComponentStory<typeof ButtonGroup> = (props) => {
  return (
    <div className={props.vertical ? 'flex flex-row space-x-4' : ''}>
      {Object.keys(SIZE).map((size, index) => (
        <>
          <ButtonGroup
            key={index}
            {...props}
            size={SIZE[size as keyof typeof SIZE]}
          >
            <Button label='One' />
            <Button label='Two' />
            <Button label='Three' />
          </ButtonGroup>
          <br />
        </>
      ))}
    </div>
  )
}

const TemplateVariant: ComponentStory<typeof ButtonGroup> = (props) => (
  <>
    <ButtonGroup {...props}>
      <Button label='One' variant={VARIANT.DANGER} />
      <Button label='Two' variant={VARIANT.DANGER} />
      <Button label='Three' variant={VARIANT.DANGER} />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button
        label='One'
        variant={VARIANT.SUCCESS}
        btnStyle={BUTTON_STYLE.GHOST}
      />
      <Button
        label='Two'
        variant={VARIANT.SUCCESS}
        btnStyle={BUTTON_STYLE.GHOST}
      />
      <Button
        label='Three'
        variant={VARIANT.SUCCESS}
        btnStyle={BUTTON_STYLE.GHOST}
      />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' variant={VARIANT.SECONDARY} rounded />
      <Button label='Two' variant={VARIANT.SECONDARY} rounded />
      <Button label='Three' variant={VARIANT.SECONDARY} rounded />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' shadow />
      <Button label='Two' shadow />
      <Button label='Three' shadow />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' btnStyle={BUTTON_STYLE.FLAT} />
      <Button label='Two' btnStyle={BUTTON_STYLE.FLAT} />
      <Button label='Three' btnStyle={BUTTON_STYLE.FLAT} />
    </ButtonGroup>
    <br />
    <ButtonGroup {...props}>
      <Button label='One' btnStyle={BUTTON_STYLE.DEFAULT} />
      <Button
        label='Two'
        btnStyle={BUTTON_STYLE.GHOST}
        variant={VARIANT.SECONDARY}
        icon={<ArchiveIcon />}
      />
      <Button
        label='Four'
        btnStyle={BUTTON_STYLE.LIGHT}
        variant={VARIANT.SUCCESS}
      />
      <Button
        label='Three'
        btnStyle={BUTTON_STYLE.FLAT}
        variant={VARIANT.WARNING}
        iconRight={<ArchiveIcon />}
      />
    </ButtonGroup>
  </>
)

export const Default = Template.bind({})

export const Size = TemplateSize.bind({})
Size.args = {
  wAuto: true,
}

export const Shadow = Template.bind({})
Shadow.args = {
  shadow: true,
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const OutlineStyle = Template.bind({})
OutlineStyle.args = {
  btnStyle: BUTTON_STYLE.OUTLINE,
}

export const GhostStyle = Template.bind({})
GhostStyle.args = {
  btnStyle: BUTTON_STYLE.GHOST,
}

export const FlatStyle = Template.bind({})
FlatStyle.args = {
  btnStyle: BUTTON_STYLE.FLAT,
}

export const LightStyle = Template.bind({})
LightStyle.args = {
  btnStyle: BUTTON_STYLE.LIGHT,
}

export const Vertical = TemplateSize.bind({})
Vertical.args = {
  vertical: true,
  btnStyle: BUTTON_STYLE.FLAT,
  wAuto: true,
}
export const Variant = TemplateVariant.bind({})
Variant.args = {
  wAuto: true,
}
