const fs = require('fs')

let comments = fs.readFileSync('Counter.json')
comments = JSON.parse(comments)
let output = ''

for (let comment of comments.results) {
  let parsed = {
    _id: comment.objectId,
    time: comment.time,
    title: comment.title,
    url: comment.url,
    created: new Date(comment.createdAt).getTime(),
    updated: new Date(comment.updatedAt).getTime()
  }
  output += JSON.stringify(parsed) + '\n'
}

fs.writeFileSync('output-counter.json', output)
