import type {NextApiRequest, NextApiResponse} from "next";
import {astronautsList} from "@/lib/crew";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            const {page} = req.query;
            if (typeof page === "string" && typeof parseInt(page) !== "number") {
                res.status(500).json({message: "Invalid page"});
                return
            }

            const pageNumber = typeof page === "string" ? parseInt(page) : page;

            const data = astronautsList([{path: "./crew.json", type: "json"}, {
                path: "./crew.yaml",
                type: "yaml"
            }], pageNumber as number)

            res.status(200).json({astronauts: data});
            return
        default:
            res.status(500).json({error: "Method not found"})

    }
    res.status(500).json({error: "Method not found"})
}
