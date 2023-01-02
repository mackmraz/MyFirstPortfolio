import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonials' ,'contact'].map((item) => (
            <a 
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            onClick={() => setToggle(false)}
            style={action ===item ? { backgroundColor: '#313BAC' } : { }}
            />
        ))}
    </div>
  )
}

export default NavigationDots