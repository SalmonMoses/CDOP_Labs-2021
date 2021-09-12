(() => {
    const favoriteAuthor = {
        email: 'author@writing.org',
        name: 'Great Author',
        numBooksPublished: 10
    };
    const favoriteLibrarian = {
        department: 'Sci-Fi',
        email: 'sci_fi_librarian@lib.org',
        name: 'Mediocre Librarian',
        assistCustomer(customerName) {
            console.log(`Assisting ${customerName}...`);
        }
    };
})();
//# sourceMappingURL=task3.js.map