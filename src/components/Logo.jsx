function Logo() {
   return (
      <div className='top-4 left-4 z-10 absolute flex items-end gap-1 font-mono font-semibold text-2xl text-gray-900 dark:text-gray-100'>
         <img src='/src/assets/logo.png' alt='logo' className='w-10 h-10' />
         <h2 className='md:block hidden'>ይለኢየሱስ</h2>
      </div>
   )
}
export default Logo
