"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("../types");
let PWEngine = class PWEngine {
    prepare() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Started ...");
            }, 5000);
        });
    }
    ignite() {
        return Promise.resolve("Ignited ...");
    }
};
PWEngine = __decorate([
    inversify_1.injectable()
], PWEngine);
exports.PWEngine = PWEngine;
let BoeingWing = class BoeingWing {
    roll() {
        return "Rolling Rolling Rolling ...";
    }
};
BoeingWing = __decorate([
    inversify_1.injectable()
], BoeingWing);
exports.BoeingWing = BoeingWing;
let BoeingAircraft = class BoeingAircraft {
    constructor(wing, engine) {
        this._wing = wing;
        this._engine = engine;
    }
    start() {
        return this._engine.prepare()
            .then(resp => {
            return this._engine.ignite();
        });
    }
    ;
    turn() {
        return this._wing.roll();
    }
};
BoeingAircraft = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.Wing)),
    __param(1, inversify_1.inject(types_1.TYPES.Engine)),
    __metadata("design:paramtypes", [Object, Object])
], BoeingAircraft);
exports.BoeingAircraft = BoeingAircraft;
