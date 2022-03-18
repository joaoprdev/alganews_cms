import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart from '../app/components/Chart/Chart';

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [50, 100, 300, 100, 400, 200],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: 'transparent',
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 200, 150, 300, 100, 400],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
  data,
  title: 'Média de performance nos últimos 12 meses'
}

export const WithoutData = Template.bind({})
WithoutData.args = {
  title: 'Média de performance nos últimos 6 meses'
}