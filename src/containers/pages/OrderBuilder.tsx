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

import { Button, Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cartActions';

interface Order {
  meat: string;
  rice: string;
  beans: string;
  sides: string[];
}

type Props = {
  history: any;
  addItem: (order: Order) => void;
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
  error: string;
};

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const getSelectedIng = (obj: any) => {
  for (let i in obj) {
    if (obj[i] === true) {
      return i;
    }
  }
  return '';
};

const getSelectedIngArr = (obj: any) => {
  const arr: string[] = [];
  for (let i in obj) {
    if (obj[i] === true) {
      arr.push(i);
    }
  }
  return arr;
};
export class OrderBuilder extends Component<Props, State> {
  state: State = {
    selectedMeat: makeDefaultState(meat),
    selectedRice: makeDefaultState(rice),
    selectedBeans: makeDefaultState(beans),
    selectedSides: makeDefaultState(sides),
    error: '',
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
    this.setState({ error: '' });

    let order: Order = {
      meat: getSelectedIng(this.state.selectedMeat),
      rice: getSelectedIng(this.state.selectedRice),
      beans: getSelectedIng(this.state.selectedBeans),
      sides: getSelectedIngArr(this.state.selectedSides),
    };
    if (order.meat === '') {
      this.setState({ error: 'Error: Meat not selected' });
    } else if (order.rice === '') {
      this.setState({ error: 'Error: Rice not selected' });
    } else if (order.beans === '') {
      this.setState({ error: 'Error: Beans not selected' });
    } else {
      this.props.addItem(order);
    }
  };

  render() {
    return (
      <Container maxWidth='lg'>
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
        <Box my={4}>
          {this.state.error ? (
            <Alert severity='error' style={{ textAlign: 'center' }}>
              {this.state.error}
            </Alert>
          ) : null}
        </Box>
        <StyledBox mb={6} mt={6}>
          <Button
            color='primary'
            size='large'
            variant='contained'
            onClick={this.handleSubmit}
          >
            Add To Cart
          </Button>
        </StyledBox>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  addItem: (order: Order) => addItem(order),
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBuilder);
