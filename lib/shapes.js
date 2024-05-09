// lib/shapes.js

class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Abstract method to be overridden by child classes
      throw new Error('render() method must be implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="100, 20 40, 180 160, 180" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  