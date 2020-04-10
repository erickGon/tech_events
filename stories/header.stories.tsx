import * as React from 'react';
import Header from "../src/components/Header/Header";
import { storiesOf } from '@storybook/react';

function toggleEvents(show: boolean) {
  alert(`toggleEvents: ${show}`);
}

storiesOf("Header", module)
  .add("primary", () => (
    <Header 
      toggleEvents = {toggleEvents}
    />
  ))