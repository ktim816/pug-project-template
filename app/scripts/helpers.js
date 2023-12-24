const {devicePixelRatio} = window;

export const getDPRPostfix = () => {
  const _devicePixelRatio = Math.floor(devicePixelRatio);
  const dpr = Math.min(Math.max(_devicePixelRatio, 1), 2);
  return dpr > 1 ? `@${dpr}x` : "";
};
