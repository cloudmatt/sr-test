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
        dockerImage: '{{owner}}/{{repo}}',
        dockerRegistry: 'ghcr.io',
        dockerPlatform: ['linux/amd64', 'linux/arm64']
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github'
  ]
};