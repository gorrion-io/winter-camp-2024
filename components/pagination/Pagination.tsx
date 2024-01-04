import React, { useEffect, useMemo, useState } from 'react';
import { CREWMATES_PER_PAGE } from '@/lib/constants';
import { PaginateBtns } from './PaginateBtn';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@react-hook/media-query';
import { Button } from '@/components/ui/button';

interface Props {
    currentPage: number;
    maxItems: number;
}

export const Pagination = ({ currentPage, maxItems }: Props) => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [pages, setPages] = useState<number[]>([]);
    const router = useRouter();

    const lastPage = useMemo(() => {
        return Math.ceil(maxItems / CREWMATES_PER_PAGE);
    }, [maxItems]);

    const onPageChangeByBtnsHandler = (type: 'prev' | 'next') => {
        router.push(
            `/task/${type === 'next' ? currentPage + 1 : currentPage - 1}`,
        );
    };

    useEffect(() => {
        const pageNumbers = [];

        let endCondtion = isSmallScreen ? currentPage + 1 : currentPage + 2;
        if (isSmallScreen)
            endCondtion =
                currentPage + 1 <= lastPage ? currentPage + 1 : lastPage;
        else
            endCondtion =
                currentPage + 2 <= lastPage ? currentPage + 2 : lastPage;

        let startCondtion = 1;
        if (!isSmallScreen && currentPage > 2) startCondtion = currentPage - 2;
        if (isSmallScreen && currentPage > 2) startCondtion = currentPage - 1;

        for (let i = startCondtion; i <= endCondtion; i++) {
            pageNumbers.push(i);
        }
        setPages(pageNumbers);
    }, [currentPage, isSmallScreen, lastPage]);

    if (lastPage <= 1) return null;

    return (
        <nav
            role="navigation"
            aria-label="pagination"
            className="mx-auto flex w-full justify-center mt-6 gap-1.5 items-center"
        >
            <PaginateBtns
                type="prev"
                disabled={currentPage === 1}
                onClick={onPageChangeByBtnsHandler}
            />

            {pages.map((page) => (
                <Button
                    data-testid={page === currentPage ? 'active' : 'not-active'}
                    className="text-xs sm:text-sm"
                    onClick={() => {
                        router.push(`/task/${page}`);
                    }}
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                >
                    {page}
                </Button>
            ))}

            <PaginateBtns
                type="next"
                disabled={currentPage === lastPage}
                onClick={onPageChangeByBtnsHandler}
            />
        </nav>
    );
};
