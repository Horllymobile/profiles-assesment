
var profile = [
    {
        id: 1,
        name: 'Boy',
        card: 'CC'
    },
    {
        id: 2,
        name: 'Girl',
        card: 'Paypal'
    },
    {
        id: 3,
        name: 'Boy',
        card: 'Paypal'
    },
    {
        id: 4,
        name: 'Girl',
        card: 'CC'
    }
];

function filter(){
    let fake = profile;
    var card = 'CC';
    return fake.filter(item => item.card == card);
}

console.log(filter());
