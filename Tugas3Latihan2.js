function tekan(){
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var tujuan = document.getElementById("tujuan").value;
    var qty = document.getElementById("qty").value;

    var harga = 0;
    if(tujuan == "Jakarta"){
        if(kelas == "Eksekutif"){
            harga = 70000
        }else if(kelas == "Bisnis"){
            harga = 40000
        }else{harga = 10000}

    }else if(tujuan == "Solo"){
        if(kelas == "Eksekutif"){
            harga = 80000
        }else if(kelas == "Bisnis"){
            harga = 50000
        }else{harga = 20000}

    }else{
        if(kelas == "Eksekutif"){
            harga = 90000
        }else if(kelas == "Bisnis"){
            harga = 60000
        }else{harga = 30000}
    }

    const stats = document.getElementsByName("status");
    let status = "" ;
    for(const stat of stats){
        if(stat.checked){
            status = stat.value;
        }
        break;
    }

    var totalHarga = qty * harga;

    if(status == "Member"){
        totalHarga = totalHarga - (totalHarga * 0.1);
    }

    alert("Nama                                : "+nama +
          "\nStatus                                : "+status +
          "\nHarga                                : "+harga +
          "\nJumlah Tiket                      : "+qty +
          "\nTotal Yang Harus Dibayar  : "+totalHarga);
}
