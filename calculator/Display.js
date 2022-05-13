class Display{
    constructor(displayLast,displayActually){
        this.displayActually=displayActually;
        this.displayLast=displayLast;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.valueActually = "";
        this.valueLast= "";
        this.sign={
            sum: '+',
            div: '%',
            multi: "x",
            rest: "-"
        }
    }

    clear(){
        this.valueActually = this.valueActually.toString().slice(0,-1);
        this.printValue();
    }

    clean(){
        this.valueActually = "";
        this.valueLast = "";
        this.typeOperation = undefined;
        this.printValue();
    }

    addNumber(number){
        if(number === "." && this.valueActually.includes(".")) return;
        this.valueActually= this.valueActually.toString()+number;
        this.printValue();
    }

    printValue(){
        this.displayActually.textContent = this.valueActually;
        this.displayLast.textContent=`${this.valueLast} ${this.sign[this.typeOperation] || ""}`;
    }

    calculate(){
        const valueLast= parseFloat(this.valueLast);
        const valueActually= parseFloat(this.valueActually);
            if(isNaN (valueLast) || isNaN(valueActually)) return
            this.valueActually = this.calculator[this.typeOperation](valueLast,valueActually);
            }   
    
    compute(type){
        this.typeOperation !== "equal" &&  this.calculate();
        this.typeOperation = type;
        this.valueLast = this.valueActually || this.valueLast; 
        this.valueActually ="";
        this.printValue();
    }
}