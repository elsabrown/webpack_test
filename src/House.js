class House {
  constructor(width, lenght, floors) {
    this.width = width;
    this.lenght = lenght;
    this.floors = floors;
  }
  getInfo(){
    console.log(`Площадь: ${this.width * this.lenght * this.floors}, этажей: ${this.floors}`);
  }
}

export default House;