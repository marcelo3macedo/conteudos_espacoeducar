import { readFiles } from '@/utils/reader';

describe('readFiles', () => {
  it('should read and parse a valid JSON file when the file exists', () => {
    const fs = require('fs');

    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fs, 'readFileSync').mockReturnValue('{"key": "value"}');

    const result = readFiles('test.json');

    expect(result).toEqual({ key: 'value' });

    fs.existsSync.mockRestore();
    fs.readFileSync.mockRestore();
  });

  // Throws an error when the file does not exist
  it('should throw an error when the file does not exist', () => {
    const fs = require('fs');

    jest.spyOn(fs, 'existsSync').mockReturnValue(false);

    expect(() => readFiles('nonexistent.json')).toThrow('No data not found');

    fs.existsSync.mockRestore();
  });
});
