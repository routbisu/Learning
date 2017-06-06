
$(document).ready(function () {
    $("#btnGetPrice").click(function () {
        var productID = $("#txtProductID").val();
        var url = "http://localhost:60927/api/price/" + productID;
        $.get(url, function (data) {
            $("#spnPrice").text(data);
        });
    });

    $("#btnGetProducts").click(function () {
        var productTypeID = $("#txtProductTypeID").val();
        var url = "http://localhost:60927/api/Product/" + productTypeID;

        $.getJSON(url, function (data) {
            var htmlData = "<b>Product ID | Product Name | Unit Price </b><hr />";
            data.forEach(function (product) {
                htmlData += product.ProductID + " " + product.ProductName + " " + product.ProductUnitPrice + "<br />";
            });
            $("#productsResult").html(htmlData);
        });
    });

    $("#btnAddProduct").click(function () {
        var productName = $("#txtProductName").val();
        var productTypeID = $("#txtProductTypeIDAdd").val();
        var unitPrice = $("#txtUnitPrice").val();
        var url = "http://localhost:60927/api/Product/";
        $.post(url,
            {
                "ProductID": null,
                "ProductTypeID": productTypeID,
                "ProductName": productName,
                "ProductUnitPrice": unitPrice
            },
            function (data) {
                $("#divAddResult").text("New Product " + productName + " Added");
        });
    });


});