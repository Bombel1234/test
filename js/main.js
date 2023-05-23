

function showDialog(){
    let a = document.getElementById('entry').value;
    const dialog = document.getElementById("myDialog");
    alert(a);
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
    const dialog = document.getElementById("myDialog");
    dialog.close();
    dialog.style.display = 'none'; 
} 
