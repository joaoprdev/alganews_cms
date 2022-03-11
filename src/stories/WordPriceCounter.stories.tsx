import { ComponentStory, ComponentMeta } from '@storybook/react';

import WordPriceCounter, { WordPriceCounterProps} from '../components/WordPriceCounter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as ComponentMeta<typeof WordPriceCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WordPriceCounter> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({})
Default.args = {
  wordsCount: 20,
  pricePerWord: 0.5
}