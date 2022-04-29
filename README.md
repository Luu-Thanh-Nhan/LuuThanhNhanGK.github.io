Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Luu-Thanh-Nhan 
Luu-Thanh-Nhan
/
LuuThanhNhanGK.github.io
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
LuuThanhNhanGK.github.io/demo2.html
@Luu-Thanh-Nhan
Luu-Thanh-Nhan Create demo2.html
Latest commit 916518b 3 minutes ago
 History
 1 contributor
161 lines (156 sloc)  7.21 KB
   
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>32_Lưu Thành Nhân</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <style>
        [class*="col-"] {
            padding: 0 !important;
            margin: 0 !important;
        }
    </style>
    <script>
        $(document).ready(function() {
            var i = 1;
            $("#btnDK").click(function() {
                $("#myModal").modal();
            });
            $("#txtMaSV").blur(function() {
                var mauKT = /^[1-9]{1}[0-9]{9}$/
                var chuoi = $("txtMaSV").val();
                if (mauKT.test(chuoi) == true) {
                    alert("Bạn nhập đúng");
                } else {
                    alert("Bạn nhập sai");
                }
            });
            $("#btnSubDK").click(function() {
                var maSV = $("#txtMaSV").val();
                var htSV = $("#txtHT").val();
                var emailSV = $("#txtEmail").val();
                alert(chk + " " + sl + "" + radGT);
                var gt = $("input[name='gioiTinh']:checked").map(function() {
                    return this.value;
                }).get().join(',');
                var nk = $("input[name='nangKhieu']:checked").map(function() {
                    return this.value;
                }).get().join(',');
                var dong = '<tr><td>' + (i++) + '<td>' + maSV + '</td>' + '<td>' + htSV + '<td>' + gt + '<td>' + nk + '<td>' + emailSV + '<td>' + sl + '</td></tr>';
                $("#dannhSach").append(dong);
                $('#myModal').hide();
            });
        });
    </script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <img src="../img/LOGO.PNG" alt="">
            </div>
            <div class="col-md-10 text-center bg-info">
                <h4>BỘ CÔNG THƯƠNG</h4>
                <h3>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH</h3>
                <h5 class="text-danger">Đổi mới, nâng tầm cao mói-Năng động, hội nhập toàn cầu</h5>
            </div>

        </div>
        <div class="row">
            <nav class="navbar navbar-expand-md bg-dark col-md-12 justify-content-end">
                <ul class="nav navbar-nav navbar-center">
                    <li class="nav-item"><a href="#" class="nav-link">Đăng nhập</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" id="btnDK">Đăng ký</a></li>
                </ul>
            </nav>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <section>
                    <table class="table table-striped" id="danhSach">
                        <h2>DANH SÁCH ĐĂNG KÝ LÀM CĂN CƯỚC SINH VIÊN</h2>
                        <h2>TRƯỜNG ĐHCN THÀNH PHỐ HỒ CHÍ MINH</h2>
                        <tr>
                            <th>
                                <tr>
                                    <td>STT</td>
                                    <td>Họ tên</td>
                                    <td>SCMNN cũ</td>
                                    <td>Quên quán</td>
                                    <td>EMAIL</td>
                                    <td>Điện thoại</td>
                                    <td>Ảnh đại diện</td>
                                </tr>
                            </th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lưu Thành Nhân</td>
                                <td>1548645158</td>
                                <td>Thủ Đức</td>
                                <td>luuthanhnhan5039@gmail.com</td>
                                <td>0360984479</td>
                                <td>Ảnh đại mới</td>
                            </tr>
                        </tbody>

                    </table>
                </section>
            </div>
        </div>
        <div class="row">
            <footer class="col-md-12 text-center">
                <p>SVTH:1 Mã sinh viên: 20066711 Lớp:DHKTPM16FTT</p>
            </footer>
        </div>
    </div>
    <div class="modal fade" role="dialog" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 style="text-align: center;">THÔNG TIN ĐĂNG KÝ</h4>
                </div>
                <div class="modal-body">
                    <form role="form" class="form-horizontal" style="margin-top: 10px;">
                        <label for="Name" class="control-label col-xs-3">STT</label>
                        <div class="col-xs-9">
                            <input type="text" id="STT" class="form-control">
                            <span class="text-danger" id="tbSTT">*</span>
                        </div>
                        <label for="Ao" class="control-label col-xs-3">SCMNN cũ</label>
                        <div class="col-xs-9" style="margin-bottom: 10px;" >
                            <input type="text" id="Cu" class="form-control">
                            <span class="text-danger" id="tbCu" style="color: red;">*</span>
                        </div>
                        <label for="DC" class="control-label col-xs-3">Quê quán</label>
                        <div class="col-xs-9">
                            <input type="text" id="QQ" class="form-control">
                            <span class="text-danger" id="tbQQ" style="color: red;">*</span>
                        </div>
                        <label for="NTT" class="control-label col-xs-3">Email</label>
                        <div class="col-xs-9">
                            <input type="text" id="email" class="form-control">
                            <span class="text-danger" id="tbemail" style="color: red;">*</span>
                        </div>
                        <label for="SDT" class="control-label col-xs-3">Số diện thoại</label>
                        <div class="col-xs-9">
                            <input type="text" id="SDT" class="form-control">
                            <span class="text-danger" id="tbSDT" style="color: red;">*</span>
                        </div>
                        <label for="ADD" class="control-label col-xs-3">Ảnh đại diện</label>
                        <div class="col-xs-9">
                            <input type="file" id="ADD" class="form-control">
                            <span class="text-danger" id="tbAdd" style="color: red;">*</span>
                        </div>
                <div class="modal-footer justify-content-center">
                    <button type="submit" id="btnSubDK" class="btn btn-warning"> Lưu</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
