//  vue 里面使用 imgName ： ’httpcode‘


// 读写
console.log('hellow, world');

const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, './file-oss-list-20220808101701.txt')

// 写
// fs.writeFile(path.resolve('D:\code\web-landing-page\src\views\Home\list.json'), )
let replaceJson = ''

function replaceImg(oldImg, newImg) {
  // 读取文件，使用字符串替换 换写文件的内容
  const p = path.join(__dirname, './list.json')
  fs.readFile(p, 'utf8', function (err, data) {
    replaceJson = data
    writeJson()
  })
}
replaceImg()

// 把 txt 写 json,
function writeJson() {
  setTimeout(() => {
    fs.readFile(p, 'utf8', function (err, data) {
      if (err) throw err
      // let list = JSON.parse(data)
      let arr = data.split('\r\n')
      const reg = /[^/]+/g
      let obj  = {}
      arr.forEach(item => {
        const node = item.split(',')
        const oldImg = node[0]
        const newImg = node[1]
        let imgName, imgName2
        if (oldImg) {
          imgName = oldImg.match(reg).filter(item => item).pop()
        }
        if (newImg) {
          imgName2 = newImg.match(reg).filter(item => item).pop()
        }
        if (imgName && imgName2) {
          replaceJson = replaceJson.replace(imgName, imgName2);
          obj[imgName] = imgName2
        }
        // 循环这个 txt， 然后读取json 替换里面的内容。但是只需要替换 后面的函数，前面的 内容是一样的
      })
      console.log(obj)
      fs.writeFile('./imgMapList.json', JSON.stringify(obj), function (err) {
        console.log(err)
      })
    })
  }, 200)
}

// 读写vue文件
function readVue() {
  const pathVue = path.join(__dirname, './index.vue')
  fs.readFile(pathVue, 'utf8', function (err, data) {
    console.log('vue--', data)
  })
}

// readVue()

// 读写 less
function readLess() {
  const pathStyle = path.join(__dirname, './style.less')
  fs.readFile(pathStyle, 'utf8', function (err, data) {
    console.log('style--', data)
  })
}
// readLess()



// 递归读写整个文件夹

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  console.log(files);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList);  //递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

var filesList = [];
// readFileList(__dirname, filesList);
// console.log(filesList);