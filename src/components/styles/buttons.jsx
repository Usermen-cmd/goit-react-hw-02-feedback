import css from '@emotion/styled';

const Button = css.button`
background-color: #4141f5;
padding: 5px 20px;
border-radius: 20px;
color: #e2dbdb;
font-size: 14px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
transition: transform 100ms linear 100ms;


  &:hover{
color: #fff;
transform: scale(1.1);
background-color: #3b3be0;
box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
}

  svg{
margin-right: 10px;
width: 20px;
height: auto;
}
`;
const Container = css.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 15px 0;
`;

export { Button, Container };
