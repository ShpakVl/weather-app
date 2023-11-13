import styled from '@emotion/styled';
import { Card } from 'antd';
import { cardMaxWidth } from '@/shared/lib';

export const StyledCard = styled(Card)`
 width: 50%;
 height: 400px;
 max-width: ${cardMaxWidth}px;
 position: relative;
 & .ant-card-body {
  padding: 0 !important;
 }
`;
