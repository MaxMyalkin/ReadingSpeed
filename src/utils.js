
export function getPixelsByWidth(width) {
    return width;
}

export function valueRange(min, max, value) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

export function splitString(str, chunkCount) {
    const chunks = [];
    const step = str.length / chunkCount;

    for (let i = 0; i < chunkCount; i ++) {
        chunks.push(str.substring(i*step, i*step + step));
    }
    return chunks;
}
