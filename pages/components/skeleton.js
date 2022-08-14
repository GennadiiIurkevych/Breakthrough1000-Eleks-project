import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from '../../styles/skeleton.module.scss';

export default function Variants() {
  return (
    <div className={styles.skeleton}>
      <Stack spacing={1}>
        <Skeleton  variant="text" width={600} height={80} />
        <Skeleton variant="circular" width={180} height={180} />
        <Skeleton variant="rectangular" width={1500} height={600} />
      </Stack>
    </div>
  );
}