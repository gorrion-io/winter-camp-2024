import { ValidationError } from "@/Exceptions/validationError";
import { Query } from "@/lib/definitions";

export class browseQueryParams {
  page: number;
  constructor(page: number) {
    this.page = page;
  }

  static validate(query: Query): browseQueryParams {
    const page = parseInt(query.page?.toString() ?? "1");
    // if (isNaN(page)) throw new ValidationError("Invalid page number");
    if (page < 1) throw new ValidationError("Invalid page number");
    return new browseQueryParams(page);
  }
}
