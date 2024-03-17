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

export function DataTable({
	pagination,
	table,
}: { table: TableType<any> } & { pagination: boolean }) {
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
									<TableCell key={`cell-index-${index}`} align={'center'}>
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
			{pagination && (
				<div className='flex items-center justify-between space-x-2 py-4 ml-2 mr-2'>
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						className='rounded-[8px] px-[14px] py-[8px] border bg-white border-border-color shadow-btnBoxShadow flex gap-[8px] selection:bg-inherit'>
						<ArrowLeftIcon className='h-4 w-4' />
						<p className='text-filter-stroke-color font-semibold leading-[20px] text-[14px]'>
							Previous
						</p>
					</Button>

					{table.getPageCount() <= 2
						? table.getPageOptions().map((v, idx) => (
								<Button
									key={idx}
									{...{
										variant:
											table.getState().pagination.pageIndex === v
												? 'link'
												: 'ghost',
									}}
									size='default'
									className='disabled:opacity-100 disabled:bg-fon selection:bg-inherit'
									onClick={() => table.setPageIndex(idx)}
									disabled={table.getState().pagination.pageIndex == idx}>
									{v + 1}
								</Button>
						  ))
						: null}

					<Button
						variant='outline'
						size='sm'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						className='rounded-[8px] px-[14px] py-[8px] border bg-white border-border-color shadow-btnBoxShadow flex gap-[8px] selection:bg-inherit'>
						<p className='text-filter-stroke-color font-semibold leading-[20px] text-[14px]'>
							Next
						</p>
						<ArrowRightIcon className='h-4 w-4' />
					</Button>
				</div>
			)}
		</div>
	);
}
