import * as React from 'react';
import Modal from "../src/components/Modal/Modal";
import { storiesOf } from '@storybook/react';

function toggleModal() {
  alert("toggleModal");
}

const event = {
  id: 1, 
  isFree: true, 
  name: "test",
  city: 1,
  startDate: "12/01/2020",
  endDate: "12/02/2020"
};

storiesOf("Modal", module)
  .add("primary", () => (
    <Modal 
      showModal = {true}
      toggleModal = {toggleModal}
      cities = {[]}
      event = { event }
    />
  ))