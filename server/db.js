    // 操作数据库
    // 1 导入数据库模块
    const mongoose = require('mongoose')

    // 2 使用mongoose提供的connect方法链接数据库
    mongoose.connect('mongodb://localhost/myschool').then(() => {
        console.log('数据库链接成功');
    })

    // 3 创建表规范
    const studentSchema = new mongoose.Schema({
        name: String,
        sex: String,
        age: Number,
        hobbies: Array,
        email: String,
        isVIP: Boolean

    });

    // 4.根据表规范创建集合    
    const Student = mongoose.model('student', studentSchema);
    // b暴露
    exports.Student = Student