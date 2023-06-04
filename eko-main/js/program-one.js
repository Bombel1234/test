function showDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();

}
function closeDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.close();

}



function standart() {
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'Poziom zabezpieczenia okucia: STANDART';
    document.getElementById('clear').style.display = 'block';

    if (width !== '' && height !== '' && klamka !== '') {
        if (height > 2800 || height <= 279 || width > 1600) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            data_delete();
        }

        else {
            select_zasuwnica(height, klamka);
            select_plecy(height);
            myfunc_std(width);
            myfunc_std1(width);
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak danych w wrębie okuciowym';
    }


}
function myfunc_std(width) {
    //dol 
    if (width >= 801 && width <= 1200) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1400 && width <= 1600) {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga:  Dodatkowa nożyca!!!';
        document.getElementById('dol').innerText = '600   400';
    }

    //gora
}
function myfunc_std1(width) {
    if (width < 801) {
        document.getElementById('gora').innerText = 'niema nic';
        document.getElementById('dol').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1600) {
        document.getElementById('gora').innerText = 'AX-750';
    }
}

// poziom zabiezpieczenia okucia ER 1

function erc_one() {
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'Poziom zabezpieczenia okucia:  ER 1';
    document.getElementById('clear').style.display = 'block';
    if (width !== '' && height !== '' && klamka !== '') {
        if (height > 2800 || height < 280 || width > 1400) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            data_delete();
        }
        else {
            select_plecy(height)
            select_zasuwnica(height, klamka)
            myfuncer1(width);
            myfuncer_1(width);
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak danych w wrębie okuciowym';
    }

}
function myfuncer1(width) {
    //dol
    if (width < 400) {
        document.getElementById('dol').innerText = 'niema nic';
    }
    else if (width >= 400 && width <= 600) {
        document.getElementById('dol').innerText = 200;
    }
    else if (width > 600 && width <= 800) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1000 && width <= 1200) {
        document.getElementById('dol').innerText = '600   200';
    }
    else if (width > 1200 && width <= 1400) {
        document.getElementById('dol').innerText = '600   400';
    }

}
function myfuncer_1(width) {
    //gora
    if (width <= 800) {
        document.getElementById('gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1400) {
        document.getElementById('gora').innerText = 'AX-750';
    }
}

// poziom zabezpieczenia ER 2

function erc_two() {
    let width = document.getElementById('entry-width').value;
    let height = document.getElementById('entry-height').value;
    let klamka = document.getElementById('klamka').value;
    document.getElementById('typ-okucia').innerText = 'Pozim zabezpieczenia okucia: ER 2';
    document.getElementById('clear').style.display = 'block';
    if (width !== '' && height !== '' && klamka !== '') {
        if (height > 2600 || height < 601 || width > 1400) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga:  Niema takich zakresów!!!';
            data_delete();
        }
        else {
            myfuncEr2_1(height);
            myfuncEr2_2(height, klamka);
            myfuncEr2_3(width);
            myfuncEr2_4(width);
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Brak danych w wrębie okuciowym';
    }

}
function myfuncEr2_1(height) {
    document.getElementById('dol').style.color = 'yellow';
    document.getElementById('gora').style.color = 'blue';

    //plecy
    if (height < 490) {
        document.getElementById('pl').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 'niema nic';
    }
    else if (height >= 490 && height <= 800) {
        document.getElementById('pl').innerText = 200;
    }
    else if (height > 800 && height <= 1000) {
        document.getElementById('pl').innerText = 400;
    }
    else if (height > 1000 && height <= 1200) {
        document.getElementById('pl').innerText = 600;
    }
    else if (height > 1200 && height <= 1400) {
        document.getElementById('pl').innerText = 600;
    }
    else if (height > 1400 && height <= 1600) {
        document.getElementById('pl').innerText = '600 400';
    }
    else if (height > 1600 && height <= 1800) {
        document.getElementById('pl').innerText = '600 600';
    }
    else if (height > 1800 && height <= 2000) {
        document.getElementById('pl').innerText = '600 600 200';
    }
    else if (height > 2000 && height <= 2200) {
        document.getElementById('pl').innerText = '600 600 400';
    }
    else if (height > 2200 && height <= 2400) {
        document.getElementById('pl').innerText = '600 600 600';
    }
    else if (height >= 2401 && height <= 2600) {
        document.getElementById('pl').innerText = '600 600 600 200';
    }

}
function myfuncEr2_2(height, klamka) {

    //zasuwnica
    if (height > 600 && height <= 800 && klamka == 283) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 350;
    }
    else if (height > 800 && height <= 1000 && klamka == 433) {
        document.getElementById('zas').innerText = '550';
        document.getElementById('nsp').innerText = '288';
    }
    else if (height > 1000 && height <= 1200 && klamka == 533) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1200 && height <= 1400 && klamka == 583) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1400 && height <= 1600 && klamka == 583) {
        document.getElementById('zas').innerText = '700 1170';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1600 && height <= 1800 && klamka == 583) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1600 && height <= 1800 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 1800 && height <= 2000 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 2000 && height <= 2400 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 2400 && height <= 2600 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga:  Niestandart!!!';
        data_delete();
    }
}
function myfuncEr2_3(width) {
    //dol
    if (width < 490) {
        document.getElementById('dol').innerText = 'niema nic';
    }
    if (width >= 490 && width <= 690) {
        document.getElementById('dol').innerText = 200;
    }
    else if (width > 690 && width <= 890) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 890 && width <= 1090) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1090 && width <= 1290) {
        document.getElementById('dol').innerText = '600   200';
    }
    else if (width > 1290 && width <= 1400) {
        document.getElementById('dol').innerText = '600   400';
    }

}
function myfuncEr2_4(width) {
    //gora
    if (width <= 800) {
        document.getElementById('gora').innerText = 'niema nic';
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1400) {
        document.getElementById('gora').innerText = 'AX-600';
    }
}

// #######################################
function select_plecy(height) {
    if (height < 280) {
        document.getElementById('pl').innerText = '';
    }
    if (height < 800) {
        document.getElementById('pl').innerText = 'niema nic';
    }
    if (height > 800 && height <= 1200) {
        document.getElementById('pl').innerText = 400;
    }
    if (height > 1200 && height <= 1600) {
        document.getElementById('pl').innerText = 600;
    }
    if (height > 1600 && height <= 2000) {
        document.getElementById('pl').innerText = '600  400';

    }
    if (height > 2000 && height <= 2400) {
        document.getElementById('pl').innerText = '600  600';
    }
    if (height > 2400 && height <= 2600) {
        document.getElementById('pl').innerText = '600 600 400';
    }
    if (height > 2600 && height <= 2800) {
        document.getElementById('pl').innerText = '600 600 600';
    }


}
function select_zasuwnica(height, klamka) {

    document.getElementById('dol').style.color = 'yellow';
    document.getElementById('gora').style.color = 'blue';


    if (height >= 280 && height <= 570 && klamka == 140) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 'niema nic';
    }
    else if (height >= 511 && height <= 600 && klamka == 190) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = 262;
    }
    else if (height > 600 && height <= 800 && klamka == 283) {
        document.getElementById('zas').innerText = 'niema nic';
        document.getElementById('nsp').innerText = '350';
    }
    else if (height > 800 && height <= 1000 && klamka == 433) {
        document.getElementById('zas').innerText = '550';
        document.getElementById('nsp').innerText = '288';
    }
    else if (height > 1000 && height <= 1200 && klamka == 533) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1200 && height <= 1400 && klamka == 583) {
        document.getElementById('zas').innerText = '700';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1400 && height <= 1600 && klamka == 583) {
        document.getElementById('zas').innerText = '700 1170';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1600 && height <= 1800 && klamka == 583) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '388';
    }
    else if (height > 1600 && height <= 1800 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 1800 && height <= 2000 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 2000 && height <= 2600 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else if (height > 2600 && height <= 2800 && klamka == 1020) {
        document.getElementById('zas').innerText = '700 1370 1770';
        document.getElementById('nsp').innerText = '1121';
    }
    else {
        data_delete();
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga:  Niestandart!!!';
    }

}
function data_delete() {
    document.getElementById('clear').style.display = 'none';
}
