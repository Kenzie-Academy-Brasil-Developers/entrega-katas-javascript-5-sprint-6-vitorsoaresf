const testReverseString1 = () => {
    const tests = [
        {
            'input': {
                'string': 'vitor'
            },
            "expected_result": 'rotiv'
        },
        {
            'input': {
                'string': 'Ola mundo'
            },
            "expected_result": 'odnum alO'
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(reverseString(test.input.string)) === JSON.stringify(test.expected_result),
        {
            "Function": 'reverseString',
            "expected": test.expected_result,
            "got": reverseString(test.input.string),
            "tested": test.input.string
        }
    ));
}
testReverseString1();

const testReverseString2 = () => {
    let result = reverseString("Ola mundo");
    let expected = "odnum alO";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseString2();




const testReverseSentence1 = () => {
    const tests = [
        {
            'input': {
                'string': 'Vitor Soares Ferreira'
            },
            "expected_result": 'Ferreira Soares Vitor'
        },
        {
            'input': {
                'string': 'Morgana Moura Ramos Madruga'
            },
            "expected_result": 'Madruga Ramos Moura Morgana'
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(reverseSentence(test.input.string)) === JSON.stringify(test.expected_result),
        {
            "Function": 'reverseSentence',
            "expected": test.expected_result,
            "got": reverseSentence(test.input.string),
            "tested": test.input.string
        }
    ));
}
testReverseSentence1();

const testReverseSentence2 = () => {
    let result = reverseSentence("Ola mundo");
    let expected = "mundo Ola";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence2();




const testMinimumValue1 = () => {
    const tests = [
        {
            'input': {
                'arr': [10, 5, 39, 4, 34]
            },
            "expected_result": 4
        },
        {
            'input': {
                'arr': [10, 5, 39, 4, 3, 34]
            },
            "expected_result": 3
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(minimumValue(test.input.arr)) === JSON.stringify(test.expected_result),
        {
            "Function": 'minimumValue',
            "expected": test.expected_result,
            "got": minimumValue(test.input.arr),
            "tested": test.input.arr
        }
    ));
}
testMinimumValue1();


const testMinimumValue2 = () => {
    let result = minimumValue([1, 2, 3, 4, 5]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2();




const testMaximumValue1 = () => {
    const tests = [
        {
            'input': {
                'arr': [10, 5, 39, 4, 34]
            },
            "expected_result": 39
        },
        {
            'input': {
                'arr': [10, 5, 39, 49, 4, 3, 34]
            },
            "expected_result": 49
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(maximumValue(test.input.arr)) === JSON.stringify(test.expected_result),
        {
            "Function": 'maximumValue',
            "expected": test.expected_result,
            "got": maximumValue(test.input.arr),
            "tested": test.input.arr
        }
    ));
}
testMaximumValue1();


const testMaximumValue2 = () => {
    let result = maximumValue([1, 2, 3, 4, 5]);
    let expected = 5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2();




const testCalculateRemainder1 = () => {
    const tests = [
        {
            'input': {
                'number1': 2,
                'number2': 2
            },
            "expected_result": 0
        },
        {
            'input': {
                'number1': 3,
                'number2': 2
            },
            "expected_result": 1
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(calculateRemainder(test.input.number1, test.input.number2)) === JSON.stringify(test.expected_result),
        {
            "Function": 'calculateRemainder',
            "expected": test.expected_result,
            "got": calculateRemainder(test.input.number1, test.input.number2),
            "tested": test.input
        }
    ));
}
testCalculateRemainder1();


const testCalculateRemainder2 = () => {
    let result = calculateRemainder(2, 2);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2();





const testDistinctValues1 = () => {
    const tests = [
        {
            'input': {
                'list': [1, 2, 3, 1, 4, 5, 3, 2]
            },
            "expected_result": [1, 2, 3, 4, 5]
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(distinctValues(test.input.list)) === JSON.stringify(test.expected_result),
        {
            "Function": 'distinctValues',
            "expected": test.expected_result,
            "got": distinctValues(test.input.list),
            "tested": test.input.list
        }
    ));
}
testDistinctValues1();


const testDistinctValues2 = () => {
    let result = distinctValues([3, 3, 3, 4, 1, 3, 5, 6]);
    let expected = [1, 3, 4, 5, 6];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues2();





const testCountValues1 = () => {
    const tests = [
        {
            'input': {
                'list': [1, 2, 3, 1, 4, 5, 3, 2]
            },
            "expected_result": {
                '1': 2,
                '2': 2,
                '3': 2,
                '4': 1,
                '5': 1
            }
        }
    ]
    tests.forEach((test) => console.assert(JSON.stringify(countValues(test.input.list)) === JSON.stringify(test.expected_result),
        {
            "Function": 'countValues',
            "expected": test.expected_result,
            "got": countValues(test.input.list),
            "tested": test.input.list
        }
    ));
}
testCountValues1();


const testCountValues2 = () => {
    let result = countValues([3, 3, 3, 4, 1, 3, 5, 6]);
    let expected = {
        '1': 1,
        '3': 4,
        '4': 1,
        '5': 1,
        '6': 1
    };
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `esperado: ${expected}, obtido: ${result}`)
}
testCountValues2();