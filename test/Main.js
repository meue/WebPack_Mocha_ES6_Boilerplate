import Main from "../src/Main.js";
import assert from 'assert';

describe("Main.js", function () {
    describe("#sum", function () {
        it("should return 2, if parameters are 1 and 1", function () {
            assert.equal(new Main().sum(1, 1), 2);
        });

        it("should return -2, if parameters are -1 and -1", function () {
            assert.equal(new Main().sum(-1, -1), -2);
        });

        it("should return NaN, if parameters contain something else than a number", function () {
            assert.equal(isNaN(new Main().sum(-1, "a lizard")), true);
        });
    });
    describe("#removeLetterFromText", function () {
        it("should return '', if parameters are '1' and '1' ", function () {
            assert.equal(new Main().removeLetterFromText("1", "1"), "");
        });
        it("should return '13', if parameters are '123' and '2' ", function () {
            assert.equal(new Main().removeLetterFromText("123", "2"), "13");
        });
        it("should return '123', if parameters are '123' and '4' ", function () {
            assert.equal(new Main().removeLetterFromText("123", "4"), "123");
        });
    });
})