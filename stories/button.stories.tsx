import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "../src/components/Button/Button";

storiesOf("Button", module)
  .add("primary", () => (
    <Button text="test" secondary={false}/>
  ))
  .add("secondary", () => (
    <Button text="test" secondary={true}/>
  ))