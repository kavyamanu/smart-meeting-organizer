import {Dashboard} from '../components/Dashboard';
import Layout from '../components/Layout'
import Select from '../components/Select';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className=" flex justify-center">
      <Select />
    </div>
    <div className=" border-2 flex justify-center">
      <Dashboard />
    </div>
  </Layout>
);

export default IndexPage
