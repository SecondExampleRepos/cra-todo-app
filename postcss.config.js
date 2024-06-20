// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// Example React component file after conversion to Next.js

// Before
// import logo from '/logo.png'

// After
import logo from '../public/logo.png'

const ExampleComponent = () => {
  return (
    <div>
      {/* Before */}
      {/* <img src={logo} /> */}
      
      {/* After */}
      <img src={logo.src} />
    </div>
  );
};

export default ExampleComponent;