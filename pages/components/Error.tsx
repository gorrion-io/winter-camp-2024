import { AxiosError } from "axios";
import { ErrorResponse } from "../api/crew";

interface ErrProps {
    isErrorPage: boolean;
    isError: boolean;
    isPageOutOfRange: boolean;
    queryError: AxiosError<ErrorResponse>;
}

const ErrorComponent: React.FC<ErrProps> = ({isErrorPage, isError, isPageOutOfRange, queryError}) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 text-center bg-red-500 text-white rounded-lg shadow-lg">
          {isErrorPage && "Page parameter must be a positive integer."}
          {isError &&
            !isErrorPage &&
            `Error loading crew data: ${
              queryError.response?.data
                .message ||
              queryError.message ||
              "Unknown error"
            }`}
          {isPageOutOfRange &&
            !isError &&
            !isErrorPage &&
            "The page number you requested is out of range."}
        </div>
      </div>
    )
};

export default ErrorComponent;