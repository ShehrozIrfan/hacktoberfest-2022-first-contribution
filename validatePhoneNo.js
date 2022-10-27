validatePhoneNo(num) {
    var phonenum = /^\d{10}$/;
    var str = num;
    if((str.match(phonenum))) {
        return true;
    } else {
        return false;
    }
}
