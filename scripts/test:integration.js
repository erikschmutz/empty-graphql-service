const { spawn } = require('child_process');
const env = require('dotenv').config();

spawn('npm', ['run', 'test', ...process.argv.slice(2)], {
  env: { ...process.env, ...env, INTER: 'TRUE' },
  shell: process.platform === 'win32',
  stdio: ['ignore', 1, 2],
});
