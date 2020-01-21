let srcRoot = `${__dirname}/src`;

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "~assets": `${srcRoot}/assets`,
                "~services": `${srcRoot}/services`,
                "~directives": `${srcRoot}/directives`,
                "~mixins": `${srcRoot}/mixins`,
                "~blocks": `${srcRoot}/components/blocks`,
                "~inputs": `${srcRoot}/components/inputs`,
                "~components": `${srcRoot}/components`,
                "@": `${srcRoot}`,
            }
        }
    },
};
