"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
const types_1 = require("./types");
const aircraft = container_1.container.get(types_1.TYPES.Aircraft);
aircraft.start().then(resp => console.log(resp));
