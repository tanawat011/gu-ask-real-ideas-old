import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@element/Button/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      name: 'Label',
      table: {
        category: 'Text',
      },
    },
    size: {
      name: 'Size',
      table: {
        category: 'Size',
      },
    },
    color: {
      name: 'Color',
      table: {
        category: 'Colors',
      },
    },
    isLoading: {
      name: 'Set loading',
      table: {
        category: 'Setting',
      },
    },
    isDisabled: {
      name: 'Set disabled',
      table: {
        category: 'Setting',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  size: 'medium',
  color: 'primary',
}
Primary.parameters = {
  docs: {
    description: {
      component: 'Button primary',
    },
  },
}

export const Secondary = Template.bind({})

Secondary.args = {
  label: 'Button',
  size: 'medium',
  color: 'secondary',
}
Secondary.parameters = {
  docs: {
    description: {
      component: 'Button secondary',
    },
  },
}
