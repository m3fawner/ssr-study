import EstimatedNetGrant from '../../src/components/EstimatedNetGrant';
import Head from '../../src/components/Head';

const NetProceeds = () => (
  <>
    <Head title="Net RSU grant proceeds" description="A calculator for determining how much your net proceeds should be for an RSU grant. Simply enter your company stock ticker, fill out the subsequent share form, and find out how much to expect after taxes are paid!" url="equity-compensation/net-proceeds" />
    <EstimatedNetGrant />
  </>
);
export default NetProceeds;
