export function addNotification(message, type) {
    var notificationDiv = document.getElementsByClassName('notification-div');
    notificationDiv[0].innerHTML = '';
    var node = document.createElement("div");
    node.className = 'notification-'+type;
    node.innerHTML = '<span>'+message+'</span>';
    notificationDiv[0].appendChild(node);
    setTimeout(function(){ notificationDiv[0].innerHTML = ''}, 5000);
}
