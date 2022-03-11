import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorDisplay, { ErrorDisplayProps} from '../components/ErrorDisplay';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
} as ComponentMeta<typeof ErrorDisplay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorDisplay> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({})
Default.args = {}

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Houve um erro'
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor'
}

export const Small = Template.bind({})
Small.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor',
  small: true
}