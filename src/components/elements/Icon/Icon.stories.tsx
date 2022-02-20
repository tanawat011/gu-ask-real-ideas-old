import * as AllIcon from '@heroicons/react/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const ComponentAllIcons: React.FC = () => (
  <div className='flex flex-wrap'>
    {Object.entries(AllIcon).map(([key, Icon]) => (
      <div
        key={key}
        className='flex flex-col justify-center items-center h-40 w-40 m-4'
      >
        <Icon className='h-12 w-12 text-gray-700' />
        {key}
      </div>
    ))}
  </div>
)

export default {
  title: 'Icons',
  component: ComponentAllIcons,
} as ComponentMeta<typeof ComponentAllIcons>

const Template: ComponentStory<typeof ComponentAllIcons> = (args) => (
  <ComponentAllIcons {...args} />
)

export const HeroIcons = Template.bind({})
