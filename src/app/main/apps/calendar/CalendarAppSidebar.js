import { motion } from 'framer-motion';

function CalendarAppSidebar() {
  return (
    <div className="flex flex-col flex-auto min-h-full p-32">
      <motion.span
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="pb-24 text-4xl font-extrabold tracking-tight"
      >
        Calendar
      </motion.span>
    </div>
  );
}

export default CalendarAppSidebar;
