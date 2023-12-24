module.exports = blockName => `
export function ${blockName} () {
  console.log('${blockName} Works!');
}

`;
