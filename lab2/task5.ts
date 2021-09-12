(() => {
    class ReferenceItem {
        // public title: string;
        // public year: number;
        //
        // constructor(title: string, year: number) {
        //     this.title = title;
        //     this.year = year;
        // }

        public static department: string = 'Sci-Fi';

        private _publisher: string;

        constructor(public title: string, private year: number) {
        }

        get publisher(): string {
            return this._publisher.toUpperCase();
        }

        set publisher(val) {
            this._publisher = val;
        }

        public printItem() {
            console.log(`${this.title} was published in ${this.year} in the ${ReferenceItem.department} department`);
        }
    }

    const ref = new ReferenceItem('Item #12839', 2021);
    ref.printItem();
    ref.publisher = 'publisher';
    console.log(ref.publisher);
})();