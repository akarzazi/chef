console.log("hello!");


async function get_time_from_api() {
    var response = await fetch('/get-time');
    // waits until the request completes...

    var text = await response.text()
    console.log("the time api returned :");
    console.log(text);

    return text;
}

get_time_from_api();



async function echo() {
    var response = await fetch('/echo?text=hello');
    // waits until the request completes...

    var text = await response.text()
    console.log("the echo api returned :");
    console.log(text);

    return text;
}

echo();
