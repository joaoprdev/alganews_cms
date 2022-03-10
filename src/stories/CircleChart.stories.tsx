import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleChart, { CircleChartProps} from '../components/CircleChart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes:{
    progress:{
      control:{
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} as ComponentMeta<typeof CircleChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleChart> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({})
Default.args = {
  progress: 70,
  size: 150
}