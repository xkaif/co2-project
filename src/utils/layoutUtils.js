export const toggleDirection = (isRTL, setIsRTL) => {
  const newDir = isRTL ? 'ltr' : 'rtl';
  document.documentElement.setAttribute('dir', newDir);
  setIsRTL(newDir === 'rtl');
}; 