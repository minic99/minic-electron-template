const registerRoutes = (app, router) => {
  const requireContext = require.context("./", false, /\.js$/)

  requireContext.keys().forEach((filename) => {
    if (filename === './index.js') return;
    const fn = requireContext(filename).default
    console.log(filename)
    fn(router)
  })
  app.use(router)
}

export default registerRoutes
