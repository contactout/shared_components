// @ts-ignore
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, BUTTON_VARIANTS, BUTTON_SIZES } from '../src';

const meta: Meta = {
    title: 'Contactout Shared Components',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;
const Template: Story<{BUTTON_VARIANTS: any, BUTTON_SIZES: any}> = args => {
    console.log('args', JSON.stringify(args));
    // @ts-ignore
    return <Button {...args} >CTA Button</Button>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
