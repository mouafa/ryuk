
# ryuk
a light weight ES6 Template literals Markup system

## Installation
```console
$ yarn add ryuk
```

If you prefer using npm:

```console
$ npm i -S ryuk
```

## Usage

```
// file template/mapping.map.ryk

#coockie_value  backendname

${vm.list.map(({name, id}) => `${name}  ${id}`).join('\n')}
```

compile a file and assign it to a variable

```js
const ryuk = require('ryuk')

const list = [{name: 'red', id: 'VDC_1'}, {name: 'blue', id: 'VDC_2'}, {name: 'green', id: 'VDC_3'}]
const compiled = ryuk.compile(`template/mapping.map.ryk`, { list })

```

compile a file and write the output to another file

```js
const ryuk = require('ryuk')

const list = [{name: 'red', id: 'VDC_1'}, {name: 'blue', id: 'VDC_2'}, {name: 'green', id: 'VDC_3'}]
ryuk.render(`template/mapping.map.ryk`, { list }, `output/mapping.map`)
```

the output will be
```
// output/mapping.map

#coockie_value  backendname

red  VDC_1
blue  VDC_2
green  VDC_3

```
