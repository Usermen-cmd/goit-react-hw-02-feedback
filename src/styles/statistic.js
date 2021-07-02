import css from '@emotion/styled/macro';

const Header = css.h3`
color: ${({ theme }) => theme.headerColor};
margin-bottom: 10px;
`;

const Paragraph = css.p`
color: ${({ theme }) => theme.textColor};
font-weight: 500;
`;

const Container = css.div`
text-align: center;
`;

export { Header, Paragraph, Container };
