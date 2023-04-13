// module 5 - pg 51 - 53

class Calculator {

    constructor() {
        this.id=Math.floor((Math.random())*1000)
    }

    // log is a private method (Can only be called from inside the function)
    #log=(value)=>{
        console.log(`[Calculator:${this.id}]:${value}`)
    }

    add(num1, num2) {
        const value=num1+num2
        this.#log(value)  
        return value
    }

    subtract(num1, num2) {
        const value=num1-num2
        this.#log(value)  
        return value
    }
}

module.exports=Calculator