import React, { Component } from 'react';
import {
  meat,
  rice,
  beans,
  sides,
} from '../../components/OrderBuilder/ingredients';

import { Meat, Rice, Beans, Sides } from '../../components/OrderBuilder/types';

type Props = {};

type State = {
  selectedMeat: Meat | null;
  selectedRice: Rice | null;
  selectedBeans: Beans | null;
  selectedSides: Sides[] | null;
};
export class Order extends Component<Props, State> {
  state: State = {
    selectedMeat: null,
    selectedRice: null,
    selectedBeans: null,
    selectedSides: null,
  };
  render() {
    return <div></div>;
  }
}

export default Order;
