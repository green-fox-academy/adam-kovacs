'use strict';

export class Plants {
  waterAmount: number;
  private efficiency: number;
  private waterFull: number;
  private color: string;
  private plantType: string;

  constructor(efficiency: number, waterFull: number, color: string, plantType: string) {
    this.waterAmount = 0;
    this.efficiency = efficiency;
    this.waterFull = waterFull
    this.color = color;
    this.plantType = plantType;
  }

  water(gallon): void {
    this.waterAmount += gallon * this.efficiency;
  }

  getNeedWater(): boolean {
    return this.waterAmount <= this.waterFull;
  }

  getColor(): string {
    return this.color;
  }

  getPlantType(): string {
    return this.plantType;
  }
}

export class Flower extends Plants {
    constructor(color: string) {
    super(0.75, 5, color, 'flower');
  }
}

export class Tree extends Plants {
  constructor(color: string) {
    super(0.40, 10, color, 'tree')
  }
}