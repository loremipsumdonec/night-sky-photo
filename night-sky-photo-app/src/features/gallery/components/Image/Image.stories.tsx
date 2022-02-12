import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'Gallery/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: "",
  alt: "some descripton text"
};