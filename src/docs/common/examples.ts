export const example1 = {
  level1: {
    level2: {
      level3: {
        arr: ['', null, undefined, false, 'Another value', { aKey1: '', akey2: 'Another Value' }],
        key1: 'This value is fine',
        key2: null,
        key3: '',
        key4: 0,
        key5: (): void => console.log('function'),
      },
    },
  },
};

export const arr = ['', null, undefined, false, 'Another value', example1];
