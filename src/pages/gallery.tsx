import Gallery from '@/components/Exhibitions/Gallery/Gallery'
import React from 'react'
import { useRouter } from 'next/router';

const gallery = () => {
  const router = useRouter();
  const place = router.query.place ? router.query.place.toString() : 'defaultPlace';

  return (
    <div>
      <Gallery place={place} />
    </div>
  )
}

export default gallery