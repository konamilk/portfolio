module.exports = {
  // アセットはLaravelの `public` の `app` ディレクトリ配下に作成されるようにする.
  outputDir: '../public/app',

  // app配下にjs, cssなどが置かれるので、publicPathを調整する
  publicPath: '/app',

  pages: {
    // appのエントリポイント、テンプレート、出力先を調整
    app: {
      entry: 'src/app/main.js',
      template: 'templates/base.html',
      filename: '../../resources/views/spa/app.blade.php'
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
