class App {
    constructor(){
        this.x = 1;
        this.y = 2;
        // console.log(this.x+this.y)
        // console.log(new.target.name)
    }
    render(){
        console.log(this.x)
    }
    qq(){
        return 666
    }
}

class Child extends App {
    constructor(){
        super();
        console.log(this)
    }
    add(){
        console.log(super.qq())
    }

}

var child = new Child();


