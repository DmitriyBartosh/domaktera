export const spring = { type: "spring", duration: .3, damping: 40 };

export const PathCircle = {
  show: (size = 1000) => ({ clipPath: `circle(${size + 300}px at 100% 0px)`, transition: { duration: .8 } }),
  hidden: { clipPath: `circle(10px at 100% 0px)`, transition: { duration: .6 } },
}

export const Line = {
  show: {
    x: 0,
    opacity: .5,
  },
  hidden: {
    x: '100%',
    opacity: 0,
  }
}


export const containerPhone = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const containerLink = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
}

export const containerInfo = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
}

export const item = {
  hidden: (offsetX = 100) => ({ 
    opacity: 0, 
    x: `${offsetX}px`, 
  }),
  show: {
    opacity: 1,
    x: 0,
  }
}

