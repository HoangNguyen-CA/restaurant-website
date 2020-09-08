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

export const meat = {
  Steak: { image: STEAK, id: Meat.steak },
  Chicken: { image: CHICKEN, id: Meat.chicken },
  Barbacoa: { image: BARBACOA, id: Meat.barbacoa },
  Carnitas: { image: CARNITAS, id: Meat.carnitas },
  Softritas: { image: SOFTRITAS, id: Meat.softritas },
};

export const rice = {
  'Brown Rice': { image: BROWN_RICE, id: Rice.brownRice },
  'White Rice': { image: WHITE_RICE, id: Rice.whiteRice },
};

export const beans = {
  'Black Beans': { image: BLACK_BEANS, id: Beans.blackBeans },
  'Pinto Beans': { image: PINTO_BEANS, id: Beans.pintoBeans },
};

export const sides = {
  Cheese: { image: CHEESE, id: Sides.cheese },
  'Sour Cream': { image: SOUR_CREAM, id: Sides.sourCream },
  'Fajita Vegetables': { image: FAJITA_VEG, id: Sides.fajitaVeg },
  'Mild Salsa': { image: MILD_SALSA, id: Sides.mildSalsa },
  'Medium Salsa': { image: MEDIUM_SALSA, id: Sides.mediumSalsa },
  'Hot Salsa': { image: HOT_SALSA, id: Sides.hotSalsa },
  Guacamole: { image: GUACAMOLE, id: Sides.guacamole },
  'Queso Blanco': { image: QUESO_BLANCO, id: Sides.quesoBlanco },
};
