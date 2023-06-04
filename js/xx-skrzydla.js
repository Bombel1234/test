function showDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();

}
function closeDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.close();

}

function func_standart(params) {

    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;
    document.getElementById('my-dot').style.color = 'black';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: Standart';
    if (width !== '' && height !== '') {
        if (height > 2800 || height < 280 || width > 1600) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            document.getElementById('my-gora').innerText = '';
            document.getElementById('my-plecy').innerText = '';
            document.getElementById('my-dot').innerText = '';
            document.getElementById('my-dol').innerText = '';
        }
        else {
            xx_plecy(height);
            select_docisk(height);
            myfunk_st1(width);
            myfunk_st12(width);
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak wymiaru we wrębie okuciowym';
    }
}

function myfunk_st1(width) {
    //dol
    if (width < 801) {
        document.getElementById('my-dol').innerText = 'niema nic';
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width >= 801 && width <= 1200) {
        document.getElementById('my-dol').innerText = 400;
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('my-dol').innerText = 600;
    }
    else if (width > 1400 && width <= 1600) {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga:  Dodatkowa rozwórka!!!';
        document.getElementById('my-dol').innerText = '600   400';
    }

}
//gora
function myfunk_st12(width) {
    if (width > 800 && width <= 1000) {
        document.getElementById('my-gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1600) {
        document.getElementById('my-gora').innerText = 'AX-750';
    }
}


// poziom zabezpieczenia ER1
function func_er1() {
    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;

    document.getElementById('my-dot').style.color = 'red';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: ER 1';

    if (width !== '' && height !== '') {
        if (height > 2800 || height <= 279 || width > 1400) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            document.getElementById('my-gora').innerText = '';
            document.getElementById('my-dol').innerText = '';
            document.getElementById('my-plecy').innerText = '';
            document.getElementById('my-dot').innerText = '';
        }
        else {
            myfunc1(height);
            myfunc2(width);
            myfunc3(width);
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak wymiaru we wrębie okuciowym';
    }

}
function myfunc1(height) {
    if (height < 800) {
        document.getElementById('my-dot').innerText = 'niema nic';
        document.getElementById('my-plecy').innerText = 'niema nic';
    }
    else if (height > 800 && height <= 1200) {
        document.getElementById('my-dot').innerText = 400;
        document.getElementById('my-plecy').innerText = 400;
    }
    else if (height > 1200 && height <= 1600) {
        document.getElementById('my-dot').innerText = 600;
        document.getElementById('my-plecy').innerText = 600;
    }
    else if (height > 1600 && height <= 2000) {
        document.getElementById('my-dot').innerText = '600  400';
        document.getElementById('my-plecy').innerText = '600  400';
    }
    else if (height > 2000 && height <= 2400) {
        document.getElementById('my-dot').innerText = '600  600';
        document.getElementById('my-plecy').innerText = '600  600';
    }
    else if (height > 2400 && height <= 2600) {
        document.getElementById('my-dot').innerText = '600  600  400';
        document.getElementById('my-plecy').innerText = '600  600  400';
    }
    else if (height > 2600 && height <= 2800) {
        document.getElementById('my-dot').innerText = '600  600  600';
        document.getElementById('my-plecy').innerText = '600  600  600';
    }
}

// dol
function myfunc2(width) {
    if (width < 400) {
        document.getElementById('my-dol').innerText = 'niema nic';
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width >= 400 && width <= 600) {
        document.getElementById('my-dol').innerText = 200;
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width > 600 && width <= 800) {
        document.getElementById('my-dol').innerText = 400;
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('my-dol').innerText = 600;
    }
    else if (width > 1000 && width <= 1200) {
        document.getElementById('my-dol').innerText = '600   200';
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('my-dol').innerText = '600   400';
    }
}


//gora
function myfunc3(width) {
    if (width < 801) {
        document.getElementById('my-gora').innerText = 'niema nic';
    }

    else if (width >= 801 && width <= 1000) {
        document.getElementById('my-gora').innerText = 'AX-600';
    }
    else if (width >= 1001 && width <= 1400) {
        document.getElementById('my-gora').innerText = 'AX-750';
    }

}



//poziom zabezpeczenia ER 2

function func_er2() {
    let width = document.getElementById('xx-input-width').value;
    let height = document.getElementById('xx-input-height').value;
    document.getElementById('my-dot').style.color = 'red';
    document.getElementById('free-poziom').innerText = 'Poziom zabezpieczenia okucia: ER 2';

    if (width !== '' && height !== '') {
        if (height > 2600 || height < 601 || width > 1400) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            document.getElementById('my-plecy').innerText = '';
            document.getElementById('my-dot').innerText = '';
            document.getElementById('my-ora').innerText = '';
            document.getElementById('my-dol').innerText = '';
        }
        else {
            myfunc_a(height);
            myfunc_b(width);
            myfunc_c(width);
        }
    }
    else{
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak wymiaru we wrębie okuciowym';
    }
}
function myfunc_a(height) {
    //plecy
    if (height < 490) {
        document.getElementById('my-plecy').innerText = 'niema nic';
        document.getElementById('my-dot').innerText = 'niema nic';
    }
    else if (height >= 490 && height <= 800) {
        document.getElementById('my-plecy').innerText = 200;
        document.getElementById('my-dot').innerText = 200;
    }
    else if (height > 800 && height <= 1000) {
        document.getElementById('my-plecy').innerText = 400;
        document.getElementById('my-dot').innerText = 400;
    }
    else if (height > 1000 && height <= 1200) {
        document.getElementById('my-plecy').innerText = 600;
        document.getElementById('my-dot').innerText = 600;
    }
    else if (height > 1200 && height <= 1400) {
        document.getElementById('my-plecy').innerText = '600   200';
        document.getElementById('my-dot').innerText = '600   200';
    }
    else if (height > 1400 && height <= 1600) {
        document.getElementById('my-plecy').innerText = '600   400';
        document.getElementById('my-dot').innerText = '600   400';
    }
    else if (height > 1600 && height <= 1800) {
        document.getElementById('my-plecy').innerText = '600   600';
        document.getElementById('my-dot').innerText = '600   600';
    }
    else if (height > 1800 && height <= 2000) {
        document.getElementById('my-plecy').innerText = '600   600   200';
        document.getElementById('my-dot').innerText = '600   600   200';
    }
    else if (height > 2000 && height <= 2200) {
        document.getElementById('my-plecy').innerText = '600   600   400';
        document.getElementById('my-dot').innerText = '600   600   400';
    }
    else if (height > 2200 && height <= 2400) {
        document.getElementById('my-plecy').innerText = '600   600   600';
        document.getElementById('my-dot').innerText = '600   600   600';
    }
    else if (height > 2401 && height <= 2600) {
        document.getElementById('my-plecy').innerText = '600   600   600  200';
        document.getElementById('my-dot').innerText = '600   600   600  200';
    }
}
function myfunc_b(width) {
    //dol
    if (width < 490) {
        document.getElementById('my-dol').innerText = 'niema nic';
    }
    if (width >= 490 && width <= 690) {
        document.getElementById('my-dol').innerText = 200;
    }
    else if (width > 690 && width <= 890) {
        document.getElementById('my-dol').innerText = 400;
    }
    else if (width > 890 && width <= 1090) {
        document.getElementById('my-dol').innerText = 600;
    }
    else if (width > 1090 && width <= 1290) {
        document.getElementById('my-dol').innerText = '600   200';
    }
    else if (width > 1290 && width <= 1400) {
        document.getElementById('my-dol').innerText = '600   400';
    }

}
function myfunc_c(width) {
    //gora
    if (width <= 800) {
        document.getElementById('my-gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1400) {
        document.getElementById('my-gora').innerText = 'AX-600';
    }
}






function xx_plecy(height) {
    if (height < 800) {
        document.getElementById('my-plecy').innerText = 'niema nic';

    }
    else if (height > 800 && height <= 1200) {
        document.getElementById('my-plecy').innerText = 400;
    }
    else if (height > 1200 && height <= 1600) {
        document.getElementById('my-plecy').innerText = 600;
    }
    else if (height > 1600 && height <= 2000) {
        document.getElementById('my-plecy').innerText = '600  400';

    }
    else if (height > 2000 && height <= 2400) {
        document.getElementById('my-plecy').innerText = '600  600';
    }
    else if (height > 2400 && height <= 2600) {
        document.getElementById('my-plecy').innerText = '600 600 400';
    }
    else if (height > 2600 && height <= 2800) {
        document.getElementById('my-plecy').innerText = '600 600 600';
    }
}
function select_docisk(height) {
    if (height < 801) {
        document.getElementById('my-dot').innerText = 'Brak docisków';
    }
    else if (height > 800 && height <= 1600) {
        document.getElementById('my-dot').innerText = '1  docisk';
    }
    else if (height > 1600 && height <= 2800) {
        document.getElementById('my-dot').innerText = '2  dociski';
    }
}
