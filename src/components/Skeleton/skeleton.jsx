import { Fragment } from 'react';

const Skeleton = () => {
    return (
        <Fragment>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-full'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-full'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-full'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-full'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-full'></div>
            </div>
        </Fragment>

    )
}

export default Skeleton;