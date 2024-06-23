export default blockName => `
mixin ${blockName}()
  +b.${blockName}&attributes(attributes)
    block

`;
