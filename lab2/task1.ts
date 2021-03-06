(() => {
    enum Category {
        BUSINESS_ANALYST,
        DEVELOPER,
        DESIGNER,
        QA,
        SCRUM_MASTER
    }

    interface Worker {
        id: number,
        name: string,
        surname: string,
        available: boolean,
        salary: number,
        category: Category
    }

    function getAllWorkers(): Array<Worker> {
        return [
            { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
            { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
            { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
            { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
        ];
    }

    function getWorkerById(id: number): Worker | undefined {
        return getAllWorkers().find(worker => worker.id === id);
    }

    function printWorker(worker: Worker) {
        console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
    }

    printWorker(getWorkerById(1))
})();