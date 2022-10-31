function arrayRotation (inputArray, rotations){
     let rotatedArray = [];
     for (let i = 1; i <= rotations; i++){
        let temp = inputArray.shift();
        inputArray.push(temp);
     }
     console.log(inputArray.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);