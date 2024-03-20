import { Fragment, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const MobileHeader = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    console.log('toggleNav')
    setShowNav(!showNav)
  }

  return (
    <Fragment>
      <div
        className='fixed z-30 flex items-center cursor-pointer right-10 top-6 text-4xl text-indigo-300'
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='25px'
            height='25px'
            fill='#C7D2FE'
          >
            <path d='M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z' />
          </svg>
        ) : (
          <svg fill='#C7D2FE' viewBox='0 0 100 80' width='25' height='25'>
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        )}
      </div>
      <div
        className={`top-0 right-0 w-[250px] bg-indigo-900  fixed h-full z-20  ease-in-out duration-300 ${
          showNav ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <h3 className='mt-20 text-4xl font-semibold text-white'>{children}</h3>
      </div>

      <header className='fixed flex justify-between items-center w-full z-10 top-0 start-0 shadow-md bg-indigo-950 py-4 px-6'>
        <a href='/' className='flex items-center'>
          <img
            src='/img/ricard.png'
            alt=''
            className='h-10 w-10 rounded-full ring-2 ring-indigo-300'
          />
          <span className='text-indigo-300 font-bold ml-4'> Ricard Alsina</span>
        </a>
        <div />
      </header>
      {/* Nav */}

      <div
        className={`
            ${showNav ? 'block bg-opacity-60' : 'hidden bg-opacity-0'}
            fixed z-10 w-full h-full bg-black  backdrop-blur-sm transition-all duration-300 ease-in-out
            `}
        onClick={toggleNav}
      >
        {/* <div
          className='fixed top-0 end-0 bg-black bg-opacity-60 backdrop-blur-sm'
          onClick={toggleNav}
        >
      
        </div> */}
        {/* <nav
          className={`
            ${showNav ? 'w-[250px]' : 'w-0'}
          absolute top-0 h-full end-0  bg-indigo-900 p-10 text-indigo-400 transition-all duration-300 ease-in-out`}
        >
          {children}
        </nav> */}
      </div>

      {/* page padding top */}
      <div className='p-9'></div>
    </Fragment>
  )
}

export default MobileHeader
