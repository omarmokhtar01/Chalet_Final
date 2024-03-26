const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://tsquarehost.info',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/chalet.tsquarehost.info/public'
      },
    })
  );
};
