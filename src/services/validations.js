
// TODO: Add here the function to validate
const validation = (gamerTag) =>  {
    const reg = new RegExp("[0-9]+");

    return reg.test(gamerTag) && gamerTag.length >=8;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {validation,isEmpty};