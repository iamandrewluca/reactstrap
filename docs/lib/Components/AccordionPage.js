/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import AlertExample from '../examples/Alert';

/* eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved */
const AlertExampleSource = require('!!raw!../examples/Alert');

const AccordionPage = () => (
  <div>
    <PageTitle title="Accordion" />
    <div className="docs-example">
      <AlertExample />
    </div>
    <pre>
      <PrismCode className="language-jsx">
        {AlertExampleSource}
      </PrismCode>
    </pre>

    <SectionTitle>Properties</SectionTitle>
    <pre>
      <PrismCode className="language-jsx">
        {`Alert.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the alert fading in and out
  // See [Fade](/components/fade/) for more details
  transition: PropTypes.shape(Fade.propTypes),
}`}
      </PrismCode>
    </pre>
  </div>
);

export default AccordionPage;
