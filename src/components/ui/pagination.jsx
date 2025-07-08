"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination({
  page,
  pageCount,
  perPage = 5,
  onPageChange,
  onPerPageChange,
}) {

  const goToPage = (newPage) => {
    if (onPageChange && newPage !== page) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Rows per page</span>
        <Select
          value={perPage.toString()}
          onValueChange={(val) => onPerPageChange?.(Number(val))}>
          <SelectTrigger className="h-8 w-[80px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 30].map((val) => (
              <SelectItem key={val} value={val.toString()}>
                {val}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span>
          Page {page} of {pageCount}
        </span>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" onClick={() => goToPage(1)} disabled={page === 1}>
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => goToPage(page - 1)} disabled={page === 1}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => goToPage(page + 1)} disabled={page === pageCount}>
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => goToPage(pageCount)} disabled={page === pageCount}>
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
