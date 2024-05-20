function tekan(){
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var jurusan = document.getElementById("jurusan").value;
    var comment = document.getElementById("comment").value;

    const genders = document.getElementsByName("jenis_kelamin");
        let jenis_kelamin = "";
        for(const gender of genders){
            if (gender.checked) {
                jenis_kelamin = gender.value;
                break;
            }
        }

    const religions = document.getElementsByName("religion");
        let religion = "";
        for(const religion of religions)
            if(religion.checked){
                agama = religion.value;
                break;
            }

    const stats = document.getElementsByName("status");
        let status = "";
        for(const stat of stats)
            if(stat.checked){
                status = stat.value;
                break;
            }

    alert("NPM              :"+nim +
          "\nNama             :"+nama +
          "\nJenis Kelamin : "+jenis_kelamin +
          "\nAgama           : "+agama +
          "\nStatus             : "+status +
          "\nJurusan           : "+jurusan +
          "\nKomentar       : "+comment);
}
