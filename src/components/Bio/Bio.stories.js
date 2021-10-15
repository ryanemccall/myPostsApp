import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio
    headshot="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/87342401_10157853999334020_4476814093893763072_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=ugcFWf2LdHwAX_9tWe6&_nc_ht=scontent-ort2-2.xx&oh=f7837791df7460929adee77d6f51b73e&oe=618EBCD9" //shouldnt use a real URL in production only for demo
    name="Ryan Modrall"
    tagline="Learning Next.Js with a Twitter clone"
    role="Junior Web Developer"
  />
);

export const Default = Template.bind({});