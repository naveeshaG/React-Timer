var React = require ('react');
var ReactDOM = require('react-dom');
var expect =require ('expect');
var $ =require('jQuery');
var TestUtils =require('react-addons-test-utils');

var Clock =require('Clock');

describe('Clock', () => {
  it('should exist', ()=> {
    expect(Clock).toExist();
  });

  describe ('format seconds', () => {
    it('should format seconds', ()=> {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var actual = '10:15';
      var expected = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when mon/sec are less then 10', ()=> {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var actual = '01:01';
      var expected = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
