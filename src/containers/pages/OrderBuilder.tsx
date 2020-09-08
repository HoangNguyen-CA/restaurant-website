import React, { Component } from 'react';
import {
  meat,
  rice,
  beans,
  sides,
} from '../../components/OrderBuilder/ingredients';

import { Meat, Rice, Beans, Sides } from '../../components/OrderBuilder/types';
import Selections from '../../components/OrderBuilder/Selections/Selections';

type Props = {
  history: any;
};

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
    return (
      <div>
        <Selections<Meat> ingredients={meat} title='Meat'></Selections>
        <Selections<Rice> ingredients={rice} title='Rice'></Selections>
        <Selections<Beans> ingredients={beans} title='Beans'></Selections>
        <Selections<Sides> ingredients={sides} title='Sides'></Selections>
      </div>
    );
  }
}

export default Order;
