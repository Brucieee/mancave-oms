'use client';

import { ColumnDef } from '@tanstack/react-table';
import { formatCurrency, formatDate } from '@mcsph/utils/lib/format';

import { Badge } from '@mcsph/ui/components/badge';

import { DataTableColumnHeader } from '../data-table-column-header';
import { TableOrdersRowActions } from './table-orders-row-actions';
import type { Orders } from './table-orders-schema';

/**
 * The `filterFn` is used for filtering, where `value`
 * refers to the key set in `table-products-column`,
 * that is to be selected in `table-products-toolbar`
 */

export const orderColumns: ColumnDef<Orders>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ref. #" />
    ),
    cell: ({ row }) => (
      <div className="w-[120px] truncate font-semibold text-muted-foreground">
        {row.getValue('id')}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'customers.full_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    cell: ({ row }) => (
      <div className="w-[130px]">{row.original.customers.full_name}</div>
    ),
  },
  {
    accessorKey: 'payment',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Type" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline" className="w-[50px] capitalize">
        {row.getValue('payment')}
      </Badge>
    ),
  },
  {
    accessorKey: 'total_price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] items-center">
        <span>{formatCurrency(parseInt(row.getValue('total_price')))}</span>
      </div>
    ),
  },
  {
    accessorKey: 'order_status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue('order_status') as string;

      let statusVariant;

      switch (status) {
        case 'Processing':
          statusVariant = 'bg-slate-500';
          break;
        case 'Packed':
          statusVariant = 'bg-orange-500';
          break;
        case 'Shipped':
          statusVariant = 'bg-blue-500';
          break;
        case 'Fulfilled':
          statusVariant = 'bg-green-500';
          break;
        case 'Return Request':
          statusVariant = 'bg-red-500';
          break;
        case 'Returned':
          statusVariant = 'bg-purple-500';
          break;
        default:
          statusVariant = 'bg-stone-500';
          break;
      }

      return (
        <div className="w-[80px]">
          <Badge className={statusVariant}>{status}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">{formatDate(row.getValue('created_at'))}</div>
      );
    },
  },
  {
    accessorKey: 'payment_status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment" />
    ),
    cell: ({ row }) => {
      const state = row.getValue('payment_status');

      const stateVariant = state === true ? 'outline' : 'default';
      const stateDisplay = state === true ? 'Paid' : 'Pending';

      return (
        <div className="flex items-center">
          <Badge variant={stateVariant}>{stateDisplay}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <TableOrdersRowActions row={row} />,
  },
];