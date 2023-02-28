## 1、vue 框架思想

#### A、声明式框架 和 命令式框架
声明式框架 vue、 命令式框架 jquery 2 个框架的区别

声明式框架描述结果，不关注过程。

有虚拟 dom 的概念 和 为此配套的编译器。 除此之外对.vue 文件还要配套的 vue-loader 编译。

#### B、控制框架体积和 tree-shaking
报错信息配合环境变量 例如 __dev__ 进行 treeShaking 
treeshaking必须是esm模块

结合 /*#__PURE__*/ 进行副作用剔除，告诉可以放心删。

理解 特性开关。

#### C、输出产物 

一般script标签内的都是IIFE格式， 自调用函数、立即执行函数。

现在可以浏览器esm格式 rollup的output的format设置为esm。
package.json 如果有module字段，module字段优先级大于main字段指向。
cjs适合node的环境。

#### D、错误的统一处理

```
let handleError = null

function callWithErrorHandling(fn) {
  try {

  } catch(e) {
    handleError(e);
  }
}
```

--------------------

## 2、vue 设计思路

a、模版 ===> render函数 ===> 执行返回 vnode

b、初识渲染器  renderer 才是渲染器。
作用时把虚拟dom 渲染成真实dom 内部调用mountElement 、mountComponent等方法。


## 3、响应式原理

proxy 代理

lazy 和 computed

watch 的实现 ---> 递归监听对象 ----> 调度在 scheduler ----> 立即执行 和 回调时机 ----> watch 过期原理

## 4、 理解 proxy 和 reflect

## 7、编译器

a. vue3 多了渲染器的概念, renderer 是渲染器的, render 渲染函数
b. 把 dom 操作提出来传进渲染器抹平了平台的概念。可以在 nodejs 运行
c. vdom、vnode、挂载、打补丁的概念

## 8、挂载与更新

##### a. mountElement （vnode, container）方法 ---> vnode ---> 递归渲染成 dom 挂载到 container

理解属性：

1.  理解 html atrribute 和 dom property 不是一一对应。
2.  属性设置优先级：class 的设置 ---> dom property（有个方法判断是否应该用这个） --->
    html attribute (dom.setAttribute 方法)
3.  class 序列化成字符串， el.className 设置效率最高。 （classList、setAttribute(class)）
4.  patchProps 方法实现

##### b. 卸载操作
为了调用卸载钩子不能直接通过 innerhtml 卸载

1. umounted(vnode) ===> vnode.el ===> parentNode.removeChild 方法 卸载
2. container._vnode 直接挂在dom 上

##### c. 事件处理

1. props属性里包含 on /^on/.test(key)
2. el._vei = {} 对象 存 不同事件、事件数组
3. 通过ivokers包一层， invoker.value = fn  invoker.value() 具体调用，这样addeventlistener 只用一次 
4. invoker 的 attached 去记录绑定事件 = perfomance.now() e.timeStamp事件促发事件。

##### d. 子节点更新

1. patch(n1, n2, container)  ====> 
第一种判断 n2.chidren is 'string'   =>   n1.children 逐个 umounted、 再进行 setEleContext
第二种判断  isArray(n2.chidren)  ==> n1 也是 array 进行patch diff、 n1是字符串或者空 setEleContext再挂载


##### e. 简单diff算法
   同样的dom标签 和 同样的key 遍历比较
1. 首先理解移动插入节点的方法是  parent.insertBefore() 去插入的。 该方法需要 前一个节点的dom 和 父节点
新 1 2 3         li = 3
旧 3 4 2 1 ===>  3 4 1 2 ===> 4123

#### f. 双端diff  新旧开始结尾节点比较

#### g. 快速diff




## 13、异步组件实现原理

#### a、异步组件使用


   


