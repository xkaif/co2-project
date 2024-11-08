import { toggleDirection } from '../layoutUtils';

describe('layoutUtils', () => {
  test('toggleDirection aktualisiert den RTL-Status korrekt', () => {
    const setIsRTL = jest.fn();
    
    toggleDirection(false, setIsRTL);
    expect(setIsRTL).toHaveBeenCalledWith(true);
    
    toggleDirection(true, setIsRTL);
    expect(setIsRTL).toHaveBeenCalledWith(false);
  });
}); 