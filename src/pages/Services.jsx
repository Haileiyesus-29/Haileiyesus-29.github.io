import Card from '../ui/Card'

function Services() {
   return (
      <section
         id='services'
         className='flex flex-col justify-center gap-4 px-2 pt-2 pb-10 min-h-full overflow-y-auto'
      >
         <h2 className='auto-rows-min section-title'>#Services</h2>
         <div className='gap-2 lg:gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <Card
               title='Web Development'
               desc='Crafting websites that stand out and perform is my passion. Using the latest web technologies, I build dynamic and responsive websites that leave a lasting impression.'
            />
            <Card
               title='API Development'
               desc='Building robust and scalable APIs is where I excel. With a focus on efficiency and reliability, I create APIs that seamlessly connect your frontend and backend, powering your applications.'
            />
            <Card
               title='UI/UX Design'
               desc='I believe in creating designs that not only look great but also offer an exceptional user experience. From intuitive interfaces to engaging user flows, I design experiences that delight.'
            />
            <Card
               title='E-commerce Solutions'
               desc='Transforming online businesses with tailored e-commerce solutions is what I do best. From seamless checkout experiences to personalized product recommendations, I help you drive sales and customer satisfaction.'
            />
            {/* <Card
               title='System Design'
               desc="Designing scalable and resilient systems is my forte. Whether it's architecture planning or implementation, I architect solutions that are robust, reliable, and ready to support your growing business."
            /> */}
            <Card
               title='Web Socket Integration'
               desc='Bringing real-time communication to your applications is my expertise. Through WebSocket integration, I enable instant updates and notifications, enhancing the interactivity and responsiveness of your web experiences.'
            />
         </div>
      </section>
   )
}
export default Services
