const Pythagore = require('../src/Pythagore');
const { performance } = require('perf_hooks');

describe('Pythagore Library - Complete Test Suite', () => {
    const p = new Pythagore();

    // --- Benchmark Helper ---
    const benchmark = (name, fn, repeats = 100000) => {
        const start = performance.now();
        for (let i = 0; i < repeats; i++) fn();
        const end = performance.now();
        console.log(`Benchmark ${name}: ${(end - start).toFixed(6)} ms for ${repeats} runs`);
    };

    // --- Constructor Tests ---
    describe('Constructor', () => {
        test('Initializes to null without arguments', () => {
            const empty = new Pythagore();
            expect(empty.side_a).toBeNull();
            expect(empty.side_b).toBeNull();
            expect(empty.hypotenuse).toBeNull();
        });

        test('Initializes with 2 arguments (sides)', () => {
            const p2 = new Pythagore(3, 4);
            expect(p2.side_a).toBe(3);
            expect(p2.side_b).toBe(4);
            expect(p2.hypotenuse).toBeNull();
        });

        test('Initializes with 3 arguments (complete)', () => {
            const p3 = new Pythagore(3, 4, 5);
            expect(p3.side_a).toBe(3);
            expect(p3.side_b).toBe(4);
            expect(p3.hypotenuse).toBe(5);
        });

        test('Throws error on invalid number of arguments', () => {
            expect(() => new Pythagore(1)).toThrow("wrong number of arguments");
            expect(() => new Pythagore(1, 2, 3, 4)).toThrow("wrong number of arguments");
        });
    });

    // --- Hypotenus Method Tests ---
    describe('Hypotenus Method', () => {
        test('Classic calculation (3, 4) => 5', () => {
            const calc = new Pythagore(3, 4);
            expect(calc.Hypotenus()).toBe(5);
        });

        test('Throws error if parameters are missing', () => {
            const empty = new Pythagore();
            expect(() => empty.Hypotenus()).toThrow("Invalid parameters");
        });

        test('Benchmark Hypotenus', () => {
            benchmark('Hypotenus', () => p.Hypotenus(3, 4));
        });
    });

    // --- IsRectangle Method Tests ---
    describe('IsRectangle Method', () => {
        test('Validates classic right triangle (3, 4, 5)', () => {
            const tri = new Pythagore(3, 4, 5);
            expect(tri.IsRectangle()).toBe(true);
        });

        test('Validates NON-right triangle (3, 4, 6)', () => {
            const tri = new Pythagore(3, 4, 6);
            expect(tri.IsRectangle()).toBe(false);
        });

        test('Floating point precision with square roots', () => {
            // sqrt(2)^2 + sqrt(2)^2 = 4 (h=2)
            const a = Math.sqrt(2);
            const b = Math.sqrt(2);
            const h = 2;
            const calc = new Pythagore(a, b, h);
            expect(calc.IsRectangle()).toBe(true);
        });

        test('Benchmark IsRectangle', () => {
            benchmark('IsRectangle', () => p.IsRectangle(5, 3, 4));
        });
    });

    // --- AdjacentSide Method Tests ---
    describe('AdjacentSide Method', () => {
        test('Calculates adjacent side (hypo: 10, side: 6) => 8', () => {
            const adj = new Pythagore(null, 6, 10);
            expect(adj.AdjacentSide(10, 6)).toBe(8);
        });

        test('Throws error if side is longer than hypotenuse', () => {
            expect(() => p.AdjacentSide(5, 10)).toThrow("longest side");
        });

        test('Benchmark AdjacentSide', () => {
            benchmark('AdjacentSide', () => p.AdjacentSide(5, 3));
        });
    });

    // --- Metadata Tests ---
    describe('Metadata', () => {
        test('Verify author and version information', () => {
            expect(p.Author()).toContain("Tina-1300");
            expect(p.version).toBe("2.3.0");
        });
    });
});






/*
npm test
*/

