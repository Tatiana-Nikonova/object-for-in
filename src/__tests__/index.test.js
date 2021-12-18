import orderByProps from '../index';

test(('function orderByProps'), () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expected = [
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, ['defence', 'health'])).toEqual(expected);
});
