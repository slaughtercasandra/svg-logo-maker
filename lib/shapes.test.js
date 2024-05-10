const { Circle, Triangle, Square } = require('./shapes');

// const colors = require('colors')

describe('circle', () => {
    it('renders a circle', () => {
      // ARRANGE
      const shape = new Circle();
      // const color =('blue')
      shape.setColor(color)
      let expected =  `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;

      // ACT
      // get the "thing" you're testing
      let testme = shape.render();

      // ASSERT
      expect(testme).toEqual(expected);
    });
  });

  describe('Square', () => {
    it('render a square', () => {
        const shape = new Square();
        // const color =('red')
        shape.setColor(color)
        let expected =   `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;

        // ACT
        // get the "thing" you're testing
        let testme = shape.render();
  
        // ASSERT
        expect(testme).toEqual(expected);
      });
    });

  describe('Triangle', () => {
    it('render triangle', () => {
        const shape = new Triangle();
        // const color =('green')
        shape.setColor(color)
        let expected = `<polygon points="100, 20 40, 180 160, 180" fill="${this.color}" />`;

      // ACT
      // get the "thing" you're testing
      let testme = shape.render();

      // ASSERT
      expect(testme).toEqual(expected);
    });
  });
