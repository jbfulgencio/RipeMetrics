import {
    ArrowDownIcon,
    ArrowUpIcon,
    GroupIcon,
} from "../icons";
import Badge from "./ui/badge/Badge";

export default function CustomerMetrics( { metrics, customerType } ) {
    let badge = <Badge color="error"><ArrowDownIcon />{metrics.diff}</Badge>;

    if(metrics.arrow === 'up'){
        badge = <Badge color="success"><ArrowUpIcon />{metrics.diff}</Badge>;
    }

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
            </div>
            <div className="flex items-end justify-between mt-5">
                <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {customerType} {metrics.name}
                    </span>
                    <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                        {metrics.value}
                    </h4>
                    {badge}
                </div>
            </div>
        </div>
    );
}
