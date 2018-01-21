// Calculate cone volume

function calculateConeVolumeAndArea(baseRadius, height) {
    console.log(`volume = ${1 / 3 * Math.PI * baseRadius * baseRadius * height}`);
    console.log(`area = ${Math.PI * baseRadius * (baseRadius + Math.sqrt(baseRadius * baseRadius + height * height))}`);
}

calculateConeVolumeAndArea(3, 5);
calculateConeVolumeAndArea(3.3, 7.8);