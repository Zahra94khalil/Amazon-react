import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
const Search = () =>{
    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazon-yellow rounded'>
                <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
                    <option>All</option>
                    <option>mobiles</option>
                    <option>laptop</option>
                    <option>tablet</option>

                </select>
                <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" placeholder="Search Amazon"/>
                <button className='w-[48px]'>
                    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
                </button>
            </div>
        </div>
    )
}
export default Search