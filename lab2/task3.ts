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

    const favoriteAuthor: Author = {
        email: 'author@writing.org',
        name: 'Great Author',
        numBooksPublished: 10
    };

    const favoriteLibrarian: Librarian = {
        department: 'Sci-Fi',
        email: 'sci_fi_librarian@lib.org',
        name: 'Mediocre Librarian',

        assistCustomer(customerName: string): void {
            console.log(`Assisting ${customerName}...`);
        }
    };
})();