import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps} from '../components/ValueDescriptor/ValueDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  color: 'default',
  isCurrency: false
}

export const DefaulCurrency = Template.bind({})
DefaulCurrency.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  color: 'default',
  isCurrency: true
}

export const Primary = Template.bind({})
Primary.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  color: 'primary',
  isCurrency: false
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  color: 'primary',
  isCurrency: true
}











