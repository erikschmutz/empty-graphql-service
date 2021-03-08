const { spawn } = require('child_process');
const env = require('dotenv').config();

spawn('docker-compose', ['up', '--build', '--force-recreate', '--no-deps', '--remove-orphans'], {
  env: { ...process.env, ...env },
  shell: process.platform === 'win32',
  stdio: ['ignore', 1, 2],
});
