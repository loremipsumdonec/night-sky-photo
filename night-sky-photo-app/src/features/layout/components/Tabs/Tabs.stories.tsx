import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import { Tab } from './Tab';

export default {
  title: 'Layout/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

const TemplateWithTabs: ComponentStory<typeof Tabs> = (args) => 
    <Tabs>
        <Tab label={'lorem donec'}>
            <h1>Detta är för 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada neque justo, eget ullamcorper ex tincidunt et. Aenean orci dui, sodales accumsan luctus ut, lobortis eget odio. Sed quis fermentum turpis. Praesent vel mauris ornare ante placerat fringilla eget in risus. Maecenas sodales, tortor ut condimentum aliquam, dui ligula hendrerit felis, eu luctus dolor lectus quis justo. Vivamus non lorem est. Proin vitae tortor in dolor aliquet feugiat.</p>
        </Tab>
        <Tab label={'ipsum donec'}>
            <h1>Detta är för 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada neque justo, eget ullamcorper</p>
        </Tab>
        <Tab label={'suprem'}>
            <h1>Detta är för 3</h1>
            <p>Morbi malesuada neque justo, eget ullamcorper ex tincidunt et</p>
        </Tab>
    </Tabs>

export const WithTabs = TemplateWithTabs.bind({});

Default.args = {
};