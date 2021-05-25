$(document).ready(function () {
  $("#btn-color").click(function () {
    $("p").css({ color: "red", "font-size": "20px", background: "#34bde1" });
    $("h1").css({ color: "red", "font-size": "60px" });
  });
});

$("#btn-quitar").click(function () {
  $("p").css({ color: "#000", "font-size": "16px",background:"none" });
  $("h1").css({ color: "#000", "font-size": "32px" });
});


$("#btn-animar").click(function () {
  $("#caja1").animate({ height: "400px" },3000);
  $("#caja2").animate({ width: "900px" }, 3000);
  $("#caja3").animate({ height: "300px" }, 3000);
   $("#caja1").animate({ height: "100px" }, 3000);
  $("#caja2").animate({ width: "100px" }, 3000);
  $("#caja3").animate({ height: "100px" }, 3000);
});
