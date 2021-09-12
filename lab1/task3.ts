(() => {
    enum Category {
        BUSINESS_ANALYST,
        DEVELOPER,
        DESIGNER,
        QA,
        SCRUM_MASTER
    }

    function getAllWorkers() {
        return [
            { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
            { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
            { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
            { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
        ];
    }

    function getWorkerById(id: number) {
        return getAllWorkers().find(worker => worker.id === id);
    }

    function logWorkers() {
        getAllWorkers().forEach(worker => console.log(`${worker.id}. ${worker.name} ${worker.surname}`));
    }

    logWorkers();
    let worker = getWorkerById(2);
    console.log(`${worker.name} ${worker.surname}`)
})();