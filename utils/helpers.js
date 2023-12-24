export const pxToRem = px => {
  const rootFontSize = 16;
  return `${px / rootFontSize}rem`;
};

export const addPrefixObj = obj => {
  const newObj = {};

  return prefix => {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const newKey = [prefix, key].join("-");
        const value = obj[key];

        newObj[newKey] = value;
      }
    }

    return newObj;
  };
};
