import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Tag } from 'react-tag-input';

import TagInput, { TagInputProps} from '../components/TagInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagInput> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Insira as tags deste post',
  tags: [{id: '1', text: 'JavaScript'}]
}

export const VariousTags = Template.bind({})
VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags: [
    {id: '1', text: 'JavaScript'},
    {id: '2', text: 'CSS'},
    {id: '3', text: 'Typescript'},
    {id: '4', text: 'C#'},
    {id: '5', text: 'PHP'},
    {id: '6', text: 'Python'},
    {id: '7', text: 'Java'}
  ]
}

export function WorkingLiveExample () {
  const [tags, setTags] = useState<Tag[]>([])
  
  return <TagInput 
    placeholder="Insira as tags deste post"
    tags={tags}
    onAdd={t => setTags([...tags, t])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}