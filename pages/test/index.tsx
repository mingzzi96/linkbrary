import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();
  const { code } = router.query;
  console.log(code);

  return <div>hi</div>;
};

export default Test;
