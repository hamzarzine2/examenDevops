
// TODO: Add here the function to validate
const validation = (gamerTag) =>  {
    return containsSpecial(gamerTag) && gamerTag.length >=8 && containsNumber(gamerTag);
};

const containsSpecial = (gamerTag)=>new RegExp("[_@./#&+-]+").test(gamerTag);
const containsNumber = (gamerTag)=> new RegExp("[0-9]+").test(gamerTag);
const isEmpty = (label) => !label || label.length === 0;

module.exports = {validation,isEmpty};