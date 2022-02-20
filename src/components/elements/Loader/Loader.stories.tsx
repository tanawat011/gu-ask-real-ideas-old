import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loader } from '@element/Loader'

const ComponentAllLoaders: React.FC = () => (
  <div className='flex flex-wrap'>
    <div className='flex flex-col justify-center items-center h-40 w-40 m-4'>
      <Loader />
      Default
    </div>
    <div className='flex flex-col justify-center items-center h-40 w-40 m-4'>
      <Loader loaderStyle='2pipe' />2 Pipe
    </div>
    <div className='flex flex-col justify-center items-center h-40 w-40 m-4'>
      <Loader loaderStyle='3floor' />3 Floor
    </div>
    <div className='flex flex-col justify-center items-center h-40 w-40 m-4'>
      <Loader loaderStyle='dash' />
      Dash
    </div>
  </div>
)

export default {
  title: 'Loader',
  component: ComponentAllLoaders,
} as ComponentMeta<typeof ComponentAllLoaders>

const Template: ComponentStory<typeof Loader> = (args) => (
  <ComponentAllLoaders {...args} />
)

export const Default = Template.bind({})
