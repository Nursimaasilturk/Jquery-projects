$(document).ready(function () {
  // Make 2 Functions to add and remove the class in span tag
  function add() {
    $(".copied").addClass("bounce-effect");
  }
  function remove() {
    $(".copied").removeClass("bounce-effect");
  }
  // Call the function and copy text that in clipboard while click button
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    add();
    setTimeout(remove, 1000);
  });
});
