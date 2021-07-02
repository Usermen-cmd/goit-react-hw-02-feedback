import css from '@emotion/styled/macro';

const Header = css.h2`
text-align: center;
color: ${({ theme }) => theme.headerColor};
  svg{
    margin-left: 20px;
  }
`;

const Container = css.div`
background-color: ${({ theme }) => theme.background};
div{
  padding: 30px 0;
  width: 500px;
  margin: 0 auto;
}
`;

export { Header, Container };
