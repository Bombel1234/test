let person = ['Janek', 'Tomek', 'Stefan', 'Andrzej', 'Jacek', 'Kuba', 'Adam']


function passWord() {
    let name = document.getElementById('entry-name');
    let haslo = document.getElementById('entry-password');
    let myName = name.value;
    let myHaslo = haslo.value;

    let b = person.find(item=>{
        if (item === myName){
            return true;
        }
    })
       
    if (b && myHaslo === '123'){
        return true;
    }
    else{
        alert('Uwaga: Niewlaściwe imie albo hasło')
        return false;
    }   
}
