import STEAK from '../../resources/OrderBuilder/meat/steak.png';
import CHICKEN from '../../resources/OrderBuilder/meat/chicken.png';
import BARBACOA from '../../resources/OrderBuilder/meat/barbacoa.png';
import CARNITAS from '../../resources/OrderBuilder/meat/carnitas.png';
import SOFTRITAS from '../../resources/OrderBuilder/meat/sofritas.png';

import BROWN_RICE from '../../resources/OrderBuilder/rice/brown-rice@3x.png';
import WHITE_RICE from '../../resources/OrderBuilder/rice/white-rice@3x.png';

import BLACK_BEANS from '../../resources/OrderBuilder/beans/black-beans.png';
import PINTO_BEANS from '../../resources/OrderBuilder/beans/black-beans.png';

import CHEESE from '../../resources/OrderBuilder/sides/cheese.png';
import SOUR_CREAM from '../../resources/OrderBuilder/sides/sour-cream@3x.png';
import FAJITA_VEG from '../../resources/OrderBuilder/sides/fajita_veg.png';
import MILD_SALSA from '../../resources/OrderBuilder/sides/fresh-tomato-salsa@3x.png';
import GUACAMOLE from '../../resources/OrderBuilder/sides/guacamole@3x.png';
import QUESO_BLANCO from '../../resources/OrderBuilder/sides/queso_blanco.png';
import MEDIUM_SALSA from '../../resources/OrderBuilder/sides/tomatillo-green-chili-salsa@3x.png';
import HOT_SALSA from '../../resources/OrderBuilder/sides/tomatillo-red-chili-salsa@3x.png';

import { Meat, Rice, Beans, Sides } from './types';

export const meat: { [key in Meat]: { image: string; name: string } } = {
  [Meat.steak]: { image: STEAK, name: 'Steak' },
  [Meat.chicken]: { image: CHICKEN, name: 'Chicken' },
  [Meat.barbacoa]: { image: BARBACOA, name: 'Barbacoa' },
  [Meat.carnitas]: { image: CARNITAS, name: 'Carnitas' },
  [Meat.softritas]: { image: SOFTRITAS, name: 'Softritas' },
};

export const rice: { [key in Rice]: { image: string; name: string } } = {
  [Rice.brownRice]: { image: BROWN_RICE, name: 'Brown Rice' },
  [Rice.whiteRice]: { image: WHITE_RICE, name: 'White Rice' },
};

export const beans: { [key in Beans]: { image: string; name: string } } = {
  [Beans.blackBeans]: { image: BLACK_BEANS, name: 'Black Beans' },
  [Beans.pintoBeans]: { image: PINTO_BEANS, name: 'Pinto Beans' },
};

export const sides: { [key in Sides]: { image: string; name: string } } = {
  [Sides.cheese]: { image: CHEESE, name: 'Cheese' },
  [Sides.sourCream]: { image: SOUR_CREAM, name: 'Sour Cream' },
  [Sides.fajitaVeg]: { image: FAJITA_VEG, name: 'Fajita Vegetables' },
  [Sides.mildSalsa]: { image: MILD_SALSA, name: 'Mild Salsa' },
  [Sides.mediumSalsa]: { image: MEDIUM_SALSA, name: 'Medium Salsa' },
  [Sides.hotSalsa]: { image: HOT_SALSA, name: 'Hot Salsa' },
  [Sides.guacamole]: { image: GUACAMOLE, name: 'Guacamole' },
  [Sides.quesoBlanco]: { image: QUESO_BLANCO, name: 'Queso Blanco' },
};

export type AllIngredients =
  | typeof meat
  | typeof rice
  | typeof beans
  | typeof sides;

export const makeDefaultMeat = () => {
  return {
    [Meat.steak]: false,
    [Meat.chicken]: false,
    [Meat.barbacoa]: false,
    [Meat.carnitas]: false,
    [Meat.softritas]: false,
  };
};

export const makeDefaultRice = () => {
  return {
    [Rice.brownRice]: false,
    [Rice.whiteRice]: false,
  };
};

export const makeDefaultBeans = () => {
  return {
    [Beans.blackBeans]: false,
    [Beans.pintoBeans]: false,
  };
};

export const makeDefaultSides = () => ({
  [Sides.cheese]: false,
  [Sides.sourCream]: false,
  [Sides.fajitaVeg]: false,
  [Sides.mildSalsa]: false,
  [Sides.mediumSalsa]: false,
  [Sides.hotSalsa]: false,
  [Sides.guacamole]: false,
  [Sides.quesoBlanco]: false,
});
