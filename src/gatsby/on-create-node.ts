import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import path from "path"

import parseNodePath from "../helpers/parse-node-path"

const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
  if (node.internal.type !== "MarkdownRemark") {
    return
  }

  // Slug
  createNodeField({
    node: node,
    name: `slug`,
    value: createFilePath({
      node,
      getNode,
      basePath: "./content",
      trailingSlash: false,
    }),
  })

  const { dir, name } = parseNodePath(node, getNode)
  const dirArray = dir.split(path.sep)

  // Category and isPageBundle

  // Check if node is part of a page bundle,
  // i.e. placed in its own dir and named index
  const isPageBundle = name === "index"
  // category is two steps up from page bundle
  const category = isPageBundle
    ? dirArray[dirArray.length - 2]
    : dirArray[dirArray.length - 1]

  createNodeField({
    node: node,
    name: `isPageBundle`,
    value: isPageBundle,
  })

  createNodeField({
    node: node,
    name: `category`,
    value: category,
  })
}

export default onCreateNode