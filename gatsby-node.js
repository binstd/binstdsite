
'use strict';

const path = require('path');


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}




exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const documentationTemplate = path.resolve(`src/templates/documentation.js`);
//   const redirectTemplate = path.resolve(`src/templates/redirect.js`);

  return graphql(`{
    allMarkdownRemark(
      limit: 1000,
      sort: { order:ASC, fields: fileAbsolutePath },
      filter: { fileAbsolutePath: { regex: "/\/docs\//" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          html
          headings {
            value
            depth
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
       
      }
      
      let nav = [];

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        // if (node.fileAbsolutePath.indexOf('index') > 0) {
        //   const parent = { title: node.frontmatter.title, children: [], redirectFrom: getDocPath(node) };
          
        //   nav.push(parent);
        // }

        // else {
        //   const parent = nav[nav.length - 1];
        //   if (!parent.path) {
        //     parent.path = getDocPath(node);
        //   }

        //   parent.children.push({ title: node.frontmatter.title, path: getDocPath(node) });
        // }

      });

    //   result.data.allMarkdownRemark.edges
    //     .forEach(({ node }, i) => {
    //       createPage({
    //         path: getDocPath(node),
    //         component: documentationTemplate,
    //         context: { page: node, nav }
    //       })
    //   });

    });
}


// function getDocPath({ fileAbsolutePath }) {
//   const ext = path.extname(fileAbsolutePath);
//   const file = stripOrderingNumbers(path.basename(fileAbsolutePath, ext));
//   const dir = stripOrderingNumbers(path.dirname(fileAbsolutePath).split(path.sep).pop());

//   return `/docs/${dir}${file === 'index' ? '' : `/${file}`}`;
// }

function stripOrderingNumbers(str) {
  return str.replace(/^(\d+-)/, '');
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
    
    if (page.path.match(/^\/dapp/)) {
        page.matchPath = "/dapp/*";
        // Update the page.
        createPage(page);
    }

};

