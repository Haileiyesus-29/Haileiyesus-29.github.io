function Card({ title, desc }) {
   return (
      <div className='flex flex-col justify-center bg-clip-padding bg-white dark:bg-gray-700/40 shadow hover:shadow-lg p-4 w-full h-64 transition'>
         <h4 className='py-3 font-semibold text-3xl text-center dark:text-gray-50/80'>
            {title}
         </h4>
         <p className='text-center text-gray-800/80 dark:text-gray-200/80'>
            {desc}
         </p>
      </div>
   )
}
export default Card
