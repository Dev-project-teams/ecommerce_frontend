"use client"

import { useState, useMemo, useEffect } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

import {
    Button,
} from "@/components/ui/button"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"


export default function GroupedSelect({ groupedOptions = [], handleSelectChange = () => { } }) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const selectedLabel = useMemo(() => {
        for (const group of groupedOptions) {
            const found = group.options.find((opt) => opt.value === selected)
            if (found) return found.label
        }
        return "Select item"
    }, [selected])

    return (
        <Popover open={open} onOpenChange={setOpen} className='w-full'>
            <PopoverTrigger asChild className='w-full'>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100%] justify-between"
                >
                    {selectedLabel}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[100%] p-0" sideOffset={0}
                style={{ width: "var(--radix-popover-trigger-width)" }}>
                <Command>
                    <CommandInput placeholder="Search items..." />
                    <CommandEmpty>No item found.</CommandEmpty>
                    {groupedOptions.map((group) => (
                        <CommandGroup key={group.label} heading={group.label}>
                            {group.options.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    onSelect={() => {
                                        handleSelectChange(item)
                                        setSelected(item.value)
                                        setOpen(false)
                                    }}>
                                    {item.label}
                                    <Check
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            selected === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                </Command>
            </PopoverContent>
        </Popover>
    )
}
