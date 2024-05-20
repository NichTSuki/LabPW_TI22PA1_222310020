function tekan(){
    var n = document.getElementById("n").value;

    n = parseInt(n);

    var hasilFaktorial = 1;

    for(var i = 1; i<=n;i++){
        hasilFaktorial *=i;
    }
    document.getElementsByName('Faktorial')[1].innerHTML = hasilFaktorial;
}
