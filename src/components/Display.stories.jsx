import React from 'react';
import Display from './Display';

export default {
    title: 'Display',
    component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
    input: '123',
    result: '456',
};
