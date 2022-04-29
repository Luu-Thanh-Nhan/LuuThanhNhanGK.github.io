$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function() {
        $("#myModal").modal();
    });
//--------------------------------------
    function kiemTraTen(){
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() ==""){
            $("#tbName").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);
//---------------------------------------
function kiemTraCMNNC(){
    var mauKT = /([0-9]{9})$/;
    if ($("#CU").val() ==""){
        $("#tbCU").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#CU").val())){
        $("#tbCU").html("Nhập đủ 9 số(chỉ đc nhập số)");
        return true;
    }
    $("#tbCU").html("*");
    return true;
}
$("#CU").blur(kiemTraCMNNC);
//-----------------------------------------------
    function kiemTraQueQuan(){
        var mauKT = /([A-Z0-9][a-z0-9]+)*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#QQ").val() ==""){
            $("#tbQQ").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#QQ").val())){
            $("#tbQQ").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(kiemTraQueQuan);
//---------------------------------------
function kiemTraEmail(){
    var i = 1;
    let mauKT = /([a-z]+)(@iuh.edu.vn)$/;
    if ($("#Email").val() ==""){
        $("#tbEmail").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#Email").val())){
        $("#tbEmail").html("Nhập theo mẫu xxxxxxxxx@iuh.edu.vn");
        return true;
    }
    $("#tbEmail").html("*");
    return true;
}
$("#Email").blur(kiemTraEmail);
//---------------------------------------    
    function kiemTraSDT(){
        var mauKT = /([A-Z0-9][a-z0-9]+)*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#SDT").val() ==""){
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx tronng đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);
//--------------------------------------
    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraCMNNC() == true && kiemTraQueQuan == true && kiemTraEmail == true && kiemTraSDT
        == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<tr>" + $("#Name").val() + "</th>";
            row += "<tr>" + $("#CU").val() + "</th>";
            row += "<tr>" + $("#QQ").val() + "</th>";
            row += "<tr>" + $("#Email").val() + "</th>";
            row += "<tr>" + $("#SDT").val() + "</th>";
            row += "<tr>" + $("ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })

});