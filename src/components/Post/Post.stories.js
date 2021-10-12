import React from 'react';
import Post from './Post'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Post',
  component: Post,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
<Post 
              content= "I'm working in Figma to create a Twitter clone using Next JS!"
              date="10/12/2021" />
);

export const Default = Template.bind({});
