
// TODO: Add here the function to validate
const validation = (gamerTag) =>  {
    return gamerTag.length>=8;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {validation,isEmpty};