class VueRouter {
  // 路由
  constructor(routes) {
    this.routes = routes
    this.currentHash = ''
    this.refresh = this.refresh.bind(this)

    window.addEventListener('load', this.refresh, false)

    window.addEventListener('hashchange', this.refresh, false)
  }

  getUrlPath(url) {
    return url.indexOf('#') > 0 ? url.slice(url.indexOf('#') + i) : '/'
  }

  refresh(event) {
    // url hash发生改变的时候，拿当前的hash
    let newHash = '',
      oldHash = null
    if (event.newUrl) {
      oldHash = this.getUrlPath(oldHash || '')
      newHash = this.getUrlPath(newHash || '')
    } else {
      newHash = this.getUrlPath(window.location.hash)
    }
    this.currentHash = newHash
    this.matchComponent()
  }

  matchComponent() {
    let curRoute = this.routes.find((route) => route.path === this.currentHash)
    if (!curRoute) {
      curRoute = this.routes.find((route) => route.path === '/')
    }
    const { component } = curRoute
    document.querySelector('#content').innerHTML = component
  }
}
