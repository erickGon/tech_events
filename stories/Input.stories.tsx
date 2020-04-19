import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Input from "../src/components/Input/Input";

const handleChange = (text: string): void => {
  console.log(text);
}

storiesOf("Input", module)
  .add("primary", () => (
    <Input 
      handleChange={handleChange} 
      name="test" 
      placeholder="test"
      type="text"
    />
  ))