import React, { Component } from 'react';
import {
  meat,
  rice,
  beans,
  sides,
  makeDefaultBeans,
  makeDefaultMeat,
  makeDefaultRice,
  makeDefaultSides,
} from '../../components/OrderBuilder/ingredients';

import { Meat, Rice, Beans, Sides } from '../../components/OrderBuilder/types';
import Selections from '../../components/OrderBuilder/Selections/Selections';

type Props = {
  history: any;
};

type State = {
  selectedMeat: {
    [key in Meat]: boolean;
  };
  selectedRice: {
    [key in Rice]: boolean;
  };
  selectedBeans: {
    [key in Beans]: boolean;
  };
  selectedSides: {
    [key in Sides]: boolean;
  };
};

Object.keys(meat);

export class Order extends Component<Props, State> {
  state: State = {
    selectedMeat: makeDefaultMeat(),
    selectedRice: makeDefaultRice(),
    selectedBeans: makeDefaultBeans(),
    selectedSides: makeDefaultSides(),
  };

  setSelectedMeat = (id: Meat) => {
    let temp = this.state.selectedMeat[id];
    let updatedMeat = makeDefaultMeat();
    updatedMeat[id] = !temp;
    this.setState({ selectedMeat: updatedMeat });
  };
  setSelectedRice = (id: Rice) => {
    let temp = this.state.selectedRice[id];
    let updatedRice = makeDefaultRice();
    updatedRice[id] = !temp;
    this.setState({ selectedRice: updatedRice });
  };
  setSelectedBeans = (id: Beans) => {
    let temp = this.state.selectedBeans[id];
    let updatedBeans = makeDefaultBeans();
    updatedBeans[id] = !temp;
    this.setState({ selectedBeans: updatedBeans });
  };
  setSelectedSides = (id: Sides) => {
    let temp = this.state.selectedSides[id];
    let updatedSides = this.state.selectedSides;
    updatedSides[id] = !temp;
    this.setState({ selectedSides: updatedSides });
  };

  render() {
    return (
      <div>
        <Selections<Meat>
          ingredients={meat}
          title='Meat'
          setSelected={this.setSelectedMeat}
          selected={this.state.selectedMeat}
        ></Selections>
        <Selections<Rice>
          ingredients={rice}
          title='Rice'
          setSelected={this.setSelectedRice}
          selected={this.state.selectedRice}
        ></Selections>
        <Selections<Beans>
          ingredients={beans}
          title='Beans'
          setSelected={this.setSelectedBeans}
          selected={this.state.selectedBeans}
        ></Selections>
        <Selections<Sides>
          ingredients={sides}
          title='Sides'
          setSelected={this.setSelectedSides}
          selected={this.state.selectedSides}
        ></Selections>
      </div>
    );
  }
}

export default Order;
