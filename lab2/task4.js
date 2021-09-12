(() => {
    class UniversityLibrarian {
        department;
        email;
        name;
        assistCustomer(customerName) {
            console.log(`${this.name} is assisting ${customerName}`);
        }
    }
    const favoriteAuthor = {
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
//# sourceMappingURL=task4.js.map