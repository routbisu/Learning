class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        console.log(this.greeting);
    }
}

class BigGreeter extends Greeter {
    bigGreet() {
        console.log("Hello " + this.greeting);
    }
}

var greeter = new BigGreeter("Biswa");
greeter.greet();
greeter.bigGreet();