const ryuk = require('./index')
const path = require('path')

const list = [{name: 'red', id: 'VDC_1'}, {name: 'blue', id: 'VDC_2'}, {name: 'green', id: 'VDC_3'}]

function fromHere ([file]) {
  return path.join(__dirname, file)
}

const backends = [{
name: 'VDC_1',
cookie: 'red',
address: '127.0.0.1:3000',
DEFAULT: false
},
{
name: 'VDC_2',
cookie: 'blue',
address: '127.0.0.1:3001',
DEFAULT: false
},
{
name: 'VDC_3',
cookie: 'green',
address: '127.0.0.1:3002',
DEFAULT: false
},
{
name: 'VDC_4',
cookie: 'yellow',
address: '127.0.0.1:3003',
DEFAULT: true
}]

const COOKIE_NAME = 'SRVID'
const DEFAULT_VDC = backends.find(({DEFAULT}) => !!DEFAULT).name

ryuk.render(fromHere`template/mapping.map.ryk`, {list}, fromHere`output/mapping.map`)
ryuk.render(fromHere`template/haproxy.cfg.ryk`, {backends, COOKIE_NAME, DEFAULT_VDC}, fromHere`output/haproxy.cfg`)
