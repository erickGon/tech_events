import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from "../src/components/Header/Header";

function toggleEvents(show: boolean) {
  alert("toggleEvents");
}

storiesOf("Header", module)
  .add("primary", () => (
    <Header toggleEvents={ toggleEvents }/>
  ))