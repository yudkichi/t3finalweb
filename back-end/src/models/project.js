const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
    biografia:{
        type: String,
        require: true
    },
    interesses:[{
        type: String,
        require: false
    }],
    idiomas:[{
        type: String,
        require: false
    }],
    formacao:[{
        type: String,
        require: false
    }],
    atividades:[{
        type: String,
        require: false
    }],
    habilidades:[{
        type: String,
        require: false
    }],
    news:[{
        title:{
            type: String,
            require: false
        },
        data:{
            type: String,
            require: false
        },
        autor:{
            type: String,
            require: false
        },
        descricao:{
            type: String,
            require: false
        }
    }],
    portifolio:[{
        descricao:{
            type: String,
            require: false
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;