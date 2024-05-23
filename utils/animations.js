export const pagetrans = {
    initial: {
        y: '0%'
    },
    animate: {
        y: '-100%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    },
    exit: {
        y: '0%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    }
}

export const headeranim = {
    initial: {
        y: '-100%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    },
    animate: {
        y: '0%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    }
}


export const navtrans = {
    initial: {
        y: '-100%'
    },
    animate: {
        y: '0%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    }
}

export const titletrans = {
    initial: {
        y: '100%',
    },
    animate: i => ({
        y: '-5%',
        transition: {
            duration: 0.15, ease: [0.33, 1, 0.68, 1], delay: i * 0.01
        }
    }),
}

export const homeherotrans = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.25,
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1]
        }
    },
}

export const loadingline = {
    initial: {
        width: '0%'
    },
    animate: {
        width: '100%',
        transition: {
            duration: 3, delay: 0.5, ease: [0.46, 0.03, 0.52, 0.96]
        }
    },
}

export const slideup = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: i => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: i * 0.075
        }
    }),
}