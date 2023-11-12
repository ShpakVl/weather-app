import styled from '@emotion/styled';
import { Card, CardProps } from 'antd';

const CardStyles = styled(Card)`
 width: 50%;
 height: 400px;
 max-width: 320px;
`;
export const StyledCard = (props: CardProps) => <CardStyles {...props} />;
