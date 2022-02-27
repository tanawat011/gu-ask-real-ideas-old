import { ComponentMeta, ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { LOADING_COLOR, LOADING_STYLE } from '@constants'
import { Loading } from '@element/Loader'

const ComponentAllLoadings: React.FC<React.ComponentProps<typeof Loading>> = (
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
        <Loading
          className='mb-5'
          {...props}
          loaderStyle={LOADING_STYLE.DEFAULT}
        />

        <span className='text-white'>Default</span>
      </div>

      <div className={classCard}>
        <Loading
          className='mb-5'
          {...props}
          loaderStyle={LOADING_STYLE.TWO_PIPE}
        />

        <span className='text-white'>2 Pipe</span>
      </div>

      <div className={classCard}>
        <Loading
          className='mb-5'
          {...props}
          loaderStyle={LOADING_STYLE.THREE_FLOOR}
        />

        <span className='text-white'>3 Floor</span>
      </div>

      <div className={classCard}>
        <Loading className='mb-5' {...props} loaderStyle={LOADING_STYLE.DASH} />

        <span className='text-white'>Dash</span>
      </div>
    </div>
  )
}

export default {
  title: 'Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />

export const Default = Template.bind({})

Default.args = {
  color: LOADING_COLOR.DEFAULT,
}

const TemplateAll: ComponentStory<typeof Loading> = () => (
  <>
    <ComponentAllLoadings color={LOADING_COLOR.DEFAULT} />
    <ComponentAllLoadings color={LOADING_COLOR.SKY} />
    <ComponentAllLoadings color={LOADING_COLOR.WHITE} />
  </>
)

export const All = TemplateAll.bind({})
