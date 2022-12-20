// @ts-ignore
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput as TextInputComponent, TextInputProps } from '../src';

const meta: Meta = {
    title: 'Contactout Shared Components',
    component: TextInputComponent,
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
const Template: Story<TextInputProps> = args => {
    // @ts-ignore
    return <TextInputComponent {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const TextInput = Template.bind({});

TextInput.args = {};
