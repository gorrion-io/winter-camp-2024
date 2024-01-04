import { ValidationError } from "@/api/exceptions/ValidationError";
import { Query } from "@/api/definitions";

export class BrowseQueryParams {
  page: number;
  constructor(page: number) {
    this.page = page;
  }

  static validate(query: Query): BrowseQueryParams {
    const page = parseInt(query.page?.toString() ?? "1");

    if (isNaN(page)) throw new ValidationError("Invalid page number");
    if (page < 1) throw new ValidationError("Invalid page number");
    return new BrowseQueryParams(page);
  }
}
