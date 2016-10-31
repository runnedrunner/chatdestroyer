var chatlist = []

// When you press enter ____________________________________________

var message = '<script>[].forEach.call(document.forms,function(a){a.onsubmit=function(a){return console.log("u mad bro?"),a.preventDefault(),!1}});;</script>'
    var cleanerUser = "AnonymouseUser"
    var useUser = (cleanerUser.bold().fontcolor("red") + ": ".bold().fontcolor("red") + message)
    addListItem("saylist", useUser);