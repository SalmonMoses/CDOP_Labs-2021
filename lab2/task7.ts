(() => {
    abstract class ReferenceItem {
        public static department: string = 'Science';

        private _publisher: string;

        protected constructor(public title: string, protected year: number) {
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

        public abstract printCitation();
    }

    class Encyclopedia extends ReferenceItem {
        constructor(title: string, year: number, public edition: number) {
            super(title, year);
        }

        public printItem(): void {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }

        public printCitation() {
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