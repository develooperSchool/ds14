// Pagination hook

import { useState } from 'react';

interface PaginationProps {
    perPageRecords: number;
    totalPageRecords: number;
}

export const usePagination = ({ perPageRecords, totalPageRecords }: PaginationProps) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(1);

    const totalPages = Math.ceil(totalPageRecords / perPageRecords);
    const startPageIndex = (currentPageIndex - 1) * perPageRecords;
    const endPageIndex = Math.min(startPageIndex + perPageRecords - 1, totalPageRecords - 1);


    const displayPage = (pageNo: number) => {
        if (pageNo >= 1 && pageNo <= totalPages) {
            setCurrentPageIndex(pageNo);
            return true;
        }
        return false;
    };

    return { totalPages, startPageIndex, endPageIndex, currentPageIndex, displayPage };
};

