import React, { Component } from 'react';
import {
  meat,
  rice,
  beans,
  sides,
  makeDefaultState,
} from '../../components/OrderBuilder/ingredients';

import { Meat, Rice, Beans, Sides } from '../../components/OrderBuilder/types';
import Selections from '../../components/OrderBuilder/Selections/Selections';

import { Button, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

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

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F7F2ED',
});
export class Order extends Component<Props, State> {
  state: State = {
    selectedMeat: makeDefaultState(meat),
    selectedRice: makeDefaultState(rice),
    selectedBeans: makeDefaultState(beans),
    selectedSides: makeDefaultState(sides),
  };

  setSelectedMeat = (id: Meat) => {
    let temp = this.state.selectedMeat[id];
    let updatedMeat = makeDefaultState(meat);
    updatedMeat[id] = !temp;
    this.setState({ selectedMeat: updatedMeat });
  };
  setSelectedRice = (id: Rice) => {
    let temp = this.state.selectedRice[id];
    let updatedRice = makeDefaultState(rice);
    updatedRice[id] = !temp;
    this.setState({ selectedRice: updatedRice });
  };
  setSelectedBeans = (id: Beans) => {
    let temp = this.state.selectedBeans[id];
    let updatedBeans = makeDefaultState(beans);
    updatedBeans[id] = !temp;
    this.setState({ selectedBeans: updatedBeans });
  };
  setSelectedSides = (id: Sides) => {
    let temp = this.state.selectedSides[id];
    let updatedSides = this.state.selectedSides;
    updatedSides[id] = !temp;
    this.setState({ selectedSides: updatedSides });
  };

  handleSubmit = () => {
    console.log(this.state.selectedMeat);
    console.log(this.state.selectedRice);
    console.log(this.state.selectedBeans);
    console.log(this.state.selectedSides);
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
        <StyledBox py={4} mt={4}>
          <Button
            color='primary'
            size='large'
            variant='contained'
            onClick={this.handleSubmit}
          >
            Add To Cart
          </Button>
        </StyledBox>
      </div>
    );
  }
}

export default Order;
