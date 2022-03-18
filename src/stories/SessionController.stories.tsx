import { ComponentStory, ComponentMeta } from '@storybook/react';

import SessionController, { SessionControllerProps} from '../app/components/SessionController';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes:{
    onLogout:{
      action: 'logout'
    }
  }
} as ComponentMeta<typeof SessionController>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SessionController> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
  name: 'João Paulo Rodrigues',
  description: 'Editor há muito tempo.'
}