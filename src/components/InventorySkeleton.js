import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function InventorySkeleton() {
  return (
    <div className='skeletonContainer'>
      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='40%' />

        <Skeleton
          className='skeletonContainer_img'
          variant='rounded'
          width='70%'
          height={160}
        />

        <Skeleton variant='rounded' width='100%' height={42} />

        <Skeleton
          className='skeletonContainer_btn'
          variant='rounded'
          width='100%'
          height={40}
        />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='40%' />

        <Skeleton
          className='skeletonContainer_img'
          variant='rounded'
          width='70%'
          height={160}
        />

        <Skeleton variant='rounded' width='100%' height={42} />

        <Skeleton
          className='skeletonContainer_btn'
          variant='rounded'
          width='100%'
          height={40}
        />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='40%' />

        <Skeleton
          className='skeletonContainer_img'
          variant='rounded'
          width='70%'
          height={160}
        />

        <Skeleton variant='rounded' width='100%' height={42} />

        <Skeleton
          className='skeletonContainer_btn'
          variant='rounded'
          width='100%'
          height={40}
        />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='40%' />

        <Skeleton
          className='skeletonContainer_img'
          variant='rounded'
          width='70%'
          height={160}
        />

        <Skeleton variant='rounded' width='100%' height={42} />

        <Skeleton
          className='skeletonContainer_btn'
          variant='rounded'
          width='100%'
          height={40}
        />
      </Stack>
    </div>
  );
}

export default InventorySkeleton;
