let a = document.getElementById('entry').value;
const dialog = document.getElementById("myDialog");

function showDialog(){

    if (a == '123'){
        document.location.href = 'home.html';
    }
    else{
        dialog.showModal();
        dialog.style.display = 'block';
        dialog.style.margin = 'auto auto'
    }
    
}
function closeDialog() { 
    dialog.close();
    dialog.style.display = 'none'; 
} 
