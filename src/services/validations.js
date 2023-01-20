
// TODO: Add here the function to validate
const validation = (gamerTag) =>  {
    if(gamerTag.length<8)return false;
    return !isEmpty(gamerTag);
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = {validation,isEmpty};