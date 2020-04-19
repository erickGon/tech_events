import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Loader from "../src/components/Loader/Loader";

storiesOf("Loader", module)
  .add("main", () => (
    <Loader 
      show={true}
    />
  ))