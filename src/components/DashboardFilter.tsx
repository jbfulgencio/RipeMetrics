import {SetStateAction, useState} from "react";
import Label from "../components/form/Label.tsx";
import {CalenderIcon} from "../icons";
import Flatpickr from "react-flatpickr";
import Select from "../components/form/Select.tsx";

export default function DashboardFilter({setCustomerType}: {setCustomerType: SetStateAction<string>}) {

    const [rangeDate, setRangeDate] = useState();
    const handleDateChange = (date: Date[]) => {
        setRangeDate(date); // Handle selected date and format it
    };

    const handleSelectChange = (value: string) => {
        setCustomerType(value);
    };

    const options = [
        { value: "All", label: "All" },
        { value: "New", label: "New" },
        { value: "Recurring", label: "Recurring" },
    ];

    return (
        <>
            <div>
                <Label htmlFor="datePicker">Date range</Label>
                <div className="relative w-full flatpickr-wrapper">
                    <Flatpickr
                        value={rangeDate} // Set the value to the state
                        onChange={handleDateChange} // Handle the date change
                        options={{
                            mode: "range", // Set the date format
                            dateFormat: "Y-m-d", // Set the date format
                        }}
                        placeholder="Select an option"
                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700  dark:focus:border-brand-800"/>
                    <span
                        className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                    <CalenderIcon className="size-6"/>
                </span>
                </div>
            </div>
            <div>
                <Label>Customer type</Label>
                <Select
                    options={options}
                    placeholder="Select an option"
                    onChange={handleSelectChange}
                    className="dark:bg-dark-900"/>
            </div>
        </>

    )
}
