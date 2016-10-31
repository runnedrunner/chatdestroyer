var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = ''
    var cleanerUser = AnonymouseUser
    var useUser = (cleanerUser.bold().fontcolor(red) + ": ".bold().fontcolor(red) + message)
    addListItem("saylist", useUser);
    input.val("");
  }
})