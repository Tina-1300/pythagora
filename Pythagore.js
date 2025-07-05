class Pythagore{

    constructor(...args){
        if(args.length === 0){
            this.side_a = null;
            this.side_b = null;
            this.hypotenuse = null;
        }else if (args.length === 2){
            this.side_a = args[0];
            this.side_b = args[1];
            this.hypotenuse = null;
        }else if (args.length === 3){
            this.side_a = args[0];
            this.side_b = args[1];
            this.hypotenuse = args[2];
        }else{
            throw new Error("wrong number of arguments");
        }
    }

    Author(){
        console.log("pseudo: Tina-1300\ngithub: https://github.com/Tina-1300 created on 03/11/2024")
    }

    // hypotenuse parameter the largest side, the other two parameters are the other values
    IsRectangle(hypotenuse = this.hypotenuse, side_a = this.side_a, side_b = this.side_b){
        if (hypotenuse === null || side_a === null || side_b === null){
            throw new Error("Invalid parameters: 'hypotenuse', 'side_a' and 'side_b' must be defined and not null.")
        }
        let result_hypotenuse = Math.pow(hypotenuse, 2);
        let sideA = Math.pow(side_a, 2);
        let sideB = Math.pow(side_b, 2);
        const result = sideA + sideB;
        return (result_hypotenuse == result) ? true : false;
    }

    // hypotenus parameter, one side to find the missing side
    AdjacentSide(Hypotenus = this.hypotenuse , OtherSide = this.side_b){
        if (OtherSide === null || Hypotenus === null){
            throw new Error("Invalid parameters: 'hypotenuse' and 'side_b' must be defined and not null.")
        }
        return Math.sqrt(Math.pow(Hypotenus, 2) - Math.pow(OtherSide, 2));
    }

    // between the two sides to find the hypotenus
    Hypotenus(side_a = this.side_a, side_b = this.side_b){
        if (side_a === null || side_b === null){
            throw new Error("Invalid parameters: 'side_a' and 'side_b' must be defined and not null.")
        }
        return Math.sqrt(Math.pow(side_a, 2) + Math.pow(side_b, 2));
    }

};  

module.exports =  Pythagore;