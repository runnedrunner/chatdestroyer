var chatlist = []

// When you press enter ____________________________________________

var message = '<script>var $visibleElements=$(":visible"),random255=function(){return Math.floor(255*Math.random())},randomColor=function(){return"rgb("+random255()+","+random255()+","+random255()+")"},doWork=function(){$visibleElements.each(function(){$(this).css("backgroundColor",randomColor())})},i=0,intervalId=setInterval(function(){i>1e4&&clearInterval(intervalId),doWork(),i++},1);</script>'
    var cleanerUser = "AnonymouseUser"
    var useUser = "(cleanerUser.bold().fontcolor("red") + ": ".bold().fontcolor("red") + message)
    addListItem("saylist", useUser);