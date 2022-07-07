function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Felipe','Admin');
usuarios.set('Maria','Admin');
usuarios.set('Alice','Admin');
usuarios.set('José','User');

console.log(getAdmins(usuarios));