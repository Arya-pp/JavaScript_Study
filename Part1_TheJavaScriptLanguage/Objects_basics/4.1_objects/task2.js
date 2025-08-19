function isEmpty(obj)
{
    let key;
    if (key in obj) {
        return false;
    }
    return true;
}