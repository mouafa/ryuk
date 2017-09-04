const fs = require('fs')
const path = require('path')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)


function compile(src, vm) {
  const out = eval('`' + src + '`')
  return out
}

async function render(readPath, ctx, writePath = readPath.replace('.ryk', '')) {
  const file = await readFile(readPath, 'utf-8')
  const out = compile(file, ctx)
  await writeFile(writePath, out)
}

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => err ? reject(err) : resolve(res))
    })
  }
}

exports.compile = compile
exports.render = render
