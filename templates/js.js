export default blockName => `
export function ${blockName} () {
  console.log('${blockName} Works!');
}

`;
