function Button({ size = 'sm', label, onClick }) {
   let className =
      'bg-gray-950 hover:dark:bg-gray-300 hover:bg-gray-700 dark:bg-gray-100 px-3 py-1 rounded-md text-white dark:text-gray-900 transition-all'
   if (size === 'lg')
      className =
         'bg-gray-950 hover:bg-gray-700 hover:dark:bg-gray-300  dark:bg-gray-100 px-3  md:px-6 py-2 md:py-3 rounded-md text-semibold text-white dark:text-gray-950 transition-all capitalize self-start'

   return (
      <button onClick={onClick} className={className}>
         {label}
      </button>
   )
}
export default Button
