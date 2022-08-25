

window.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("form");
    var status = document.getElementById("status");
    // Error and Success message
    function success(){
        form.reset();
        // button.style = "display: none";
        status.classList.add("success");
        status.innerHTML = "Mail sent successfully!";
    }
    // error message
    function error(){
        status.classList.add("error");
        status.innerHTML = "Ooops! Mail not sent!";
    }

    // handle the form submision event
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// Ajax function 
function ajax(method, url,data,success, error){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept", "application/json");
    // chech if all is done
    xhr.onreadystatechange = function(){
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response ,xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
