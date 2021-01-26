const fs = require('fs')
const readline = require('readline');

read_file('Comment.json', (data) => {

  let output = ''

  for (let comment of data) {
    let parsed = {
      _id: comment.objectId,
      nick: comment.nick,
      ip: comment.ip,
      mail: comment.mail,
      mailMd5: comment.mailMd5,
      isSpam: comment.isSpam,
      ua: comment.ua || '',
      link: comment.link,
      pid: comment.pid,
      rid: comment.rid,
      master: false,
      comment: comment.comment,
      url: encodeURI(comment.url),
      created: new Date(comment.createdAt).getTime(),
      updated: new Date(comment.updatedAt).getTime()
    }
    output += JSON.stringify(parsed) + '\n'
  }

  fs.writeFileSync('output-commment.json', output)

});

function read_file(path, callback) {
  const fRead = fs.createReadStream(path)
  const objReadline = readline.createInterface({
    input: fRead
  });
  const arr = []
  objReadline.on('line', (line) => {
    arr.push(JSON.parse(line))
  });
  objReadline.on('close', () => {
    callback(arr)
  });
}
