export interface Aircraft {
  start(): Promise<string>;
  turn(): string;
};

export interface Wing {
  roll(): string;
};

export interface Engine {
  prepare(): Promise<string>;
  ignite(): Promise<string>;
};