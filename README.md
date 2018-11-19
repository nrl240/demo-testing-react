# enzyme_start

Starting point for enzyme live code demo.

`npm i` to get going

`npm start` to run on port 3000

#### Remainder of code to go in `react.spec.js`:

```javascript
describe('<Critters>', () => {
  let critters = [{
    name: 'Eeyore'
  }, {
    name: 'Thunder'
  }];

  let crittersWrapper = shallow(<Critters critters={critters} title="BUNNIES!!!" />);

  it('has an <h1> that renders props.title', () => {
    expect(crittersWrapper.find('h1').text()).to.be.equal('BUNNIES!!!');
  });
});

describe('<Navbar>', () => {
  it('calls selectCritters on click', () => {
    let selectCrittersSpy = sinon.spy();
    let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />);
    // simulate a click
    navbarWrapper.find('button#dogs').simulate('click'); // like calling our function
    expect(selectCrittersSpy).to.have.been.calledOnce;
  });

  it('calls selectCritters with the right button param', () => {
    let selectCrittersSpy = sinon.spy();
    let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />);
    // simulate a click
    navbarWrapper.find('button#cats').simulate('click'); // like calling our function
    expect(selectCrittersSpy).to.have.been.calledWith('cats');
  });
});
```
