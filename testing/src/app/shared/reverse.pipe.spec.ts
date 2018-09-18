import { ReversePipe } from "./reverse.pipe";

describe('UserComponent', () => {
  it('should reverse the test string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('abc')).toEqual('cba');
  });
});
