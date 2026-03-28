// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

document.getElementById("year").textContent = new Date().getFullYear();


function filterPrice(value){

  const url = new URL(window.location.href);

  if(value){
    url.searchParams.set("price", value);
  }else{
    url.searchParams.delete("price");
  }

  window.location.href = url.toString();

}

