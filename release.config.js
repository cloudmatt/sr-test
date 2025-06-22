module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd: `
          docker buildx build \
            --platform linux/amd64,linux/arm64 \
            --tag ghcr.io/\${env.OWNER}/\${env.IMAGE_NAME}:\${nextRelease.version} \
            --tag ghcr.io/\${env.OWNER}/\${env.IMAGE_NAME}:latest \
            --push .
        `,
        publishCmd: 'echo "Docker image pushed!"'
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github'
  ]