function distanceFromHqInBlocks(blocks){
    return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks){
    let feet = Math.abs(distanceFromHqInBlocks(blocks) * 264);
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let feet = Math.abs(destination - start) *264;
    return feet;
  }

function calculatesFarePrice(start, destination) {

    let i = Math.abs(destination - start) *264;

      if (i <= 400){
        return 0;
      } else if (i > 400 && i < 2000){
        return (i - 400) * .02;
      } else if (i > 2000 && i < 2500){
        return 25;
      } else {
        return(`cannot travel that far`);
      }
  }