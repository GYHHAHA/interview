<template>
  <div>
    
  </div>
</template>

<script setup>
  import createData from './utils'
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
  console.log(createData())
</script>
