var chatlist = []

// When you press enter ____________________________________________

var message = '<script>console.log("HI, Its super cool mouse")</script>'
    var cleanerUser = "AnonymouseUser"
    var useUser = (cleanerUser.bold().fontcolor("red") + ": ".bold().fontcolor("red") + message)
    addListItem("saylist", useUser);