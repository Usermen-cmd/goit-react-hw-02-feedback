import css from '@emotion/styled';

const Header = css.h2`
text-align: center;
color: #4f4f4f;
  svg{
    margin-left: 20px;
  }
`;

const Container = css.div`
div{
  padding-top: 30px;
  width: 500px;
  margin: 0 auto;
}
`;

export { Header, Container };
