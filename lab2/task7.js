(() => {
    class ReferenceItem {
        title;
        year;
        static department = 'Science';
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
    class Encyclopedia extends ReferenceItem {
        edition;
        constructor(title, year, edition) {
            super(title, year);
            this.edition = edition;
        }
        printItem() {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }
        printCitation() {
            console.log(`${this.title} - ${this.year}`);
        }
    }
    // const ref = new ReferenceItem('Item #12839', 2021);
    // ref.printItem();
    // ref.publisher = 'publisher';
    // console.log(ref.publisher);
    const refBook = new Encyclopedia('Britannica', 1920, 5);
    refBook.printCitation();
})();
//# sourceMappingURL=task7.js.map