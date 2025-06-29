import { FunctionComponent } from 'react';
import CategoryList from '@/components/CategoryList';

// Required for static export
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      category: slug
    }
  };
}

const CategoryPage: FunctionComponent = ({ category }) => {
  const data = {
    category: slug
  };

  return <CategoryList {...data} />;
};

export default CategoryPage;