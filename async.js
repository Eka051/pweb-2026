// Synchronous

console.log('Mulai');

for (let i = 1; i <= 3; i++) {
    console.log("Proses", i);
}

console.log('Selesai');
console.log('===========');

// Asynchronous
console.log('1. Mulai');

setTimeout(() => {
    console.log('2. Proses');
},5000)

console.log('3. Selesai');