(() => {
    class ReferenceItem {
        title;
        year;
        // public title: string;
        // public year: number;
        //
        // constructor(title: string, year: number) {
        //     this.title = title;
        //     this.year = year;
        // }
        static department = 'Sci-Fi';
        _publisher;
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        get publisher() {
            return this._publisher.toUpperCase();
        }
        set publisher(val) {
            this._publisher = val;
        }
        printItem() {
            console.log(`${this.title} was published in ${this.year} in the ${ReferenceItem.department} department`);
        }
    }
    const ref = new ReferenceItem('Item #12839', 2021);
    ref.printItem();
    ref.publisher = 'publisher';
    console.log(ref.publisher);
})();
//# sourceMappingURL=task5.js.map