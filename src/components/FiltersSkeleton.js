import { Skeleton, Stack } from '@mui/material';
import React from 'react';

function FiltersSkeleton() {
  return (
    <Stack className='filtersSkeleton' spacing={1}>
      <Skeleton variant='rounded' width='100%' height={40} />

      <div className='filtersSkeleton_field'>
        <Skeleton variant='rounded' width={60} height={20} />

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>
      </div>

      <div className='filtersSkeleton_field'>
        <Skeleton variant='rounded' width={60} height={20} />

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>
      </div>

      <div className='filtersSkeleton_field'>
        <Skeleton variant='rounded' width={60} height={20} />

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>

        <div className='filtersSkeleton_option'>
          <Skeleton variant='rounded' width={24} height={24} />

          <Skeleton variant='rounded' width={60} height={24} />
        </div>
      </div>

      <div className='filtersSkeleton_field'>
        <Skeleton variant='rounded' width={60} height={20} />

        <div className='filtersSkeleton_option filtersSkeleton_colors'>
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='circular' width={40} height={40} />
        </div>
      </div>
    </Stack>
  );
}

export default FiltersSkeleton;
