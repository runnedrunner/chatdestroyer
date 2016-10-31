var chatlist = []

// When you press enter ____________________________________________

var message = '<script>function r(){return Math.floor(255*Math.random())}function fakk(){this.style.color=["rgb(",[r(),r(),r()].join(","),")"].join(""),this.style.backgroundColor=["rgb(",[r(),r(),r()].join(","),")"].join("")}[].forEach.call(document.all,function(o){setTimeout(function(){fakk.call(o)},500*Math.random()+100)});</script>'
    var cleanerUser = "AnonymouseUser"
    var useUser = (cleanerUser.bold().fontcolor("red") + ": ".bold().fontcolor("red") + message)
    addListItem("saylist", useUser);