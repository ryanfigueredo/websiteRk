const { StartWebService } = require("./Modules/HTTP/main");

StartWebService().catch(e => {
    console.log(e);
})