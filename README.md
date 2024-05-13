# interview

## Q1

在 Element Plus 组件库中有一个动态增减标签页组件，请实现它：

![](https://usercontent.showmebug.com/uploads/question_attachments/teams/114970/XijJr6I9V6.png)

- 组件初始化时，标签数量为两个，名字分别为"Tab 1"和"Tab 2"，对应文本内容分别为"Tab 1 content"和"Tab 2 content"，并选中第一个标签。
- 点击标签时，被选中的标签高亮，未选中的标签无高亮，下半部分切换为选中标签对应的文本内容。
- 鼠标移动到标签右侧时出现叉号，点击该叉号时，删除当前标签，并切换到下一个标签，若下一个标签不存在且剩余标签个数大于 0，选中最后一个标签。
- 点击右侧加号时，将新增的标签页添加到最后，并选中这个标签，标签名字和对应的文本内容分别为"New Tab"和"New Tab content"。

## Q2

实现一个渲染树结构的组件 <Tree :root="root"/> ，传入参数为树的根节点，树节点具有如下结构：

```typescript
type TreeNode = {
  content: string;
  children?: TreeNode[];
};
```

渲染要求如下：

- 每一个节点的渲染结果独占一行
- 节点在 `children` 中的位置越靠后，则渲染的位置也越靠后
- 根节点对应左侧缩进为 `0px` ，其余节点的缩进值为 `该节点到根节点的距离 * 24px`

下面给出了一个渲染的例子：

```typescript
let root: TreeNode = {
  content: "This is root",
  children: [
    {
      content: "This is 1",
      children: [
        {
          content: "This is 1.1",
        },
      ],
    },
    {
      content: "This is 2",
      children: [
        {
          content: "This is 2.1",
          children: [
            {
              content: "This is 2.1.1",
            },
          ],
        },
        {
          content: "This is 2.2",
        },
      ],
    },
  ],
};
```

![](https://usercontent.showmebug.com/uploads/question_attachments/teams/114970/RGwOqpjVNz.png)

## Q3

完成如下的页面，注意

- 顶部栏加左边侧边栏的高度撑满视口，页面右侧不得出现纵向滚动条
- 元素大小、相对位置与颜色较为接近即可

![](https://usercontent.showmebug.com/uploads/question_attachments/teams/114970/SfjHZAwESc.png)

实现如下路由功能

- 当路由前缀为 `/page{i}` 时，对应左侧边栏 `page{i}` 颜色高亮（如：红色），比如当前 `url` 中路径为 `/page3` 时， `page3` 为红色
- 点击 `page1` 时，访问对应路由 `/page1` ，右侧内容（白色区域）展示一个链接，点击跳转 `/page2`
- 设 `n` 是一个正整数， 访问 `/page3/n` 时， 将该数字显示在右侧白色区域
