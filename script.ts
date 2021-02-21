// from the task link
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

interface circleConfig{
    radius: number;
    color: string;
}


class Circle{
    radius;
    color;

    constructor(obj:circleConfig){
        this.radius = obj.radius;
        this.color = obj.color;
    }

    getRadius():number{
        return this.radius;
    }

    setRadius(radius:number):void{
        this.radius = radius;
        console.log(`New set radius ${this.radius}`)
    }

    getColor(){
        return this.color;
    }

    setColor(color:string): void{
        this.color = color;
        console.log(`New set color ${this.color}`)
    }

    toString(radius?:number,color?:String):String{
        let str = `${this.radius} and ${this.color}`
        return str;
    }

    getArea():number{
        let area = Math.PI * Math.pow(this.radius,2);
        return area;
    }

    getCircumference():number{
        let circ = 2 * Math.PI * this.radius; 
        return circ;
    }
}


let obj:circleConfig = {
    radius : 10,
    color : "blue"
}

let circle = new Circle(obj);

console.log(circle.getRadius());
circle.setRadius(5);
console.log(circle.getColor());
circle.setColor("blue");
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
