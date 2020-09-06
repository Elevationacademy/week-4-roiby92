const express = require('express')
const router = express.Router()

const wordCounter = {
    "roi": 2,
    "shir": 3,
    "ilana": 5
}
router.get('/sanity', function (req, res) {
    res.send(wordCounter)
    console.log(wordCounter);
})

router.get('/word/:word', function (req, res) {
    const word = req.params.word
    if (wordCounter[word]) {
        res.send({ count: wordCounter[word] })
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word', function (req, res) {
    const word = req.body.word
    if (wordCounter[word]) {
        wordCounter[word]++
    } else {
        wordCounter[word] = 1
    }
    res.send({ text: `Added word ${word}`, count: wordCounter[word] })
})

router.post('/word/:sentence', function (req, res) {
    const words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    words.forEach(w => {
        if (wordCounter[w]) {
            wordCounter[w]++
            numOldWords++
        }
        else {
            wordCounter[w] = 1
            numNewWords++
        }
    })
    res.send({ text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1 })
})

router.get('/total', function (req, res) {
    let sum = 0
    for (let i in wordCounter) {
        sum += wordCounter[i]
    }
    res.send({text: "Total count", count: sum })
})


module.exports = router