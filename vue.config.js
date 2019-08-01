module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/scss/app.scss";`
            }
        }
    }
}