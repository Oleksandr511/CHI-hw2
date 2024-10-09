function addParamsToRequest(params) {
    let count = 0;
    return function(data) {
        count++;
        return {
            ...params,
            data,
            count
        };
    }
}

const sendData = addParamsToRequest({ 'access-token': 'qwerty' });

const result = sendData({ field1: 'value1', field2: 'value2' });

console.log(result);

