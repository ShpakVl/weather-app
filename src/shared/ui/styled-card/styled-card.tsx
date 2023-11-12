import styled from '@emotion/styled';
import { Card, CardProps } from 'antd';
import { cardMaxWidth } from '@/shared/lib';

const CardStyles = styled(Card)`
 width: 50%;
 height: 400px;
 max-width: ${cardMaxWidth}px;
`;
export const StyledCard = (props: CardProps) => <CardStyles {...props} />;
