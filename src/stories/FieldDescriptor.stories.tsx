import { ComponentStory, ComponentMeta } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps} from '../components/FieldDescriptor/FieldDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
} as ComponentMeta<typeof FieldDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  label: 'data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}