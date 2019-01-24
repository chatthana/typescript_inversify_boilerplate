import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Aircraft, Wing, Engine } from '../interfaces';
import { TYPES } from '../types';

@injectable()
class PWEngine implements Engine {
  public prepare() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Started ...");
      }, 5000);
    });
  }

  public ignite() {
    return Promise.resolve("Ignited ...")
  }
}

@injectable()
class BoeingWing implements Wing {
  public roll() {
    return "Rolling Rolling Rolling ..."
  }
}

@injectable()
class BoeingAircraft implements Aircraft {
  private _wing: Wing;
  private _engine: Engine;

  public constructor(
    @inject(TYPES.Wing) wing: Wing,
    @inject(TYPES.Engine) engine: Engine 
  ) {
    this._wing = wing;
    this._engine = engine;
  }

  public start() {
    return this._engine.prepare()
    .then(resp => {
      return this._engine.ignite();
    })
  };

  public turn() {
    return this._wing.roll();
  }
}

export {
  BoeingWing,
  PWEngine,
  BoeingAircraft
}