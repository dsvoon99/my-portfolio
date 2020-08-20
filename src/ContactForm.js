class StickyBar {
    constructor() {
        var form = document.getElementById("my-form");
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        function success() {
            form.reset();
            $(".statusmessage").text("Message Sent!");
            setTimeout(function() {
                $(".statusmessage").text("");
            }, 2000)
        }

        function error() {
            $(".statusmessage").text("Oops! There was a problem.");
            setTimeout(function() {
                $(".statusmessage").text("");
            }, 2000)
        }

        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            if(data.get("message").trim().length > 0 && data.get("_replyto").match(mailformat)) {
                ajax(form.method, form.action, data, success, error);
            } else {
                error();
            }
        });


        function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    success(xhr.response, xhr.responseType);
                } else {
                    error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
    }
}

export default StickyBar;