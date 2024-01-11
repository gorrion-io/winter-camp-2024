export class BrowseDto<T> {
  collection: T[];
  totalPages: number;

  constructor(collection: T[], totalPages: number) {
    this.collection = collection;
    this.totalPages = totalPages;
  }

  paginate(page: number, itemsPerPage: number): BrowseDto<T> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const paginatedCollection = this.collection.slice(startIndex, endIndex);

    return new BrowseDto<T>(paginatedCollection, this.totalPages);
  }
}
