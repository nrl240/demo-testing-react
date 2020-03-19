// Enzyme is the main tool to test React
// shallow, in particular, renders fake React components
// it takes a React component (JSX) in which you can add props; it doesn't render any child components (hence "shallow")
import Enzyme, { shallow } from 'enzyme';
// Everytime we use Enzyme we have to configure it with whatever version of React we are using via an adapter
import EnzymeAdapter from 'enzyme-adapter-react-16';
// Chai as our assertion library
import chai, { expect } from 'chai';
// Sinon for making spies (remember Foundations -- if a function was called; how many times a function was called; what arguments it was passed; etc.)
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
// We will be rendering JSX
import React from 'react';
// The components we will be testing
import Critters from '../client/components/Critters.js';
import Navbar from '../client/components/Navbar.js';
// critterCategories will be passed as props to components in our tests
const critterCategories = ['cats', 'dogs', 'dragons']

chai.use(sinonChai);

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Critters>', function() {
  let critters = [{
    name: 'Bugs',
    image: 'https://bloody-disgusting.com/wp-content/uploads/2019/03/critters-new-binge.png'
  }, {
    name: 'Thunder',
    image: 'https://bloody-disgusting.com/wp-content/uploads/2019/03/critters-new-binge.png'
  }]

  let crittersWrapper = shallow(
    <Critters critters={critters} title='Bunnies!' />
  )

  it('has an <h1> that renders props.title', function() {
    expect(crittersWrapper.find('h1').text()).to.be.equal('Bunnies!')
  })

  it('has the same number of <h2> as number of critters', function() {
    expect(crittersWrapper.find('h2')).to.have.lengthOf(critters.length)
  })

  it('has the same number of <img> as number of critters', function() {
    expect(crittersWrapper.find('img')).to.have.lengthOf(critters.length)
  })
})

// const critterCategories = ['cats', 'dogs', 'dragons']
describe('<Navbar>', function() {
  it('renders the same number of button components as number of critter categories', function() {
    let selectCrittersSpy = sinon.spy()
    let navbarWrapper = shallow(
      <Navbar selectCritters={selectCrittersSpy} critterCategories={critterCategories} />
    )
    expect(navbarWrapper.find('button')).to.have.lengthOf(critterCategories.length)
  })

  it('called selectCritters on click', function() {
    let selectCrittersSpy = sinon.spy()
    let navbarWrapper = shallow(
      <Navbar selectCritters={selectCrittersSpy} critterCategories={critterCategories} />
    )
    // Simulate click:
    navbarWrapper.find('button#dogs').simulate('click')
    // Test onClick function:
    expect(selectCrittersSpy).to.have.been.calledOnce
  })

  it('calls selectCritters with the right button param', function() {
    let selectCrittersSpy = sinon.spy()
    let navbarWrapper = shallow(
      <Navbar selectCritters={selectCrittersSpy} critterCategories={critterCategories} />
    )
    // Simulate click:
    navbarWrapper.find('button#cats').simulate('click')
    // Test onClick function:
    expect(selectCrittersSpy).to.have.been.calledWith('cats')
  })
})

