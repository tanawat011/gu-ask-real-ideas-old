import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button/Default',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Button',
  size: 'medium',
  color: 'primary-default',
}
