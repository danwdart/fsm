import FSM from '.';
let fsm = new FSM(
    [
        'Pasta',
        'Noodles',
        'Spaghetti'
    ],
    'Pasta'
);

console.log('Touch his noodly', fsm.value);

fsm.value = 'Noodles';

console.log('You are touched by his noodly', fsm.value);

try {
    fsm.value = 'Not pasta'; // Crash!
    console.log('You should not see this!');
} catch (e) {
    console.log('You have forsaken the flying spaghetti monster!')
}
