const reverseString = (str) => {
    return [...str].reverse().join('');
}

const reverseSentence = (str) => {
    return str.split(' ').reverse().join(' ');
}

const minimumValue = (arr) => {
    let minimum = 0;
    minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}

const maximumValue = (arr) => {
    let maximum = 0;
    minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return maximum;
}

const calculateRemainder = (number1, number2) => {
    return number1 % number2;
}

const distinctValues = (list) => {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        if(!result.includes(list[i])){
            result.push(list[i]);
        }
    }
    return result.sort();
}

const countValues = (list) => {
    let objResult = {};

    list.forEach(element => {
        if(objResult[`${element}`] === undefined){
            objResult[`${element}`] = 1;
        }else{
            objResult[`${element}`]++;
        }
    });

    return objResult
}