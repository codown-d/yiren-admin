interface TreeNode {
  path: string
  name?: string
  children?: TreeNode[]
  [key: string]: any
}

export function filterTree(tree: TreeNode[], targets?: string[]): TreeNode[] {
  return tree
    .map((node) => {
      // 递归过滤子节点
      const matchedChildren = node.children ? filterTree(node.children, targets) : []

      const isMatched =!targets|| targets?.includes(node.path)

      if (isMatched || matchedChildren.length > 0) {
        return {
          ...node,
          children: matchedChildren.length > 0 ? matchedChildren : undefined
        }
      }

      return null
    })
    .filter(Boolean) as TreeNode[]
}
