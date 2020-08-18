class FancyContainer {
    constructor() {
        var description, url;
        $('.fancy__container').click(function() {
            const name = $(this).data("name");
            switch(name) {
                case "RentPay":
                    description = "The best e-wallet for tenant. A hobby project built using Flutter and GrabPay API to solve the problem of rental payment for landlord and tenant."
                    url = "https://google.com"
                    break;

                case "DisStudent":
                    description = "The best student discount app."
                    url = "https://google.com"
                    break;
            }
            $.fancybox.open(`
                <div>
                    <div>
                        <img src="../assets/image.jpg" style="width: 400px; "/>
                    </div>
                    <div style="margin-top: 20px; ">
                        <p>${name}</p>
                        <p style="width: 400px; ">${description}</p>
                        <a href='${url}' target="_blank">Visit ${name} >></a>
                    </div>
                </div>`);
        })
    }
}

export default FancyContainer;