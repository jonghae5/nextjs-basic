import { useRouter } from 'next/router';
import React from 'react';
import Seo from '../../components/Seo';

const Detail = ({ params }) => {
  const router = useRouter();

  /* SSR 방식이라 미리 빈배열 생성 / router는 Front에서 동작*/
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
};

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

export default Detail;
