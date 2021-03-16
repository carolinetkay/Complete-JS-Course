function calculateBMI(mass, height) {
    return mass / height ** 2;
}

const markMass = 78;
const markHeight = 1.69;
const markBMI = calculateBMI(markMass, markHeight);

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = calculateBMI(johnMass, johnHeight);

const markHigherBMI = markBMI > johnBMI





