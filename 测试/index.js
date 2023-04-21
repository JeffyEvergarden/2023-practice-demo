const arr = [
  '训练集',
  '跨期验证',
  '其他验证'
]

const reg = /\d+$/

// 假设名称为name

const compare = (a, b) => {
  let _a = arr.indexOf(a);
  let _b = arr.indexOf(b);

  if (_a > -1 && _b > -1) {
    return _a - _b
  } else if (_a === -1 && _b === -1) {
    let __a = a.match(reg);
    let __b = b.match(reg);
    if (__a && __b) {
      console.log(__a[0], __b[0])
      return Number(__a[0]) >= Number(__b[0]) ? 1 : -1
    } else if (__a) {
      return 1
    } else if (__b) {
      return -1
    } else {
      return a > b ? 1 : -1
    }
  } else if (_a === -1) {
    return 1
  } else if (_b === -1) {
    return -1
  } else {
    // 不会促发
  }
}


const testArr = [
  '跨期验证',
  '训练集',
  '其他验证3',
  '其他验证4',
  '其他验证2',
  '其他验证11',
  '其他验证5',
  '其他验证',
]
console.log(
  testArr.sort(compare)
);


const json = {
  code: successCode,
  desc: '成功',
  data: {
    nodes: [{
        id: 'f496662d-ea19-4691-b9fe-3cf85e30a041',
        type: 'start',
        x: 460,
        y: 160,
        properties: {},
        text: {
          x: 460,
          y: 160,
          value: '开始'
          // x.y: 10   这样是错的
        },
      },
      {
        id: 'bdbc7f12-1690-4bda-9256-5ade866ba4b8',
        type: 'student',
        x: 640,
        y: 320,
        properties: {},
        text: {
          x: 640,
          y: 320,
          value: '学员节点'
        },
      },
      {
        id: '9338b5a4-c676-491d-92c0-9361b4dc99c3',
        type: 'customer',
        x: 320,
        y: 500,
        properties: {},
        text: {
          x: 320,
          y: 500,
          value: '客服节点'
        },
      },
      {
        id: '2da32edd-175b-44b1-a132-a7b271507390',
        type: 'finish',
        x: 600,
        y: 660,
        properties: {},
        text: {
          x: 600,
          y: 660,
          value: '结束'
        },
      },
    ],
    edges: [{
        id: '3a0a2f39-c8aa-4d76-b016-7461df185b3c',
        type: 'line',
        sourceNodeId: 'f496662d-ea19-4691-b9fe-3cf85e30a041',
        targetNodeId: 'bdbc7f12-1690-4bda-9256-5ade866ba4b8',
        startPoint: {
          x: 510,
          y: 160
        },
        endPoint: {
          x: 640,
          y: 283
        },
        properties: {},
      },
      {
        id: 'e51b6d92-7817-41e5-9be8-597ec180cb04',
        type: 'line',
        sourceNodeId: 'bdbc7f12-1690-4bda-9256-5ade866ba4b8',
        targetNodeId: '9338b5a4-c676-491d-92c0-9361b4dc99c3',
        startPoint: {
          x: 640,
          y: 357
        },
        endPoint: {
          x: 320,
          y: 463
        },
        properties: {},
      },
      {
        id: '536ae6c4-183b-4d64-b8b1-2e44a56fa0c3',
        type: 'line',
        sourceNodeId: '9338b5a4-c676-491d-92c0-9361b4dc99c3',
        targetNodeId: '2da32edd-175b-44b1-a132-a7b271507390',
        startPoint: {
          x: 320,
          y: 537
        },
        endPoint: {
          x: 600,
          y: 610
        },
        properties: {},
      },
    ],
  },
}


