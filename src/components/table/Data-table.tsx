'use client';

import { Table as TableType, flexRender } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { PageForPagination } from '../reusables/Others';

export const DataTable = ({
  pageCount,
  pagination,
  pageSize,
  table,
  onPageChange,
}: { table: TableType<any> } & {
  pagination: boolean;
  pageCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(pageSize);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
    onPageChange(index);
  };

  return (
    <div>
      <Table className='px-[24px] py-[12px]'>
        <TableHeader className='text-gray-border'>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow
              key={`table-R-${index}`}
              className='h-[44px] overflow-auto bg-table-bg-color text-gray-body-text pb-[1px] border-b-[1px] border-t-[1px] border-table-border-color'>
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    key={`tableH-${index}`}
                    className='text-gray-body-text bg-table-bg-color text-center'
                    align={'center'}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody className='px-[24px] py-[20px]'>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={`tableBody-${index}`}
                data-state={row.getIsSelected() && 'selected'}
                className='h-[72px] overflow-auto pb-[1px] border-b-[1px] border-table-border-color px-[24px] py-[16px]'>
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={`cell-index-${index}`}
                    align={'center'}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className='h-24 text-center'>
                No data to display.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pagination ? (
        <div className='flex gap-[20px] justify-between p-[20px]'>
          <button
            className='border bg-white rounded-[8px] px-[14px] py-[8px] shadow-btnBoxShadow border-border-color flex gap-[8px] items-center'
            onClick={() => {
              currentPage > 1 && handlePageChange(currentPage - 1);
            }}>
            <ArrowRightIcon
              {...{
                svgElementClassName: 'stroke-sidebar-bg hover:stroke-white',
                className: 'w-[20px] h-[20px] rotate-180',
              }}
            />

            <p className='text-[14px] font-semibold leading-[20px] text-filter-stroke-color'>
              Previous
            </p>
          </button>

          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
              {pageCount > 6 ? (
                <>
                  {new Array(3).fill(0).map((_, index) => (
                    <PageForPagination
                      {...{
                        content: `${currentPage + index}`,
                        handler: () => {
                          currentPage > 1 &&
                            currentPage < pageCount &&
                            handlePageChange(currentPage + index);
                        },
                        active:
                          currentPage === currentPage + index ? true : false,
                      }}
                      key={index}
                    />
                  ))}

                  <PageForPagination
                    {...{ active: false, content: '...', handler: () => {} }}
                  />

                  {new Array(3).fill(0).map((_, index) => (
                    <PageForPagination
                      {...{
                        active: false,
                        content: `${currentPage + index + 3}`,
                        handler: () => {
                          currentPage > 1 &&
                            currentPage < pageCount &&
                            handlePageChange(currentPage + index);
                        },
                      }}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <>
                  {new Array(pageCount).fill(0).map((_, index) => (
                    <PageForPagination
                      {...{
                        content: `${currentPage + index}`,
                        handler: () => {},
                        active: false,
                      }}
                      key={index}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          <button
            className='border bg-white rounded-[8px] px-[14px] py-[8px] shadow-btnBoxShadow border-border-color flex gap-[8px] items-center'
            onClick={() => {
              currentPage > 1 &&
                currentPage < pageCount &&
                handlePageChange(currentPage + 1);
            }}>
            <p className='text-[14px] font-semibold leading-[20px] text-filter-stroke-color'>
              Next
            </p>

            <ArrowRightIcon
              {...{
                svgElementClassName: 'stroke-sidebar-bg hover:stroke-white',
                className: 'w-[20px] h-[20px]',
              }}
            />
          </button>
        </div>
      ) : null}
    </div>
  );
};
