(() => {
    interface Person {
        name: string,
        email: string
    }

    interface Author extends Person {
        numBooksPublished: number;
    }

    interface Librarian extends Person {
        department: string,
        assistCustomer: (customerName: string) => void
    }

    class UniversityLibrarian implements Librarian {
        public department: string;
        public email: string;
        public name: string;

        public assistCustomer(customerName: string): void {
            console.log(`${this.name} is assisting ${customerName}`);
        }
    }

    const favoriteAuthor: Author = {
        email: 'author@writing.org',
        name: 'Great Author',
        numBooksPublished: 10
    };

    // const favoriteLibrarian: Librarian = {
    //     department: 'Sci-Fi',
    //     email: 'sci_fi_librarian@lib.org',
    //     name: 'Mediocre Librarian',
    //
    //     assistCustomer(customerName: string): void {
    //         console.log(`Assisting ${customerName}...`);
    //     }
    // };

    const favoriteLibrarian = new UniversityLibrarian();
    favoriteLibrarian.name = 'Mediocre Librarian';
    favoriteLibrarian.assistCustomer('Interesting Customer');
})();