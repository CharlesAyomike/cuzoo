import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Link } from "react-router";
import Image from "@/components/ui/image";

// This type is used to define the shape of our data.
export type ProductData = {
  id: string;
  productName: string;
  image: string;
  price: string;
  stock: string;
  shorDes: string;
};

export const columns: ColumnDef<ProductData>[] = [
  {
    accessorKey: "image",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Image" />;
    },
    cell: ({ row }) => {
      const productData = row.original;
      return (
        <div>
          <Image className="w-12 h-12" alt="" source={productData.image} />
        </div>
      );
    },
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Product Name" />;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Price" />;
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Stock" />;
    },
  },
  {
    accessorKey: "shorDes",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Short Description" />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const productData = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-background shadow-accent shadow-sm border-0"
            align="end"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(productData.id)}
            >
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={`${productData.id}`}>View Product</Link>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => {}}>
              Set stock to zero
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => {}}>
              Disable Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
