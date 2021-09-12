(() => {
    function createCustomerId(name: string, id: number): string {
        return `${name}${id}`;
    }

    const myId: string = createCustomerId('Misha', 10);
    console.log(myId);

    let IdGenerator: (string, number) => string = (name, id) => `${name}${id}`;
    console.log(IdGenerator('Abc', 15));

    IdGenerator = createCustomerId;
    console.log(IdGenerator('Ibd', 20));
})();