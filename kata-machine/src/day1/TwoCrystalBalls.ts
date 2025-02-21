export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    // Walk by the square root of the length of the array until first ball breaks
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // If the first ball breaks, walk back by the square root of the length of the array
    i -= jmpAmount;

    // Walk one by one until the second ball breaks
    for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            // This is the first point of breakage
            return i;
        }
    }

    // If the second ball does not break, return -1
    return -1;
}
