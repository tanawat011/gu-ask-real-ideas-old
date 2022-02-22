import { ComponentMeta, ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { LOADER_COLOR, LOADER_STYLE } from '@constants'
import { Loader } from '@element/Loader'

const ComponentAllLoaders: React.FC<React.ComponentProps<typeof Loader>> = (
  props,
) => {
  const classCard = clsx(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'h-28',
    'w-28',
    'm-4',
    'bg-nextui-gray-700',
    'rounded-md',
    'leading-6',
  )

  return (
    <div className='flex flex-wrap'>
      <div className={classCard}>
        <Loader
          className='mb-5'
          {...props}
          loaderStyle={LOADER_STYLE.DEFAULT}
        />

        <span className='text-white'>Default</span>
      </div>

      <div className={classCard}>
        <Loader
          className='mb-5'
          {...props}
          loaderStyle={LOADER_STYLE.TWO_PIPE}
        />

        <span className='text-white'>2 Pipe</span>
      </div>

      <div className={classCard}>
        <Loader
          className='mb-5'
          {...props}
          loaderStyle={LOADER_STYLE.THREE_FLOOR}
        />

        <span className='text-white'>3 Floor</span>
      </div>

      <div className={classCard}>
        <Loader className='mb-5' {...props} loaderStyle={LOADER_STYLE.DASH} />

        <span className='text-white'>Dash</span>
      </div>
    </div>
  )
}

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})

Default.args = {
  color: LOADER_COLOR.DEFAULT,
}

const TemplateAll: ComponentStory<typeof Loader> = () => (
  <>
    <ComponentAllLoaders color={LOADER_COLOR.DEFAULT} />
    <ComponentAllLoaders color={LOADER_COLOR.SKY} />
    <ComponentAllLoaders color={LOADER_COLOR.WHITE} />
  </>
)

export const All = TemplateAll.bind({})
