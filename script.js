const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    if (!Array.isArray(arr) || typeof n !== 'number' || n <= 0) {
        console.error("Invalid input. Please provide a valid array and a positive integer.");
        return;
    }

    const result = [];
    let currentSubarray = [];

    for (let i = 0; i < arr.length; i++) {
        if (currentSubarray.reduce((sum, num) => sum + num, 0) + arr[i] <= n) {
            currentSubarray.push(arr[i]);
        } else {
            result.push([...currentSubarray]);
            currentSubarray = [arr[i]];
        }
    }

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const userN = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(userN, 10))));
