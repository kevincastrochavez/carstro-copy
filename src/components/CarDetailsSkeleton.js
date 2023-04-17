import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function CarDetailsSkeleton() {
  return (
    <div className='carDetailsSkeleton'>
      <Stack spacing={1}>
        <Skeleton variant='rounded' width='100%' height={120} />
        <Skeleton variant='text' sx={{ fontSize: '18px' }} width='100px' />

        <div className='carDetailsSkeleton_info'>
          <div className='carDetailsSkeleton_info-top'>
            <Skeleton
              className='carDetailsSkeleton_title'
              variant='rounded'
              width='50%'
              height={24}
            />
            <Skeleton variant='rounded' width='60%' height={16} />
          </div>

          <div className='carDetailsSkeleton_info-price'>
            <Skeleton variant='rounded' width='40%' height={48} />

            <div className='carDetailsSkeleton_info-price-offer'>
              <Skeleton variant='rounded' width='100%' height={20} />
              <Skeleton variant='rounded' width='100%' height={20} />
            </div>
          </div>

          <Skeleton variant='rounded' width='100%' height={52} />
        </div>

        <div className='carDetailsSkeleton_iconsContainer'>
          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>

          <div className='carDetailsSkeleton_icon'>
            <Skeleton variant='rounded' width={80} height={80} />
            <Skeleton variant='rounded' width={80} height={18} />
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default CarDetailsSkeleton;
