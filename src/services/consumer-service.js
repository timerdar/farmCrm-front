export function changeAddress(consumerId, newAddress){

    console.log(`Для юзера с id = ${consumerId} поменяли адрес на ${newAddress}`);

}

export function changePhone(consumerId, newPhone){
    console.log(`Для юзера с id = ${consumerId} поменяли телефон на ${newPhone}`);
    
}

const consumers = [{id: 1, name: "Абоба 1", address: "Адрес1", phone: '9012319231023'},
        {id: 2, name: "Заказчик 2", address: "Адрес2", phone: '9012319231023'}
    ]
    

export function getConsumersList(){
    return consumers;
}

export function createConsumer(name, address, phone){
    if (name !== '' && address !== '' && phone !== ''){
        consumers.push(
            {id: consumers.length + 1, name: name, address: address, phone: phone}
        )
    }
}