// from the task link
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.radius = obj.radius;
        this.color = obj.color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
        console.log("New set radius " + this.radius);
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
        console.log("New set color " + this.color);
    };
    Circle.prototype.toString = function (radius, color) {
        var str = this.radius + " and " + this.color;
        return str;
    };
    Circle.prototype.getArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        return area;
    };
    Circle.prototype.getCircumference = function () {
        var circ = 2 * Math.PI * this.radius;
        return circ;
    };
    return Circle;
}());
var obj = {
    radius: 10,
    color: "blue"
};
var circle = new Circle(obj);
console.log(circle.getRadius());
circle.setRadius(5);
console.log(circle.getColor());
circle.setColor("blue");
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
