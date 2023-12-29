import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    disabled: boolean;
    type: 'prev' | 'next';
    onClick: (type: 'prev' | 'next') => void;
}

export const PaginateBtns = ({ disabled, type, onClick }: Props) => {
    return (
        <Button
            disabled={disabled}
            onClick={() => {
                onClick(type);
            }}
            variant={'ghost'}
            className={`${
                type === 'next' ? 'flex-row-reverse' : 'flex'
            } items-center justify-center sm:gap-1 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2`}
        >
            {type === 'prev' ? (
                <ChevronLeft className="h-4 w-4" />
            ) : (
                <ChevronRight className="h-4 w-4" />
            )}
            <span className="px-1 sm:px-1.5">
                {type === 'prev' ? 'Prev' : 'Next'}
            </span>
        </Button>
    );
};
