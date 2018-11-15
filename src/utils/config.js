module.exports = {
  siteName: 'React AntD Admin',
  copyright: 'React Ant Design Admin  © 2018',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/login/],
    },
  ],
}
