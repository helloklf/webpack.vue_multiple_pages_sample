<template>
    <div>
        页面 1，三秒后自动跳转到 页面 2。
        <br />
        通过template.html 中的
         &lt;component :is="currentView" keep-alive&gt;&lt;/component&gt;
         元素实现了此功能，可通过设置currentView的值来实现动态切换页面。
    </div>
</template>