import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { PaginateBtns } from '@/components/pagination/PaginateBtn';

describe('PaginateBtns', () => {
    it('renders disabled button with "Prev" text when type is "prev" and "disabled"=true', () => {
        render(<PaginateBtns type="prev" disabled={true} onClick={() => {}} />);

        const prevBtn = screen.getByRole('button', { name: 'Prev' });
        expect(prevBtn).toBeInTheDocument();
        expect(prevBtn).toBeDisabled();
    });
    it('renders button with "Next" text when type is "next" and "disabled"=false', () => {
        render(
            <PaginateBtns type="next" disabled={false} onClick={() => {}} />,
        );

        const prevBtn = screen.getByRole('button', { name: 'Next' });
        expect(prevBtn).toBeInTheDocument();
        expect(prevBtn).toBeEnabled();
    });
    it('calls onClick function with correct type when button is clicked', () => {
        const onClickMock = jest.fn();
        render(
            <PaginateBtns disabled={false} type="prev" onClick={onClickMock} />,
        );

        const prevBtn = screen.getByRole('button', { name: 'Prev' });
        fireEvent.click(prevBtn);
        expect(onClickMock).toHaveBeenCalledWith('prev');
    });
});
