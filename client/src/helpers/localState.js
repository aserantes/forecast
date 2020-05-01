export const getLocalState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const setLocalState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    throw new Error("can't access localStorage");
  }
};
