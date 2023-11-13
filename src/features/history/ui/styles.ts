import styled from '@emotion/styled';
import { Button, List } from 'antd';

export const StyledList = styled(List)``;

export const StyledHistoryItem = styled(List.Item)`
 padding: 8px 24px !important;
 &:hover {
  background: #f5f5f5;
  cursor: pointer;
 }
`;

export const StyledButton = styled(Button)`
 padding: 0 !important;
`;
