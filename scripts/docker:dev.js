const { spawn } = require('child_process');
const env = require('dotenv').config();

spawn('docker-compose', ['up'], {
  env: { ...process.env, ...env },
  shell: process.platform === 'win32',
  stdio: ['ignore', 1, 2],
});
