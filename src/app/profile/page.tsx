import { Suspense } from 'react';
import ProfileDynamic from './profile';

export default function () {
  return (
    <Suspense>
      <ProfileDynamic />
    </Suspense>
  );
}
