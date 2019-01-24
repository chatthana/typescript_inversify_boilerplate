import { Container } from 'inversify';

import { TYPES } from './types';
import { Aircraft, Wing, Engine } from './interfaces';
import { BoeingWing, PWEngine, BoeingAircraft } from './entities';

const container = new Container();
container.bind<Aircraft>(TYPES.Aircraft).to(BoeingAircraft);
container.bind<Wing>(TYPES.Wing).to(BoeingWing);
container.bind<Engine>(TYPES.Engine).to(PWEngine);

export {
  container
};