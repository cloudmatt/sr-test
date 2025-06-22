module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@codedependant/semantic-release-docker',
      {
        dockerTags: ['latest', '{{version}}'],
        dockerImage: `${process.env.OWNER}/${process.env.IMAGE_NAME}`,
        dockerRegistry: 'ghcr.io',
        dockerPlatform: ['linux/amd64', 'linux/arm64']
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github'
  ]
};