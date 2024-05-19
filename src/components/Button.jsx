function Button({ label }) {
   return (
      <button className='hover:bg-gray-200/90 dark:bg-gray-200 px-3 py-2 rounded-[4px] font-semibold dark:text-gray-900 transition-all'>
         {label}
      </button>
   )
}
export default Button
