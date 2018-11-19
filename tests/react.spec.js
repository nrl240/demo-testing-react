import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import Critters from '../client/components/Critters.js';
import Navbar from '../client/components/Navbar.js';
import Main from '../client/components/Main.js';

chai.use(sinonChai);

Enzyme.configure({ adapter: new EnzymeAdapter() });


