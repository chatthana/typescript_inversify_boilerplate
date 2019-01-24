import { container } from './container';
import { TYPES } from './types';
import { Aircraft } from './interfaces';

const aircraft = container.get<Aircraft>(TYPES.Aircraft);

aircraft.start().then(resp => console.log(resp));