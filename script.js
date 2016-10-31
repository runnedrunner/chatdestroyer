var chatlist = []

// When you press enter ____________________________________________

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var message = input.val();
    var antijosh = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var cleanerUser = AnonymouseUser
    var useUser = (cleanerUser.bold().fontcolor(red) + ": ".bold().fontcolor(accountCo) + antijosh)
    addListItem("saylist", useUser);
    input.val("");
  }
})