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
  [Meat.steak]: STEAK,
  [Meat.chicken]: CHICKEN,
  [Meat.barbacoa]: BARBACOA,
  [Meat.carnitas]: CARNITAS,
  [Meat.softritas]: SOFTRITAS,
};

export const rice = {
  [Rice.brownRice]: BROWN_RICE,
  [Rice.whiteRice]: WHITE_RICE,
};

export const beans = {
  [Beans.blackBeans]: BLACK_BEANS,
  [Beans.pintoBeans]: PINTO_BEANS,
};

export const sides = {
  [Sides.cheese]: CHEESE,
  [Sides.sourCream]: SOUR_CREAM,
  [Sides.fajitaVeg]: FAJITA_VEG,
  [Sides.mildSalsa]: MILD_SALSA,
  [Sides.mediumSalsa]: MEDIUM_SALSA,
  [Sides.hotSalsa]: HOT_SALSA,
  [Sides.guacamole]: GUACAMOLE,
  [Sides.quesoBlanco]: QUESO_BLANCO,
};
