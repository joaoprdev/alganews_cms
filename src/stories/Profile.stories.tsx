import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile, { ProfileProps} from '../app/components/Profile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({})
Default.args = {
  name: 'João Paulo Rodrigues',
  description: 'Editor há muito tempo.'
}