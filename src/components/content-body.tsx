import classnames from "classnames"
import React from "react"

import * as markdownStyles from "./markdown-styles.module.css"

const ContentBody: React.FC<{
  content: string
  itemProp: string
  className?: string
}> = ({ content, itemProp, className }) => (
  <section
    className={classnames(
      "e-content max-w-2xl mx-auto",
      className,
      markdownStyles["markdown"]
    )}
    dangerouslySetInnerHTML={{ __html: content }}
    itemProp={itemProp}
  />
)

export default ContentBody
