import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@element/Button'

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

const Template: ComponentStory<typeof Button> = (args) => (
  <Button label='Button' size='medium' {...args} />
)

export const DefaultButton = Template.bind({})
DefaultButton.story = {
  name: 'Default',
}

export const PrimaryButton = Template.bind({})
PrimaryButton.story = {
  name: 'Primary',
}
PrimaryButton.args = {
  color: 'primary',
}
PrimaryButton.parameters = {
  docs: {
    description: {
      story: 'Primary button description',
    },
  },
}

export const SecondaryButton = Template.bind({})
SecondaryButton.story = {
  name: 'Secondary',
}
SecondaryButton.args = {
  color: 'secondary',
}
SecondaryButton.parameters = {
  docs: {
    description: {
      story: 'Secondary button description',
    },
  },
}
