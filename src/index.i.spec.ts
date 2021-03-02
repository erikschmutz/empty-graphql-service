describe('time consuming integration test', () => {
  jest.setTimeout(5 * 1000);

  it('should work', (done) => {
    // Simulate integration test
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 4 * 1000);

    expect(true).toBe(true);
  });
});
