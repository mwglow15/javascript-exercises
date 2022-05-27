const findTheOldest = function(people) {
    const ordered = people.sort((a,b) => {
        if(!a.yearOfDeath) {
            a.yearOfDeath = (new Date()).getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = (new Date()).getFullYear();
        }
        
        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;
    });
    console.log(ordered);
    return(ordered[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
