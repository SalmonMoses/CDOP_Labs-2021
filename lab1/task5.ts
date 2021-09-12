(() => {
    enum Category {
        BUSINESS_ANALYST,
        DEVELOPER,
        DESIGNER,
        QA,
        SCRUM_MASTER
    }

    function createCustomer(name: string, age?: number, city?: string) {
        console.log(`${name}${age ? `, ${age}` : ''}${city ? `, from ${city}` : ''}`);
    }

    function getAllWorkers() {
        return [
            { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
            { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
            { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
            { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
        ];
    }

    function getWorkersNameByCategory(category: Category = Category.DESIGNER): Array<string> {
        return getAllWorkers().filter(worker => worker.category === category).map(worker => worker.surname);
    }

    function getWorkerById(id: number) {
        return getAllWorkers().find(worker => worker.id === id);
    }

    function logFirstAvailable(workers = getAllWorkers()) {
        console.log(`There are ${workers.length} workers in collection`);
        console.log('Available workers: ');
        for (let worker of workers) {
            if (worker.available) {
                console.log(`- ${worker.name} ${worker.surname}`);
            }
        }
    }

    function logWorkerNames() {
        console.log('Developers: ');
        for (let surname of getWorkersNameByCategory()) {
            console.log(`- ${surname}`);
        }
    }

    function checkoutWorkers(customer: string, ...workerIds: number[]): string[] {
        console.log(`Customer: ${customer}`);
        let availableWorkers: string[] = [];
        for (let id of workerIds) {
            let worker = getWorkerById(id);
            if (worker.available) {
                availableWorkers.push(`${worker.name} ${worker.surname}`);
            }
        }
        return availableWorkers;
    }

    logFirstAvailable();
    console.log();
    logWorkerNames();
    console.log();
    createCustomer('A');
    createCustomer('B', 20);
    createCustomer('C', 45, 'D');

    console.log();
    let myWorkers = checkoutWorkers('Ann', 1, 2, 4);
    myWorkers.forEach(worker => console.log(worker))
})();