import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { generalInformation } from "../utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import GroupedSelect from "@/components/ui/group-select";

export default function ProductCreate() {
    return (
        <div>
            <div className="grid grid-cols-12 gap-3">
                <Card className={'col-span-12 lg:col-span-8 xl:col-span-9'}>
                    <CardContent>
                        <h5 className="text-lg">General Information</h5>
                        <div className="grid grid-cols-12 gap-4 mt-3">
                            {generalInformation?.map((curr, idx) => {
                                return (
                                    <div key={idx} className={`${curr.size} flex flex-col gap-2  `}>
                                        <Label htmlFor={curr.name}>
                                            {curr.label}
                                        </Label>

                                        {// Select CheckBox
                                            curr.type === "select_box" ?
                                                <div className="flex items-center gap-3">
                                                    {curr.options?.map((opt, optIdx) =>
                                                        <div key={optIdx}
                                                            className="bg-[#f3f3f3] border rounded-lg
                                                             hover:bg-[#eeeeee] dark:bg-input/30 dark:hover:bg-input/55 p-2 w-[40px] text-center transition duration-75 cursor-pointer">
                                                            {opt}
                                                        </div>)
                                                    }
                                                </div> :

                                                // Radio
                                                curr.type === "radio" ?
                                                    <RadioGroup defaultValue={curr.options?.[0]?.value}
                                                        className={'flex gap-3'}>
                                                        {curr.options?.map((radio, radioIdx) =>
                                                            <div className="flex items-center space-x-2 mt-1" key={radioIdx}>
                                                                <RadioGroupItem
                                                                    value={radio.value}
                                                                    id={radio.value}
                                                                />
                                                                <Label
                                                                    htmlFor={radio.value}
                                                                    className={'text-md'}>
                                                                    {radio.label}
                                                                </Label>
                                                            </div>)}
                                                    </RadioGroup> :

                                                    // Select
                                                    curr.type === "select" ?
                                                        <GroupedSelect
                                                            groupedOptions={curr.options}
                                                        /> :

                                                        // Input
                                                        <Input
                                                            name={curr.name}
                                                            type={curr.type}
                                                            as={curr.type}
                                                            rows={10}
                                                        />
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
                <Card className={'col-span-12 lg:col-span-4 xl:col-span-3'}>
                    <CardContent>
                        <div className="shadow bg-[#2F3943]  rounded-xl p-3">
                            <Image src="/p-1.png" alt={'product'} width={300} height={400} />
                        </div>
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}