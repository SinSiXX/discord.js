module.exports = {
	Client : require("./Client/Client.js")
}

var a = new module.exports.Client();
a.login(process.env["discordEmail"], process.env["discordPass"]).catch((e)=>console.log(e));