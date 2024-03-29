import selectors from './selectors.js';
const {
  tdPcsProgWalls,
  tdMProgWalls,
  tdPcsProgFront,
  tdMProgFront,
  tdPcsProgRoof,
  tdMProgRoof,
} = selectors;

// прогоны
export const getProgWallsCount = (length, height, width) => {
  const progSectionCount = Math.ceil(height / 1.5);
  const progHeightRemainder = height % 1.5;
  const wallProgPipeLength = length * 2;
  const frontonProgPipeLength = width * 2;

  const frontonGates = null;

  let innerPcs = null;

  if (progHeightRemainder === 0 || progHeightRemainder <= 1.49) {
    innerPcs = (progSectionCount + 1) * 2 + ` шт`;
    tdPcsProgWalls.textContent = innerPcs;
  }

  const gatesCalcs = width * 6;
  tdPcsProgFront.textContent = '6 шт';
  tdMProgFront.textContent = `${gatesCalcs} м`;

  const totalProgPipeLength = (wallProgPipeLength + frontonProgPipeLength) * innerPcs.split(' ')[0];

  tdMProgWalls.textContent = totalProgPipeLength + ` м`;
};

export const getProgRoofCount = (length, fermLen) => {
  const ceilingProgSectionCount = Math.ceil(fermLen / 1.3);
  const ceilingProgHeightRemainder = fermLen % 1.29;

  let innerPcsCeil, ceilProg = null;

  if (ceilingProgHeightRemainder === 0 || ceilingProgHeightRemainder <= 1.29) {
    innerPcsCeil = (ceilingProgSectionCount + 1) * 2 + ` шт`;
    tdPcsProgRoof.textContent = innerPcsCeil;
  }

  const totalRoofProgPipeLength = +innerPcsCeil.split(' ')[0] * 2 * length;

  tdMProgRoof.textContent = totalRoofProgPipeLength + ` м`;
};
