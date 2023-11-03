const getStoredData = (key: string, defaultData: string): string => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key) || defaultData;
  } else {
    return defaultData;
  }
}

export default getStoredData;
