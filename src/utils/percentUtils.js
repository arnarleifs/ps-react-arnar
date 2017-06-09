// Returns the width of a percent fo total width, as an integer
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
    return parseInt(totalWidth * (percent / 100), 10);
};