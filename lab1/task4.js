(() => {
    function createCustomerId(name, id) {
        return `${name}${id}`;
    }
    const myId = createCustomerId('Misha', 10);
    console.log(myId);
    let IdGenerator = (name, id) => `${name}${id}`;
    console.log(IdGenerator('Abc', 15));
    IdGenerator = createCustomerId;
    console.log(IdGenerator('Ibd', 20));
})();
//# sourceMappingURL=task4.js.map