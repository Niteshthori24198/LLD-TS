
export class Book {
    section;
    name;
    constructor(section: "Fiction" | "Documentary" | "Educational", name: string) {
        this.section = section;
        this.name = name;
    }
}

export class Section {
    name;
    books:Book[];
    constructor(name: "Fiction" | "Documentary" | "Educational") {
        this.name = name;
        this.books = []
    }
    addBook(x:Book){
        this.books.push(x)
    }
}

export class Library {
    name;
    sections :Section[];
    constructor(name: string) {
        this.name = name;
        this.sections  = []
    }
    addSection(x:Section){
        this.sections .push(x)
    }
}