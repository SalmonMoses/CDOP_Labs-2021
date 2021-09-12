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
            { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
            { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
            { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
            { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
        ];
    }

    function getWorkersNameByCategory(category: Category): Array<string> {
        return getAllWorkers().filter(worker => worker.category === category).map(worker => worker.surname);
    }

    function logWorkerNames() {
        console.log('Developers: ');
        for (let surname of getWorkersNameByCategory(Category.DEVELOPER)) {
            console.log(`- ${surname}`);
        }
    }

    logWorkerNames();
})();