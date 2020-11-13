const fs = require('fs')

let comments = fs.readFileSync('Comment.json')
comments = JSON.parse(comments)
let output = ''

for (let comment of comments.results) {
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
    master: comment.mail === 'mail1st@qq.com',
    comment: comment.comment,
    url: comment.url,
    created: new Date(comment.createdAt).getTime(),
    updated: new Date(comment.updatedAt).getTime()
  }
  output += JSON.stringify(parsed) + '\n'
}

fs.writeFileSync('output-commment.json', output)
