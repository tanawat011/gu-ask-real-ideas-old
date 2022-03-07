import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '@element/Button'
import { ButtonGroup } from '@element/ButtonGroup'
import { SIZE } from '@constants'

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

export const DefaultButton = Template.bind({})
DefaultButton.story = {
  name: 'Default',
}
