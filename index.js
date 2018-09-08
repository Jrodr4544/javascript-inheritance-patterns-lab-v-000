function Point(xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
}

Point.prototype.toString = function() {
  return(this.x + ", " + this.y);
}

function Side(length) {
  this.length = length;
}

function Shape() {
// This function should assign a Point to the Shape's position property based on these arguments. Shape should also define a move function that takes an x,y pair of arguments and moves the position to a new Point.
  
  // this.addToPlane = (x, y) => {
  //   this.position = new Point(x,y);
  // }
  // this.position = Point.call(this, 0, 0);
}

Shape.prototype.addToPlane = (x, y) => {
  this.position = new Point(x,y);
}

// Shape.prototype.position = () => {
  // return this.toString();
// }

Shape.prototype.move = (x, y) => {
  this.addToPlane(x,y);  
}

function Circle() {
  Shape.call(this)
  this.area = () => {
    
  }
  
  this.circumference = () => {
    
  }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides;
  this.numberOfSides = () => {
    
  }
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

function Quadrilateral() {
  Polygon.call(this)
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle() {
  Polygon.call(this)  
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle() {
  Quadrilateral.call(this)
  
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square() {
  Rectangle.call(this)
  this.listProperties = () => {
    
  }
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

