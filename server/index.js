const { app } = require('./app.js')
const { Student } = require('./db.js')

// 创建路由 查询学生信息
app.get('/list', (req, res) => {

        let { name } = req.query
        Student.find({
            name: {
                // 要查询必须写完整的正则 n
                $regex: new RegExp(`${name}`, 'g')
            }
        }).then(r => {
            res.send(r)
        })
    })
    // 添加学生
app.post('/add', (req, res) => {
    console.log(req.body);
    Student.create(req.body).then(r => {
        res.send(true)
    }).catch(err => {
        res.send(false)
    })
})

// 删除学生
app.post('/delete', (req, res) => {
    let { _id } = req.body
    Student.deleteOne({ _id }).then(r => {
        res.send(true)
    }).catch(err => {
        res.send(false)
    })

})

//根据id返回一个学生信息
app.get('/getOne', (req, res) => {
    let { _id } = req.query
    Student.findOne({ _id }).then(r => {
        res.send(r)
    })
})

// 根据id修改指定的学生信息
app.post('/update', (req, res) => {
    let { _id } = req.body
    Student.updateOne({ _id }, req.body).then(r => {
        res.send(true)
    }).catch(err => {
        res.send(false)
    })
})