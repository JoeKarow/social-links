
import { Profile } from '../main';

const fs = require('fs');
const files = fs.readdirSync(__dirname)
  .filter((name: string) => !name.endsWith('.spec.ts'))
  .filter((name: string) => name !== 'index.ts');

export const PREDEFINED_PROFILES: Profile[] = [];
files.map((file: string) => {
  const [ profile ] = Object.values(require([__dirname, file].join('/'))) as Profile[];
  PREDEFINED_PROFILES.push(profile);
});
