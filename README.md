# interview

## Q1 Tab 组件

- 实现[动态增减标签页](https://element-plus.org/zh-CN/component/tabs.html#%E5%8A%A8%E6%80%81%E5%A2%9E%E5%87%8F%E6%A0%87%E7%AD%BE%E9%A1%B5)组件。

## Q2 页面功能

页面布局如下，顶部栏为 `60px` 高度的固定定位黄色 `div` 元素，左侧侧边栏宽度为 `240px` ，侧边栏包含：`page1` 到 `page10` ，当跳转到 `/page{x}` 开头的路由时，对应的侧边栏区域高亮，右侧为对应的页面，要求如下：

- `page1` ：点击后跳转至 `/page1` ，右侧内容为一个超链接，文本内容为 `page2`，点击后跳转至 `/page2` ，。
- `page3` ：点击后跳转至 `/page3/xxx` ，其中 `xxx` 为随机数字，范围为 `1` 到 `100` ，把这个数字显示在右侧；当用户手动访问 `/page3/xxx` ，若 `xxx` 不是 `1` 到 `10` 的数字，则等待 3 秒后跳转至 `page4` 对应的页面路由 `/page4` ，右侧内容为空。
- `page5` ：当访问 `/page5/xxx/subpage1` ，其中 `xxx` 为数字，页面内容显示 `xxx subpage1`；当访问 `/page5/xxx/subpage2` 时，页面内容显示 `xxx subpage2`；
- `page6` ：用两个函数 `a` 和 `b` 来模拟接口调用，函数内容为等待 3 秒，返回随机数；当用户点击 `page6` 时，调用 `a` 接口，获取数据后导航栏路由更新为 `/page6` ，再调用 `b` 接口，获取数据后，页面内容显示对应的两个数字。
- `page7` 至 `page10`分别对应了 `/page7` 到 `/page10` 的路由，页面内容分别为 4 个不同的组件。请实现路由懒加载，即当路由被访问的时候才加载对应组件，并验证你的实现是有效的。

## Q3 滚动侦听

- 构造一个生成数组的函数，这个数组包含 100 个节点对象，每个节点对象的类型为
  ```typescript
  type ArrNode = {
    type: "heading" | "text";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
  };
  ```
  第一个节点是 `level` 为 1 的 `heading` 节点。 `type` 为 `heading` 时， `level` 为数字，表示 `h1` 到 `h6` 的级别，否则为空。当 `type` 为 `text` 时， `content` 为长度为 300 个到 500 个单词的文本内容，当 `type` 为 `heading` 时， `content` 为一个单词。注意，前后两个 `heading` 的 `level` 必须是相同或连续变化的，即 `h1` 之后只可能为 `h1` 和 `h2` ，而 `h2` 之后只可能为 `h1` 或者 `h2` 或者 `h3`，以此类推。
- 提取生成数组的 `heading` 节点，将其转为具有如下节点类型的树

  ```typescript
  type Tree = {
    root: TreeNode[];
  };
  type TreeNode = {
    key: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
    children?: TreeNode[];
  };
  ```

  其中，key 为 8 位随机字符串，具有唯一性。下面是一个例子：

  ```typescript
  const arr = [
    {
      type: "heading",
      level: 1,
      content: "h",
    },
    {
      type: "heading",
      level: 2,
      content: "h",
    },
    {
      type: "heading",
      level: 1,
      content: "h",
    },
    {
      type: "heading",
      level: 2,
      content: "h",
    },
    {
      type: "heading",
      level: 3,
      content: "h",
    },
    {
      type: "heading",
      level: 2,
      content: "h",
    },
  ];

  const tree = [
    {
      key: "qogjdkfw",
      level: 1,
      content: "h",
      children: [
        {
          key: "gidjfkwl",
          level: 2,
          content: "h",
        },
      ],
    },
    {
      key: "gwefsgfd",
      level: 1,
      content: "h",
      children: [
        {
          key: "htrwhgfd",
          level: 2,
          content: "h",
          children: [
            {
              key: "qweffgsd",
              level: 3,
              content: "h",
            },
          ],
        },
        {
          key: "whfdsgfe",
          level: 2,
          content: "h",
        },
      ],
    },
  ];
  ```

- 把第 2 问中树的内容渲染为 html 的目录树，放置在页面的右侧，顶部和右边分别离浏览器的顶部和右边 `50px` 。每一行显示一个节点， `level` 每增加 1 级，左侧增加 `24px` 的缩进。
- 将第 1 问中的列表渲染为对应的 html 节点，放置在页面左侧。当页面滚动时，找出距离页面顶部 `100px` 的位置对应文本属于的 `heading` 节点，并在目录树对应节点上进行文字高亮。注意性能问题。
