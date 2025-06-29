const { execSync } = require('child_process');
const path = require('path');

async function buildForCloudflare() {
  console.log('🚀 Starting Cloudflare Pages build...');

  try {
    // Run the standard Next.js build
    console.log('📦 Building Next.js application...');
    execSync('yarn build', { stdio: 'inherit', cwd: process.cwd() });

    // Run the Cloudflare adapter
    console.log('⚡ Adapting for Cloudflare Pages...');
    execSync('npx @cloudflare/next-on-pages', { stdio: 'inherit', cwd: process.cwd() });

    console.log('✅ Cloudflare Pages build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

buildForCloudflare();