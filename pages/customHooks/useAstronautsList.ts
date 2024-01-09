/** @format */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAstronautsList = (page: number) => {
	return useQuery({
		queryKey: ["astronauts", page],
		queryFn: async () => {
			const { data } = await axios.get(`/api/crew?page=${page}`);
			return data;
		},
	});
};
