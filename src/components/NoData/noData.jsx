import { IconNoData } from "../Icon/Icons";

const NoData = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center text-white'>
            <div className='w-full md:w-1/4'>
                <IconNoData />
            </div>
            <h2 className='text-xl font-medium -mt-4'>No results found</h2>
            <p className='text-sm mt-3 text-center'>Try using other keywords or removing search filters</p>
        </div>
    )
}

export default NoData;
