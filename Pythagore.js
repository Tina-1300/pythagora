class Pythagore{

    Author(){
        console.log("pseudo: Tina-1300\ngithub: https://github.com/Tina-1300 created on 03/11/2024")
    }

    // hypotenuse parameter the largest side, the other two parameters are the other values
    IsRectangle(hypotenuse, side_a, side_b){
        let result_hypotenuse = Math.pow(hypotenuse, 2);
        let sideA = Math.pow(side_a, 2);
        let sideB = Math.pow(side_b, 2);
        const result = sideA + sideB;
        return (result_hypotenuse == result) ? true : false;
    }

    // hypotenus parameter, one side to find the missing side
    AdjacentSide(Hypotenus, OtherSide){
        return Math.sqrt(Math.pow(Hypotenus, 2) - Math.pow(OtherSide, 2));
    }

    // between the two sides to find the hypotenus
    Hypotenus(side_a, side_b){
        return Math.sqrt(Math.pow(side_a, 2) + Math.pow(side_b, 2));
    }

};  

module.exports =  Pythagore;