class Pythagore {
    constructor(...args) {
        this.version = "2.3.0";
        if (args.length === 0) {
            this.side_a = null;
            this.side_b = null;
            this.hypotenuse = null;
        } else if (args.length === 2) {
            this.side_a = args[0];
            this.side_b = args[1];
            this.hypotenuse = null;
        } else if (args.length === 3) {
            this.side_a = args[0];
            this.side_b = args[1];
            this.hypotenuse = args[2];
        } else {
            throw new Error("wrong number of arguments");
        }
    }

    Author() {
        return "author: Tina-1300\ngithub: https://github.com/Tina-1300 created on 03/11/2024";
    }

    _isClose(a, b, epsilon = 1e-9) {
        return Math.abs(a - b) < epsilon;
    }

   IsRectangle(h = this.hypotenuse, a = this.side_a, b = this.side_b) {
        if (h === null || a === null || b === null) {
            throw new Error("Invalid parameters: 'hypotenuse', 'side_a' and 'side_b' must be defined.");
        }
        
        const h2 = Math.pow(h, 2);
        const sumSq = Math.pow(a, 2) + Math.pow(b, 2);
        return this._isClose(h2, sumSq);
    }

    AdjacentSide(hypotenuse = this.hypotenuse, otherSide = this.side_b) {
        if (otherSide === null || hypotenuse === null) {
            throw new Error("Invalid parameters: 'hypotenuse' and 'side_b' must be defined.");
        }
        if (otherSide >= hypotenuse) {
            throw new Error("The hypotenuse must be the longest side.");
        }
        return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(otherSide, 2));
    }

    Hypotenus(sideA = this.side_a, sideB = this.side_b) {
        if (sideA === null || sideB === null) {
            throw new Error("Invalid parameters: 'side_a' and 'side_b' must be defined.");
        }
        return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    }
}

module.exports = Pythagore;