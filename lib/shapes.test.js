const { Circle, Triangle, Square } = require('./shapes');
const colors = require('colors')

describe('circle', () => {
    it('renders a circle', () => {
      const shape = new Circle();
      const color =('blue')
      shape.setColor(color)
      expect(shape.render).toEqual(false);
    });
  });

  describe('Square', () => {
    it('render a square', () => {
        const shape = new Square();
        const color =('blue')
        shape.setColor(color)
        expect(shape.render).toEqual(false);
    });
  });

  describe('Triangle', () => {
    it('render triangle', () => {
        const shape = new Triangle();
        const color =('blue')
        shape.setColor(color)
        expect(shape.render).toEqual(false);
    });
  });