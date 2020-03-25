import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 18px;
  margin: 32px auto;

  header{
      display: flex;
      align-items: center;

      img{
          height: 64px;
      }


      span{
          font-size: 28px;
          margin-left: 24px;
      }

      a{
        width: 260px;
        margin-left: auto;
        
         button{
            width: 100%;
            height: 60px;
            background-color: #e02041;
            border: 0;
            border-radius: 8px;
            font-weight: bold;
            display: inline-block;
            text-align: center;
            color: #FFF;
            text-decoration: none;
            font-size: 18px;
            line-height: 60px;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(90%);
            }
         }
      }
  }

  h1{
      margin-top: 80px;
      margin-bottom: 24px;
  }
`
export const ButtonPower = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #DCDCE6;
    background: transparent;
    margin-left: 16px; 
    transition: border-color 0.2s;

    &:hover{
        border-color: #999;
    }
`

export const IncidentsUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li{
        background-color: #FFF;
        padding: 24px;
        border-radius: 8px;
        position: relative;

        strong{
            display: block;
            margin-bottom: 16px;
            color: #41414d;
        }
        
        p{
            color: #737380;
            line-height: 21px;
            font-size: 16px;
        }

        p + strong {
            margin-top: 32px;
        }



        button{
            position: absolute;
            right: 24px;
            top: 24px;
            border: 0;
            background: none;

            &:hover{
             opacity: 0.8;
            }
        }
    }
`