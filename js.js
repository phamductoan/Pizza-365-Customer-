$(document).ready(function(){
"use strict";
    /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
 
    /*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
       var gSelectedMenuStructure = { // đối tượng chứa combo
           kichCo: "",
           duongKinh: "",
           suongNuong: "",
           salad: "",
           nuocNgot: 0,
           thanhTien: 0
       }
       var gselectedPizzaType = { // đối tượng chứa dữ liệu loại pizza
           loaiPizza: ""
       }
       // thêm sự kiện khi ấn nút các nút chọn
       $("#btn-s-combo").on("click", function(){ // chọn combo S
           onBtnComboSClick()
       });
       $("#btn-M-combo").on("click", function(){ // chọn combo M
        onBtnComboMClick()
       });
       $("#btn-l-combo").on("click", function(){ // chọn combo L
        onBtnComboLClick()
       });
       $("#btn-seafood-combo").on("click", function(){ // chọn Pizza Hải sản
        onBtnPizzaSeafoodClick()
       });
       $("#btn-hawaiian-combo").on("click", function(){ // chọn Pizza Hawai
        onBtnPizzaHawaiClick()
       });
       $("#btn-bacon-combo").on("click", function(){ // chọn Pizza Bacon
        onBtnPizzaBaconClick()
       });
       // Thêm sự kiện khi ấn nút gửi
       $("#btn-send").on("click", function(){
           onBtnSendClick()
       })
       // thêm sự kiện khi ấn nút "Tạo đơn"
       $("#btn-order").on("click", function(){
           onBtnCreateOrderClick()
       })
       onPageLoading();
    /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
       // Hàm xử lý khi load trang
       // gọi Api lấy data nước uống, load vào select
       function onPageLoading(){
           // Gọi Api
           callApiGetDrinkData()
       }
       // Hàm xử lý sự kiện khi ấn nút Chọn comboS
       // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
       // Đổi màu nút bấm
       function onBtnComboSClick(){
           // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
           getDataComboS(gSelectedMenuStructure);
           // Kiểm tra dữ liệu (bỏ qua)
           // Ghi dữ liệu ra console và đổi màu nút bấm
           console.log(gSelectedMenuStructure) // Ghi dữ liệu ra console
           changeColorButtonCombo(gSelectedMenuStructure);
       }
       // Hàm xử lý sự kiện khi ấn nút Chọn comboM
       // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
       // Đổi màu nút bấm
       function onBtnComboMClick(){
        // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
        getDataComboM(gSelectedMenuStructure);
        // Kiểm tra dữ liệu (bỏ qua)
        // Ghi dữ liệu ra console và đổi màu nút bấm
        console.log(gSelectedMenuStructure) // Ghi dữ liệu ra console
        changeColorButtonCombo(gSelectedMenuStructure);
        }
        // Hàm xử lý sự kiện khi ấn nút Chọn comboL
        // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
        // Đổi màu nút bấm
        function onBtnComboLClick(){
            // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
            getDataComboL(gSelectedMenuStructure);
            // Kiểm tra dữ liệu (bỏ qua)
            // Ghi dữ liệu ra console và đổi màu nút bấm
            console.log(gSelectedMenuStructure) // Ghi dữ liệu ra console
            changeColorButtonCombo(gSelectedMenuStructure);
        }
        // Hàm xử lý sự kiện khi ấn nút Chọn Pizza Hải sản
        // Thu thập dữ liệu loại Pizza, lưu vào biến toàn cục
        // Đổi màu nút bấm
        function onBtnPizzaSeafoodClick(){
            // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
            getDataPizzaSeafood(gselectedPizzaType);
            // Kiểm tra dữ liệu (bỏ qua)
            // Ghi dữ liệu ra console và đổi màu nút bấm
            console.log(gselectedPizzaType) // Ghi dữ liệu ra console
            changeColorButtonPizzaType(gselectedPizzaType);
        }
        // Hàm xử lý sự kiện khi ấn nút Chọn Pizza Haiwwai
        // Thu thập dữ liệu loại Pizza, lưu vào biến toàn cục
        // Đổi màu nút bấm
        function onBtnPizzaHawaiClick(){
            // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
            getDataPizzaHawai(gselectedPizzaType);
            // Kiểm tra dữ liệu (bỏ qua)
            // Ghi dữ liệu ra console và đổi màu nút bấm
            console.log(gselectedPizzaType) // Ghi dữ liệu ra console
            changeColorButtonPizzaType(gselectedPizzaType);
        }
        // Hàm xử lý sự kiện khi ấn nút Chọn Pizza Haiwwai
        // Thu thập dữ liệu loại Pizza, lưu vào biến toàn cục
        // Đổi màu nút bấm
        function onBtnPizzaBaconClick(){
            // Thu thập dữ liệu của Combo, lưu vào biến toàn cục
            getDataPizzaBacon(gselectedPizzaType);
            // Kiểm tra dữ liệu (bỏ qua)
            // Ghi dữ liệu ra console và đổi màu nút bấm
            console.log(gselectedPizzaType) // Ghi dữ liệu ra console
            changeColorButtonPizzaType(gselectedPizzaType);
        }
        // Hàm xử lý khi ấn nút gửi (1)
        // Thu thập thông tin đã lựa chọn của khách hàng và ghi ra console
        function onBtnSendClick(){
            // Khai báo đối tượng chứa dữ liệu
            var vSendOrderData = {
                name: "",
                email: "",
                phoneNumber: "",
                address: "",
                voucherId: "",
                mesage: ""
            }
            // Thu thập thông tin
            getDataToSendOrderData(vSendOrderData);
            // Kiểm tra dữ liệu
            // validateData(vSendOrderData);
            // Nếu dữ liệu nhập vào hợp lệ
            var vIsValidate = validateData(vSendOrderData);
            if (vIsValidate){
                // ghi toàn bộ thông tin ra console
                console.log("Thông tin khách hàng: " + vSendOrderData.name);
                console.log("Combo: " + gSelectedMenuStructure.kichCo);
                console.log("Loại Pizza: " + gselectedPizzaType.loaiPizza);
                console.log("Loại nước uống: " + $("#drink-slect").val())
                // Hiển thị thông tin vào Modal
                showDataToModal(vSendOrderData)
                // Hiển thị modal lên
                $("#myModal").modal("show")
            }
        }
        // Hàm xử lý khi ấn nút tạo đơn
        // callApi tạo Order và hiển thị lên modal mới
        function onBtnCreateOrderClick(){
            $("#myModal").modal("hide");
            $("#myModa-l").modal("show");
            // call aPi
            callApiCreateOrder();
        }
    /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
       // Hàm thu thập thông tin comboS
       function getDataComboS(paramSelectedMenuStructure){
        paramSelectedMenuStructure.kichCo = "S";
        paramSelectedMenuStructure.duongKinh = "20";
        paramSelectedMenuStructure.salad = "200";
        paramSelectedMenuStructure.suongNuong = "2";
        paramSelectedMenuStructure.nuocNgot = "2";
        paramSelectedMenuStructure.thanhTien = 150000;
       }
       // Hàm thu thập thông tin comboM
       function getDataComboM(paramSelectedMenuStructure){
        paramSelectedMenuStructure.kichCo = "M";
        paramSelectedMenuStructure.duongKinh = "25";
        paramSelectedMenuStructure.salad = "300";
        paramSelectedMenuStructure.suongNuong = "4";
        paramSelectedMenuStructure.nuocNgot = "3";
        paramSelectedMenuStructure.thanhTien = 200000;
       }
       // Hàm thu thập thông tin comboL
       function getDataComboL(paramSelectedMenuStructure){
        paramSelectedMenuStructure.kichCo = "L";
        paramSelectedMenuStructure.duongKinh = "30";
        paramSelectedMenuStructure.salad = "500";
        paramSelectedMenuStructure.suongNuong = "8";
        paramSelectedMenuStructure.nuocNgot = "4";
        paramSelectedMenuStructure.thanhTien = 250000;
       }
       // Hàm đổi màu nút bấm chọn combo
       function changeColorButtonCombo(paramSelectedMenuStructure){
           if (paramSelectedMenuStructure.kichCo === "S"){
                $("#btn-s-combo").prop("class", "btn btn-success col-sm-12");
                $("#btn-M-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-l-combo").prop("class", "btn btn-warning col-sm-12 color-1");
           }
           if (paramSelectedMenuStructure.kichCo === "M"){
                $("#btn-s-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-M-combo").prop("class", "btn btn-success col-sm-12");
                $("#btn-l-combo").prop("class", "btn btn-warning col-sm-12 color-1");
           }
           if (paramSelectedMenuStructure.kichCo === "L"){
                $("#btn-s-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-M-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-l-combo").prop("class", "btn btn-success col-sm-12");
           }
       }
       // Hàm thu thập thông tin Pizza Seafood
       function getDataPizzaSeafood(paramselectedPizzaType){
        paramselectedPizzaType.loaiPizza = "seafood"
       }
       // Hàm thu thập thông tin Pizza Hawai
       function getDataPizzaHawai(paramselectedPizzaType){
        paramselectedPizzaType.loaiPizza = "hawai"
       }
       // Hàm thu thập thông tin Pizza Bacon
       function getDataPizzaBacon(paramselectedPizzaType){
        paramselectedPizzaType.loaiPizza = "bacon"
       }
        // Hàm đổi màu nút bấm chọn loại Pizza
       function changeColorButtonPizzaType(paramselectedPizzaType){
            if (paramselectedPizzaType.loaiPizza === "seafood"){
                $("#btn-seafood-combo").prop("class", "btn btn-success col-sm-12");
                $("#btn-hawaiian-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-bacon-combo").prop("class", "btn btn-warning col-sm-12 color-1");
            }
            if (paramselectedPizzaType.loaiPizza === "hawai"){
                $("#btn-seafood-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-hawaiian-combo").prop("class", "btn btn-success col-sm-12");
                $("#btn-bacon-combo").prop("class", "btn btn-warning col-sm-12 color-1");
            }
            if (paramselectedPizzaType.loaiPizza === "bacon"){
                $("#btn-seafood-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-hawaiian-combo").prop("class", "btn btn-warning col-sm-12 color-1");
                $("#btn-bacon-combo").prop("class", "btn btn-success col-sm-12");
            }
       }
       // Hàm gọi Api lấy Data Drink
       function callApiGetDrinkData(){
        $.ajax({
            url: "http://42.115.221.44:8080/devcamp-pizza365/drinks",
            type: "GET",
            dataType: 'json',
            success: function(responseObject){
                console.log(responseObject)
                // load data cho select
                loadDataToDrinkSelect(responseObject)
            },
            error: function(error){
                console.assert(error.responseText);
            }
        });
       }
       // Hàm Load data vào select drinks
       function loadDataToDrinkSelect(paramSelectDrink){
            var vSelectData = $("#drink-slect");
            for(var bI = 0; bI < paramSelectDrink.length; bI ++) { 
            var bCarOption = $("<option/>", {
                text: paramSelectDrink[bI].tenNuocUong,
                value: paramSelectDrink[bI].maNuocUong
            }).appendTo(vSelectData);
            }
       }
       // Hàm thu thập dữ liệu cho sendOrder
       function getDataToSendOrderData(paramSendOrderData){
           paramSendOrderData.name = $("#ipn-name").val().trim();
           paramSendOrderData.email = $("#ipn-mail").val().trim();
           paramSendOrderData.phoneNumber = $("#ipn-phone").val().trim();
           paramSendOrderData.address = $("#ipn-address").val().trim();
           paramSendOrderData.voucherId = $("#ipn-voucher-id").val().trim();
           paramSendOrderData.mesage = $("#ipn-message").val().trim();
       }
       // Hàm kiểm tra dữ liệu cho sendOrder
       function validateData(paramSendOrderData){
            if (gselectedPizzaType.loaiPizza == ""){
                alert ("Chưa chọn loại Pizza!");
                throw "Chưa chọn loại Pizza!";
            }
            if (gSelectedMenuStructure.kichCo == ""){
                alert("Chưa chọn Cỡ Combo!");
                throw "Chưa chọn Cỡ Combo!";
            }
            if ($("#drink-slect").val() == "0"){
                alert("Chưa chọn loại nước uống!");
                throw "Chưa chọn loại nước uống!";  
            }
            if (paramSendOrderData.name == ""){
                alert("Chưa nhập thông tin họ tên!");
                throw "Chưa nhập thông tin họ tên!";
            }
            if (paramSendOrderData.email == ""){
                alert("Chưa nhập thông tin email!");
                throw "Chưa nhập thông tin email!";
            }
            if (paramSendOrderData.phoneNumber == ""){
                alert("Chưa nhập thông tin số điện thoại!");
                throw "Chưa nhập thông tin số điện thoại!";
            }
            if (paramSendOrderData.address == ""){
                alert("Chưa nhập thông tin địa chỉ!");
                throw "Chưa nhập thông tin địa chỉ!";
            }
            if (isNaN(paramSendOrderData.phoneNumber)){
                alert("Số điện thoại không hợp lệ");
                throw "Số điện thoại không hợp lệ";
            }
            if (!isEmail(paramSendOrderData.email)){
                alert("Email nhập vào không hợp lệ!")
                throw "Email nhập vào không hợp lệ!";
            }
            if (paramSendOrderData.voucherId == ""){
                paramSendOrderData.voucherId = 0;
            }
            return true
       }    
       // Hàm validate emaill
       function isEmail(email){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
       }
       // Hàm hiển thị thông tin vào Modal
       function showDataToModal(paramSendOrderData){
           $("#name").val(paramSendOrderData.name);
           $("#phone").val(paramSendOrderData.phoneNumber);
           $("#address").val(paramSendOrderData.address);
           $("#mesage").val(paramSendOrderData.mesage);
           $("#voucherid").val(paramSendOrderData.voucherId);
           $("#all-order").html("Xác nhận: " + paramSendOrderData.name + ", " + paramSendOrderData.phoneNumber + ", " + paramSendOrderData.address + "\n" + 
           "Menu: " + gSelectedMenuStructure.kichCo + ", " + "sườn nướng: " + gSelectedMenuStructure.suongNuong + ", nước: " + $("#drink-slect").val() + ", số lượng nước: " +  gSelectedMenuStructure.nuocNgot + " ..." + "\n" +
           "Loại Pizza: " + gselectedPizzaType.loaiPizza + ", " + "Giá: " + gSelectedMenuStructure.thanhTien + " vnd, " + "Mã giảm giá: " + paramSendOrderData.voucherId + "\n")
           // Kiểm tra mã giảm giá
           $.ajax({
            url: "http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/" + paramSendOrderData.voucherId,
            type: 'GET',
            data: 'json', 
            success: function (res) {
            console.log(res);
            document.getElementById("all-order").innerHTML += "Phải thanh toán: " + (gSelectedMenuStructure.thanhTien*(1 - (res.phanTramGiamGia/100))) + " vnd (giảm giá " + res.phanTramGiamGia + "%)";
            },
            error: function (res) {
            alert("Voucher không chính xác hoặc đã sử dụng")
            document.getElementById("all-order").innerHTML += "Phải thanh toán: " + gSelectedMenuStructure.thanhTien + " vnd (giảm giá " + "0%)";
            }
        });  
       }
       // Hàm gọi Api tạo mới Order
       function callApiCreateOrder(){
           // Khai báo đối tượng chứa dữ liệu
           var vObjectRequest = {
                kichCo: "",
                duongKinh: "",
                suon: "",
                salad: "",
                loaiPizza: "",
                idVourcher: "",
                idLoaiNuocUong: "",
                soLuongNuoc: "",
                hoTen: "",
                thanhTien: "",
                email: "",
                soDienThoai: "",
                diaChi: "",
                loiNhan: ""
            }
            // Thu thập dữ liệu
            getDataToCreateOrder(vObjectRequest);
            // Kiểm tra dữ liệu (bỏ qua)
            // Gọi Api
            $.ajax({
                url: "http://42.115.221.44:8080/devcamp-pizza365/orders",
                type: 'POST',
                data: JSON.stringify(vObjectRequest),
                contentType: "application/json", 
                success: function (res) {
                console.log(res);
                // Hiển thị mã đơn hàng vào modal
                showOrderIdToModal(res);
                },
                error: function (ajaxContext) {
                alert(ajaxContext.responseText)
                }
            });
       }
       // Hàm thu thập dữ liệu cho vObjectRequest
       function getDataToCreateOrder(paramObjectRequest){
        paramObjectRequest.kichCo = gSelectedMenuStructure.kichCo;
        paramObjectRequest.duongKinh = gSelectedMenuStructure.duongKinh;
        paramObjectRequest.suon = gSelectedMenuStructure.suongNuong;
        paramObjectRequest.salad = gSelectedMenuStructure.salad;
        paramObjectRequest.loaiPizza = gselectedPizzaType.loaiPizza;
        paramObjectRequest.soLuongNuoc = gSelectedMenuStructure.nuocNgot;
        paramObjectRequest.idVourcher = $("#ipn-voucher-id").val();
        paramObjectRequest.idLoaiNuocUong = $("#drink-slect").val();
        paramObjectRequest.hoTen = $("#ipn-name").val();
        paramObjectRequest.thanhTien = gSelectedMenuStructure.thanhTien;
        paramObjectRequest.email = $("#ipn-mail").val();
        paramObjectRequest.soDienThoai = $("#ipn-phone").val();
        paramObjectRequest.diaChi = $("#ipn-address").val();
        paramObjectRequest.loiNhan = $("#ipn-message").val();
       }
       // Hàm hiển thị mã đơn hàng vào modal
       function showOrderIdToModal(paramOrder){
           $("#ipn-order-id").val(paramOrder.orderId)
       }
});
