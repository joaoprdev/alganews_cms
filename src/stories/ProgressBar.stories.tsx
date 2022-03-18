import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar, { ProgressBarProps} from '../app/components/ProgressBar/ProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { 
      control: { type: 'range', min: 0, max: 100 },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  title: 'Você tem certeza?',
  progress: 50,
  theme: 'primary',
  width: 375
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Você tem certeza?',
  progress: 50,
  theme: 'secondary',
  width: 375
}

export const Complete = Template.bind({})
Complete.args = {
  title: 'Você tem certeza?',
  progress: 100,
  theme: 'primary',
  width: 375
}

export const ZeroProgress = Template.bind({})
ZeroProgress.args = {
  title: 'Você tem certeza?',
  progress: 0,
  theme: 'secondary',
  width: 375
}

export const ProgressInHalfOfText = Template.bind({})
ProgressInHalfOfText.args = {
  title: 'Você tem certeza?',
  progress: 0,
  theme: 'secondary',
  width: 375
}