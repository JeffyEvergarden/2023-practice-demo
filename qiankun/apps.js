// 路由配置
const apps = [{
  name: 'vue-app',
  entry: '//localhost:8081',
  container: '#app',
  activeRule: '/vue1'
}, {
  name: 'vue2-app',
  entry: '//localhost:8082',
  container: '#app',
  activeRule: '/vue2'
}];

export default apps;