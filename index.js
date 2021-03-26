const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

createPhoneNumber(arr)