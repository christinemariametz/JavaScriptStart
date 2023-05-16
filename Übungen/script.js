const names = ["Jimmy", "Tine", "Bea", "Nazan", "Stefan"]

const longNames = [];

const shortNames = [];


console.log(names)

for (let index = 0; index < names.length; index++) {
    const currentName = names[index];

    if (checkNameLength(currentName)) {
        console.log(currentName + " hat einen langen namen");
    } else {
        console.log(currentName + " hat einen kurzen Namen")
    }
}

function checkNameLength(name) {
 //   if (name.length > 4) {
//    return true;
//} else {
//    return false;
//};
//}
return name.length > 4;
}

