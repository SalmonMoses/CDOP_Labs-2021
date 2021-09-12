(() => {
    let Category;
    (function (Category) {
        Category[Category["BUSINESS_ANALYST"] = 0] = "BUSINESS_ANALYST";
        Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
        Category[Category["DESIGNER"] = 2] = "DESIGNER";
        Category[Category["QA"] = 3] = "QA";
        Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
    })(Category || (Category = {}));
    function getAllWorkers() {
        return [
            { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
            { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
            { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
            { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
        ];
    }
    function getWorkerById(id) {
        return getAllWorkers().find(worker => worker.id === id);
    }
    function logWorkers() {
        getAllWorkers().forEach(worker => console.log(`${worker.id}. ${worker.name} ${worker.surname}`));
    }
    logWorkers();
    let worker = getWorkerById(2);
    console.log(`${worker.name} ${worker.surname}`);
})();
//# sourceMappingURL=task3.js.map