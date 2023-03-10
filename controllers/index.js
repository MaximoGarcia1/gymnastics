const register = require('./register')
const login = require('./login')
const getUserById = require('./getUserById')
const cop = require('./cop')
const createGymnast = require ('./createGymnast')
const getGymnasts = require('./getGymnasts')
const getOneGymnast = require('./getOneGymnast')
const addElement = require('./elementsCtrl')
const addCompetition = require('./addCompetition')

module.exports={
    register,
    login,
    getUserById,
    cop,
    createGymnast, 
    getGymnasts,
    getOneGymnast,
    addElement,
    addCompetition
}