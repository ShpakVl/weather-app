import styled from '@emotion/styled';
import { Skeleton } from 'antd';

export const StyledSkeleton = styled(Skeleton)`
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 & .ant-skeleton-title {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
 }
`;

export const weatherCardBodyStyles = {
 cardText: { fontSize: '15px', marginBottom: '10px' },
 cardBodyWrapper: { width: '100%', height: '100%', alignItems: 'center' },
};
