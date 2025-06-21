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
            --tag ghcr.io/${process.env.OWNER}/${process.env.IMAGE_NAME}:${nextRelease.version} \
            --tag ghcr.io/${process.env.OWNER}/${process.env.IMAGE_NAME}:latest \
            --push .
        `,
        publishCmd: 'echo "Docker image published!"'
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github'
  ]
};